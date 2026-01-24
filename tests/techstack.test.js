const TechStackSetupModule = require('../src/modules/TechStackSetupModule');

test('TechStackSetupModule.selectOptimalStack returns frontend/backend/hosting', async () => {
  const module = new TechStackSetupModule({});
  const params = { niche: { name: 'AI Tools', validation: { monetization: { potential: 80000 } } }, requirements: ['automation', 'scalability', 'ai-integration'] };
  const result = await module.selectOptimalStack(params);

  expect(result).toHaveProperty('frontend');
  expect(result).toHaveProperty('backend');
  expect(result).toHaveProperty('hosting');
  expect(result.configuration).toHaveProperty('environment');
});