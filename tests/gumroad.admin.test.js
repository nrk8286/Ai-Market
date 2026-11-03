const workerModule = require('../worker.js');
const worker = workerModule.default || workerModule;
const crypto = require('crypto');

async function call(path, method='GET', body=null, headers={}, env={}){
  const req = new Request(`https://example.com${path}`, { method, headers: { 'Content-Type': 'application/json', ...headers }, body: body ? JSON.stringify(body) : undefined });
  const res = await worker.fetch(req, env);
  const text = await res.text();
  return { res, text };
}

describe('Admin Gumroad config', () => {
  const headers = { Authorization: 'Bearer test-admin' };
  const env = { ADMIN_TOKEN: 'test-admin' };

  test('POST /admin/gumroad/config sets mapping and secret without exposing it', async () => {
    const body = { mapping: { prod_1: 'https://gumroad.com/l/example-product' }, secret: 's3cr3t' };
    const res = await call('/admin/gumroad/config', 'POST', body, headers, env);
    expect(res.res.status).toBe(200);
    const json = JSON.parse(res.text);
    expect(json.config).toHaveProperty('mapping');
    expect(json.config).not.toHaveProperty('secret');
    expect(json.config).toHaveProperty('secretConfigured', true);
  });

  test('GET /admin/gumroad/config returns mapping', async () => {
    const res = await call('/admin/gumroad/config', 'GET', null, headers, env);
    expect(res.res.status).toBe(200);
    const json = JSON.parse(res.text);
    expect(json.config).toHaveProperty('mapping');
    expect(json.config.mapping.prod_1).toBeDefined();
    expect(json.config).not.toHaveProperty('secret');
    expect(json.config).toHaveProperty('secretConfigured', true);
  });

  test('configured secret is enforced for Gumroad webhooks', async () => {
    const payload = {
      event_type: 'sale',
      sale: { id: 'sale_secure', email: 'secure@example.com', custom_fields: { user_id: 'secure_user' } }
    };

    const unsigned = await call('/webhooks/gumroad', 'POST', payload, {}, env);
    expect(unsigned.res.status).toBe(400);
    expect(JSON.parse(unsigned.text).error).toBe('Missing gumroad signature');

    const body = JSON.stringify(payload);
    const signature = crypto.createHmac('sha1', 's3cr3t').update(body).digest('hex');
    const signed = await call('/webhooks/gumroad', 'POST', payload, { 'Gumroad-Signature': signature }, env);
    expect(signed.res.status).toBe(200);
    expect(JSON.parse(signed.text).received).toBe(true);
  });
});
