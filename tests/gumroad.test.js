const workerModule = require('../worker.js');
const worker = workerModule.default || workerModule;

async function call(path, method='GET', body=null, headers={}, env={}){
  const req = new Request(`https://example.com${path}`, { method, headers: { 'Content-Type': 'application/json', ...headers }, body: body ? JSON.stringify(body) : undefined });
  const res = await worker.fetch(req, env);
  const text = await res.text();
  return { res, text };
}

describe('Gumroad integration', () => {
  test('GET /marketplace/gumroad/checkout returns product URL', async () => {
    const res = await call('/marketplace/gumroad/checkout?product=prod_1');
    expect(res.res.status).toBe(200);
    const json = JSON.parse(res.text);
    expect(json).toHaveProperty('url');
  });

  test('POST /webhooks/gumroad processes sale and grants access', async () => {
    const env = { TEST_MODE: '1' };
    // Simulated Gumroad sale payload (simplified)
    const payload = {
      event_type: 'sale',
      product_id: 'prod_1',
      sale: {
        id: 'sale_1',
        email: 'gum@example.com',
        quantity: 1,
        custom_fields: { user_id: 'gum_user_1' }
      }
    };

    const res = await call('/webhooks/gumroad', 'POST', payload, {}, env);
    expect(res.res.status).toBe(200);
    const json = JSON.parse(res.text);
    expect(json.received).toBe(true);

    // Purchase should grant access to a pro-like feature via user id
    const gated = await call('/api/pro', 'GET', null, { 'X-USER-ID': 'gum_user_1' }, env);
    expect(gated.res.status).toBe(200);
    const g = JSON.parse(gated.text);
    expect(g.success).toBe(true);
  });
});
