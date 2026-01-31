const workerModule = require('../worker.js');
const worker = workerModule.default || workerModule;

async function call(path, method='GET', body=null, headers={}, env={}){
  const req = new Request(`https://example.com${path}`, { method, headers: { 'Content-Type': 'application/json', ...headers }, body: body ? JSON.stringify(body) : undefined });
  const res = await worker.fetch(req, env);
  const text = await res.text();
  return { res, text };
}

describe('Marketplace connect & checkout', () => {
  test('Connect onboard simulated link', async () => {
    const res = await call('/marketplace/connect/onboard', 'POST', { vendorId: 'vendor_1', returnUrl: 'https://example.com/ret', refreshUrl: 'https://example.com/ref' });
    expect(res.res.status).toBe(200);
    const json = JSON.parse(res.text);
    expect(json).toHaveProperty('url');
  });

  test('Checkout with vendor returns payment intent simulation', async () => {
    const res = await call('/marketplace/checkout', 'POST', { itemId: 1, vendorId: 'vendor_1' });
    expect(res.res.status).toBe(200);
    const json = JSON.parse(res.text);
    expect(json.paymentIntent).toHaveProperty('id');
    expect(json.paymentIntent).toHaveProperty('platformFee');
  });
});
