const workerModule = require('../worker.js');
const worker = workerModule.default || workerModule;

async function call(path, method='GET', body=null, headers={}, env={}){
  const req = new Request(`https://example.com${path}`, { method, headers: { 'Content-Type': 'application/json', ...headers }, body: body ? JSON.stringify(body) : undefined });
  const res = await worker.fetch(req, env);
  const text = await res.text();
  return { res, text };
}

describe('Admin API', () => {
  const adminEnv = { ADMIN_TOKEN: 'test-token' };

  test('GET /admin/items requires auth', async () => {
    const res = await call('/admin/items', 'GET');
    expect(res.res.status).toBe(401);
  });

  test('GET /admin/items with token returns items', async () => {
    const res = await call('/admin/items', 'GET', null, { Authorization: 'Bearer test-token' }, adminEnv);
    expect(res.res.status).toBe(200);
    const json = JSON.parse(res.text);
    expect(Array.isArray(json)).toBe(true);
  });

  test('POST /admin/items adds an item', async () => {
    const res = await call('/admin/items', 'POST', { name: 'New Item', price: 50 }, { Authorization: 'Bearer test-token' }, adminEnv);
    expect(res.res.status).toBe(200);
    const json = JSON.parse(res.text);
    expect(json.success).toBe(true);
    expect(json.item).toHaveProperty('id');
  });
});