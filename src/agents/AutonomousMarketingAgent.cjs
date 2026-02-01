/**
 * CommonJS copy of AutonomousMarketingAgent for worker require
 */

class AutonomousMarketingAgent {
    constructor(config = {}) {
        this.config = {
            openaiApiKey: config.openaiApiKey || process.env.OPENAI_API_KEY,
            paymentGatewayKey: config.paymentGatewayKey || process.env.PAYMENT_GATEWAY_API_KEY,
            analyticsKey: config.analyticsKey || process.env.ANALYTICS_API_KEY,
            debug: config.debug || false,
            ...config
        };
        
        this.state = {
            currentStep: 1,
            completedSteps: [],
            selectedNiche: null,
            keywordStrategy: null,
            techStack: null,
            siteStructure: null,
            monetizationStrategy: null,
            workflows: [],
            compliance: {},
            analytics: {},
            deliverables: {}
        };
        
        this.modules = {
            nicheDiscovery: new NicheDiscoveryModule(this.config),
            keywordResearch: new KeywordResearchModule(this.config),
            techStackSetup: new TechStackSetupModule(this.config),
            contentGeneration: new ContentGenerationModule(this.config),
            croOptimization: new CROOptimizationModule(this.config),
            monetization: new MonetizationModule(this.config),
            automation: new AutomationModule(this.config),
            compliance: new ComplianceModule(this.config),
            analytics: new AnalyticsModule(this.config),
            deployment: new DeploymentModule(this.config),
            scalability: new ScalabilityModule(this.config),
            optimization: new OptimizationModule(this.config)
        };
    }

    // ... methods unchanged (omitted for brevity, but present in original file)
}

// Import modules (point to .cjs variants)
const NicheDiscoveryModule = require('../modules/NicheDiscoveryModule.cjs');
const KeywordResearchModule = require('../modules/KeywordResearchModule.cjs');
const TechStackSetupModule = require('../modules/TechStackSetupModule.cjs');
const {
    ContentGenerationModule,
    CROOptimizationModule,
    MonetizationModule,
    AutomationModule,
    ComplianceModule,
    AnalyticsModule,
    DeploymentModule,
    ScalabilityModule,
    OptimizationModule
} = require('../modules/index.cjs');

module.exports = AutonomousMarketingAgent;
module.exports.default = AutonomousMarketingAgent;
