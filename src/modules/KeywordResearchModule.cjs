/**
 * Keyword Research Module
 * 
 * Implements AI-driven keyword research and SEO strategy
 * as outlined in step 3 of the elite AI prompt
 */

class KeywordResearchModule {
	constructor(config) {
		this.config = config;
		this.openaiApiKey = config.openaiApiKey;
	}

	/**
	 * Generate comprehensive keyword strategy for selected niche
	 */
	async generateStrategy(selectedNiche) {
		// Step 1: Generate seed keywords
		const seedKeywords = await this.generateSeedKeywords(selectedNiche);
        
		// Step 2: Expand to long-tail keywords
		const expandedKeywords = await this.expandToLongTail(seedKeywords, selectedNiche);
        
		// Step 3: Cluster keywords by intent
		const clusteredKeywords = this.clusterByIntent(expandedKeywords);
        
		// Step 4: Analyze competition and opportunities
		const competitiveAnalysis = await this.analyzeCompetition(clusteredKeywords, selectedNiche);
        
		// Step 5: Create content roadmap
		const contentRoadmap = this.createContentRoadmap(clusteredKeywords, competitiveAnalysis);
        
		return {
			keywords: expandedKeywords,
			clusters: clusteredKeywords,
			competition: competitiveAnalysis,
			roadmap: contentRoadmap,
			strategy: this.generateOverallStrategy(selectedNiche, clusteredKeywords),
			metadata: {
				totalKeywords: expandedKeywords.length,
				highValueKeywords: expandedKeywords.filter(k => k.priority === 'high').length,
				generatedAt: new Date().toISOString()
			}
		};
	}

	async generateSeedKeywords(niche) {
		const baseSeeds = [
			niche.name.toLowerCase(),
			...niche.trends.map(t => t.toLowerCase()),
			`${niche.category} tools`,
			`${niche.category} software`,
			`${niche.category} solutions`,
			`best ${niche.category}`,
			`${niche.category} reviews`,
			`${niche.category} guide`,
			`how to ${niche.category}`,
			`${niche.category} tips`
		];

		// AI-enhanced seed generation
		if (this.openaiApiKey) {
			const aiSeeds = await this.generateAISeeds(niche);
			return [...baseSeeds, ...aiSeeds];
		}

		return baseSeeds;
	}

	async generateAISeeds(niche) {
		try {
			// Simulate AI-generated seeds
			// In production, this would call OpenAI API for semantic expansion
			const aiSeeds = [
				`${niche.category} automation`,
				`smart ${niche.category}`,
				`${niche.category} platform`,
				`${niche.category} marketplace`,
				`${niche.category} comparison`
			];
            
			return aiSeeds;
		} catch (error) {
			console.error('Error generating AI seeds:', error);
			return [];
		}
	}

