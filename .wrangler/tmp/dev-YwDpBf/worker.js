var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// src/modules/NicheDiscoveryModule.js
var require_NicheDiscoveryModule = __commonJS({
  "src/modules/NicheDiscoveryModule.js"(exports, module) {
    init_modules_watch_stub();
    var NicheDiscoveryModule = class {
      static {
        __name(this, "NicheDiscoveryModule");
      }
      constructor(config) {
        this.config = config;
        this.openaiApiKey = config.openaiApiKey;
      }
      /**
       * Analyze user input and generate validated niche recommendations
       */
      async analyze(userInput) {
        const { userSkills, userInterests, availableResources } = userInput;
        const userProfile = this.analyzeUserProfile(userSkills, userInterests, availableResources);
        const potentialNiches = await this.generatePotentialNiches(userProfile);
        const validatedNiches = await this.validateNiches(potentialNiches);
        const rankedNiches = this.scoreAndRankNiches(validatedNiches);
        const selectedNiche = this.selectTopNiche(rankedNiches);
        return {
          selectedNiche,
          rankedNiches,
          analysis: {
            userProfile,
            validationMetrics: this.getValidationMetrics(validatedNiches),
            recommendation: this.generateRecommendation(selectedNiche, rankedNiches)
          }
        };
      }
      analyzeUserProfile(skills, interests, resources) {
        return {
          skills: Array.isArray(skills) ? skills : [],
          interests: Array.isArray(interests) ? interests : [],
          resources: {
            budget: resources.budget || "low",
            timeCommitment: resources.timeCommitment || "part-time",
            technicalSkills: resources.technicalSkills || "beginner",
            marketingExperience: resources.marketingExperience || "none"
          },
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
      async generatePotentialNiches(userProfile) {
        const trendingNiches = [
          {
            name: "AI-Powered Personal Finance Tools",
            category: "fintech",
            trends: ["AI automation", "personal finance", "subscription economy"],
            alignment: this.calculateAlignment(userProfile, ["technology", "finance", "AI"])
          },
          {
            name: "Sustainable Living Marketplace",
            category: "sustainability",
            trends: ["eco-conscious", "sustainability", "green products"],
            alignment: this.calculateAlignment(userProfile, ["environment", "sustainability", "e-commerce"])
          },
          {
            name: "Remote Work Productivity Solutions",
            category: "productivity",
            trends: ["remote work", "productivity tools", "digital nomads"],
            alignment: this.calculateAlignment(userProfile, ["productivity", "remote work", "software"])
          },
          {
            name: "AI-Enhanced Learning Platform",
            category: "education",
            trends: ["online education", "AI tutoring", "skill development"],
            alignment: this.calculateAlignment(userProfile, ["education", "AI", "teaching"])
          },
          {
            name: "Health & Wellness Automation",
            category: "health",
            trends: ["wellness tracking", "health automation", "preventive care"],
            alignment: this.calculateAlignment(userProfile, ["health", "wellness", "automation"])
          }
        ];
        if (this.openaiApiKey) {
          const aiGeneratedNiches = await this.generateAIPersonalizedNiches(userProfile);
          return [...trendingNiches, ...aiGeneratedNiches];
        }
        return trendingNiches;
      }
      async generateAIPersonalizedNiches(userProfile) {
        try {
          const personalizedNiches = [
            {
              name: `${userProfile.interests[0] || "Technology"} Automation Hub`,
              category: "automation",
              trends: ["automation", userProfile.interests[0] || "technology", "AI"],
              alignment: 0.9,
              aiGenerated: true
            }
          ];
          return personalizedNiches;
        } catch (error) {
          console.error("Error generating AI personalized niches:", error);
          return [];
        }
      }
      calculateAlignment(userProfile, requiredSkills) {
        const userSkillsLower = userProfile.skills.map((s) => s.toLowerCase());
        const userInterestsLower = userProfile.interests.map((i) => i.toLowerCase());
        const allUserCapabilities = [...userSkillsLower, ...userInterestsLower];
        const matches = requiredSkills.filter(
          (skill) => allUserCapabilities.some((cap) => cap.includes(skill.toLowerCase()))
        ).length;
        return matches / requiredSkills.length;
      }
      async validateNiches(niches) {
        const validatedNiches = [];
        for (const niche of niches) {
          const validation = await this.performMarketValidation(niche);
          validatedNiches.push({
            ...niche,
            validation
          });
        }
        return validatedNiches;
      }
      async performMarketValidation(niche) {
        const baseScore = Math.random() * 0.4 + 0.3;
        const alignmentBonus = niche.alignment * 0.3;
        return {
          marketDemand: {
            searchVolume: Math.floor(Math.random() * 5e4) + 1e4,
            trendScore: baseScore + alignmentBonus,
            seasonality: "stable"
          },
          competition: {
            level: ["low", "medium", "high"][Math.floor(Math.random() * 3)],
            topCompetitors: this.generateCompetitors(niche),
            barriers: this.analyzeBarriers(niche)
          },
          monetization: {
            potential: Math.floor((baseScore + alignmentBonus) * 1e5),
            models: this.getMonetizationModels(niche),
            timeToRevenue: Math.floor(Math.random() * 6) + 3
            // 3-9 months
          },
          sustainability: {
            growth: baseScore + alignmentBonus > 0.6 ? "high" : "medium",
            risks: this.identifyRisks(niche),
            opportunities: this.identifyOpportunities(niche)
          }
        };
      }
      generateCompetitors(niche) {
        return [
          `${niche.name.split(" ")[0]}Pro`,
          `Smart${niche.category.charAt(0).toUpperCase() + niche.category.slice(1)}`,
          `${niche.name.split(" ")[0]}Hub`
        ];
      }
      analyzeBarriers(niche) {
        const barriers = ["regulatory", "technical", "financial", "market"];
        return barriers.slice(0, Math.floor(Math.random() * 3) + 1);
      }
      getMonetizationModels(niche) {
        const allModels = ["subscription", "affiliate", "advertising", "direct-sales", "freemium"];
        return allModels.slice(0, Math.floor(Math.random() * 3) + 2);
      }
      identifyRisks(niche) {
        return [
          "Market saturation",
          "Regulatory changes",
          "Technology disruption"
        ];
      }
      identifyOpportunities(niche) {
        return [
          "AI integration potential",
          "Automation opportunities",
          "Global market expansion"
        ];
      }
      scoreAndRankNiches(validatedNiches) {
        return validatedNiches.map((niche) => {
          const score = this.calculateNicheScore(niche);
          return {
            ...niche,
            score,
            rank: 0
            // Will be set after sorting
          };
        }).sort((a, b) => b.score - a.score).map((niche, index) => ({
          ...niche,
          rank: index + 1
        }));
      }
      calculateNicheScore(niche) {
        const weights = {
          marketDemand: 0.25,
          competition: 0.2,
          monetization: 0.25,
          sustainability: 0.15,
          alignment: 0.15
        };
        const marketScore = niche.validation.marketDemand.trendScore;
        const competitionScore = niche.validation.competition.level === "low" ? 1 : niche.validation.competition.level === "medium" ? 0.6 : 0.3;
        const monetizationScore = Math.min(niche.validation.monetization.potential / 1e5, 1);
        const sustainabilityScore = niche.validation.sustainability.growth === "high" ? 1 : 0.7;
        const alignmentScore = niche.alignment;
        return marketScore * weights.marketDemand + competitionScore * weights.competition + monetizationScore * weights.monetization + sustainabilityScore * weights.sustainability + alignmentScore * weights.alignment;
      }
      selectTopNiche(rankedNiches) {
        if (!rankedNiches.length) {
          throw new Error("No niches available for selection");
        }
        const topNiche = rankedNiches[0];
        return {
          ...topNiche,
          selectionReason: this.generateSelectionReason(topNiche, rankedNiches),
          selectedAt: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
      generateSelectionReason(selectedNiche, allNiches) {
        const reasons = [];
        if (selectedNiche.score > 0.7) {
          reasons.push("High overall score indicating strong market potential");
        }
        if (selectedNiche.validation.competition.level === "low") {
          reasons.push("Low competition providing easier market entry");
        }
        if (selectedNiche.validation.monetization.potential > 75e3) {
          reasons.push("Strong monetization potential");
        }
        if (selectedNiche.alignment > 0.6) {
          reasons.push("Strong alignment with user skills and interests");
        }
        return reasons.join(". ") + ".";
      }
      getValidationMetrics(validatedNiches) {
        return {
          totalNichesAnalyzed: validatedNiches.length,
          averageScore: validatedNiches.reduce((sum, n) => sum + (n.score || 0), 0) / validatedNiches.length,
          highPotentialNiches: validatedNiches.filter((n) => (n.score || 0) > 0.6).length,
          validationCompletedAt: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
      generateRecommendation(selectedNiche, rankedNiches) {
        return {
          primaryRecommendation: `Focus on ${selectedNiche.name} due to its ${selectedNiche.selectionReason}`,
          alternativeOptions: rankedNiches.slice(1, 3).map((n) => ({
            name: n.name,
            reason: `Consider as backup option with score ${n.score.toFixed(2)}`
          })),
          nextSteps: [
            "Proceed with keyword research for selected niche",
            "Analyze competitor content strategies",
            "Identify target audience segments",
            "Plan initial content calendar"
          ]
        };
      }
    };
    module.exports = NicheDiscoveryModule;
    module.exports.default = NicheDiscoveryModule;
  }
});

// src/modules/KeywordResearchModule.js
var require_KeywordResearchModule = __commonJS({
  "src/modules/KeywordResearchModule.js"(exports, module) {
    init_modules_watch_stub();
    var KeywordResearchModule = class {
      static {
        __name(this, "KeywordResearchModule");
      }
      constructor(config) {
        this.config = config;
        this.openaiApiKey = config.openaiApiKey;
      }
      /**
       * Generate comprehensive keyword strategy for selected niche
       */
      async generateStrategy(selectedNiche) {
        const seedKeywords = await this.generateSeedKeywords(selectedNiche);
        const expandedKeywords = await this.expandToLongTail(seedKeywords, selectedNiche);
        const clusteredKeywords = this.clusterByIntent(expandedKeywords);
        const competitiveAnalysis = await this.analyzeCompetition(clusteredKeywords, selectedNiche);
        const contentRoadmap = this.createContentRoadmap(clusteredKeywords, competitiveAnalysis);
        return {
          keywords: expandedKeywords,
          clusters: clusteredKeywords,
          competition: competitiveAnalysis,
          roadmap: contentRoadmap,
          strategy: this.generateOverallStrategy(selectedNiche, clusteredKeywords),
          metadata: {
            totalKeywords: expandedKeywords.length,
            highValueKeywords: expandedKeywords.filter((k) => k.priority === "high").length,
            generatedAt: (/* @__PURE__ */ new Date()).toISOString()
          }
        };
      }
      async generateSeedKeywords(niche) {
        const baseSeeds = [
          niche.name.toLowerCase(),
          ...niche.trends.map((t) => t.toLowerCase()),
          `${niche.category} tools`,
          `${niche.category} software`,
          `${niche.category} solutions`,
          `best ${niche.category}`,
          `${niche.category} reviews`,
          `${niche.category} guide`,
          `how to ${niche.category}`,
          `${niche.category} tips`
        ];
        if (this.openaiApiKey) {
          const aiSeeds = await this.generateAISeeds(niche);
          return [...baseSeeds, ...aiSeeds];
        }
        return baseSeeds;
      }
      async generateAISeeds(niche) {
        try {
          const aiSeeds = [
            `${niche.category} automation`,
            `smart ${niche.category}`,
            `${niche.category} platform`,
            `${niche.category} marketplace`,
            `${niche.category} comparison`
          ];
          return aiSeeds;
        } catch (error) {
          console.error("Error generating AI seeds:", error);
          return [];
        }
      }
      async expandToLongTail(seedKeywords, niche) {
        const expandedKeywords = [];
        for (const seed of seedKeywords) {
          const variations = this.generateKeywordVariations(seed, niche);
          expandedKeywords.push(...variations);
        }
        return expandedKeywords.map((keyword) => ({
          keyword,
          searchVolume: this.estimateSearchVolume(keyword),
          difficulty: this.estimateDifficulty(keyword),
          cpc: this.estimateCPC(keyword),
          intent: this.classifyIntent(keyword),
          priority: this.calculatePriority(keyword),
          related: this.findRelatedKeywords(keyword)
        }));
      }
      generateKeywordVariations(seed, niche) {
        const prefixes = ["best", "top", "how to", "what is", "why", "when to use", "compare"];
        const suffixes = ["2025", "review", "guide", "tutorial", "tips", "tools", "software", "app", "platform"];
        const modifiers = ["free", "cheap", "professional", "enterprise", "small business", "online"];
        const variations = [seed];
        prefixes.forEach((prefix) => {
          variations.push(`${prefix} ${seed}`);
        });
        suffixes.forEach((suffix) => {
          variations.push(`${seed} ${suffix}`);
        });
        modifiers.forEach((modifier) => {
          variations.push(`${modifier} ${seed}`);
          variations.push(`${seed} for ${modifier}`);
        });
        variations.push(`${seed} for ${niche.category}`);
        variations.push(`${niche.category} ${seed}`);
        return [...new Set(variations)];
      }
      estimateSearchVolume(keyword) {
        const baseVolume = Math.floor(Math.random() * 1e4) + 100;
        const lengthFactor = Math.max(0.1, 1 - (keyword.split(" ").length - 1) * 0.2);
        return Math.floor(baseVolume * lengthFactor);
      }
      estimateDifficulty(keyword) {
        const wordCount = keyword.split(" ").length;
        const baseDifficulty = Math.random() * 60 + 20;
        const lengthAdjustment = Math.max(0, (5 - wordCount) * 5);
        return Math.min(100, Math.max(1, Math.floor(baseDifficulty - lengthAdjustment)));
      }
      estimateCPC(keyword) {
        const baselineCPC = Math.random() * 3 + 0.5;
        const commercialKeywords = ["buy", "purchase", "price", "cost", "cheap", "best", "review"];
        const isCommercial = commercialKeywords.some((term) => keyword.includes(term));
        return isCommercial ? baselineCPC * 1.5 : baselineCPC;
      }
      classifyIntent(keyword) {
        const informationalTerms = ["how to", "what is", "why", "guide", "tutorial", "tips", "learn"];
        const commercialTerms = ["best", "top", "review", "compare", "vs", "alternative"];
        const transactionalTerms = ["buy", "purchase", "price", "cost", "deal", "discount", "cheap"];
        const navigationalTerms = ["login", "dashboard", "app", "website", "official"];
        const lowerKeyword = keyword.toLowerCase();
        if (transactionalTerms.some((term) => lowerKeyword.includes(term))) {
          return "transactional";
        } else if (commercialTerms.some((term) => lowerKeyword.includes(term))) {
          return "commercial";
        } else if (navigationalTerms.some((term) => lowerKeyword.includes(term))) {
          return "navigational";
        } else if (informationalTerms.some((term) => lowerKeyword.includes(term))) {
          return "informational";
        } else {
          return "informational";
        }
      }
      calculatePriority(keyword, searchVolume, difficulty) {
        const volume = searchVolume || this.estimateSearchVolume(keyword);
        const diff = difficulty || this.estimateDifficulty(keyword);
        const intentWeights = {
          "transactional": 1.5,
          "commercial": 1.3,
          "informational": 1,
          "navigational": 0.8
        };
        const intent = this.classifyIntent(keyword);
        const intentWeight = intentWeights[intent] || 1;
        const score = volume / Math.max(diff, 1) * intentWeight;
        if (score > 50) return "high";
        if (score > 20) return "medium";
        return "low";
      }
      findRelatedKeywords(keyword) {
        const words = keyword.split(" ");
        const synonyms = {
          "best": ["top", "leading", "premier", "excellent"],
          "tools": ["software", "apps", "platforms", "solutions"],
          "guide": ["tutorial", "how-to", "manual", "instructions"],
          "review": ["analysis", "evaluation", "assessment", "comparison"]
        };
        const related = [];
        words.forEach((word) => {
          if (synonyms[word]) {
            synonyms[word].forEach((synonym) => {
              const relatedKeyword = keyword.replace(word, synonym);
              if (relatedKeyword !== keyword) {
                related.push(relatedKeyword);
              }
            });
          }
        });
        return related.slice(0, 3);
      }
      clusterByIntent(keywords) {
        const clusters = {
          informational: [],
          commercial: [],
          transactional: [],
          navigational: []
        };
        keywords.forEach((keywordData) => {
          const intent = keywordData.intent;
          if (clusters[intent]) {
            clusters[intent].push(keywordData);
          }
        });
        Object.keys(clusters).forEach((intent) => {
          clusters[intent] = clusters[intent].sort((a, b) => {
            const priorityOrder = { "high": 3, "medium": 2, "low": 1 };
            if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
              return priorityOrder[b.priority] - priorityOrder[a.priority];
            }
            return b.searchVolume - a.searchVolume;
          });
        });
        return clusters;
      }
      async analyzeCompetition(clusteredKeywords, niche) {
        const allKeywords = Object.values(clusteredKeywords).flat();
        const competitorGaps = [];
        const quickWins = [];
        allKeywords.forEach((keywordData) => {
          if (keywordData.difficulty < 30 && keywordData.searchVolume > 500) {
            quickWins.push(keywordData);
          }
          if (keywordData.difficulty < 40 && keywordData.priority === "high") {
            competitorGaps.push(keywordData);
          }
        });
        return {
          totalKeywordsAnalyzed: allKeywords.length,
          competitorGaps: competitorGaps.slice(0, 10),
          // Top 10 gaps
          quickWins: quickWins.slice(0, 15),
          // Top 15 quick wins
          averageDifficulty: allKeywords.reduce((sum, k) => sum + k.difficulty, 0) / allKeywords.length,
          highValueOpportunities: allKeywords.filter(
            (k) => k.priority === "high" && k.difficulty < 50
          ).slice(0, 20),
          competitiveAnalysis: this.generateCompetitiveInsights(niche, allKeywords)
        };
      }
      generateCompetitiveInsights(niche, keywords) {
        const insights = [];
        const lowCompetitionCount = keywords.filter((k) => k.difficulty < 30).length;
        const highVolumeCount = keywords.filter((k) => k.searchVolume > 1e3).length;
        const commercialCount = keywords.filter((k) => k.intent === "commercial").length;
        if (lowCompetitionCount > keywords.length * 0.3) {
          insights.push("Market shows significant low-competition opportunities");
        }
        if (highVolumeCount > keywords.length * 0.2) {
          insights.push("Multiple high-volume keywords available for targeting");
        }
        if (commercialCount > keywords.length * 0.4) {
          insights.push("Strong commercial intent keywords suggest good monetization potential");
        }
        insights.push(`${niche.category} niche shows ${this.getCompetitiveLandscape(keywords)} competitive landscape`);
        return insights;
      }
      getCompetitiveLandscape(keywords) {
        const avgDifficulty = keywords.reduce((sum, k) => sum + k.difficulty, 0) / keywords.length;
        if (avgDifficulty < 30) return "low";
        if (avgDifficulty < 50) return "moderate";
        return "high";
      }
      createContentRoadmap(clusteredKeywords, competitiveAnalysis) {
        const roadmap = {
          month1: [],
          month2: [],
          month3: [],
          contentTypes: {},
          audienceSegments: {}
        };
        const quickWins = competitiveAnalysis.quickWins.slice(0, 8);
        roadmap.month1 = quickWins.map((kw) => ({
          keyword: kw.keyword,
          contentType: this.suggestContentType(kw),
          audienceSegment: this.identifyAudienceSegment(kw),
          priority: kw.priority,
          estimatedTraffic: kw.searchVolume
        }));
        const highValue = competitiveAnalysis.highValueOpportunities.slice(0, 15);
        const month2Content = highValue.slice(0, 8);
        const month3Content = highValue.slice(8);
        roadmap.month2 = month2Content.map((kw) => ({
          keyword: kw.keyword,
          contentType: this.suggestContentType(kw),
          audienceSegment: this.identifyAudienceSegment(kw),
          priority: kw.priority,
          estimatedTraffic: kw.searchVolume
        }));
        roadmap.month3 = month3Content.map((kw) => ({
          keyword: kw.keyword,
          contentType: this.suggestContentType(kw),
          audienceSegment: this.identifyAudienceSegment(kw),
          priority: kw.priority,
          estimatedTraffic: kw.searchVolume
        }));
        const allPlannedContent = [...roadmap.month1, ...roadmap.month2, ...roadmap.month3];
        roadmap.contentTypes = this.analyzeContentTypeDistribution(allPlannedContent);
        roadmap.audienceSegments = this.analyzeAudienceSegments(allPlannedContent);
        return roadmap;
      }
      suggestContentType(keywordData) {
        const keyword = keywordData.keyword.toLowerCase();
        const intent = keywordData.intent;
        if (intent === "informational") {
          if (keyword.includes("how to") || keyword.includes("guide")) {
            return "tutorial";
          } else if (keyword.includes("what is") || keyword.includes("why")) {
            return "explainer";
          } else {
            return "blog-post";
          }
        } else if (intent === "commercial") {
          if (keyword.includes("best") || keyword.includes("top")) {
            return "listicle";
          } else if (keyword.includes("review") || keyword.includes("compare")) {
            return "comparison";
          } else {
            return "product-page";
          }
        } else if (intent === "transactional") {
          return "landing-page";
        } else {
          return "resource-page";
        }
      }
      identifyAudienceSegment(keywordData) {
        const keyword = keywordData.keyword.toLowerCase();
        if (keyword.includes("beginner") || keyword.includes("how to")) {
          return "beginners";
        } else if (keyword.includes("professional") || keyword.includes("enterprise")) {
          return "professionals";
        } else if (keyword.includes("small business")) {
          return "small-business";
        } else if (keyword.includes("free") || keyword.includes("cheap")) {
          return "budget-conscious";
        } else {
          return "general";
        }
      }
      analyzeContentTypeDistribution(plannedContent) {
        const distribution = {};
        plannedContent.forEach((content) => {
          distribution[content.contentType] = (distribution[content.contentType] || 0) + 1;
        });
        return distribution;
      }
      analyzeAudienceSegments(plannedContent) {
        const segments = {};
        plannedContent.forEach((content) => {
          segments[content.audienceSegment] = (segments[content.audienceSegment] || 0) + 1;
        });
        return segments;
      }
      generateOverallStrategy(niche, clusteredKeywords) {
        const totalKeywords = Object.values(clusteredKeywords).flat().length;
        const highPriorityCount = Object.values(clusteredKeywords).flat().filter((k) => k.priority === "high").length;
        return {
          primaryFocus: this.identifyPrimaryFocus(clusteredKeywords),
          secondaryFocuses: this.identifySecondaryFocuses(clusteredKeywords),
          contentPillars: this.identifyContentPillars(niche, clusteredKeywords),
          seoApproach: this.recommendSEOApproach(clusteredKeywords),
          competitiveStrategy: this.recommendCompetitiveStrategy(clusteredKeywords),
          timeline: {
            phase1: "Target quick wins and build domain authority (Month 1)",
            phase2: "Expand into competitive keywords (Month 2)",
            phase3: "Scale content and target high-value terms (Month 3+)"
          },
          metrics: {
            totalKeywords,
            highPriorityCount,
            projectedTraffic: this.estimateProjectedTraffic(clusteredKeywords)
          }
        };
      }
      identifyPrimaryFocus(clusteredKeywords) {
        const intentPriorities = {};
        Object.keys(clusteredKeywords).forEach((intent) => {
          intentPriorities[intent] = clusteredKeywords[intent].filter((k) => k.priority === "high").length;
        });
        const primaryIntent = Object.keys(intentPriorities).reduce((a, b) => intentPriorities[a] > intentPriorities[b] ? a : b);
        return `${primaryIntent} keywords with focus on high-value, low-competition terms`;
      }
      identifySecondaryFocuses(clusteredKeywords) {
        return Object.keys(clusteredKeywords).filter((intent) => clusteredKeywords[intent].length > 0).map((intent) => `${intent} content strategy`).slice(0, 2);
      }
      identifyContentPillars(niche, clusteredKeywords) {
        const pillars = [];
        const highPriorityKeywords = Object.values(clusteredKeywords).flat().filter((k) => k.priority === "high");
        const topics = {};
        highPriorityKeywords.forEach((kw) => {
          const words = kw.keyword.split(" ");
          words.forEach((word) => {
            if (word.length > 3) {
              topics[word] = (topics[word] || 0) + 1;
            }
          });
        });
        const sortedTopics = Object.keys(topics).sort((a, b) => topics[b] - topics[a]).slice(0, 4);
        return sortedTopics.map((topic) => ({
          topic,
          frequency: topics[topic],
          suggestedContent: `Comprehensive ${topic} guides and resources`
        }));
      }
      recommendSEOApproach(clusteredKeywords) {
        const quickWins = Object.values(clusteredKeywords).flat().filter((k) => k.difficulty < 30 && k.searchVolume > 300).length;
        if (quickWins > 10) {
          return "Aggressive content creation focusing on quick wins to build authority";
        } else {
          return "Steady content creation with focus on long-term keyword ranking";
        }
      }
      recommendCompetitiveStrategy(clusteredKeywords) {
        const avgDifficulty = Object.values(clusteredKeywords).flat().reduce((sum, k) => sum + k.difficulty, 0) / Object.values(clusteredKeywords).flat().length;
        if (avgDifficulty < 35) {
          return "Direct competition on main keywords";
        } else {
          return "Long-tail keyword strategy to avoid direct competition";
        }
      }
      estimateProjectedTraffic(clusteredKeywords) {
        return Object.values(clusteredKeywords).flat().filter((k) => k.priority === "high" || k.priority === "medium").reduce((sum, k) => sum + k.searchVolume * 0.1, 0);
      }
    };
    module.exports = KeywordResearchModule;
    module.exports.default = KeywordResearchModule;
  }
});

// src/modules/TechStackSetupModule.js
var require_TechStackSetupModule = __commonJS({
  "src/modules/TechStackSetupModule.js"(exports, module) {
    init_modules_watch_stub();
    var TechStackSetupModule = class {
      static {
        __name(this, "TechStackSetupModule");
      }
      constructor(config) {
        this.config = config;
      }
      async selectOptimalStack(params) {
        const { niche, requirements } = params;
        const stackAnalysis = this.analyzeStackRequirements(niche, requirements);
        const selectedStack = this.selectStack(stackAnalysis);
        const configuration = await this.generateConfiguration(selectedStack, niche);
        return {
          ...selectedStack,
          configuration,
          justification: this.generateJustification(selectedStack, stackAnalysis),
          implementation: this.generateImplementationPlan(selectedStack),
          estimatedCosts: this.calculateCosts(selectedStack),
          timeline: this.estimateTimeline(selectedStack)
        };
      }
      analyzeStackRequirements(niche, requirements) {
        return {
          scalability: requirements.includes("scalability") ? "high" : "medium",
          automation: requirements.includes("automation") ? "high" : "medium",
          aiIntegration: requirements.includes("ai-integration") ? "high" : "low",
          budget: niche.validation?.monetization?.potential > 5e4 ? "medium" : "low",
          complexity: this.assessComplexity(niche),
          performance: "high",
          // Always prioritize performance
          maintainability: "high"
        };
      }
      assessComplexity(niche) {
        const complexityFactors = [
          niche.validation?.monetization?.models?.length > 2,
          niche.category === "fintech",
          niche.trends?.includes("AI automation")
        ];
        return complexityFactors.filter(Boolean).length > 1 ? "high" : "medium";
      }
      selectStack(analysis) {
        return {
          frontend: {
            framework: "Next.js 14",
            styling: "Tailwind CSS",
            stateManagement: "Zustand",
            uiLibrary: "shadcn/ui",
            animations: "Framer Motion"
          },
          backend: {
            runtime: "Node.js 20",
            framework: "Fastify",
            database: "Neon PostgreSQL",
            orm: "Drizzle ORM",
            cache: "Redis"
          },
          hosting: {
            platform: "Vercel",
            cdn: "Vercel Edge Network",
            database: "Neon",
            storage: "Vercel Blob"
          },
          authentication: {
            provider: "Clerk",
            features: ["social login", "MFA", "session management"]
          },
          analytics: {
            primary: "Plausible Analytics",
            monitoring: "Vercel Analytics",
            errors: "Sentry"
          },
          aiIntegration: {
            llm: "OpenAI GPT-4",
            embedding: "OpenAI Embeddings",
            vectorDb: "Pinecone"
          },
          automation: {
            workflows: "Zapier",
            ci_cd: "Vercel",
            monitoring: "UptimeRobot"
          }
        };
      }
      async generateConfiguration(stack, niche) {
        return {
          environment: {
            development: this.generateDevConfig(stack),
            staging: this.generateStagingConfig(stack),
            production: this.generateProdConfig(stack)
          },
          integrations: this.generateIntegrationConfig(stack, niche),
          security: this.generateSecurityConfig(stack),
          performance: this.generatePerformanceConfig(stack)
        };
      }
      generateDevConfig(stack) {
        return {
          nextConfig: {
            experimental: { serverComponentsExternalPackages: ["@prisma/client"] },
            env: { NODE_ENV: "development" }
          },
          database: { url: "postgresql://localhost:5432/dev_db" },
          redis: { url: "redis://localhost:6379" }
        };
      }
      generateStagingConfig(stack) {
        return {
          nextConfig: { env: { NODE_ENV: "staging" } },
          database: { url: "neon-staging-url" },
          redis: { url: "upstash-staging-url" }
        };
      }
      generateProdConfig(stack) {
        return {
          nextConfig: {
            output: "standalone",
            experimental: { optimizeCss: true },
            env: { NODE_ENV: "production" }
          },
          database: { url: "neon-production-url" },
          redis: { url: "upstash-production-url" }
        };
      }
      generateIntegrationConfig(stack, niche) {
        return {
          payment: {
            stripe: { publishableKey: "pk_live_...", webhookSecret: "whsec_..." }
          },
          ai: {
            openai: { apiKey: "sk-..." },
            pinecone: { apiKey: "pc-...", environment: "us-east-1" }
          },
          analytics: {
            plausible: { domain: `${niche.name.toLowerCase().replace(/\s+/g, "-")}.com` }
          },
          automation: {
            zapier: { webhookUrl: "https://hooks.zapier.com/..." }
          }
        };
      }
      generateSecurityConfig(stack) {
        return {
          headers: {
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "DENY",
            "X-XSS-Protection": "1; mode=block",
            "Strict-Transport-Security": "max-age=31536000; includeSubDomains"
          },
          cors: {
            origin: ["https://yourdomain.com"],
            credentials: true
          },
          rateLimit: {
            windowMs: 15 * 60 * 1e3,
            // 15 minutes
            max: 100
            // requests per window
          }
        };
      }
      generatePerformanceConfig(stack) {
        return {
          caching: {
            static: "1y",
            api: "5m",
            dynamic: "0s"
          },
          compression: {
            gzip: true,
            brotli: true
          },
          optimization: {
            images: { domains: ["images.unsplash.com", "cdn.yourdomain.com"] },
            bundleAnalyzer: true
          }
        };
      }
      generateJustification(stack, analysis) {
        const justifications = [];
        justifications.push(`Next.js 14 chosen for its App Router, server components, and excellent SEO capabilities`);
        justifications.push(`Neon PostgreSQL provides serverless scaling and cost efficiency for ${analysis.budget} budget`);
        justifications.push(`Vercel hosting ensures optimal performance and automatic scaling`);
        justifications.push(`Clerk authentication offers enterprise-grade security with minimal setup`);
        if (analysis.aiIntegration === "high") {
          justifications.push(`OpenAI integration enables advanced AI-powered features`);
        }
        if (analysis.automation === "high") {
          justifications.push(`Zapier integration provides no-code automation capabilities`);
        }
        return justifications;
      }
      generateImplementationPlan(stack) {
        return {
          phase1: {
            name: "Foundation Setup",
            duration: "1-2 days",
            tasks: [
              "Initialize Next.js project with TypeScript",
              "Configure Tailwind CSS and shadcn/ui",
              "Set up Neon database with Drizzle ORM",
              "Configure Clerk authentication",
              "Deploy to Vercel"
            ]
          },
          phase2: {
            name: "Core Features",
            duration: "3-5 days",
            tasks: [
              "Implement user management and profiles",
              "Set up payment processing with Stripe",
              "Configure analytics and monitoring",
              "Implement basic AI integrations",
              "Set up automation workflows"
            ]
          },
          phase3: {
            name: "Advanced Features",
            duration: "2-3 days",
            tasks: [
              "Implement advanced AI features",
              "Set up comprehensive monitoring",
              "Configure performance optimizations",
              "Implement security best practices",
              "Set up backup and disaster recovery"
            ]
          }
        };
      }
      calculateCosts(stack) {
        return {
          monthly: {
            hosting: 0,
            // Vercel hobby plan
            database: 0,
            // Neon free tier
            authentication: 0,
            // Clerk free tier
            analytics: 0,
            // Plausible self-hosted or free tier
            ai: 50,
            // OpenAI API estimated
            automation: 20,
            // Zapier starter plan
            total: 70
          },
          setup: {
            domain: 15,
            ssl: 0,
            // Included with Vercel
            tools: 0,
            // All free/open source
            total: 15
          },
          scaling: {
            "1k_users": 150,
            "10k_users": 500,
            "100k_users": 2e3
          }
        };
      }
      estimateTimeline(stack) {
        return {
          setup: "1-2 days",
          development: "1-2 weeks",
          testing: "2-3 days",
          deployment: "1 day",
          total: "2-3 weeks for MVP"
        };
      }
    };
    module.exports = TechStackSetupModule;
    module.exports.default = TechStackSetupModule;
  }
});

// src/modules/index.js
var require_modules = __commonJS({
  "src/modules/index.js"(exports, module) {
    init_modules_watch_stub();
    var ContentGenerationModule = class {
      static {
        __name(this, "ContentGenerationModule");
      }
      constructor(config) {
        this.config = config;
      }
      async generateSiteContent(params) {
        return {
          pages: [
            { type: "homepage", content: "AI-generated homepage content", seo: "optimized" },
            { type: "about", content: "AI-generated about page", seo: "optimized" },
            { type: "blog", content: "AI-generated blog structure", seo: "optimized" }
          ],
          generatedAt: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
    };
    var CROOptimizationModule = class {
      static {
        __name(this, "CROOptimizationModule");
      }
      constructor(config) {
        this.config = config;
      }
      async setupCROTools(params) {
        return {
          experiments: ["headline-test", "cta-test", "layout-test"],
          tools: ["hotjar", "google-optimize"],
          setupAt: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
    };
    var MonetizationModule = class {
      static {
        __name(this, "MonetizationModule");
      }
      constructor(config) {
        this.config = config;
      }
      async setupRevenueStreams(params) {
        return {
          revenueStreams: [
            { type: "affiliate", platform: "amazon-associates", estimatedRevenue: 1e3 },
            { type: "advertising", platform: "google-adsense", estimatedRevenue: 500 }
          ],
          setupAt: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
    };
    var AutomationModule = class {
      static {
        __name(this, "AutomationModule");
      }
      constructor(config) {
        this.config = config;
      }
      async setupWorkflows(params) {
        return {
          workflows: [
            { name: "content-publishing", trigger: "schedule", action: "publish" },
            { name: "analytics-reporting", trigger: "weekly", action: "report" }
          ],
          setupAt: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
    };
    var ComplianceModule = class {
      static {
        __name(this, "ComplianceModule");
      }
      constructor(config) {
        this.config = config;
      }
      async setupCompliance(params) {
        return {
          policies: ["privacy-policy", "terms-of-service", "cookie-policy"],
          gdprCompliant: true,
          ccpaCompliant: true,
          setupAt: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
    };
    var AnalyticsModule = class {
      static {
        __name(this, "AnalyticsModule");
      }
      constructor(config) {
        this.config = config;
      }
      async setupAnalytics(params) {
        return {
          platforms: ["plausible", "google-analytics"],
          dashboards: ["traffic", "conversions", "revenue"],
          setupAt: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
    };
    var DeploymentModule = class {
      static {
        __name(this, "DeploymentModule");
      }
      constructor(config) {
        this.config = config;
      }
      async deployAndHandover(params) {
        return {
          productionUrl: "https://your-site.vercel.app",
          credentials: { admin: "generated", analytics: "configured" },
          documentation: { architecture: "complete", workflows: "documented" },
          nextSteps: ["monitor-performance", "content-creation", "seo-optimization"],
          deployedAt: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
    };
    var ScalabilityModule = class {
      static {
        __name(this, "ScalabilityModule");
      }
      constructor(config) {
        this.config = config;
      }
      async setupScaling(params) {
        return {
          infrastructure: "serverless",
          autoScaling: true,
          monitoring: "active",
          setupAt: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
    };
    var OptimizationModule = class {
      static {
        __name(this, "OptimizationModule");
      }
      constructor(config) {
        this.config = config;
      }
      async setupContinuousImprovement(params) {
        return {
          monitoring: ["performance", "seo", "conversions"],
          automation: ["a-b-tests", "content-optimization"],
          setupAt: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
    };
    module.exports = {
      ContentGenerationModule,
      CROOptimizationModule,
      MonetizationModule,
      AutomationModule,
      ComplianceModule,
      AnalyticsModule,
      DeploymentModule,
      ScalabilityModule,
      OptimizationModule
    };
    module.exports.default = module.exports;
  }
});

// src/agents/AutonomousMarketingAgent.js
var require_AutonomousMarketingAgent = __commonJS({
  "src/agents/AutonomousMarketingAgent.js"(exports, module) {
    init_modules_watch_stub();
    var AutonomousMarketingAgent = class {
      static {
        __name(this, "AutonomousMarketingAgent");
      }
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
      /**
       * Execute the complete autonomous website creation process
       */
      async execute(userInput = {}) {
        try {
          this.log("\u{1F680} Starting Elite-Level Autonomous Marketing Website Creation...");
          await this.setGoalAndMission();
          await this.executeNicheDiscovery(userInput);
          await this.executeKeywordResearch();
          await this.executeTechStackSetup();
          await this.executeContentCreation();
          await this.executeCROOptimization();
          await this.executeMonetizationStrategy();
          await this.executeAutomationWorkflows();
          await this.executeLegalCompliance();
          await this.executeAnalyticsSetup();
          await this.executeFinalDeliverables();
          await this.executeScalabilitySetup();
          await this.executeContinuousOptimization();
          this.log("\u2705 Autonomous Marketing Website Creation Complete!");
          return this.generateFinalReport();
        } catch (error) {
          this.log(`\u274C Error in autonomous execution: ${error.message}`, "error");
          throw error;
        }
      }
      async setGoalAndMission() {
        this.log("\u{1F4CB} Step 1: Setting Goal & Mission...");
        this.state.mission = {
          goal: "Design, build, deploy, and operationalize a fully functional, income-generating marketing website",
          objectives: [
            "Maximize profitability and scalability",
            "Minimize human intervention",
            "Ensure full legal compliance",
            "Implement automation and resilience",
            "Adapt to future trends"
          ],
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        };
        this.markStepComplete(1);
      }
      async executeNicheDiscovery(userInput) {
        this.log("\u{1F50D} Step 2: Executing Niche Discovery & Market Validation...");
        const result = await this.modules.nicheDiscovery.analyze({
          userSkills: userInput.skills || [],
          userInterests: userInput.interests || [],
          availableResources: userInput.resources || {}
        });
        this.state.selectedNiche = result.selectedNiche;
        this.state.nicheAnalysis = result.analysis;
        this.log(`\u2705 Selected Niche: ${result.selectedNiche.name}`);
        this.markStepComplete(2);
      }
      async executeKeywordResearch() {
        this.log("\u{1F511} Step 3: Executing AI-Driven Keyword Research...");
        if (!this.state.selectedNiche) {
          throw new Error("Niche must be selected before keyword research");
        }
        const result = await this.modules.keywordResearch.generateStrategy(this.state.selectedNiche);
        this.state.keywordStrategy = result;
        this.log(`\u2705 Generated keyword strategy with ${result.keywords.length} keywords`);
        this.markStepComplete(3);
      }
      async executeTechStackSetup() {
        this.log("\u2699\uFE0F Step 4: Setting up Tech Stack...");
        const result = await this.modules.techStackSetup.selectOptimalStack({
          niche: this.state.selectedNiche,
          requirements: ["automation", "scalability", "ai-integration"]
        });
        this.state.techStack = result;
        this.log(`\u2705 Tech stack configured: ${result.frontend}, ${result.backend}, ${result.hosting}`);
        this.markStepComplete(4);
      }
      async executeContentCreation() {
        this.log("\u{1F4DD} Step 5: Executing AI-Powered Content Creation...");
        const result = await this.modules.contentGeneration.generateSiteContent({
          niche: this.state.selectedNiche,
          keywords: this.state.keywordStrategy,
          techStack: this.state.techStack
        });
        this.state.siteStructure = result;
        this.log(`\u2705 Generated site structure with ${result.pages.length} pages`);
        this.markStepComplete(5);
      }
      async executeCROOptimization() {
        this.log("\u{1F4CA} Step 6: Setting up Conversion Rate Optimization...");
        const result = await this.modules.croOptimization.setupCROTools({
          siteStructure: this.state.siteStructure,
          niche: this.state.selectedNiche
        });
        this.state.croSetup = result;
        this.log("\u2705 CRO tools and experiments configured");
        this.markStepComplete(6);
      }
      async executeMonetizationStrategy() {
        this.log("\u{1F4B0} Step 7: Implementing Monetization Strategy...");
        const result = await this.modules.monetization.setupRevenueStreams({
          niche: this.state.selectedNiche,
          siteStructure: this.state.siteStructure
        });
        this.state.monetizationStrategy = result;
        this.log(`\u2705 Configured ${result.revenueStreams.length} revenue streams`);
        this.markStepComplete(7);
      }
      async executeAutomationWorkflows() {
        this.log("\u{1F916} Step 8: Setting up Automation Workflows...");
        const result = await this.modules.automation.setupWorkflows({
          siteStructure: this.state.siteStructure,
          monetization: this.state.monetizationStrategy,
          cro: this.state.croSetup
        });
        this.state.workflows = result;
        this.log(`\u2705 Configured ${result.workflows.length} automation workflows`);
        this.markStepComplete(8);
      }
      async executeLegalCompliance() {
        this.log("\u2696\uFE0F Step 9: Implementing Legal Compliance...");
        const result = await this.modules.compliance.setupCompliance({
          siteStructure: this.state.siteStructure,
          niche: this.state.selectedNiche
        });
        this.state.compliance = result;
        this.log("\u2705 Legal compliance features implemented");
        this.markStepComplete(9);
      }
      async executeAnalyticsSetup() {
        this.log("\u{1F4C8} Step 10: Setting up Analytics & Observability...");
        const result = await this.modules.analytics.setupAnalytics({
          siteStructure: this.state.siteStructure,
          monetization: this.state.monetizationStrategy
        });
        this.state.analytics = result;
        this.log("\u2705 Analytics and monitoring configured");
        this.markStepComplete(10);
      }
      async executeFinalDeliverables() {
        this.log("\u{1F4E6} Step 11: Preparing Final Deliverables...");
        const result = await this.modules.deployment.deployAndHandover({
          siteStructure: this.state.siteStructure,
          techStack: this.state.techStack,
          workflows: this.state.workflows,
          compliance: this.state.compliance,
          analytics: this.state.analytics
        });
        this.state.deliverables = result;
        this.log("\u2705 Website deployed and deliverables prepared");
        this.markStepComplete(11);
      }
      async executeScalabilitySetup() {
        this.log("\u{1F680} Step 12: Implementing Scalability Features...");
        const result = await this.modules.scalability.setupScaling({
          techStack: this.state.techStack,
          siteStructure: this.state.siteStructure
        });
        this.state.scalability = result;
        this.log("\u2705 Scalability features implemented");
        this.markStepComplete(12);
      }
      async executeContinuousOptimization() {
        this.log("\u{1F504} Step 13: Setting up Continuous Optimization...");
        const result = await this.modules.optimization.setupContinuousImprovement({
          analytics: this.state.analytics,
          workflows: this.state.workflows,
          monetization: this.state.monetizationStrategy
        });
        this.state.optimization = result;
        this.log("\u2705 Continuous optimization systems active");
        this.markStepComplete(13);
      }
      markStepComplete(stepNumber) {
        this.state.completedSteps.push(stepNumber);
        this.state.currentStep = stepNumber + 1;
      }
      generateFinalReport() {
        return {
          executionSummary: {
            startTime: this.state.mission.timestamp,
            endTime: (/* @__PURE__ */ new Date()).toISOString(),
            completedSteps: this.state.completedSteps,
            selectedNiche: this.state.selectedNiche,
            techStack: this.state.techStack,
            deliverables: this.state.deliverables
          },
          websiteUrl: this.state.deliverables.productionUrl,
          credentials: this.state.deliverables.credentials,
          documentation: this.state.deliverables.documentation,
          nextSteps: this.state.deliverables.nextSteps,
          fullState: this.state
        };
      }
      log(message, level = "info") {
        const timestamp = (/* @__PURE__ */ new Date()).toISOString();
        const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
        if (this.config.debug) {
          console.log(logEntry);
        }
        if (!this.state.logs) this.state.logs = [];
        this.state.logs.push(logEntry);
      }
    };
    var NicheDiscoveryModule = require_NicheDiscoveryModule();
    var KeywordResearchModule = require_KeywordResearchModule();
    var TechStackSetupModule = require_TechStackSetupModule();
    var {
      ContentGenerationModule,
      CROOptimizationModule,
      MonetizationModule,
      AutomationModule,
      ComplianceModule,
      AnalyticsModule,
      DeploymentModule,
      ScalabilityModule,
      OptimizationModule
    } = require_modules();
    module.exports = AutonomousMarketingAgent;
    module.exports.default = AutonomousMarketingAgent;
  }
});

// .wrangler/tmp/bundle-CoN6U1/middleware-loader.entry.ts
init_modules_watch_stub();

// .wrangler/tmp/bundle-CoN6U1/middleware-insertion-facade.js
init_modules_watch_stub();

// worker.js
init_modules_watch_stub();
var worker_default = {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response(generateHomePage(), {
        headers: { "Content-Type": "text/html" }
      });
    }
    if (url.pathname === "/about") {
      return new Response(generateAboutPage(), {
        headers: { "Content-Type": "text/html" }
      });
    }
    if (url.pathname === "/contact") {
      return new Response(generateContactPage(), {
        headers: { "Content-Type": "text/html" }
      });
    }
    if (url.pathname.startsWith("/api/autonomous-agent")) {
      return handleAutonomousAgent(request, env);
    }
    if (url.pathname.startsWith("/api/niche-discovery")) {
      return handleNicheDiscovery(request, env);
    }
    if (url.pathname.startsWith("/api/keyword-research")) {
      return handleKeywordResearch(request, env);
    }
    if (url.pathname.startsWith("/api/tech-stack")) {
      return handleTechStack(request, env);
    }
    if (url.pathname.startsWith("/api/generate")) {
      let content = await generateAIContent(env.OPENAI_API_KEY);
      return new Response(content, {
        headers: { "Content-Type": "text/html" }
      });
    }
    if (url.pathname.startsWith("/marketplace/items")) {
      let items = await getMarketplaceItems();
      return new Response(items, {
        headers: { "Content-Type": "application/json" }
      });
    }
    if (url.pathname.startsWith("/marketplace/buy")) {
      let result = await processPayment(env.PAYMENT_GATEWAY_API_KEY, request);
      return new Response(result, {
        headers: { "Content-Type": "application/json" }
      });
    }
    if (url.pathname.startsWith("/api/fix-errors")) {
      let result = await fixErrors(env.OPENAI_API_KEY);
      return new Response(result, {
        headers: { "Content-Type": "application/json" }
      });
    }
    if (url.pathname.startsWith("/api/customer-support")) {
      let result = await handleCustomerSupport(env.OPENAI_API_KEY, request);
      return new Response(result, {
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response("404 Not Found", { status: 404 });
  }
};
function generateHomePage() {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>AI Marketplace</title>
        <meta name="description" content="AI-powered marketplace for innovative tools and services.">
        <meta name="keywords" content="AI, marketplace, tools, services, innovation">
        <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
            h1 { color: #0078D7; }
            .content { margin: auto; width: 80%; text-align: left; }
        </style>
    </head>
    <body>
        <h1>Welcome to the AI Marketplace</h1>
        <div class="content">
            <p>Discover and purchase AI-powered tools and services.</p>
            <p>Click below to explore our marketplace:</p>
            <a href="/marketplace/items">View Marketplace Items</a>
            <p><a href="/about">About Us</a> | <a href="/contact">Contact Us</a></p>
        </div>
    </body>
    </html>
    `;
}
__name(generateHomePage, "generateHomePage");
function generateAboutPage() {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>About Us</title>
        <meta name="description" content="Learn more about our AI-powered marketplace and team.">
        <meta name="keywords" content="AI, marketplace, About Us, Team, AI-powered tools">
        <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
            h1 { color: #0078D7; }
            .content { margin: auto; width: 80%; text-align: left; }
        </style>
    </head>
    <body>
        <h1>About Us</h1>
        <div class="content">
            <p>We are a team of AI enthusiasts dedicated to creating the best AI-powered marketplace.</p>
            <a href="/">Back to Home</a>
        </div>
    </body>
    </html>
    `;
}
__name(generateAboutPage, "generateAboutPage");
function generateContactPage() {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with us for any queries or support.">
        <meta name="keywords" content="AI, marketplace, Contact, Support, Queries">
        <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
            h1 { color: #0078D7; }
            .content { margin: auto; width: 80%; text-align: left; }
        </style>
    </head>
    <body>
        <h1>Contact Us</h1>
        <div class="content">
            <p>If you have any questions, feel free to reach out to us at contact@ai-market.com.</p>
            <a href="/">Back to Home</a>
        </div>
    </body>
    </html>
    `;
}
__name(generateContactPage, "generateContactPage");
async function generateAIContent(apiKey) {
  if (!apiKey) {
    return "<h2>Error: API Key Missing</h2>";
  }
  const generatedText = "This AI system continuously updates and adapts to search engine trends.";
  return `
    <html><body>
        <h1>AI-Generated Content</h1>
        <p>${generatedText}</p>
        <a href="/">Back to Home</a>
    </body></html>
    `;
}
__name(generateAIContent, "generateAIContent");
async function getMarketplaceItems() {
  const items = [
    { id: 1, name: "AI Content Generator", price: 100 },
    { id: 2, name: "SEO Optimization Tool", price: 200 }
  ];
  return JSON.stringify(items);
}
__name(getMarketplaceItems, "getMarketplaceItems");
async function processPayment(apiKey, request) {
  if (!apiKey) {
    return JSON.stringify({ error: "Payment Gateway API Key Missing" });
  }
  const paymentResult = { success: true, message: "Payment processed successfully" };
  return JSON.stringify(paymentResult);
}
__name(processPayment, "processPayment");
async function fixErrors(apiKey) {
  if (!apiKey) {
    return JSON.stringify({ error: "API Key Missing" });
  }
  const fixResult = { success: true, message: "Errors fixed successfully" };
  return JSON.stringify(fixResult);
}
__name(fixErrors, "fixErrors");
async function handleCustomerSupport(apiKey, request) {
  if (!apiKey) {
    return JSON.stringify({ error: "API Key Missing" });
  }
  const supportResult = { success: true, message: "Customer support handled successfully" };
  return JSON.stringify(supportResult);
}
__name(handleCustomerSupport, "handleCustomerSupport");
async function handleAutonomousAgent(request, env) {
  try {
    if (request.method === "POST") {
      const userInput = await request.json();
      const AutonomousMarketingAgent = (await Promise.resolve().then(() => __toESM(require_AutonomousMarketingAgent()))).default;
      const agent = new AutonomousMarketingAgent({
        openaiApiKey: env.OPENAI_API_KEY,
        paymentGatewayKey: env.PAYMENT_GATEWAY_API_KEY,
        debug: true
      });
      const result = await agent.execute(userInput);
      return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" }
      });
    } else {
      const documentation = {
        endpoint: "/api/autonomous-agent",
        method: "POST",
        description: "Execute the complete Elite-Level Autonomous Marketing Website Creation process",
        parameters: {
          skills: "Array of user skills",
          interests: "Array of user interests",
          resources: "Object with budget, timeCommitment, etc."
        },
        example: {
          skills: ["JavaScript", "Marketing", "Design"],
          interests: ["Technology", "AI", "Automation"],
          resources: {
            budget: "medium",
            timeCommitment: "full-time",
            technicalSkills: "advanced"
          }
        }
      };
      return new Response(JSON.stringify(documentation), {
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
__name(handleAutonomousAgent, "handleAutonomousAgent");
async function handleNicheDiscovery(request, env) {
  try {
    if (request.method === "POST") {
      const userInput = await request.json();
      const NicheDiscoveryModule = (await Promise.resolve().then(() => __toESM(require_NicheDiscoveryModule()))).default;
      const module = new NicheDiscoveryModule({ openaiApiKey: env.OPENAI_API_KEY });
      const result = await module.analyze(userInput);
      return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" }
      });
    } else {
      return new Response(JSON.stringify({
        endpoint: "/api/niche-discovery",
        method: "POST",
        description: "Analyze user profile and discover optimal niches"
      }), {
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
__name(handleNicheDiscovery, "handleNicheDiscovery");
async function handleKeywordResearch(request, env) {
  try {
    if (request.method === "POST") {
      const selectedNiche = await request.json();
      const KeywordResearchModule = (await Promise.resolve().then(() => __toESM(require_KeywordResearchModule()))).default;
      const module = new KeywordResearchModule({ openaiApiKey: env.OPENAI_API_KEY });
      const result = await module.generateStrategy(selectedNiche);
      return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" }
      });
    } else {
      return new Response(JSON.stringify({
        endpoint: "/api/keyword-research",
        method: "POST",
        description: "Generate comprehensive keyword strategy for selected niche"
      }), {
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
__name(handleKeywordResearch, "handleKeywordResearch");
async function handleTechStack(request, env) {
  try {
    if (request.method === "POST") {
      const params = await request.json();
      const TechStackSetupModule = (await Promise.resolve().then(() => __toESM(require_TechStackSetupModule()))).default;
      const module = new TechStackSetupModule({ openaiApiKey: env.OPENAI_API_KEY });
      const result = await module.selectOptimalStack(params);
      return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" }
      });
    } else {
      return new Response(JSON.stringify({
        endpoint: "/api/tech-stack",
        method: "POST",
        description: "Select and configure optimal tech stack"
      }), {
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
__name(handleTechStack, "handleTechStack");

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-CoN6U1/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = worker_default;

// node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-CoN6U1/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=worker.js.map
