const assert = require('assert');

(async () => {
  console.log('Running lightweight tests...');

  // NicheDiscoveryModule
  const NicheDiscoveryModule = require('../src/modules/NicheDiscoveryModule');
  const nd = new NicheDiscoveryModule({ openaiApiKey: null });
  const ndResult = await nd.analyze({ userSkills: ['JS'], userInterests: ['AI'], availableResources: { budget: 'low' } });

  assert(ndResult.selectedNiche, 'NicheDiscoveryModule.analyze should return selectedNiche');
  console.log('✓ NicheDiscoveryModule.analyze OK');

  // KeywordResearchModule
  const KeywordResearchModule = require('../src/modules/KeywordResearchModule');
  const kr = new KeywordResearchModule({ openaiApiKey: null });
  const krResult = await kr.generateStrategy({ name: 'AI Tools', category: 'ai-tools', trends: ['automation'] });

  assert(Array.isArray(krResult.keywords), 'KeywordResearchModule.generateStrategy should return keywords array');
  console.log('✓ KeywordResearchModule.generateStrategy OK');

  // TechStackSetupModule
  const TechStackSetupModule = require('../src/modules/TechStackSetupModule');
  const ts = new TechStackSetupModule({});
  const tsResult = await ts.selectOptimalStack({ niche: { name: 'AI Tools', validation: { monetization: { potential: 80000 } } }, requirements: ['automation'] });

  assert(tsResult.frontend && tsResult.backend && tsResult.hosting, 'TechStackSetupModule.selectOptimalStack should return stack parts');
  console.log('✓ TechStackSetupModule.selectOptimalStack OK');

  console.log('\nAll lightweight tests passed successfully.');

  // Run integration tests (worker endpoints)
  try {
    require('../tests/integration.test');
  } catch (err) {
    console.error('Integration tests failed:', err);
    process.exit(1);
  }
})();