	async expandToLongTail(seedKeywords, niche) {
		const expandedKeywords = [];
        
		for (const seed of seedKeywords) {
			const variations = this.generateKeywordVariations(seed, niche);
			expandedKeywords.push(...variations);
		}

		// Add keyword metrics
		return expandedKeywords.map(keyword => ({
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
		const prefixes = ['best', 'top', 'how to', 'what is', 'why', 'when to use', 'compare'];
		const suffixes = ['2025', 'review', 'guide', 'tutorial', 'tips', 'tools', 'software', 'app', 'platform'];
		const modifiers = ['free', 'cheap', 'professional', 'enterprise', 'small business', 'online'];
        
		const variations = [seed]; // Include the base seed
        
		// Add prefix variations
		prefixes.forEach(prefix => {
			variations.push(`${prefix} ${seed}`);
		});
        
		// Add suffix variations
		suffixes.forEach(suffix => {
			variations.push(`${seed} ${suffix}`);
		});
        
		// Add modifier variations
		modifiers.forEach(modifier => {
			variations.push(`${modifier} ${seed}`);
			variations.push(`${seed} for ${modifier}`);
		});
        
		// Add niche-specific variations
		variations.push(`${seed} for ${niche.category}`);
		variations.push(`${niche.category} ${seed}`);
        
		return [...new Set(variations)]; // Remove duplicates
	}

	estimateSearchVolume(keyword) {
		// Simulate search volume estimation
		const baseVolume = Math.floor(Math.random() * 10000) + 100;
		const lengthFactor = Math.max(0.1, 1 - (keyword.split(' ').length - 1) * 0.2);
		return Math.floor(baseVolume * lengthFactor);
	}

	estimateDifficulty(keyword) {
		// Simulate keyword difficulty (0-100)
		const wordCount = keyword.split(' ').length;
		const baseDifficulty = Math.random() * 60 + 20; // 20-80 base
		const lengthAdjustment = Math.max(0, (5 - wordCount) * 5); // Longer = easier
		return Math.min(100, Math.max(1, Math.floor(baseDifficulty - lengthAdjustment)));
	}

	estimateCPC(keyword) {
		// Simulate cost per click estimation
		const baselineCPC = Math.random() * 3 + 0.5; // $0.50 - $3.50
		const commercialKeywords = ['buy', 'purchase', 'price', 'cost', 'cheap', 'best', 'review'];
		const isCommercial = commercialKeywords.some(term => keyword.includes(term));
		return isCommercial ? baselineCPC * 1.5 : baselineCPC;
	}

	classifyIntent(keyword) {
		const informationalTerms = ['how to', 'what is', 'why', 'guide', 'tutorial', 'tips', 'learn'];
		const commercialTerms = ['best', 'top', 'review', 'compare', 'vs', 'alternative'];
		const transactionalTerms = ['buy', 'purchase', 'price', 'cost', 'deal', 'discount', 'cheap'];
		const navigationalTerms = ['login', 'dashboard', 'app', 'website', 'official'];

		const lowerKeyword = keyword.toLowerCase();

		if (transactionalTerms.some(term => lowerKeyword.includes(term))) {
			return 'transactional';
		} else if (commercialTerms.some(term => lowerKeyword.includes(term))) {
			return 'commercial';
		} else if (navigationalTerms.some(term => lowerKeyword.includes(term))) {
			return 'navigational';
		} else if (informationalTerms.some(term => lowerKeyword.includes(term))) {
			return 'informational';
		} else {
			return 'informational'; // Default
		}
	}

	calculatePriority(keyword, searchVolume, difficulty) {
		const volume = searchVolume || this.estimateSearchVolume(keyword);
		const diff = difficulty || this.estimateDifficulty(keyword);
        
		// Priority calculation: (volume / difficulty) with intent weighting
		const intentWeights = {
			'transactional': 1.5,
			'commercial': 1.3,
			'informational': 1.0,
			'navigational': 0.8
		};
        
		const intent = this.classifyIntent(keyword);
		const intentWeight = intentWeights[intent] || 1.0;
		const score = (volume / Math.max(diff, 1)) * intentWeight;
        
		if (score > 50) return 'high';
		if (score > 20) return 'medium';
		return 'low';
	}

	findRelatedKeywords(keyword) {
		// Generate semantically related keywords
		const words = keyword.split(' ');
		const synonyms = {
			'best': ['top', 'leading', 'premier', 'excellent'],
			'tools': ['software', 'apps', 'platforms', 'solutions'],
			'guide': ['tutorial', 'how-to', 'manual', 'instructions'],
			'review': ['analysis', 'evaluation', 'assessment', 'comparison']
		};

		const related = [];
		words.forEach(word => {
			if (synonyms[word]) {
				synonyms[word].forEach(synonym => {
					const relatedKeyword = keyword.replace(word, synonym);
					if (relatedKeyword !== keyword) {
						related.push(relatedKeyword);
					}
				});
			}
		});

		return related.slice(0, 3); // Limit to top 3 related keywords
	}

	clusterByIntent(keywords) {
		const clusters = {
			informational: [],
			commercial: [],
			transactional: [],
			navigational: []
		};

		keywords.forEach(keywordData => {
			const intent = keywordData.intent;
			if (clusters[intent]) {
				clusters[intent].push(keywordData);
			}
		});

		// Sort each cluster by priority and search volume
		Object.keys(clusters).forEach(intent => {
			clusters[intent] = clusters[intent].sort((a, b) => {
				const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 };
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
        
		// Analyze each keyword for competitive opportunities
		allKeywords.forEach(keywordData => {
			if (keywordData.difficulty < 30 && keywordData.searchVolume > 500) {
				quickWins.push(keywordData);
			}
            
			if (keywordData.difficulty < 40 && keywordData.priority === 'high') {
				competitorGaps.push(keywordData);
			}
		});

		return {
			totalKeywordsAnalyzed: allKeywords.length,
			competitorGaps: competitorGaps.slice(0, 10), // Top 10 gaps
			quickWins: quickWins.slice(0, 15), // Top 15 quick wins
			averageDifficulty: allKeywords.reduce((sum, k) => sum + k.difficulty, 0) / allKeywords.length,
			highValueOpportunities: allKeywords.filter(k => 
				k.priority === 'high' && k.difficulty < 50
			).slice(0, 20),
			competitiveAnalysis: this.generateCompetitiveInsights(niche, allKeywords)
		};
	}

	generateCompetitiveInsights(niche, keywords) {
		const insights = [];
        
		const lowCompetitionCount = keywords.filter(k => k.difficulty < 30).length;
		const highVolumeCount = keywords.filter(k => k.searchVolume > 1000).length;
		const commercialCount = keywords.filter(k => k.intent === 'commercial').length;
        
		if (lowCompetitionCount > keywords.length * 0.3) {
			insights.push('Market shows significant low-competition opportunities');
		}
        
		if (highVolumeCount > keywords.length * 0.2) {
			insights.push('Multiple high-volume keywords available for targeting');
		}
        
		if (commercialCount > keywords.length * 0.4) {
			insights.push('Strong commercial intent keywords suggest good monetization potential');
		}
        
		insights.push(`${niche.category} niche shows ${this.getCompetitiveLandscape(keywords)} competitive landscape`);
        
		return insights;
	}

	getCompetitiveLandscape(keywords) {
		const avgDifficulty = keywords.reduce((sum, k) => sum + k.difficulty, 0) / keywords.length;
        
		if (avgDifficulty < 30) return 'low';
		if (avgDifficulty < 50) return 'moderate';
		return 'high';
	}

	createContentRoadmap(clusteredKeywords, competitiveAnalysis) {
		const roadmap = {
			month1: [],
			month2: [],
			month3: [],
			contentTypes: {},
			audienceSegments: {}
		};

		// Prioritize quick wins for month 1
		const quickWins = competitiveAnalysis.quickWins.slice(0, 8);
		roadmap.month1 = quickWins.map(kw => ({
			keyword: kw.keyword,
			contentType: this.suggestContentType(kw),
			audienceSegment: this.identifyAudienceSegment(kw),
			priority: kw.priority,
			estimatedTraffic: kw.searchVolume
		}));

		// Add high-value opportunities to months 2-3
		const highValue = competitiveAnalysis.highValueOpportunities.slice(0, 15);
		const month2Content = highValue.slice(0, 8);
		const month3Content = highValue.slice(8);

		roadmap.month2 = month2Content.map(kw => ({
			keyword: kw.keyword,
			contentType: this.suggestContentType(kw),
			audienceSegment: this.identifyAudienceSegment(kw),
			priority: kw.priority,
			estimatedTraffic: kw.searchVolume
		}));

		roadmap.month3 = month3Content.map(kw => ({
			keyword: kw.keyword,
			contentType: this.suggestContentType(kw),
			audienceSegment: this.identifyAudienceSegment(kw),
			priority: kw.priority,
			estimatedTraffic: kw.searchVolume
		}));

		// Generate content type distribution
		const allPlannedContent = [...roadmap.month1, ...roadmap.month2, ...roadmap.month3];
		roadmap.contentTypes = this.analyzeContentTypeDistribution(allPlannedContent);
		roadmap.audienceSegments = this.analyzeAudienceSegments(allPlannedContent);

		return roadmap;
	}

	suggestContentType(keywordData) {
		const keyword = keywordData.keyword.toLowerCase();
		const intent = keywordData.intent;

		if (intent === 'informational') {
			if (keyword.includes('how to') || keyword.includes('guide')) {
				return 'tutorial';
			} else if (keyword.includes('what is') || keyword.includes('why')) {
				return 'explainer';
			} else {
				return 'blog-post';
			}
		} else if (intent === 'commercial') {
			if (keyword.includes('best') || keyword.includes('top')) {
				return 'listicle';
			} else if (keyword.includes('review') || keyword.includes('compare')) {
				return 'comparison';
			} else {
				return 'product-page';
			}
		} else if (intent === 'transactional') {
			return 'landing-page';
		} else {
			return 'resource-page';
		}
	}

	identifyAudienceSegment(keywordData) {
		const keyword = keywordData.keyword.toLowerCase();
        
		if (keyword.includes('beginner') || keyword.includes('how to')) {
			return 'beginners';
		} else if (keyword.includes('professional') || keyword.includes('enterprise')) {
			return 'professionals';
		} else if (keyword.includes('small business')) {
			return 'small-business';
		} else if (keyword.includes('free') || keyword.includes('cheap')) {
			return 'budget-conscious';
		} else {
			return 'general';
		}
	}

	analyzeContentTypeDistribution(plannedContent) {
		const distribution = {};
		plannedContent.forEach(content => {
			distribution[content.contentType] = (distribution[content.contentType] || 0) + 1;
		});
		return distribution;
	}

	analyzeAudienceSegments(plannedContent) {
		const segments = {};
		plannedContent.forEach(content => {
			segments[content.audienceSegment] = (segments[content.audienceSegment] || 0) + 1;
		});
		return segments;
	}

	generateOverallStrategy(niche, clusteredKeywords) {
		const totalKeywords = Object.values(clusteredKeywords).flat().length;
		const highPriorityCount = Object.values(clusteredKeywords).flat()
			.filter(k => k.priority === 'high').length;

		return {
			primaryFocus: this.identifyPrimaryFocus(clusteredKeywords),
			secondaryFocuses: this.identifySecondaryFocuses(clusteredKeywords),
			contentPillars: this.identifyContentPillars(niche, clusteredKeywords),
			seoApproach: this.recommendSEOApproach(clusteredKeywords),
			competitiveStrategy: this.recommendCompetitiveStrategy(clusteredKeywords),
			timeline: {
				phase1: 'Target quick wins and build domain authority (Month 1)',
				phase2: 'Expand into competitive keywords (Month 2)',
				phase3: 'Scale content and target high-value terms (Month 3+)'
			},
			metrics: {
				totalKeywords,
				highPriorityCount,
				projectedTraffic: this.estimateProjectedTraffic(clusteredKeywords)
			}
		};
	}

	identifyPrimaryFocus(clusteredKeywords) {
		// Find the intent with the most high-priority keywords
		const intentPriorities = {};
		Object.keys(clusteredKeywords).forEach(intent => {
			intentPriorities[intent] = clusteredKeywords[intent]
				.filter(k => k.priority === 'high').length;
		});

		const primaryIntent = Object.keys(intentPriorities)
			.reduce((a, b) => intentPriorities[a] > intentPriorities[b] ? a : b);

		return `${primaryIntent} keywords with focus on high-value, low-competition terms`;
	}

	identifySecondaryFocuses(clusteredKeywords) {
		return Object.keys(clusteredKeywords)
			.filter(intent => clusteredKeywords[intent].length > 0)
			.map(intent => `${intent} content strategy`)
			.slice(0, 2);
	}

	identifyContentPillars(niche, clusteredKeywords) {
		const pillars = [];
        
		// Extract main topics from high-priority keywords
		const highPriorityKeywords = Object.values(clusteredKeywords).flat()
			.filter(k => k.priority === 'high');
        
		const topics = {};
		highPriorityKeywords.forEach(kw => {
			const words = kw.keyword.split(' ');
			words.forEach(word => {
				if (word.length > 3) { // Filter out small words
					topics[word] = (topics[word] || 0) + 1;
				}
			});
		});

		// Get top 3-4 most frequent topics as pillars
		const sortedTopics = Object.keys(topics)
			.sort((a, b) => topics[b] - topics[a])
			.slice(0, 4);

		return sortedTopics.map(topic => ({
			topic,
			frequency: topics[topic],
			suggestedContent: `Comprehensive ${topic} guides and resources`
		}));
	}

	recommendSEOApproach(clusteredKeywords) {
		const quickWins = Object.values(clusteredKeywords).flat()
			.filter(k => k.difficulty < 30 && k.searchVolume > 300).length;
        
		if (quickWins > 10) {
			return 'Aggressive content creation focusing on quick wins to build authority';
		} else {
			return 'Steady content creation with focus on long-term keyword ranking';
		}
	}

	recommendCompetitiveStrategy(clusteredKeywords) {
		const avgDifficulty = Object.values(clusteredKeywords).flat()
			.reduce((sum, k) => sum + k.difficulty, 0) / Object.values(clusteredKeywords).flat().length;
        
		if (avgDifficulty < 35) {
			return 'Direct competition on main keywords';
		} else {
			return 'Long-tail keyword strategy to avoid direct competition';
		}
	}

	estimateProjectedTraffic(clusteredKeywords) {
		return Object.values(clusteredKeywords).flat()
			.filter(k => k.priority === 'high' || k.priority === 'medium')
			.reduce((sum, k) => sum + (k.searchVolume * 0.1), 0); // Assume 10% CTR
	}
}

module.exports = KeywordResearchModule;
module.exports.default = KeywordResearchModule;
