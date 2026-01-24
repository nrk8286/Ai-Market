const { spawnSync } = require('child_process');
const workerModule = require('../worker.js');
const worker = workerModule.default || workerModule;

async function call(path, method='GET', body=null, env={}){
  const req = new Request(`https://example.com${path}`, { method, headers: { 'Content-Type': 'application/json' }, body: body ? JSON.stringify(body) : undefined });
  const res = await worker.fetch(req, env);
  const text = await res.text();
  return { res, text };
}

describe('Payment endpoints', () => {
  test('POST /marketplace/checkout returns session', async () => {
    const result = await call('/marketplace/checkout', 'POST', { itemId: 1 });
    expect(result.res.status).toBe(200);
    const json = JSON.parse(result.text);
    expect(json.success).toBe(true);
    expect(json.session).toHaveProperty('checkoutUrl');
  });

  test('POST /webhooks/stripe accepts event payload', async () => {
    const event = { id: 'evt_123', type: 'checkout.session.completed', data: { object: { id: 'sess_123' } } };
    const result = await call('/webhooks/stripe', 'POST', event);
    expect(result.res.status).toBe(200);
    const json = JSON.parse(result.text);
    expect(json.received).toBe(true);
  });
});