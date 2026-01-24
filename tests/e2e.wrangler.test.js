const BASE = process.env.E2E_BASE_URL || 'http://127.0.0.1:8787';

describe('E2E tests (wrangler dev)', () => {
  test('GET / returns home page', async () => {
    const res = await fetch(`${BASE}/`);
    expect(res.status).toBe(200);
    const text = await res.text();
    expect(text).toMatch(/AI Marketplace/);
  }, 10000);

  test('POST /api/niche-discovery returns selectedNiche', async () => {
    const res = await fetch(`${BASE}/api/niche-discovery`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userSkills: ['JS'], userInterests: ['AI'], availableResources: { budget: 'low' } })
    });
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json).toHaveProperty('selectedNiche');
  }, 20000);

  test('POST /api/autonomous-agent returns executionSummary', async () => {
    const res = await fetch(`${BASE}/api/autonomous-agent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ skills: ['JS'], interests: ['AI'], resources: { budget: 'low' } })
    });
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json).toHaveProperty('executionSummary');
  }, 40000);
});