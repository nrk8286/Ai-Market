const workerModule = require('../worker.js');
const worker = workerModule.default || workerModule;

async function call(path, method='GET', body=null, env={}){
  const req = new Request(`https://example.com${path}`, { method, headers: { 'Content-Type': 'application/json' }, body: body ? JSON.stringify(body) : undefined });
  const res = await worker.fetch(req, env);
  const text = await res.text();
  return { res, text };
}

describe('Payment endpoints', () => {
  test('POST /marketplace/checkout returns a simulated payment intent in test mode', async () => {
    const result = await call('/marketplace/checkout', 'POST', { itemId: 1 }, { TEST_MODE: '1' });
    expect(result.res.status).toBe(200);
    const json = JSON.parse(result.text);
    expect(json.success).toBe(true);
    expect(json.paymentIntent.id).toMatch(/^pi_sim_/);
    expect(json.paymentIntent.amount).toBe(10000);
  });

  test('POST /webhooks/stripe accepts unsigned fixture payloads only in test mode', async () => {
    const event = { id: 'evt_123', type: 'checkout.session.completed', data: { object: { id: 'sess_123' } } };
    const result = await call('/webhooks/stripe', 'POST', event, { TEST_MODE: '1' });
    expect(result.res.status).toBe(200);
    const json = JSON.parse(result.text);
    expect(json.received).toBe(true);
  });

  test('checkout reports missing payment configuration instead of simulating a live payment', async () => {
    const result = await call('/marketplace/checkout', 'POST', { itemId: 1 });
    expect(result.res.status).toBe(503);
    expect(JSON.parse(result.text)).not.toHaveProperty('paymentIntent');
  });

  test('checkout returns 404 for an unknown product', async () => {
    const result = await call('/marketplace/checkout', 'POST', { itemId: 'missing' }, { TEST_MODE: '1' });
    expect(result.res.status).toBe(404);
  });

  test('unsigned webhooks are rejected outside test mode', async () => {
    const result = await call('/webhooks/stripe', 'POST', { type: 'checkout.session.completed' });
    expect(result.res.status).toBe(400);
  });
});
