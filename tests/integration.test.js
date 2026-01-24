const assert = require('assert');

(async () => {
  console.log('\nRunning integration tests against `worker.js` endpoints...');

  const workerModule = require('../worker.js');
  const worker = workerModule.default || workerModule;

  async function callEndpoint(path, method = 'GET', body = null) {
    const url = `https://example.com${path}`;
    const req = new Request(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined
    });

    const res = await worker.fetch(req, {
      OPENAI_API_KEY: null,
      PAYMENT_GATEWAY_API_KEY: null
    });

    const text = await res.text();
    return { res, text };
  }

  // Home page
  const home = await callEndpoint('/');
  assert(home.res.status === 200, 'Home page should return 200');
  console.log('✓ GET / OK');

  // Niche discovery
  const niche = await callEndpoint('/api/niche-discovery', 'POST', {
    userSkills: ['JavaScript'],
    userInterests: ['AI'],
    availableResources: { budget: 'low' }
  });

  assert(niche.res.status === 200, '/api/niche-discovery should return 200');
  const nicheJson = JSON.parse(niche.text);
  assert(nicheJson.selectedNiche, 'Niche discovery should return selectedNiche');
  console.log('✓ POST /api/niche-discovery OK');

  // Autonomous agent (documentation or execution)
  const agent = await callEndpoint('/api/autonomous-agent', 'POST', {
    skills: ['JavaScript'],
    interests: ['AI'],
    resources: { budget: 'low' }
  });

  assert(agent.res.status === 200, '/api/autonomous-agent should return 200');
  const agentJson = JSON.parse(agent.text);
  // Agent may return documentation when GET is used; for POST expect execution summary or at least an object
  assert(typeof agentJson === 'object', 'Autonomous agent response should be an object');
  console.log('✓ POST /api/autonomous-agent OK');

  console.log('\nIntegration tests completed successfully.');
})();