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

describe('E2E tests (direct worker invocation)', () => {
  test('GET / returns home page with AI Marketplace text', async () => {
    const home = await callEndpoint('/');
    expect(home.res.status).toBe(200);
    expect(home.text).toMatch(/AI Marketplace/);
  }, 10000);

  test('POST /api/niche-discovery returns selectedNiche', async () => {
    const niche = await callEndpoint('/api/niche-discovery', 'POST', {
      userSkills: ['JS'], userInterests: ['AI'], availableResources: { budget: 'low' }
    });

    expect(niche.res.status).toBe(200);
    const json = JSON.parse(niche.text);
    expect(json).toHaveProperty('selectedNiche');
  }, 15000);

  test('POST /api/autonomous-agent runs and returns executionSummary', async () => {
    const agent = await callEndpoint('/api/autonomous-agent', 'POST', {
      skills: ['JS'], interests: ['AI'], resources: { budget: 'low' }
    }, { OPENAI_API_KEY: null, PAYMENT_GATEWAY_API_KEY: null });

    expect(agent.res.status).toBe(200);
    const json = JSON.parse(agent.text);
    expect(json).toHaveProperty('executionSummary');
  }, 30000);
});