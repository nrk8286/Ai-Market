(async () => {
  console.log('\nRunning E2E script runner (direct worker invocation)...');

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

  // Home page
  const home = await callEndpoint('/');
  if (home.res.status !== 200) throw new Error('Home page should return 200');
  console.log('✓ GET / OK');

  // Niche discovery
  const niche = await callEndpoint('/api/niche-discovery', 'POST', {
    userSkills: ['JavaScript'],
    userInterests: ['AI'],
    availableResources: { budget: 'low' }
  });

  if (niche.res.status !== 200) throw new Error('/api/niche-discovery should return 200');
  const nicheJson = JSON.parse(niche.text);
  if (!nicheJson.selectedNiche) throw new Error('Niche discovery should return selectedNiche');
  console.log('✓ POST /api/niche-discovery OK');

  // Autonomous agent
  const agent = await callEndpoint('/api/autonomous-agent', 'POST', {
    skills: ['JavaScript'],
    interests: ['AI'],
    resources: { budget: 'low' }
  }, { OPENAI_API_KEY: null, PAYMENT_GATEWAY_API_KEY: null });

  if (agent.res.status !== 200) throw new Error('/api/autonomous-agent should return 200');
  const agentJson = JSON.parse(agent.text);
  if (typeof agentJson !== 'object') throw new Error('Autonomous agent response should be an object');
  console.log('✓ POST /api/autonomous-agent OK');

  console.log('\nE2E script runner completed successfully.');
})();