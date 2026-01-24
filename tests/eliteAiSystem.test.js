const NicheDiscoveryModule = require('../src/modules/NicheDiscoveryModule');
const KeywordResearchModule = require('../src/modules/KeywordResearchModule');
const TechStackSetupModule = require('../src/modules/TechStackSetupModule');

describe('Elite AI Prompt System', () => {
    describe('NicheDiscoveryModule', () => {
        test('should analyze user profile and return niche recommendations', async () => {
            const module = new NicheDiscoveryModule({ openaiApiKey: 'test-key' });
            
            const userInput = {
                userSkills: ['JavaScript', 'Marketing'],
                userInterests: ['Technology', 'AI'],
                availableResources: { budget: 'medium' }
            };
            
            const result = await module.analyze(userInput);
            
            expect(result).toHaveProperty('selectedNiche');
            expect(result).toHaveProperty('rankedNiches');
            expect(result).toHaveProperty('analysis');
            expect(result.selectedNiche).toHaveProperty('name');
            expect(result.selectedNiche).toHaveProperty('score');
            expect(result.rankedNiches).toBeInstanceOf(Array);
            expect(result.rankedNiches.length).toBeGreaterThan(0);
        });

        test('should calculate alignment score correctly', () => {
            const module = new NicheDiscoveryModule({ openaiApiKey: 'test-key' });
            
            const userProfile = {
                skills: ['JavaScript', 'React'],
                interests: ['Technology', 'Programming']
            };
            
            const requiredSkills = ['technology', 'programming'];
            const alignment = module.calculateAlignment(userProfile, requiredSkills);
            
            expect(alignment).toBeGreaterThan(0);
            expect(alignment).toBeLessThanOrEqual(1);
        });
    });

    describe('KeywordResearchModule', () => {
        test('should generate comprehensive keyword strategy', async () => {
            const module = new KeywordResearchModule({ openaiApiKey: 'test-key' });
            
            const selectedNiche = {
                name: 'AI-Powered Personal Finance Tools',
                category: 'fintech',
                trends: ['AI automation', 'personal finance']
            };
            
            const result = await module.generateStrategy(selectedNiche);
            
            expect(result).toHaveProperty('keywords');
            expect(result).toHaveProperty('clusters');
            expect(result).toHaveProperty('roadmap');
            expect(result.keywords).toBeInstanceOf(Array);
            expect(result.keywords.length).toBeGreaterThan(0);
            expect(result.clusters).toHaveProperty('informational');
            expect(result.clusters).toHaveProperty('commercial');
            expect(result.clusters).toHaveProperty('transactional');
        });

        test('should classify keyword intent correctly', () => {
            const module = new KeywordResearchModule({ openaiApiKey: 'test-key' });
            
            expect(module.classifyIntent('how to invest money')).toBe('informational');
            expect(module.classifyIntent('best investment apps')).toBe('commercial');
            expect(module.classifyIntent('buy investment software')).toBe('transactional');
            expect(module.classifyIntent('robinhood app login')).toBe('navigational');
        });

        test('should calculate keyword priority correctly', () => {
            const module = new KeywordResearchModule({ openaiApiKey: 'test-key' });
            
            const highPriority = module.calculatePriority('best investment app', 5000, 20);
            const lowPriority = module.calculatePriority('complex investment strategy', 100, 80);
            
            expect(['high', 'medium', 'low']).toContain(highPriority);
            expect(['high', 'medium', 'low']).toContain(lowPriority);
        });
    });

    describe('TechStackSetupModule', () => {
        test('should select optimal tech stack', async () => {
            const module = new TechStackSetupModule({ openaiApiKey: 'test-key' });
            
            const params = {
                niche: { 
                    name: 'AI-Powered Personal Finance Tools',
                    category: 'fintech',
                    validation: {
                        monetization: {
                            potential: 75000,
                            models: ['subscription', 'affiliate']
                        }
                    }
                },
                requirements: ['automation', 'scalability', 'ai-integration']
            };
            
            const result = await module.selectOptimalStack(params);
            
            expect(result).toHaveProperty('frontend');
            expect(result).toHaveProperty('backend');
            expect(result).toHaveProperty('hosting');
            expect(result).toHaveProperty('configuration');
            expect(result).toHaveProperty('justification');
            expect(result.frontend).toHaveProperty('framework');
            expect(result.backend).toHaveProperty('runtime');
            expect(result.hosting).toHaveProperty('platform');
        });

        test('should assess complexity correctly', () => {
            const module = new TechStackSetupModule({ openaiApiKey: 'test-key' });
            
            const simpleNiche = { category: 'blog', validation: { monetization: { models: ['advertising'] } } };
            const complexNiche = { 
                category: 'fintech', 
                trends: ['AI automation'],
                validation: { monetization: { models: ['subscription', 'affiliate', 'direct-sales'] } }
            };
            
            const simpleComplexity = module.assessComplexity(simpleNiche);
            const complexComplexity = module.assessComplexity(complexNiche);
            
            expect(['low', 'medium', 'high']).toContain(simpleComplexity);
            expect(['low', 'medium', 'high']).toContain(complexComplexity);
        });
    });

    describe('Integration Tests', () => {
        test('should complete niche discovery to keyword research flow', async () => {
            const nicheModule = new NicheDiscoveryModule({ openaiApiKey: 'test-key' });
            const keywordModule = new KeywordResearchModule({ openaiApiKey: 'test-key' });
            
            const userInput = {
                userSkills: ['JavaScript', 'Marketing'],
                userInterests: ['Technology', 'AI'],
                availableResources: { budget: 'medium' }
            };
            
            // Step 1: Discover niche
            const nicheResult = await nicheModule.analyze(userInput);
            expect(nicheResult.selectedNiche).toBeDefined();
            
            // Step 2: Generate keyword strategy
            const keywordResult = await keywordModule.generateStrategy(nicheResult.selectedNiche);
            expect(keywordResult.keywords).toBeDefined();
            expect(keywordResult.keywords.length).toBeGreaterThan(0);
        });
    });
});