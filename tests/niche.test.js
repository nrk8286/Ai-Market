const NicheDiscoveryModule = require('../src/modules/NicheDiscoveryModule');

test('NicheDiscoveryModule.analyze returns expected structure', async () => {
  const module = new NicheDiscoveryModule({ openaiApiKey: null });
  const input = { userSkills: ['JavaScript', 'SEO'], userInterests: ['AI', 'productivity'], availableResources: { budget: 'low' } };
  const result = await module.analyze(input);

  expect(result).toHaveProperty('selectedNiche');
  expect(result).toHaveProperty('rankedNiches');
  expect(result.analysis).toHaveProperty('userProfile');
  expect(Array.isArray(result.rankedNiches)).toBe(true);
});