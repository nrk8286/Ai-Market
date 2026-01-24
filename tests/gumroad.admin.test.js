const workerModule = require('../worker.js');
const worker = workerModule.default || workerModule;

async function call(path, method='GET', body=null, headers={}, env={}){
  const req = new Request(`https://example.com${path}`, { method, headers: { 'Content-Type': 'application/json', ...headers }, body: body ? JSON.stringify(body) : undefined });
  const res = await worker.fetch(req, env);
  const text = await res.text();
  return { res, text };
}

describe('Admin Gumroad config', () => {
  const headers = { Authorization: 'Bearer test-admin' };
  const env = { ADMIN_TOKEN: 'test-admin' };

  test('POST /admin/gumroad/config sets mapping and secret', async () => {
    const body = { mapping: { prod_1: 'https://gumroad.com/l/example-product' }, secret: 's3cr3t' };
    const res = await call('/admin/gumroad/config', 'POST', body, headers, env);
    expect(res.res.status).toBe(200);
    const json = JSON.parse(res.text);
    expect(json.config).toHaveProperty('mapping');
    expect(json.config).toHaveProperty('secret', 's3cr3t');
  });

  test('GET /admin/gumroad/config returns mapping', async () => {
    const res = await call('/admin/gumroad/config', 'GET', null, headers, env);
    expect(res.res.status).toBe(200);
    const json = JSON.parse(res.text);
    expect(json.config).toHaveProperty('mapping');
    expect(json.config.mapping.prod_1).toBeDefined();
  });
});
