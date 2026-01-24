const KeywordResearchModule = require('../src/modules/KeywordResearchModule');

test('KeywordResearchModule.generateStrategy returns expected fields', async () => {
  const module = new KeywordResearchModule({ openaiApiKey: null });
  const selectedNiche = { name: 'AI Tools', category: 'ai-tools', trends: ['automation'] };
  const result = await module.generateStrategy(selectedNiche);

  expect(result).toHaveProperty('keywords');
  expect(result).toHaveProperty('clusters');
  expect(result).toHaveProperty('roadmap');
  expect(Array.isArray(result.keywords)).toBe(true);
});