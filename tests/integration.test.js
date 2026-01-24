const workerModule = require('../worker.js');
const worker = workerModule.default || workerModule;

async function callEndpoint(path, method = 'GET', body = null, env = {}) {
  const url = `https://example.com${path}`;
  const req = new Request(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined
  });

  const res = await worker.fetch(req, env);
  const text = await res.text();
  return { res, text };
}

describe('Integration tests — worker endpoints', () => {
  test('GET / should return HTML home page', async () => {
    const home = await callEndpoint('/');
    expect(home.res.status).toBe(200);
    expect(home.text).toMatch(/AI Marketplace/);
  });

  test('POST /api/niche-discovery should return selectedNiche', async () => {
    const niche = await callEndpoint('/api/niche-discovery', 'POST', {
      userSkills: ['JavaScript'],
      userInterests: ['AI'],
      availableResources: { budget: 'low' }
    });

    expect(niche.res.status).toBe(200);
    const nicheJson = JSON.parse(niche.text);
    expect(nicheJson).toHaveProperty('selectedNiche');
  });

  test('POST /api/autonomous-agent should execute and return an object', async () => {
    const agent = await callEndpoint('/api/autonomous-agent', 'POST', {
      skills: ['JavaScript'],
      interests: ['AI'],
      resources: { budget: 'low' }
    }, { OPENAI_API_KEY: null, PAYMENT_GATEWAY_API_KEY: null });

    expect(agent.res.status).toBe(200);
    const agentJson = JSON.parse(agent.text);
    expect(typeof agentJson).toBe('object');
    expect(agentJson.executionSummary).toBeDefined();
  });

  test('POST /api/keyword-research returns keywords array', async () => {
    const kr = await callEndpoint('/api/keyword-research', 'POST', { name: 'AI Tools', category: 'ai-tools', trends: ['automation'] });
    expect(kr.res.status).toBe(200);
    const json = JSON.parse(kr.text);
    expect(json).toHaveProperty('keywords');
    expect(Array.isArray(json.keywords)).toBe(true);
  });

  test('POST /api/tech-stack returns hosting & frontend config', async () => {
    const ts = await callEndpoint('/api/tech-stack', 'POST', { niche: { name: 'AI Tools' }, requirements: ['automation'] });
    expect(ts.res.status).toBe(200);
    const json = JSON.parse(ts.text);
    expect(json).toHaveProperty('frontend');
    expect(json).toHaveProperty('backend');
    expect(json).toHaveProperty('hosting');
  });

  test('GET /marketplace/items returns JSON array', async () => {
    const items = await callEndpoint('/marketplace/items');
    expect(items.res.status).toBe(200);
    const json = JSON.parse(items.text);
    expect(Array.isArray(json)).toBe(true);
  });

  test('POST /marketplace/buy processes payment when key provided', async () => {
    const result = await callEndpoint('/marketplace/buy', 'POST', { itemId: 1 }, { PAYMENT_GATEWAY_API_KEY: 'test-key' });
    expect(result.res.status).toBe(200);
    const json = JSON.parse(result.text);
    expect(json).toHaveProperty('success');
  });
});