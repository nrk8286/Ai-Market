const workerModule = require('../worker.js');
const worker = workerModule.default || workerModule;

async function call(path, method='GET', body=null, headers={}, env={}){
  const req = new Request(`https://example.com${path}`, { method, headers: { 'Content-Type': 'application/json', ...headers }, body: body ? JSON.stringify(body) : undefined });
  const res = await worker.fetch(req, env);
  const text = await res.text();
  return { res, text };
}

describe('Billing API', () => {
  test('POST /billing/checkout requires userId', async () => {
    const res = await call('/billing/checkout', 'POST', { plan: 'pro' });
    expect(res.res.status).toBe(400);
  });

  test('POST /billing/checkout returns simulated session', async () => {
    const env = { TEST_MODE: '1' };
    const res = await call('/billing/checkout', 'POST', { plan: 'pro', userId: 'user_1' }, {}, env);
    expect(res.res.status).toBe(200);
    const json = JSON.parse(res.text);
    expect(json.session).toHaveProperty('id');
  });

  test('Webhook marks subscription active and /api/pro allows access', async () => {
    const env = { TEST_MODE: '1' };
    const sessionEvent = {
      type: 'checkout.session.completed',
      data: { object: { id: 'cs_test_1', client_reference_id: 'user_1', customer: 'cus_test', subscription: 'sub_test_1' } }
    };

    const hook = await call('/webhooks/stripe', 'POST', sessionEvent, {}, env);
    expect(hook.res.status).toBe(200);

    // now call gated route
    const gated = await call('/api/pro', 'GET', null, { 'X-USER-ID': 'user_1' }, env);
    expect(gated.res.status).toBe(200);
    const g = JSON.parse(gated.text);
    expect(g.success).toBe(true);
  });
});
