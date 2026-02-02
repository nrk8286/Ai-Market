import { fileURLToPath } from 'url';

export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        
        if (url.pathname === "/") {
            return new Response(generateHomePage(), {
                headers: { "Content-Type": "text/html" },
            });
        }

        // SEO files
        if (url.pathname === "/robots.txt") {
            return new Response(generateRobotsTxt(), {
                headers: { "Content-Type": "text/plain" },
            });
        }

        if (url.pathname === "/sitemap.xml") {
            return new Response(generateSitemapXml(), {
                headers: { "Content-Type": "application/xml" },
            });
        }

        // AI Discovery file for LLMs (ChatGPT, Claude, Perplexity)
        if (url.pathname === "/llms.txt") {
            return new Response(generateLlmsTxt(), {
                headers: { "Content-Type": "text/plain; charset=utf-8" },
            });
        }

        if (url.pathname === "/about") {
            return new Response(generateAboutPage(), {
                headers: { "Content-Type": "text/html" },
            });
        }

        if (url.pathname === "/contact") {
            return new Response(generateContactPage(), {
                headers: { "Content-Type": "text/html" },
            });
        }

        // User Pages
        if (url.pathname === "/shop") {
            return new Response(generateShopPage(), {
                headers: { "Content-Type": "text/html" },
            });
        }

        if (url.pathname === "/products") {
            return new Response(generateProductsPage(), {
                headers: { "Content-Type": "text/html" },
            });
        }

        // Product detail pages
        const productMatch = url.pathname.match(/^\/products\/(.+)$/);
        if (productMatch) {
            return new Response(generateProductDetailPage(productMatch[1]), {
                headers: { "Content-Type": "text/html" },
            });
        }

        if (url.pathname === "/cart") {
            return new Response(generateCartPage(), {
                headers: { "Content-Type": "text/html" },
            });
        }

        if (url.pathname === "/checkout") {
            return new Response(generateCheckoutPage(), {
                headers: { "Content-Type": "text/html" },
            });
        }

        if (url.pathname === "/login") {
            return new Response(generateLoginPage(), {
                headers: { "Content-Type": "text/html" },
            });
        }

        if (url.pathname === "/register") {
            return new Response(generateRegisterPage(), {
                headers: { "Content-Type": "text/html" },
            });
        }

        if (url.pathname === "/dashboard") {
            return new Response(generateDashboardPage(), {
                headers: { "Content-Type": "text/html" },
            });
        }

        if (url.pathname === "/orders") {
            return new Response(generateOrdersPage(), {
                headers: { "Content-Type": "text/html" },
            });
        }

        if (url.pathname === "/account") {
            return new Response(generateAccountPage(), {
                headers: { "Content-Type": "text/html" },
            });
        }

        if (url.pathname === "/support") {
            return new Response(generateSupportPage(), {
                headers: { "Content-Type": "text/html" },
            });
        }

        if (url.pathname === "/faq") {
            return new Response(generateFaqPage(), {
                headers: { "Content-Type": "text/html" },
            });
        }

        // Admin Pages
        if (url.pathname === "/admin") {
            return new Response(generateAdminDashboard(), {
                headers: { "Content-Type": "text/html" },
            });
        }

        if (url.pathname === "/admin/analytics") {
            return new Response(generateAnalyticsPage(), {
                headers: { "Content-Type": "text/html" },
            });
        }

        if (url.pathname === "/admin/products") {
            return new Response(generateProductsManagementPage(), {
                headers: { "Content-Type": "text/html" },
            });
        }

        if (url.pathname === "/admin/orders") {
            return new Response(generateOrdersManagementPage(), {
                headers: { "Content-Type": "text/html" },
            });
        }

        if (url.pathname === "/admin/customers") {
            return new Response(generateCustomersManagementPage(), {
                headers: { "Content-Type": "text/html" },
            });
        }

        if (url.pathname === "/admin/settings") {
            return new Response(generateAdminSettingsPage(), {
                headers: { "Content-Type": "text/html" },
            });
        }

        // Elite AI Prompt Autonomous Agent Endpoints
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

        // Original endpoints
        if (url.pathname.startsWith("/api/generate")) {
            let content = await generateAIContent(env.OPENAI_API_KEY);
            return new Response(content, {
                headers: { "Content-Type": "text/html" },
            });
        }

        if (url.pathname.startsWith("/marketplace/items")) {
            let items = await getMarketplaceItems();
            return new Response(items, {
                headers: { "Content-Type": "application/json" },
            });
        }

        if (url.pathname.startsWith('/marketplace/buy')) {
            let result = await processPayment(env.PAYMENT_GATEWAY_API_KEY, request);
            return new Response(result, {
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Marketplace product endpoints
        if (url.pathname === '/marketplace/items' && request.method === 'GET') {
            const store = await getProductStore();
            const items = store.getAll();
            return new Response(JSON.stringify(items), { headers: { 'Content-Type': 'application/json' } });
        }

        // GET product by id
        const itemMatch = url.pathname.match(/^\/marketplace\/items\/(\d+)$/);
        if (itemMatch && request.method === 'GET') {
            const id = itemMatch[1];
            const store = await getProductStore();
            const item = store.getById(id);
            if (!item) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
            return new Response(JSON.stringify(item), { headers: { 'Content-Type': 'application/json' } });
        }

        // Admin product CRUD endpoints
        if (url.pathname.startsWith('/admin/items')) {
            // delegate to handleAdmin which already handles auth and POST; extend it to support PUT/DELETE
            return handleAdmin(request, env);
        }

        // New: Checkout endpoint (creates a checkout session or returns a payment intent)
        if (url.pathname.startsWith("/marketplace/checkout")) {
            return handleCheckout(request, env);
        }

        // Stripe billing checkout for subscriptions
        if (url.pathname.startsWith("/billing/checkout")) {
            return handleBillingCheckout(request, env);
        }

        // Stripe webhook endpoint for receiving events
        if (url.pathname.startsWith("/webhooks/stripe")) {
            return handleStripeWebhook(request, env);
        }

        // Gumroad webhook endpoint
        if (url.pathname.startsWith('/webhooks/gumroad')) {
            return handleGumroadWebhook(request, env);
        }

        // ===== NEW API ENDPOINTS =====

        // Shopping Cart API
        if (url.pathname === '/api/cart' && request.method === 'GET') {
            return handleGetCart(request);
        }

        if (url.pathname === '/api/cart/add' && request.method === 'POST') {
            return handleAddToCart(request);
        }

        if (url.pathname === '/api/cart/remove' && request.method === 'POST') {
            return handleRemoveFromCart(request);
        }

        if (url.pathname === '/api/cart/clear' && request.method === 'POST') {
            return handleClearCart(request);
        }

        // Product Search & Filter API
        if (url.pathname === '/api/products/search' && request.method === 'GET') {
            return handleProductSearch(request);
        }

        if (url.pathname === '/api/products/filter' && request.method === 'GET') {
            return handleProductFilter(request);
        }

        // Wishlist API
        if (url.pathname === '/api/wishlist' && request.method === 'GET') {
            return handleGetWishlist(request);
        }

        if (url.pathname === '/api/wishlist/add' && request.method === 'POST') {
            return handleAddToWishlist(request);
        }

        if (url.pathname === '/api/wishlist/remove' && request.method === 'POST') {
            return handleRemoveFromWishlist(request);
        }

        // User Profile API
        if (url.pathname === '/api/user/profile' && request.method === 'GET') {
            return handleGetProfile(request);
        }

        if (url.pathname === '/api/user/profile' && request.method === 'PUT') {
            return handleUpdateProfile(request);
        }

        // Product Reviews API
        if (url.pathname === '/api/reviews' && request.method === 'GET') {
            return handleGetReviews(request);
        }

        if (url.pathname === '/api/reviews' && request.method === 'POST') {
            return handleCreateReview(request);
        }

        // Orders API
        if (url.pathname === '/api/orders' && request.method === 'GET') {
            return handleGetOrders(request);
        }

        if (url.pathname === '/api/orders' && request.method === 'POST') {
            return handleCreateOrder(request);
        }

        const orderMatch = url.pathname.match(/^\/api\/orders\/(.+)$/);
        if (orderMatch && request.method === 'GET') {
            return handleGetOrderDetail(request, orderMatch[1]);
        }

        // Subscriptions API
        if (url.pathname === '/api/subscriptions' && request.method === 'GET') {
            return handleGetSubscriptions(request);
        }

        if (url.pathname === '/api/subscriptions' && request.method === 'POST') {
            return handleCreateSubscription(request);
        }

        // Analytics API
        if (url.pathname === '/api/analytics/summary' && request.method === 'GET') {
            return handleAnalyticsSummary(request);
        }

        // Search across all products and content
        if (url.pathname === '/api/search' && request.method === 'GET') {
            return handleGlobalSearch(request);
        }

        // Product recommendations
        if (url.pathname === '/api/recommendations' && request.method === 'GET') {
            return handleGetRecommendations(request);
        }

        // Marketplace Connect onboarding
        if (url.pathname.startsWith('/marketplace/connect/onboard')) {
            return handleConnectOnboard(request, env);
        }

        // Gumroad checkout redirect endpoint
        if (url.pathname.startsWith('/marketplace/gumroad/checkout')) {
            return handleGumroadCheckout(request, env);
        }

        // Simple admin API (token-protected) for managing marketplace items and config
        if (url.pathname.startsWith("/admin")) {
            return handleAdmin(request, env);
        }

        // Admin routes for Gumroad config (GET/POST) are handled under /admin/gumroad/config by handleAdmin

        // Pricing page
        if (url.pathname === '/pricing') {
            return handlePricing(request, env);
        }

        // Billing attach endpoint: associate Clerk userId with Stripe customer id
        if (url.pathname.startsWith('/billing/attach')) {
            return handleBillingAttach(request, env);
        }

        // Example gated API that requires an active subscription
        if (url.pathname === '/api/pro') {
            return handleProFeature(request, env);
        }

        if (url.pathname.startsWith("/api/fix-errors")) {
            let result = await fixErrors(env.OPENAI_API_KEY);
            return new Response(result, {
                headers: { "Content-Type": "application/json" },
            });
        }

        if (url.pathname.startsWith("/api/customer-support")) {
            let result = await handleCustomerSupport(env.OPENAI_API_KEY, request);
            return new Response(result, {
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response("404 Not Found", { status: 404 });
    }
};

function generateHomePage() {
    const siteUrl = 'https://ai-marketplace.com';
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "AI Marketplace",
        "url": siteUrl,
        "logo": `${siteUrl}/logo.png`,
        "description": "Leading AI-powered marketplace for innovative business tools, automation software, and intelligent services.",
        "sameAs": [
            "https://twitter.com/aimarketplace",
            "https://linkedin.com/company/ai-marketplace",
            "https://github.com/ai-marketplace"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service",
            "email": "support@ai-market.com"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "AI Marketplace",
        "url": siteUrl,
        "potentialAction": {
            "@type": "SearchAction",
            "target": `${siteUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
        }
    };

    // Enhanced Product schemas with SoftwareApplication type and AggregateRating (like G2/Capterra)
    const productListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Featured AI Products",
        "description": "Top AI-powered tools and services for business automation and growth",
        "numberOfItems": 4,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "item": {
                    "@type": "SoftwareApplication",
                    "name": "AI Content Generator",
                    "applicationCategory": "BusinessApplication",
                    "operatingSystem": "Web",
                    "description": "Create high-quality, SEO-optimized content automatically using advanced GPT-4 AI algorithms. Generate blog posts, product descriptions, and marketing copy in seconds. Supports 50+ languages.",
                    "offers": { "@type": "Offer", "price": "99", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
                    "url": `${siteUrl}/marketplace/items/1`,
                    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "2847", "bestRating": "5" }
                }
            },
            {
                "@type": "ListItem",
                "position": 2,
                "item": {
                    "@type": "SoftwareApplication",
                    "name": "SEO Optimization Tool",
                    "applicationCategory": "BusinessApplication",
                    "operatingSystem": "Web",
                    "description": "Boost your Google rankings with AI-powered keyword research, competitor analysis, on-page optimization, backlink monitoring, and real-time rank tracking.",
                    "offers": { "@type": "Offer", "price": "149", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
                    "url": `${siteUrl}/marketplace/items/2`,
                    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "1923", "bestRating": "5" }
                }
            },
            {
                "@type": "ListItem",
                "position": 3,
                "item": {
                    "@type": "SoftwareApplication",
                    "name": "Analytics Dashboard",
                    "applicationCategory": "BusinessApplication",
                    "operatingSystem": "Web",
                    "description": "Make data-driven decisions with real-time AI analytics. Track KPIs, visualize trends, generate automated reports, and predict business outcomes with machine learning.",
                    "offers": { "@type": "Offer", "price": "199", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
                    "url": `${siteUrl}/marketplace/items/3`,
                    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1456", "bestRating": "5" }
                }
            },
            {
                "@type": "ListItem",
                "position": 4,
                "item": {
                    "@type": "SoftwareApplication",
                    "name": "Automation Suite",
                    "applicationCategory": "BusinessApplication",
                    "operatingSystem": "Web",
                    "description": "Automate repetitive workflows with intelligent AI automation. Connect 500+ apps, set up triggers, conditional logic, and streamline your entire business operation.",
                    "offers": { "@type": "Offer", "price": "299", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
                    "url": `${siteUrl}/marketplace/items/4`,
                    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.7", "reviewCount": "987", "bestRating": "5" }
                }
            }
        ]
    };

    // Review schema for social proof (like successful sites)
    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "AI Marketplace",
        "description": "Leading AI-powered marketplace for business tools and automation software",
        "brand": { "@type": "Brand", "name": "AI Marketplace" },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "7213",
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": [
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Sarah Chen" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "AI Marketplace transformed our content workflow. We now produce 10x more blog posts with the AI Content Generator. ROI was visible within the first month."
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Michael Torres" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "The SEO tool helped us rank #1 for our main keywords in just 3 months. The competitor analysis feature alone is worth the subscription."
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Emily Watson" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "Automation Suite saved our team 40+ hours per week. The integrations work flawlessly and customer support is incredibly responsive."
            }
        ]
    };

    // FAQ Schema for homepage
    const homeFaqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is AI Marketplace?",
                "acceptedAnswer": { "@type": "Answer", "text": "AI Marketplace is the leading platform for AI-powered business tools and automation software. We offer curated AI solutions including content generators, SEO tools, analytics dashboards, and workflow automation suites used by 10,000+ businesses worldwide." }
            },
            {
                "@type": "Question",
                "name": "How much does AI Marketplace cost?",
                "acceptedAnswer": { "@type": "Answer", "text": "AI Marketplace offers flexible pricing starting with a Free plan ($0/month), Pro plan ($29/month) with unlimited AI access, and Team plan ($99/month) for organizations. All paid plans include a 30-day money-back guarantee." }
            },
            {
                "@type": "Question",
                "name": "Do I need technical skills to use AI Marketplace tools?",
                "acceptedAnswer": { "@type": "Answer", "text": "No technical skills required. All our AI tools are designed with user-friendly interfaces. Most users are up and running within 5 minutes, and we offer 24/7 support plus comprehensive tutorials." }
            }
        ]
    };

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>AI Marketplace - Best AI Tools & Automation Software for Business</title>
        <meta name="description" content="Discover the leading AI-powered marketplace for innovative business tools. Find AI content generators, SEO tools, analytics dashboards, and automation software to grow your business.">
        <meta name="keywords" content="AI marketplace, AI tools, automation software, AI content generator, SEO optimization, business analytics, machine learning tools, AI services, productivity software, marketing automation">
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
        <meta name="author" content="AI Marketplace">
        <link rel="canonical" href="${siteUrl}/">

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="${siteUrl}/">
        <meta property="og:title" content="AI Marketplace - Best AI Tools & Automation Software">
        <meta property="og:description" content="Discover the leading AI-powered marketplace for innovative business tools. AI content generators, SEO tools, analytics, and automation software.">
        <meta property="og:image" content="${siteUrl}/og-image.jpg">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta property="og:site_name" content="AI Marketplace">
        <meta property="og:locale" content="en_US">

        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@aimarketplace">
        <meta name="twitter:creator" content="@aimarketplace">
        <meta name="twitter:title" content="AI Marketplace - Best AI Tools & Automation Software">
        <meta name="twitter:description" content="Discover the leading AI-powered marketplace for innovative business tools. AI content generators, SEO tools, and automation software.">
        <meta name="twitter:image" content="${siteUrl}/twitter-card.jpg">

        <!-- JSON-LD Structured Data -->
        <script type="application/ld+json">${JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">${JSON.stringify(websiteSchema)}</script>
        <script type="application/ld+json">${JSON.stringify(productListSchema)}</script>
        <script type="application/ld+json">${JSON.stringify(reviewSchema)}</script>
        <script type="application/ld+json">${JSON.stringify(homeFaqSchema)}</script>

        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                padding: 20px;
            }
            
            .container {
                max-width: 1200px;
                margin: 0 auto;
            }
            
            header {
                text-align: center;
                color: white;
                margin-bottom: 60px;
                animation: slideDownFade 0.8s ease-out;
            }
            
            h1 {
                font-size: 3.5em;
                margin-bottom: 10px;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            }
            
            .subtitle {
                font-size: 1.3em;
                opacity: 0.95;
            }
            
            .hero-icon {
                font-size: 4em;
                margin-bottom: 20px;
                animation: float 3s ease-in-out infinite;
            }
            
            .products-section {
                margin-bottom: 50px;
            }
            
            .section-title {
                text-align: center;
                color: white;
                font-size: 2em;
                margin-bottom: 40px;
                animation: slideDownFade 0.8s ease-out 0.2s both;
            }
            
            .products-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 30px;
                margin-bottom: 40px;
            }
            
            .product-card {
                background: white;
                border-radius: 12px;
                padding: 30px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                transition: all 0.3s ease;
                animation: slideUpFade 0.6s ease-out backwards;
                cursor: pointer;
            }
            
            .product-card:nth-child(1) { animation-delay: 0.1s; }
            .product-card:nth-child(2) { animation-delay: 0.2s; }
            .product-card:nth-child(3) { animation-delay: 0.3s; }
            .product-card:nth-child(4) { animation-delay: 0.4s; }
            
            .product-card:hover {
                transform: translateY(-10px);
                box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            }
            
            .product-icon {
                font-size: 3em;
                margin-bottom: 15px;
                animation: bounce 2s infinite;
            }
            
            .product-card:nth-child(2) .product-icon { animation-delay: 0.2s; }
            .product-card:nth-child(3) .product-icon { animation-delay: 0.4s; }
            .product-card:nth-child(4) .product-icon { animation-delay: 0.6s; }

            /* Product Badges (like AppSumo/G2) */
            .product-badge {
                position: absolute;
                top: 15px;
                right: 15px;
                padding: 5px 12px;
                border-radius: 20px;
                font-size: 0.75em;
                font-weight: 600;
            }

            .product-card { position: relative; }

            .product-badge.bestseller { background: #ff6b6b; color: white; }
            .product-badge.popular { background: #ffc107; color: #333; }
            .product-badge.new { background: #28a745; color: white; }
            .product-badge.enterprise { background: #667eea; color: white; }

            /* Product Ratings */
            .product-rating {
                font-size: 0.9em;
                color: #666;
                margin-bottom: 10px;
            }

            .product-rating .stars { color: #ffc107; margin-right: 5px; }
            
            .product-name {
                font-size: 1.5em;
                color: #667eea;
                margin-bottom: 10px;
                font-weight: bold;
            }
            
            .product-price {
                font-size: 1.8em;
                color: #764ba2;
                margin-bottom: 15px;
            }
            
            .product-description {
                color: #666;
                margin-bottom: 20px;
                line-height: 1.6;
            }
            
            .cta-button {
                display: inline-block;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 12px 30px;
                border-radius: 8px;
                text-decoration: none;
                font-weight: bold;
                transition: all 0.3s ease;
                border: none;
                cursor: pointer;
            }
            
            .cta-button:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
            }
            
            .cta-button:active {
                transform: scale(0.98);
            }
            
            .view-all-btn {
                display: block;
                width: 200px;
                margin: 30px auto;
                padding: 15px;
                background: white;
                color: #667eea;
                text-decoration: none;
                border-radius: 8px;
                font-weight: bold;
                text-align: center;
                font-size: 1.1em;
                transition: all 0.3s ease;
                animation: slideUpFade 0.6s ease-out 0.5s both;
            }
            
            .view-all-btn:hover {
                background: #f0f0f0;
                transform: translateY(-3px);
            }
            
            nav {
                background: rgba(255,255,255,0.1);
                backdrop-filter: blur(10px);
                border-radius: 8px;
                padding: 15px 30px;
                display: flex;
                justify-content: center;
                gap: 30px;
                animation: slideDownFade 0.8s ease-out 0.3s both;
            }
            
            nav a {
                color: white;
                text-decoration: none;
                font-weight: 500;
                transition: all 0.3s ease;
            }
            
            nav a:hover {
                transform: scale(1.1);
                text-shadow: 0 0 10px rgba(255,255,255,0.5);
            }
            
            @keyframes slideDownFade {
                from {
                    opacity: 0;
                    transform: translateY(-30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes slideUpFade {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes float {
                0%, 100% {
                    transform: translateY(0px);
                }
                50% {
                    transform: translateY(-20px);
                }
            }
            
            @keyframes bounce {
                0%, 100% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-10px);
                }
            }
            
            .footer {
                text-align: center;
                color: rgba(255,255,255,0.8);
                margin-top: 50px;
                padding-top: 30px;
                border-top: 1px solid rgba(255,255,255,0.2);
                animation: slideUpFade 0.6s ease-out 0.6s both;
            }

            .footer-links { margin-top: 10px; font-size: 0.9em; }
            .footer-links a { color: rgba(255,255,255,0.7); text-decoration: none; }
            .footer-links a:hover { color: white; }

            /* Trust Badges Section */
            .trust-section {
                margin: 60px 0;
                text-align: center;
            }

            .trust-badges {
                display: flex;
                justify-content: center;
                gap: 40px;
                flex-wrap: wrap;
                margin-top: 30px;
            }

            .trust-badge {
                background: rgba(255,255,255,0.15);
                backdrop-filter: blur(10px);
                padding: 25px 35px;
                border-radius: 12px;
                text-align: center;
                color: white;
                transition: transform 0.3s ease;
            }

            .trust-badge:hover { transform: translateY(-5px); }
            .badge-icon { font-size: 2em; margin-bottom: 10px; }
            .badge-rating { font-size: 1.4em; font-weight: bold; }
            .badge-source { font-size: 0.85em; opacity: 0.8; margin-top: 5px; }

            /* Customer Logos Section */
            .logos-section {
                text-align: center;
                margin: 50px 0;
                padding: 30px;
                background: rgba(255,255,255,0.1);
                border-radius: 12px;
            }

            .logos-title {
                color: rgba(255,255,255,0.8);
                font-size: 0.95em;
                margin-bottom: 20px;
            }

            .customer-logos {
                display: flex;
                justify-content: center;
                gap: 50px;
                flex-wrap: wrap;
            }

            .logo-item {
                color: rgba(255,255,255,0.6);
                font-size: 1.1em;
                font-weight: 600;
                letter-spacing: 1px;
            }

            /* Testimonials Section */
            .testimonials-section {
                margin: 60px 0;
            }

            .testimonials-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                gap: 25px;
                margin-top: 30px;
            }

            .testimonial-card {
                background: white;
                border-radius: 12px;
                padding: 30px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.15);
                transition: transform 0.3s ease;
            }

            .testimonial-card:hover { transform: translateY(-5px); }

            .testimonial-rating {
                color: #ffc107;
                font-size: 1.2em;
                margin-bottom: 15px;
            }

            .testimonial-text {
                color: #444;
                font-size: 1em;
                line-height: 1.7;
                margin-bottom: 20px;
                font-style: italic;
            }

            .testimonial-author {
                display: flex;
                align-items: center;
                gap: 15px;
                margin-bottom: 15px;
            }

            .author-avatar {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                font-size: 1.1em;
            }

            .author-name { font-weight: 600; color: #333; }
            .author-title { font-size: 0.85em; color: #666; }

            .testimonial-result {
                background: #f0f8ff;
                padding: 10px 15px;
                border-radius: 6px;
                font-size: 0.9em;
                color: #0078D7;
                font-weight: 500;
            }

            /* Stats Section */
            .stats-section {
                display: flex;
                justify-content: center;
                gap: 60px;
                flex-wrap: wrap;
                margin: 60px 0;
                padding: 40px;
                background: rgba(255,255,255,0.1);
                border-radius: 15px;
            }

            .stat-item { text-align: center; color: white; }
            .stat-number { font-size: 2.5em; font-weight: bold; }
            .stat-label { font-size: 0.95em; opacity: 0.85; margin-top: 5px; }

            /* CTA Section */
            .cta-section {
                text-align: center;
                margin: 60px 0;
                padding: 50px 30px;
                background: white;
                border-radius: 15px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.2);
            }

            .cta-section h2 {
                color: #333;
                font-size: 2em;
                margin-bottom: 15px;
            }

            .cta-section p { color: #666; font-size: 1.1em; margin-bottom: 25px; }

            .cta-primary {
                padding: 18px 50px;
                font-size: 1.2em;
            }

            .cta-trust {
                margin-top: 20px;
                color: #28a745;
                font-size: 0.9em;
            }

            /* Mobile Responsive */
            @media (max-width: 768px) {
                h1 { font-size: 2.2em; }
                .trust-badges { gap: 20px; }
                .trust-badge { padding: 20px 25px; }
                .customer-logos { gap: 30px; }
                .stats-section { gap: 30px; }
                .stat-number { font-size: 2em; }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <header>
                <div class="hero-icon">🚀</div>
                <h1>AI Marketplace</h1>
                <p class="subtitle">Discover AI-Powered Tools & Services</p>
            </header>
            
            <div class="products-section">
                <h2 class="section-title">Featured Products</h2>
                <div class="products-grid">
                    <article class="product-card" itemscope itemtype="https://schema.org/SoftwareApplication">
                        <div class="product-badge bestseller">🔥 Bestseller</div>
                        <div class="product-icon" aria-hidden="true">🤖</div>
                        <h3 class="product-name" itemprop="name">AI Content Generator</h3>
                        <div class="product-rating" itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
                            <span class="stars">★★★★★</span>
                            <span itemprop="ratingValue">4.9</span>/5
                            (<span itemprop="reviewCount">2,847</span> reviews)
                        </div>
                        <div class="product-price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                            <span itemprop="priceCurrency" content="USD">$</span><span itemprop="price" content="99">99</span>
                            <meta itemprop="availability" content="https://schema.org/InStock">
                        </div>
                        <p class="product-description" itemprop="description">Create high-quality, SEO-optimized blog posts, product descriptions, and marketing copy automatically using advanced GPT-4 AI. Supports 50+ languages.</p>
                        <a href="/marketplace/items/1" class="cta-button" itemprop="url">Start Free Trial →</a>
                    </article>

                    <article class="product-card" itemscope itemtype="https://schema.org/SoftwareApplication">
                        <div class="product-badge popular">⭐ Popular</div>
                        <div class="product-icon" aria-hidden="true">🔍</div>
                        <h3 class="product-name" itemprop="name">SEO Optimization Tool</h3>
                        <div class="product-rating" itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
                            <span class="stars">★★★★★</span>
                            <span itemprop="ratingValue">4.8</span>/5
                            (<span itemprop="reviewCount">1,923</span> reviews)
                        </div>
                        <div class="product-price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                            <span itemprop="priceCurrency" content="USD">$</span><span itemprop="price" content="149">149</span>
                            <meta itemprop="availability" content="https://schema.org/InStock">
                        </div>
                        <p class="product-description" itemprop="description">Boost your Google rankings with AI-powered keyword research, competitor analysis, on-page optimization, and real-time rank tracking.</p>
                        <a href="/marketplace/items/2" class="cta-button" itemprop="url">Start Free Trial →</a>
                    </article>

                    <article class="product-card" itemscope itemtype="https://schema.org/SoftwareApplication">
                        <div class="product-badge new">✨ New</div>
                        <div class="product-icon" aria-hidden="true">📊</div>
                        <h3 class="product-name" itemprop="name">Analytics Dashboard</h3>
                        <div class="product-rating" itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
                            <span class="stars">★★★★★</span>
                            <span itemprop="ratingValue">4.9</span>/5
                            (<span itemprop="reviewCount">1,456</span> reviews)
                        </div>
                        <div class="product-price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                            <span itemprop="priceCurrency" content="USD">$</span><span itemprop="price" content="199">199</span>
                            <meta itemprop="availability" content="https://schema.org/InStock">
                        </div>
                        <p class="product-description" itemprop="description">Make data-driven decisions with real-time AI analytics. Track KPIs, visualize trends, generate automated reports, and predict outcomes.</p>
                        <a href="/marketplace/items/3" class="cta-button" itemprop="url">Start Free Trial →</a>
                    </article>

                    <article class="product-card" itemscope itemtype="https://schema.org/SoftwareApplication">
                        <div class="product-badge enterprise">🏢 Enterprise</div>
                        <div class="product-icon" aria-hidden="true">⚡</div>
                        <h3 class="product-name" itemprop="name">Automation Suite</h3>
                        <div class="product-rating" itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
                            <span class="stars">★★★★★</span>
                            <span itemprop="ratingValue">4.7</span>/5
                            (<span itemprop="reviewCount">987</span> reviews)
                        </div>
                        <div class="product-price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                            <span itemprop="priceCurrency" content="USD">$</span><span itemprop="price" content="299">299</span>
                            <meta itemprop="availability" content="https://schema.org/InStock">
                        </div>
                        <p class="product-description" itemprop="description">Automate workflows with intelligent AI. Connect 500+ apps, set up triggers, conditional logic, and streamline your entire business.</p>
                        <a href="/marketplace/items/4" class="cta-button" itemprop="url">Start Free Trial →</a>
                    </article>
                </div>
            </div>
            
            <a href="/marketplace/items" class="view-all-btn">View All Products</a>

            <!-- Trust Badges Section (like AppSumo/G2) -->
            <section class="trust-section">
                <h2 class="section-title">Trusted by 10,000+ Businesses Worldwide</h2>
                <div class="trust-badges">
                    <div class="trust-badge">
                        <div class="badge-icon">⭐</div>
                        <div class="badge-rating">4.8/5</div>
                        <div class="badge-source">7,213 Reviews</div>
                    </div>
                    <div class="trust-badge">
                        <div class="badge-icon">🏆</div>
                        <div class="badge-rating">#1 Rated</div>
                        <div class="badge-source">AI Tools 2026</div>
                    </div>
                    <div class="trust-badge">
                        <div class="badge-icon">✓</div>
                        <div class="badge-rating">SOC 2</div>
                        <div class="badge-source">Certified</div>
                    </div>
                    <div class="trust-badge">
                        <div class="badge-icon">🔒</div>
                        <div class="badge-rating">GDPR</div>
                        <div class="badge-source">Compliant</div>
                    </div>
                </div>
            </section>

            <!-- Customer Logos Section (social proof like successful SaaS) -->
            <section class="logos-section">
                <p class="logos-title">Powering teams at leading companies</p>
                <div class="customer-logos">
                    <span class="logo-item">Microsoft</span>
                    <span class="logo-item">Shopify</span>
                    <span class="logo-item">Stripe</span>
                    <span class="logo-item">Notion</span>
                    <span class="logo-item">Slack</span>
                    <span class="logo-item">HubSpot</span>
                </div>
            </section>

            <!-- Testimonials Section (result-driven like top converters) -->
            <section class="testimonials-section">
                <h2 class="section-title">What Our Customers Say</h2>
                <div class="testimonials-grid">
                    <article class="testimonial-card">
                        <div class="testimonial-rating">★★★★★</div>
                        <blockquote class="testimonial-text">"AI Marketplace transformed our content workflow. We now produce <strong>10x more blog posts</strong> with the AI Content Generator. ROI was visible within the first month."</blockquote>
                        <div class="testimonial-author">
                            <div class="author-avatar">SC</div>
                            <div class="author-info">
                                <div class="author-name">Sarah Chen</div>
                                <div class="author-title">Head of Content, TechFlow Inc.</div>
                            </div>
                        </div>
                        <div class="testimonial-result">📈 Result: 10x content output increase</div>
                    </article>

                    <article class="testimonial-card">
                        <div class="testimonial-rating">★★★★★</div>
                        <blockquote class="testimonial-text">"The SEO tool helped us <strong>rank #1 for our main keywords</strong> in just 3 months. The competitor analysis feature alone is worth the subscription."</blockquote>
                        <div class="testimonial-author">
                            <div class="author-avatar">MT</div>
                            <div class="author-info">
                                <div class="author-name">Michael Torres</div>
                                <div class="author-title">SEO Director, GrowthLabs</div>
                            </div>
                        </div>
                        <div class="testimonial-result">🎯 Result: #1 Google ranking in 90 days</div>
                    </article>

                    <article class="testimonial-card">
                        <div class="testimonial-rating">★★★★★</div>
                        <blockquote class="testimonial-text">"Automation Suite saved our team <strong>40+ hours per week</strong>. The integrations work flawlessly and customer support is incredibly responsive."</blockquote>
                        <div class="testimonial-author">
                            <div class="author-avatar">EW</div>
                            <div class="author-info">
                                <div class="author-name">Emily Watson</div>
                                <div class="author-title">Operations Manager, ScaleUp Co.</div>
                            </div>
                        </div>
                        <div class="testimonial-result">⏱️ Result: 40+ hours saved weekly</div>
                    </article>
                </div>
            </section>

            <!-- Stats Section (like successful marketplaces) -->
            <section class="stats-section">
                <div class="stat-item">
                    <div class="stat-number">10,000+</div>
                    <div class="stat-label">Active Customers</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">50M+</div>
                    <div class="stat-label">Tasks Processed</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">2M+</div>
                    <div class="stat-label">Hours Saved</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">99.9%</div>
                    <div class="stat-label">Uptime SLA</div>
                </div>
            </section>

            <!-- CTA Section with trust signals -->
            <section class="cta-section">
                <h2>Ready to Supercharge Your Business?</h2>
                <p>Join 10,000+ businesses using AI Marketplace to automate, optimize, and grow.</p>
                <a href="/pricing" class="cta-button cta-primary">Start Free Trial</a>
                <p class="cta-trust">✓ No credit card required &nbsp; ✓ 30-day money-back guarantee &nbsp; ✓ Cancel anytime</p>
            </section>

            <nav>
                <a href="/about">About Us</a>
                <a href="/pricing">Pricing</a>
                <a href="/contact">Contact</a>
            </nav>

            <div class="footer">
                <p>&copy; 2026 AI Marketplace. All rights reserved.</p>
                <p class="footer-links"><a href="/about">About</a> | <a href="/pricing">Pricing</a> | <a href="/contact">Contact</a> | <a href="/sitemap.xml">Sitemap</a></p>
            </div>
        </div>
    </body>
    </html>
    `;
}

function generateAboutPage() {
    const siteUrl = 'https://ai-marketplace.com';
    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About AI Marketplace",
        "description": "Learn about our mission to democratize AI tools and empower businesses worldwide with cutting-edge automation solutions.",
        "url": `${siteUrl}/about`,
        "mainEntity": {
            "@type": "Organization",
            "name": "AI Marketplace",
            "foundingDate": "2024",
            "description": "AI Marketplace is a leading platform connecting businesses with innovative AI-powered tools and automation software.",
            "slogan": "Empowering businesses with AI innovation"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
            { "@type": "ListItem", "position": 2, "name": "About Us", "item": `${siteUrl}/about` }
        ]
    };

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>About Us - AI Marketplace | Our Mission & Team</title>
        <meta name="description" content="Learn about AI Marketplace, our mission to democratize AI-powered business tools, and meet the team building the future of intelligent automation.">
        <meta name="keywords" content="about AI Marketplace, AI company, automation team, AI innovation, business tools company, machine learning solutions">
        <meta name="robots" content="index, follow">
        <meta name="author" content="AI Marketplace">
        <link rel="canonical" href="${siteUrl}/about">

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="${siteUrl}/about">
        <meta property="og:title" content="About AI Marketplace - Our Mission & Team">
        <meta property="og:description" content="Learn about our mission to democratize AI tools and empower businesses worldwide with cutting-edge automation solutions.">
        <meta property="og:image" content="${siteUrl}/og-about.jpg">
        <meta property="og:site_name" content="AI Marketplace">

        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@aimarketplace">
        <meta name="twitter:title" content="About AI Marketplace - Our Mission & Team">
        <meta name="twitter:description" content="Learn about our mission to democratize AI tools and empower businesses worldwide.">
        <meta name="twitter:image" content="${siteUrl}/twitter-about.jpg">

        <!-- JSON-LD Structured Data -->
        <script type="application/ld+json">${JSON.stringify(aboutSchema)}</script>
        <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>

        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                padding: 40px 20px;
            }
            
            .container {
                max-width: 800px;
                margin: 0 auto;
                background: white;
                border-radius: 15px;
                padding: 50px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                animation: slideUpFade 0.8s ease-out;
            }
            
            h1 {
                color: #667eea;
                font-size: 2.5em;
                margin-bottom: 10px;
            }
            
            .icon {
                font-size: 3em;
                margin-bottom: 20px;
                animation: float 3s ease-in-out infinite;
            }
            
            p {
                color: #666;
                font-size: 1.1em;
                line-height: 1.8;
                margin-bottom: 20px;
            }
            
            .back-link {
                display: inline-block;
                margin-top: 30px;
                padding: 12px 30px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                text-decoration: none;
                border-radius: 8px;
                font-weight: bold;
                transition: all 0.3s ease;
            }
            
            .back-link:hover {
                transform: translateY(-3px);
                box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
            }
            
            @keyframes slideUpFade {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes float {
                0%, 100% {
                    transform: translateY(0px);
                }
                50% {
                    transform: translateY(-20px);
                }
            }
        </style>
    </head>
    <body>
        <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> <span aria-hidden="true">›</span> <span>About Us</span>
        </nav>
        <div class="container">
            <div class="icon" aria-hidden="true">👥</div>
            <h1>About AI Marketplace</h1>
            <p><strong>AI Marketplace</strong> is a team of AI engineers, data scientists, and business strategists dedicated to building the world's leading marketplace for AI-powered business tools.</p>
            <p>Our mission is to <strong>democratize access to cutting-edge AI technology</strong>, making enterprise-grade automation tools available to businesses of all sizes - from startups to Fortune 500 companies.</p>

            <section class="values">
                <h2>Our Core Values</h2>
                <ul>
                    <li><strong>Innovation First:</strong> We curate only the most advanced AI solutions powered by the latest machine learning technologies.</li>
                    <li><strong>Customer Success:</strong> Your growth is our success. We provide 24/7 support and onboarding assistance.</li>
                    <li><strong>Quality Assurance:</strong> Every tool in our marketplace undergoes rigorous testing and validation.</li>
                    <li><strong>Security & Privacy:</strong> Enterprise-grade security with SOC 2 compliance and GDPR adherence.</li>
                </ul>
            </section>

            <section class="stats">
                <h2>AI Marketplace by the Numbers</h2>
                <p>Join over <strong>10,000+ businesses</strong> that trust AI Marketplace for their automation needs. Our tools have processed <strong>50M+ tasks</strong> and saved users an estimated <strong>2M+ hours</strong> of manual work.</p>
            </section>

            <a href="/" class="back-link">← Back to Home</a>
            <a href="/contact" class="back-link" style="margin-left: 15px;">Contact Us →</a>
        </div>
    </body>
    </html>
    `;
}

function generateContactPage() {
    const siteUrl = 'https://ai-marketplace.com';
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact AI Marketplace",
        "description": "Get in touch with AI Marketplace for sales inquiries, technical support, or partnership opportunities.",
        "url": `${siteUrl}/contact`,
        "mainEntity": {
            "@type": "Organization",
            "name": "AI Marketplace",
            "contactPoint": [
                {
                    "@type": "ContactPoint",
                    "telephone": "+1-555-123-4567",
                    "contactType": "customer service",
                    "email": "support@ai-market.com",
                    "availableLanguage": ["English"],
                    "hoursAvailable": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        "opens": "09:00",
                        "closes": "18:00"
                    }
                },
                {
                    "@type": "ContactPoint",
                    "telephone": "+1-555-123-4568",
                    "contactType": "sales",
                    "email": "sales@ai-market.com"
                }
            ]
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
            { "@type": "ListItem", "position": 2, "name": "Contact", "item": `${siteUrl}/contact` }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the response time for support requests?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our support team typically responds within 24 hours for standard requests and within 4 hours for priority support customers."
                }
            },
            {
                "@type": "Question",
                "name": "Do you offer refunds?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer a 30-day money-back guarantee on all products. If you're not satisfied, contact support for a full refund."
                }
            },
            {
                "@type": "Question",
                "name": "How can I become a vendor on AI Marketplace?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To become a vendor, contact our partnerships team at partners@ai-market.com. We review all applications and onboard qualified AI tool developers."
                }
            }
        ]
    };

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Us - AI Marketplace | Support & Sales</title>
        <meta name="description" content="Contact AI Marketplace for customer support, sales inquiries, or partnership opportunities. Get 24/7 support and expert assistance for all AI tools.">
        <meta name="keywords" content="contact AI Marketplace, AI support, customer service, sales inquiry, partnership, AI tools help">
        <meta name="robots" content="index, follow">
        <meta name="author" content="AI Marketplace">
        <link rel="canonical" href="${siteUrl}/contact">

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="${siteUrl}/contact">
        <meta property="og:title" content="Contact AI Marketplace - Support & Sales">
        <meta property="og:description" content="Get in touch with our team for support, sales, or partnerships. We typically respond within 24 hours.">
        <meta property="og:image" content="${siteUrl}/og-contact.jpg">
        <meta property="og:site_name" content="AI Marketplace">

        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@aimarketplace">
        <meta name="twitter:title" content="Contact AI Marketplace - Support & Sales">
        <meta name="twitter:description" content="Get in touch with our team for support, sales, or partnerships.">
        <meta name="twitter:image" content="${siteUrl}/twitter-contact.jpg">

        <!-- JSON-LD Structured Data -->
        <script type="application/ld+json">${JSON.stringify(contactSchema)}</script>
        <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>

        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                padding: 40px 20px;
            }
            
            .container {
                max-width: 800px;
                margin: 0 auto;
                background: white;
                border-radius: 15px;
                padding: 50px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                animation: slideUpFade 0.8s ease-out;
            }
            
            h1 {
                color: #667eea;
                font-size: 2.5em;
                margin-bottom: 10px;
            }
            
            .icon {
                font-size: 3em;
                margin-bottom: 20px;
                animation: float 3s ease-in-out infinite;
            }
            
            p {
                color: #666;
                font-size: 1.1em;
                line-height: 1.8;
                margin-bottom: 20px;
            }
            
            .contact-info {
                background: #f5f5f5;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
            }
            
            .contact-item {
                margin: 10px 0;
                font-weight: 500;
            }
            
            .back-link {
                display: inline-block;
                margin-top: 30px;
                padding: 12px 30px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                text-decoration: none;
                border-radius: 8px;
                font-weight: bold;
                transition: all 0.3s ease;
            }
            
            .back-link:hover {
                transform: translateY(-3px);
                box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
            }
            
            @keyframes slideUpFade {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes float {
                0%, 100% {
                    transform: translateY(0px);
                }
                50% {
                    transform: translateY(-20px);
                }
            }
        </style>
    </head>
    <body>
        <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> <span aria-hidden="true">›</span> <span>Contact Us</span>
        </nav>
        <div class="container">
            <div class="icon" aria-hidden="true">📧</div>
            <h1>Contact AI Marketplace</h1>
            <p>Have questions about our AI tools? Need technical support? Want to become a vendor? <strong>We'd love to hear from you!</strong></p>

            <div class="contact-info">
                <h2>Get In Touch</h2>
                <div class="contact-item">📧 <strong>General Inquiries:</strong> <a href="mailto:contact@ai-market.com">contact@ai-market.com</a></div>
                <div class="contact-item">💬 <strong>Technical Support:</strong> <a href="mailto:support@ai-market.com">support@ai-market.com</a></div>
                <div class="contact-item">💼 <strong>Sales & Enterprise:</strong> <a href="mailto:sales@ai-market.com">sales@ai-market.com</a></div>
                <div class="contact-item">🤝 <strong>Partnerships:</strong> <a href="mailto:partners@ai-market.com">partners@ai-market.com</a></div>
                <div class="contact-item">📱 <strong>Phone:</strong> <a href="tel:+15551234567">+1 (555) 123-4567</a></div>
            </div>

            <section class="faq-section" style="margin-top: 30px; text-align: left;">
                <h2>Frequently Asked Questions</h2>
                <div class="faq-item" style="margin: 15px 0;">
                    <h3 style="color: #667eea; font-size: 1.1em;">What is the response time for support requests?</h3>
                    <p>Our support team typically responds within 24 hours for standard requests and within 4 hours for priority support customers.</p>
                </div>
                <div class="faq-item" style="margin: 15px 0;">
                    <h3 style="color: #667eea; font-size: 1.1em;">Do you offer refunds?</h3>
                    <p>Yes, we offer a <strong>30-day money-back guarantee</strong> on all products. If you're not satisfied, contact support for a full refund.</p>
                </div>
                <div class="faq-item" style="margin: 15px 0;">
                    <h3 style="color: #667eea; font-size: 1.1em;">How can I become a vendor on AI Marketplace?</h3>
                    <p>To become a vendor, contact our partnerships team at <a href="mailto:partners@ai-market.com">partners@ai-market.com</a>. We review all applications and onboard qualified AI tool developers.</p>
                </div>
            </section>

            <p style="margin-top: 25px;">Our team is here to help and answer any question you might have. We're available <strong>Monday-Friday, 9AM-6PM EST</strong>.</p>
            <a href="/" class="back-link">← Back to Home</a>
            <a href="/about" class="back-link" style="margin-left: 15px;">About Us →</a>
        </div>
    </body>
    </html>
    `;
}

// SEO Helper Functions
function generateLlmsTxt() {
    return `# AI Marketplace - LLMs.txt
# This file helps AI systems understand our site content
# https://ai-marketplace.com/llms.txt

## About AI Marketplace
AI Marketplace is the leading platform for AI-powered business tools and automation software. We connect businesses with innovative solutions including AI content generators, SEO optimization tools, analytics dashboards, and workflow automation suites.

## Key Pages

### Homepage
> URL: https://ai-marketplace.com/
> Description: Discover AI-powered tools and automation software for business growth. Browse our curated marketplace of AI solutions.
> Topics: AI tools, automation software, business solutions, machine learning, productivity

### Products

#### AI Content Generator
> URL: https://ai-marketplace.com/marketplace/items/1
> Price: $99 USD
> Rating: 4.9/5 (2,847 reviews)
> Description: Create high-quality, SEO-optimized blog posts, product descriptions, and marketing copy using GPT-4 AI. Supports 50+ languages, generates 10,000+ words daily.
> Use Cases: Content marketing, blog writing, product descriptions, social media posts

#### SEO Optimization Tool
> URL: https://ai-marketplace.com/marketplace/items/2
> Price: $149 USD
> Rating: 4.8/5 (1,923 reviews)
> Description: AI-powered SEO toolkit with keyword research, competitor analysis, on-page optimization, and rank tracking.
> Use Cases: Keyword research, rank tracking, competitor analysis, technical SEO audits

#### Analytics Dashboard
> URL: https://ai-marketplace.com/marketplace/items/3
> Price: $199 USD
> Rating: 4.9/5 (1,456 reviews)
> Description: Real-time AI analytics with KPI tracking, trend visualization, automated reporting, and predictive insights.
> Use Cases: Business intelligence, data visualization, KPI tracking, automated reports

#### Automation Suite
> URL: https://ai-marketplace.com/marketplace/items/4
> Price: $299 USD
> Rating: 4.7/5 (987 reviews)
> Description: Enterprise-grade workflow automation connecting 500+ apps with intelligent triggers and AI-powered task routing.
> Use Cases: Workflow automation, app integration, task automation, business process automation

### Pricing
> URL: https://ai-marketplace.com/pricing
> Free: $0/mo - Basic access, 500 words/mo
> Pro: $29/mo - Unlimited AI, all tools, priority support
> Team: $99/mo - 10 users, advanced automation, dedicated manager

### Contact
> URL: https://ai-marketplace.com/contact
> Email: support@ai-market.com
> Phone: +1-555-123-4567
> Response: Within 24 hours

## Company Stats
- Customers: 10,000+
- Tasks Processed: 50M+
- Average Rating: 4.8/5
- Uptime: 99.9%
`;
}

function generateRobotsTxt() {
    return `# Robots.txt for AI Marketplace
# https://ai-marketplace.com

User-agent: *
Allow: /
Allow: /about
Allow: /contact
Allow: /pricing
Allow: /marketplace/items

# Disallow admin and API endpoints
Disallow: /admin/
Disallow: /api/
Disallow: /billing/
Disallow: /webhooks/

# Sitemap location
Sitemap: https://ai-marketplace.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1
`;
}

function generateSitemapXml() {
    const siteUrl = 'https://ai-marketplace.com';
    const today = new Date().toISOString().split('T')[0];

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <!-- Homepage -->
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- About Page -->
  <url>
    <loc>${siteUrl}/about</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Contact Page -->
  <url>
    <loc>${siteUrl}/contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Pricing Page -->
  <url>
    <loc>${siteUrl}/pricing</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Marketplace Items Listing -->
  <url>
    <loc>${siteUrl}/marketplace/items</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Product: AI Content Generator -->
  <url>
    <loc>${siteUrl}/marketplace/items/1</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Product: SEO Optimization Tool -->
  <url>
    <loc>${siteUrl}/marketplace/items/2</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Product: Analytics Dashboard -->
  <url>
    <loc>${siteUrl}/marketplace/items/3</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Product: Automation Suite -->
  <url>
    <loc>${siteUrl}/marketplace/items/4</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

</urlset>`;
}

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

async function getMarketplaceItems() {
    const items = [
        { id: 1, name: "AI Content Generator", price: 100 },
        { id: 2, name: "SEO Optimization Tool", price: 200 },
    ];
    return JSON.stringify(items);
}

async function processPayment(apiKey, request) {
    if (!apiKey) {
        return JSON.stringify({ error: "Payment Gateway API Key Missing" });
    }

    // Simulate payment processing
    const paymentResult = { success: true, message: "Payment processed successfully" };
    return JSON.stringify(paymentResult);
}

async function fixErrors(apiKey) {
    if (!apiKey) {
        return JSON.stringify({ error: "API Key Missing" });
    }

    // Simulate AI error fixing
    const fixResult = { success: true, message: "Errors fixed successfully" };
    return JSON.stringify(fixResult);
}

async function handleCustomerSupport(apiKey, request) {
    if (!apiKey) {
        return JSON.stringify({ error: "API Key Missing" });
    }

    // Simulate AI customer support
    const supportResult = { success: true, message: "Customer support handled successfully" };
    return JSON.stringify(supportResult);
}

// Elite AI Prompt System Handlers
async function handleAutonomousAgent(request, env) {
    try {
        if (request.method === 'POST') {
            const userInput = await request.json();
            
            // Initialize the autonomous agent
            const { default: AutonomousMarketingAgent } = await import('./src/agents/AutonomousMarketingAgent.cjs');
            const agent = new AutonomousMarketingAgent({
                openaiApiKey: env.OPENAI_API_KEY,
                paymentGatewayKey: env.PAYMENT_GATEWAY_API_KEY,
                debug: true
            });

            // Execute the full autonomous website creation process
            const result = await agent.execute(userInput);
            
            return new Response(JSON.stringify(result), {
                headers: { "Content-Type": "application/json" },
            });
        } else {
            // Return API documentation
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
                headers: { "Content-Type": "application/json" },
            });
        }
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

async function handleNicheDiscovery(request, env) {
    try {
        if (request.method === 'POST') {
            const userInput = await request.json();
            
            const { default: NicheDiscoveryModule } = await import('./src/modules/NicheDiscoveryModule.cjs');
            const module = new NicheDiscoveryModule({ openaiApiKey: env.OPENAI_API_KEY });
            
            const result = await module.analyze(userInput);
            
            return new Response(JSON.stringify(result), {
                headers: { "Content-Type": "application/json" },
            });
        } else {
            return new Response(JSON.stringify({
                endpoint: "/api/niche-discovery",
                method: "POST", 
                description: "Analyze user profile and discover optimal niches"
            }), {
                headers: { "Content-Type": "application/json" },
            });
        }
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

async function handleKeywordResearch(request, env) {
    try {
        if (request.method === 'POST') {
            const selectedNiche = await request.json();
            
            const { default: KeywordResearchModule } = await import('./src/modules/KeywordResearchModule.cjs');
            const module = new KeywordResearchModule({ openaiApiKey: env.OPENAI_API_KEY });
            
            const result = await module.generateStrategy(selectedNiche);
            
            return new Response(JSON.stringify(result), {
                headers: { "Content-Type": "application/json" },
            });
        } else {
            return new Response(JSON.stringify({
                endpoint: "/api/keyword-research",
                method: "POST",
                description: "Generate comprehensive keyword strategy for selected niche"
            }), {
                headers: { "Content-Type": "application/json" },
            });
        }
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

async function handleTechStack(request, env) {
    try {
        if (request.method === 'POST') {
            const params = await request.json();
            
            const { default: TechStackSetupModule } = await import('./src/modules/TechStackSetupModule.cjs');
            const module = new TechStackSetupModule({ openaiApiKey: env.OPENAI_API_KEY });
            
            const result = await module.selectOptimalStack(params);
            
            return new Response(JSON.stringify(result), {
                headers: { "Content-Type": "application/json" },
            });
        } else {
            return new Response(JSON.stringify({
                endpoint: "/api/tech-stack",
                method: "POST",
                description: "Select and configure optimal tech stack"
            }), {
                headers: { "Content-Type": "application/json" },
            });
        }
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

// --- New features: Checkout, Stripe webhook, Admin API (demo/stub implementations) ---
// Product store (file-backed in dev, in-memory in Cloudflare)
let productStore = null;
async function getProductStore() {
    if (productStore) return productStore;
    const mod = await import('./src/services/ProductStore.cjs');
    const ProductStore = mod.default || mod;
    productStore = new ProductStore({ useFile: true });
    return productStore;
}

async function handleCheckout(request, env) {
    try {
        if (request.method !== 'POST') {
            return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
        }

        const body = await request.json();
        const itemId = body.itemId;
        const item = _MARKETPLACE_ITEMS.find(i => i.id === itemId);
        if (!item) return new Response(JSON.stringify({ error: 'Item not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });

        // Vendor marketplace checkout support
        const vendorId = body.vendorId || null;
        const amount = item.price * 100; // cents
        const currency = body.currency || 'usd';

        const platformFeePct = Number(env.PLATFORM_FEE_PERCENTAGE || 10);
        const platformFee = Math.round(amount * (platformFeePct / 100));

        // If Stripe configured, use StripeClient to create PaymentIntent with transfer to vendor
        const { default: StripeClient } = await import('./src/services/StripeClient.cjs');
        const stripe = new StripeClient(env.STRIPE_SECRET_KEY || '');

        if (stripe.isAvailable()) {
            const pi = await stripe.createPaymentIntentForVendor({ amount, currency, vendorAccountId: vendorId, platformFee, description: `Purchase ${item.name}` });
            return new Response(JSON.stringify({ success: true, paymentIntent: pi }), { headers: { 'Content-Type': 'application/json' } });
        }

        // Simulated session / payment intent
        const sim = { id: `pi_sim_${Math.random().toString(36).slice(2,10)}`, amount, currency, vendor: vendorId, platformFee };
        return new Response(JSON.stringify({ success: true, paymentIntent: sim }), { headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

// Billing / Subscriptions
let billingStore = null;
async function getBillingStore() {
    if (billingStore) return billingStore;
    const mod = await import('./src/services/BillingStore.cjs');
    const BillingStore = mod.default || mod;
    billingStore = new BillingStore({ useFile: true });
    return billingStore;
}

async function handleBillingCheckout(request, env) {
    try {
        if (request.method !== 'POST') return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
        const body = await request.json();
        const plan = body.plan || 'pro';
        const userId = body.userId || (body.user && body.user.id) || null;
        if (!userId) return new Response(JSON.stringify({ error: 'Missing userId' }), { status: 400, headers: { 'Content-Type': 'application/json' } });

        // If STRIPE_SECRET_KEY is provided and we're not in test mode, create a real Checkout Session
        if (env.STRIPE_SECRET_KEY && !env.TEST_MODE) {
            try {
                const Stripe = require('stripe');
                const stripe = Stripe(env.STRIPE_SECRET_KEY);
                const session = await stripe.checkout.sessions.create({
                    mode: 'subscription',
                    payment_method_types: ['card'],
                    line_items: [{ price: planToPriceId(plan, env), quantity: 1 }],
                    success_url: body.successUrl || 'https://example.com/success',
                    cancel_url: body.cancelUrl || 'https://example.com/cancel',
                    client_reference_id: userId
                });
                return new Response(JSON.stringify({ success: true, session }), { headers: { 'Content-Type': 'application/json' } });
            } catch (err) {
                return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
            }
        }

        // Test-mode / simulated session for local tests
        const session = { id: `cs_test_${Math.random().toString(36).slice(2, 10)}`, url: `https://test.pay/checkout/${plan}/${userId}`, client_reference_id: userId };
        return new Response(JSON.stringify({ success: true, session }), { headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

function planToPriceId(plan, env) {
    // Map plan names to Stripe price IDs via env var (PRICE_PRO, PRICE_TEAM)
    if (plan === 'team') return env.PRICE_TEAM || 'price_team_placeholder';
    return env.PRICE_PRO || 'price_pro_placeholder';
}

async function handlePricing(request, env) {
    // Check if request accepts HTML
    const accept = request.headers.get('Accept') || '';
    if (accept.includes('text/html')) {
        return new Response(generatePricingPage(), {
            headers: { 'Content-Type': 'text/html' }
        });
    }
    // Return JSON for API requests
    return new Response(JSON.stringify({ plans: [{ id: 'free', price: 0 }, { id: 'pro', price: 29 }, { id: 'team', price: 99 }] }), { headers: { 'Content-Type': 'application/json' } });
}

function generatePricingPage() {
    const siteUrl = 'https://ai-marketplace.com';
    const pricingSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "AI Marketplace Subscription",
        "description": "Access to AI-powered business tools and automation software",
        "brand": { "@type": "Brand", "name": "AI Marketplace" },
        "offers": [
            {
                "@type": "Offer",
                "name": "Free Plan",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Basic access to AI marketplace tools"
            },
            {
                "@type": "Offer",
                "name": "Pro Plan",
                "price": "29",
                "priceCurrency": "USD",
                "priceValidUntil": "2027-12-31",
                "description": "Full access to all AI tools with priority support"
            },
            {
                "@type": "Offer",
                "name": "Team Plan",
                "price": "99",
                "priceCurrency": "USD",
                "priceValidUntil": "2027-12-31",
                "description": "Team collaboration features with enterprise support"
            }
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
            { "@type": "ListItem", "position": 2, "name": "Pricing", "item": siteUrl + "/pricing" }
        ]
    };

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pricing - AI Marketplace | Affordable AI Tools & Automation Plans</title>
        <meta name="description" content="Choose the perfect AI Marketplace plan for your business. From free access to Pro features, find affordable pricing for AI content generators, SEO tools, and automation software.">
        <meta name="keywords" content="AI tools pricing, automation software cost, AI marketplace plans, business software pricing, AI subscription, affordable AI tools">
        <meta name="robots" content="index, follow">
        <meta name="author" content="AI Marketplace">
        <link rel="canonical" href="${siteUrl}/pricing">

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="${siteUrl}/pricing">
        <meta property="og:title" content="AI Marketplace Pricing - Affordable AI Tools">
        <meta property="og:description" content="Choose the perfect plan for your business. Free, Pro, and Team plans available.">
        <meta property="og:image" content="${siteUrl}/og-pricing.jpg">
        <meta property="og:site_name" content="AI Marketplace">

        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@aimarketplace">
        <meta name="twitter:title" content="AI Marketplace Pricing - Affordable AI Tools">
        <meta name="twitter:description" content="Choose the perfect plan for your business. Free, Pro, and Team plans available.">
        <meta name="twitter:image" content="${siteUrl}/twitter-pricing.jpg">

        <!-- JSON-LD Structured Data -->
        <script type="application/ld+json">${JSON.stringify(pricingSchema)}</script>
        <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>

        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                padding: 40px 20px;
            }
            .container { max-width: 1100px; margin: 0 auto; }
            .breadcrumb { color: rgba(255,255,255,0.8); margin-bottom: 20px; }
            .breadcrumb a { color: white; text-decoration: none; }
            h1 { color: white; text-align: center; font-size: 2.5em; margin-bottom: 15px; }
            .subtitle { color: rgba(255,255,255,0.9); text-align: center; margin-bottom: 50px; font-size: 1.2em; }
            .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
            .pricing-card {
                background: white;
                border-radius: 15px;
                padding: 40px 30px;
                text-align: center;
                box-shadow: 0 20px 60px rgba(0,0,0,0.2);
                transition: transform 0.3s ease;
            }
            .pricing-card:hover { transform: translateY(-10px); }
            .pricing-card.featured { border: 3px solid #667eea; transform: scale(1.05); }
            .plan-name { font-size: 1.5em; color: #333; margin-bottom: 10px; }
            .plan-price { font-size: 3em; color: #667eea; margin: 20px 0; }
            .plan-price span { font-size: 0.4em; color: #666; }
            .plan-features { list-style: none; margin: 30px 0; text-align: left; }
            .plan-features li { padding: 10px 0; border-bottom: 1px solid #eee; }
            .plan-features li:before { content: "✓ "; color: #28a745; font-weight: bold; }
            .cta-button {
                display: inline-block;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 15px 40px;
                border-radius: 8px;
                text-decoration: none;
                font-weight: bold;
                transition: all 0.3s ease;
            }
            .cta-button:hover { transform: scale(1.05); box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4); }
            .back-link { display: inline-block; margin-top: 40px; color: white; text-decoration: none; }
            .back-link:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <div class="container">
            <nav class="breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a> <span aria-hidden="true">›</span> <span>Pricing</span>
            </nav>
            <h1>Simple, Transparent Pricing</h1>
            <p class="subtitle">Choose the perfect plan for your business needs. All plans include a 30-day money-back guarantee.</p>

            <div class="pricing-grid">
                <article class="pricing-card" itemscope itemtype="https://schema.org/Offer">
                    <h2 class="plan-name" itemprop="name">Free</h2>
                    <div class="plan-price"><span itemprop="priceCurrency" content="USD">$</span><span itemprop="price" content="0">0</span><span>/month</span></div>
                    <ul class="plan-features">
                        <li>Access to marketplace browsing</li>
                        <li>Basic AI content generation (500 words/mo)</li>
                        <li>Community support</li>
                        <li>1 project limit</li>
                    </ul>
                    <a href="/billing/checkout?plan=free" class="cta-button">Get Started Free</a>
                </article>

                <article class="pricing-card featured" itemscope itemtype="https://schema.org/Offer">
                    <h2 class="plan-name" itemprop="name">Pro <span style="background:#667eea;color:white;padding:3px 8px;border-radius:4px;font-size:0.6em;">POPULAR</span></h2>
                    <div class="plan-price"><span itemprop="priceCurrency" content="USD">$</span><span itemprop="price" content="29">29</span><span>/month</span></div>
                    <ul class="plan-features">
                        <li>Unlimited AI content generation</li>
                        <li>All SEO optimization tools</li>
                        <li>Analytics dashboard access</li>
                        <li>Priority email support</li>
                        <li>Unlimited projects</li>
                        <li>API access (10,000 calls/mo)</li>
                    </ul>
                    <a href="/billing/checkout?plan=pro" class="cta-button">Start Pro Trial</a>
                </article>

                <article class="pricing-card" itemscope itemtype="https://schema.org/Offer">
                    <h2 class="plan-name" itemprop="name">Team</h2>
                    <div class="plan-price"><span itemprop="priceCurrency" content="USD">$</span><span itemprop="price" content="99">99</span><span>/month</span></div>
                    <ul class="plan-features">
                        <li>Everything in Pro</li>
                        <li>Up to 10 team members</li>
                        <li>Advanced automation suite</li>
                        <li>Dedicated account manager</li>
                        <li>Custom integrations</li>
                        <li>SLA guarantee (99.9% uptime)</li>
                        <li>Unlimited API access</li>
                    </ul>
                    <a href="/billing/checkout?plan=team" class="cta-button">Start Team Trial</a>
                </article>
            </div>

            <div style="text-align: center; margin-top: 50px; color: rgba(255,255,255,0.9);">
                <p><strong>Enterprise needs?</strong> Contact us at <a href="mailto:sales@ai-market.com" style="color: white;">sales@ai-market.com</a> for custom pricing.</p>
            </div>

            <div style="text-align: center;">
                <a href="/" class="back-link">← Back to Home</a>
            </div>
        </div>
    </body>
    </html>
    `;
}

async function handleProFeature(request, env) {
    const userId = request.headers.get('X-USER-ID');
    if (!userId) return new Response(JSON.stringify({ error: 'Missing X-USER-ID header' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
    const store = await getBillingStore();
    if (!store.hasActiveSubscription(userId)) return new Response(JSON.stringify({ error: 'Payment required' }), { status: 402, headers: { 'Content-Type': 'application/json' } });
    const customer = store.getCustomer(userId);
    return new Response(JSON.stringify({ success: true, message: 'Welcome to Pro features', customer }), { headers: { 'Content-Type': 'application/json' } });
}

// POST /billing/attach { userId, customerId }
async function handleBillingAttach(request, env) {
    try {
        if (request.method !== 'POST') return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
        const body = await request.json();
        const { userId, customerId } = body || {};
        if (!userId || !customerId) return new Response(JSON.stringify({ error: 'Missing userId or customerId' }), { status: 400, headers: { 'Content-Type': 'application/json' } });

        // If CLERK_API_KEY is configured, verify the user exists via Clerk API
        if (env.CLERK_API_KEY) {
            try {
                const clerkRes = await fetch(`https://api.clerk.com/v1/users/${encodeURIComponent(userId)}`, { headers: { Authorization: `Bearer ${env.CLERK_API_KEY}`, 'Content-Type': 'application/json' } });
                if (!clerkRes.ok) return new Response(JSON.stringify({ error: 'Clerk user not found or invalid CLERK_API_KEY' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
            } catch (err) {
                return new Response(JSON.stringify({ error: 'Clerk verification failed', details: err.message }), { status: 502, headers: { 'Content-Type': 'application/json' } });
            }
        }

        const store = await getBillingStore();
        const cust = store.upsertCustomer(userId, { stripeCustomerId: customerId });
        return new Response(JSON.stringify({ success: true, customer: cust }), { headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

async function handleStripeWebhook(request, env) {
    try {
        if (request.method !== 'POST') {
            return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
        }

        const payload = await request.text();
        let event = null;

        // Use StripeClient helper to verify when possible
        const { default: StripeClient } = await import('./src/services/StripeClient.cjs');
        const stripe = new StripeClient(env.STRIPE_SECRET_KEY || '');
        const sig = request.headers.get('stripe-signature') || request.headers.get('Stripe-Signature');
        try {
            event = stripe.verifyWebhook(payload, sig, env.STRIPE_WEBHOOK_SECRET);
        } catch (err) {
            return new Response(JSON.stringify({ error: 'Webhook signature verification failed', details: err.message }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        // Handle checkout.session.completed
        if (event && event.type === 'checkout.session.completed') {
            const data = event.data || {};
            const session = data.object || event.object || {};
            const userId = session.client_reference_id || session.client_reference || session.metadata?.userId || null;
            if (userId) {
                const store = await getBillingStore();

                // If session has a customer id, use it; otherwise, attempt to create one via Stripe
                let customerId = session.customer || session.customer_id || null;
                const { default: StripeClientWebhook } = await import('./src/services/StripeClient.cjs');
                const stripeWebhook = new StripeClientWebhook(env.STRIPE_SECRET_KEY || '');

                if (!customerId) {
                    try {
                        // Create a Stripe Customer (or simulated one in test-mode)
                        const created = await stripeWebhook.createCustomer({ email: session.customer_email || session.customer_email_address || undefined, metadata: { userId } });
                        customerId = created.id;
                        console.log('Billing: created Stripe customer', customerId, 'for user', userId);
                    } catch (err) {
                        console.log('Billing: failed to create Stripe customer', err.message);
                    }
                }

                const subscription = { id: session.subscription || session.subscription_id || `sub_${Math.random().toString(36).slice(2,8)}`, status: 'active', customer: customerId, createdAt: new Date().toISOString() };
                store.upsertSubscription(userId, subscription);
                if (customerId) store.upsertCustomer(userId, { stripeCustomerId: customerId });
                console.log('Billing: set active subscription for', userId, subscription.id);
            } else {
                console.log('Webhook: checkout.session.completed missing client_reference_id');
            }
        }

        // Handle payment_intent.succeeded for marketplace payments
        if (event && event.type === 'payment_intent.succeeded') {
            const pi = event.data?.object || event.object || {};
            const metadata = pi.metadata || {};
            const vendorId = metadata.vendorId || null;
            if (vendorId) {
                const store = await getBillingStore();
                const v = store.getVendor(vendorId);
                console.log('Marketplace payment succeeded for vendor', vendorId, 'vendor exists?', !!v);
                // Additional bookkeeping could go here (e.g., mark payout scheduled)
            }
        }

        return new Response(JSON.stringify({ received: true }), { headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

// --- Gumroad handlers ---
async function handleGumroadCheckout(request, env) {
    try {
        // Accepts ?product=<id>
        const url = new URL(request.url);
        const product = url.searchParams.get('product');
        if (!product) return new Response(JSON.stringify({ error: 'Missing product param' }), { status: 400, headers: { 'Content-Type': 'application/json' } });

        // Load config from ConfigStore (if available) or fall back to env
        const { default: ConfigStore } = await import('./src/services/ConfigStore.cjs');
        const configStore = new ConfigStore({ useFile: true });
        const gumConfig = configStore.get('gumroad') || {};

        // Gumroad affiliate ID for tracking
        const affiliateId = gumConfig.affiliateId || env.GUMROAD_AFFILIATE_ID || '916801939';

        // Map product id to Gumroad product URL via config, env, or default pattern
        const mapping = gumConfig.mapping || (env.GUMROAD_PRODUCT_URLS && JSON.parse(env.GUMROAD_PRODUCT_URLS)) || {};
        let gumUrl = mapping[product] || `https://gumroad.com/l/${product}`;

        // Append affiliate tracking param
        const separator = gumUrl.includes('?') ? '&' : '?';
        gumUrl = `${gumUrl}${separator}a=${affiliateId}`;

        return new Response(JSON.stringify({ url: gumUrl, affiliateId }), { headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

async function handleGumroadWebhook(request, env) {
    try {
        if (request.method !== 'POST') return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });

        const payloadText = await request.text();
        let payload;
        // If secret is provided, verify signature header or body parameter
        const gumSig = request.headers.get('gumroad-signature') || request.headers.get('Gumroad-Signature') || null;

        if (env.GUMROAD_SECRET && gumSig) {
            // Verify using HMAC SHA1 over payloadText
            const crypto = require('crypto');
            const expected = crypto.createHmac('sha1', env.GUMROAD_SECRET).update(payloadText).digest('hex');
            if (expected !== gumSig) {
                return new Response(JSON.stringify({ error: 'Invalid gumroad signature' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
            }
            // If verified, parse JSON
            payload = JSON.parse(payloadText);
        } else {
            // Fallback: try parse JSON (test-mode/demo)
            try { payload = JSON.parse(payloadText); } catch (err) { return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers: { 'Content-Type': 'application/json' } }); }
        }

        // Handle simplified sale event
        if (payload.event_type === 'sale' || payload.event === 'sale') {
            const sale = payload.sale || payload;
            const userId = sale.custom_fields && sale.custom_fields.user_id ? sale.custom_fields.user_id : (sale.user_id || sale.email);
            // For demo, treat purchase as granting pro access
            if (userId) {
                const store = await getBillingStore();
                const subscription = { id: sale.id || `gum_${Math.random().toString(36).slice(2,8)}`, status: 'active', customer: sale.email || null, createdAt: new Date().toISOString() };
                store.upsertSubscription(userId, subscription);
                store.upsertCustomer(userId, { gumroadPurchaseId: sale.id || null, gumroadEmail: sale.email || null });
                console.log('Gumroad: granted access for', userId);
            }
        }

        return new Response(JSON.stringify({ received: true }), { headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

async function handleAdmin(request, env) {
    try {
        const adminToken = env.ADMIN_TOKEN || process.env.ADMIN_TOKEN;
        const authHeader = request.headers.get('Authorization') || request.headers.get('X-ADMIN-TOKEN');
        if (!adminToken || authHeader !== `Bearer ${adminToken}`) {
            return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
        }

        const url = new URL(request.url);
        if (url.pathname === '/admin/items' && request.method === 'GET') {
            const store = await getProductStore();
            return new Response(JSON.stringify(store.getAll()), { headers: { 'Content-Type': 'application/json' } });
        }

        if (url.pathname === '/admin/items' && request.method === 'POST') {
            const body = await request.json();
            const store = await getProductStore();
            const item = store.create({ name: body.name, price: body.price, description: body.description });
            return new Response(JSON.stringify({ success: true, item }), { headers: { 'Content-Type': 'application/json' } });
        }

        // Admin: GET/POST Gumroad config
        if (url.pathname === '/admin/gumroad/config') {
            if (request.method === 'GET') {
                const { default: ConfigStore } = await import('./src/services/ConfigStore.cjs');
                const configStore = new ConfigStore({ useFile: true });
                return new Response(JSON.stringify({ success: true, config: configStore.get('gumroad') || {} }), { headers: { 'Content-Type': 'application/json' } });
            }

            if (request.method === 'POST') {
                const body = await request.json();
                const { default: ConfigStore } = await import('./src/services/ConfigStore.cjs');
                const configStore = new ConfigStore({ useFile: true });
                const existing = configStore.get('gumroad') || {};
                const next = Object.assign({}, existing, body);
                // Do not store raw secrets unless explicitly requested; keep secret fields under 'secret' key
                configStore.set('gumroad', next);
                return new Response(JSON.stringify({ success: true, config: next }), { headers: { 'Content-Type': 'application/json' } });
            }
        }

        // PUT /admin/items/:id
        const adminPutMatch = url.pathname.match(/^\/admin\/items\/(\d+)$/);
        if (adminPutMatch && request.method === 'PUT') {
            const id = adminPutMatch[1];
            const body = await request.json();
            const store = await getProductStore();
            const updated = store.update(id, body);
            if (!updated) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
            return new Response(JSON.stringify({ success: true, item: updated }), { headers: { 'Content-Type': 'application/json' } });
        }

        // DELETE /admin/items/:id
        const adminDelMatch = url.pathname.match(/^\/admin\/items\/(\d+)$/);
        if (adminDelMatch && request.method === 'DELETE') {
            const id = adminDelMatch[1];
            const store = await getProductStore();
            const ok = store.delete(id);
            if (!ok) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
            return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
        }


        return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

// ===== NEW USER PAGES =====
function generateNavigation() {
    return `
    <nav style="background: rgba(102, 126, 234, 0.1); padding: 15px 30px; border-radius: 8px; display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; align-items: center; margin-bottom: 30px;">
        <a href="/" style="color: #667eea; text-decoration: none; font-weight: 500; transition: all 0.3s;">🏠 Home</a>
        <a href="/shop" style="color: #667eea; text-decoration: none; font-weight: 500; transition: all 0.3s;">🛒 Shop</a>
        <a href="/products" style="color: #667eea; text-decoration: none; font-weight: 500; transition: all 0.3s;">📦 Products</a>
        <a href="/cart" style="color: #667eea; text-decoration: none; font-weight: 500; transition: all 0.3s;">🛍️ Cart</a>
        <a href="/dashboard" style="color: #667eea; text-decoration: none; font-weight: 500; transition: all 0.3s;">📊 Dashboard</a>
        <a href="/orders" style="color: #667eea; text-decoration: none; font-weight: 500; transition: all 0.3s;">📋 Orders</a>
        <a href="/account" style="color: #667eea; text-decoration: none; font-weight: 500; transition: all 0.3s;">👤 Account</a>
        <a href="/faq" style="color: #667eea; text-decoration: none; font-weight: 500; transition: all 0.3s;">❓ FAQ</a>
        <a href="/support" style="color: #667eea; text-decoration: none; font-weight: 500; transition: all 0.3s;">📞 Support</a>
    </nav>
    `;
}

function generateShopPage() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Shop - AI Marketplace</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #333; min-height: 100vh; padding: 20px; }
            .container { max-width: 1200px; margin: 0 auto; }
            .header { text-align: center; color: white; margin-bottom: 40px; }
            .header h1 { font-size: 2.5em; margin-bottom: 10px; }
            .shop-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 25px; margin: 40px 0; }
            .product-card { background: white; border-radius: 12px; padding: 25px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); transition: all 0.3s; cursor: pointer; }
            .product-card:hover { transform: translateY(-10px); box-shadow: 0 15px 40px rgba(0,0,0,0.3); }
            .product-icon { font-size: 3em; margin-bottom: 15px; text-align: center; }
            .product-name { font-size: 1.4em; color: #667eea; font-weight: bold; margin-bottom: 10px; }
            .product-price { font-size: 1.6em; color: #764ba2; font-weight: bold; margin: 15px 0; }
            .product-desc { color: #666; line-height: 1.6; margin-bottom: 15px; font-size: 0.95em; }
            .btn { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 25px; border-radius: 6px; text-decoration: none; font-weight: bold; transition: all 0.3s; border: none; cursor: pointer; }
            .btn:hover { transform: scale(1.05); }
            .btn-secondary { background: #f0f0f0; color: #667eea; }
            .btn-secondary:hover { background: #e0e0e0; }
            .back-link { display: inline-block; margin: 20px 0; color: white; text-decoration: none; font-weight: 500; }
            .back-link:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <div class="container">
            ${generateNavigation()}
            <div class="header">
                <h1>🛒 Our Product Shop</h1>
                <p>Browse our complete collection of AI-powered tools</p>
            </div>
            
            <div class="shop-grid">
                <div class="product-card">
                    <div class="product-icon">🤖</div>
                    <h3 class="product-name">AI Content Generator</h3>
                    <div class="product-price">$99/month</div>
                    <p class="product-desc">Create SEO-optimized content in 50+ languages with GPT-4 AI</p>
                    <a href="/products/ai-content-generator" class="btn">View Details →</a>
                </div>

                <div class="product-card">
                    <div class="product-icon">🔍</div>
                    <h3 class="product-name">SEO Optimization Tool</h3>
                    <div class="product-price">$149/month</div>
                    <p class="product-desc">Keyword research, competitor analysis, rank tracking in one tool</p>
                    <a href="/products/seo-tool" class="btn">View Details →</a>
                </div>

                <div class="product-card">
                    <div class="product-icon">📊</div>
                    <h3 class="product-name">Analytics Dashboard</h3>
                    <div class="product-price">$199/month</div>
                    <p class="product-desc">Real-time AI analytics with predictive insights and reports</p>
                    <a href="/products/analytics-dashboard" class="btn">View Details →</a>
                </div>

                <div class="product-card">
                    <div class="product-icon">⚡</div>
                    <h3 class="product-name">Automation Suite</h3>
                    <div class="product-price">$299/month</div>
                    <p class="product-desc">Automate 500+ integrations with intelligent AI workflows</p>
                    <a href="/products/automation-suite" class="btn">View Details →</a>
                </div>
            </div>

            <a href="/" class="back-link">← Back to Home</a>
        </div>
    </body>
    </html>
    `;
}

function generateProductsPage() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Products - AI Marketplace</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #333; min-height: 100vh; padding: 20px; }
            .container { max-width: 1200px; margin: 0 auto; }
            .header { text-align: center; color: white; margin-bottom: 40px; }
            .header h1 { font-size: 2.5em; margin-bottom: 10px; }
            .filters { background: rgba(255,255,255,0.1); padding: 20px; border-radius: 8px; margin-bottom: 30px; display: flex; gap: 15px; flex-wrap: wrap; }
            .filter-btn { background: white; color: #667eea; padding: 10px 20px; border-radius: 6px; border: none; cursor: pointer; font-weight: 500; transition: all 0.3s; }
            .filter-btn:hover { background: #667eea; color: white; }
            .products-table { width: 100%; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
            .table-header { background: #667eea; color: white; padding: 20px; display: grid; grid-template-columns: 1fr 1fr 1fr 1fr auto; gap: 15px; font-weight: bold; }
            .table-row { padding: 20px; display: grid; grid-template-columns: 1fr 1fr 1fr 1fr auto; gap: 15px; border-bottom: 1px solid #eee; align-items: center; }
            .table-row:last-child { border-bottom: none; }
            .table-row:hover { background: #f9f9f9; }
            .btn { padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; border: none; cursor: pointer; }
            .btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
            .btn-primary:hover { transform: scale(1.05); }
            .back-link { display: inline-block; margin: 20px 0; color: white; text-decoration: none; font-weight: 500; }
            .back-link:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <div class="container">
            ${generateNavigation()}
            <div class="header">
                <h1>📦 All Products</h1>
                <p>Complete catalog of AI-powered business solutions</p>
            </div>

            <div class="filters">
                <button class="filter-btn">✓ All Products</button>
                <button class="filter-btn">⭐ Bestsellers</button>
                <button class="filter-btn">🆕 New</button>
                <button class="filter-btn">💎 Premium</button>
                <button class="filter-btn">🔥 On Sale</button>
            </div>

            <div class="products-table">
                <div class="table-header">
                    <div>Product Name</div>
                    <div>Category</div>
                    <div>Price</div>
                    <div>Rating</div>
                    <div>Action</div>
                </div>

                <div class="table-row">
                    <div><strong>AI Content Generator</strong></div>
                    <div>Content & Marketing</div>
                    <div style="color: #764ba2; font-weight: bold;">$99/mo</div>
                    <div>⭐ 4.9/5</div>
                    <div><a href="/products/ai-content-generator" class="btn btn-primary">View</a></div>
                </div>

                <div class="table-row">
                    <div><strong>SEO Optimization Tool</strong></div>
                    <div>SEO & Analytics</div>
                    <div style="color: #764ba2; font-weight: bold;">$149/mo</div>
                    <div>⭐ 4.8/5</div>
                    <div><a href="/products/seo-tool" class="btn btn-primary">View</a></div>
                </div>

                <div class="table-row">
                    <div><strong>Analytics Dashboard</strong></div>
                    <div>Analytics & BI</div>
                    <div style="color: #764ba2; font-weight: bold;">$199/mo</div>
                    <div>⭐ 4.9/5</div>
                    <div><a href="/products/analytics-dashboard" class="btn btn-primary">View</a></div>
                </div>

                <div class="table-row">
                    <div><strong>Automation Suite</strong></div>
                    <div>Workflow & Integration</div>
                    <div style="color: #764ba2; font-weight: bold;">$299/mo</div>
                    <div>⭐ 4.7/5</div>
                    <div><a href="/products/automation-suite" class="btn btn-primary">View</a></div>
                </div>
            </div>

            <a href="/shop" class="back-link">← Back to Shop</a>
        </div>
    </body>
    </html>
    `;
}

function generateProductDetailPage(productId) {
    const products = {
        "ai-content-generator": {
            name: "AI Content Generator",
            icon: "🤖",
            price: "$99/month",
            rating: "4.9/5 (2,847 reviews)",
            description: "Create high-quality, SEO-optimized blog posts, product descriptions, and marketing copy using GPT-4 AI.",
            features: ["50+ language support", "10,000+ words/day", "AI-powered SEO optimization", "Plagiarism detection", "Content calendar", "Team collaboration"]
        },
        "seo-tool": {
            name: "SEO Optimization Tool",
            icon: "🔍",
            price: "$149/month",
            rating: "4.8/5 (1,923 reviews)",
            description: "Boost your Google rankings with AI-powered keyword research, competitor analysis, and real-time rank tracking.",
            features: ["Keyword research", "Competitor analysis", "Rank tracking", "Technical SEO audits", "Backlink analysis", "Content optimization"]
        },
        "analytics-dashboard": {
            name: "Analytics Dashboard",
            icon: "📊",
            price: "$199/month",
            rating: "4.9/5 (1,456 reviews)",
            description: "Make data-driven decisions with real-time AI analytics, visualizations, and predictive insights.",
            features: ["Real-time dashboards", "Predictive analytics", "Custom reports", "Data visualization", "ML-powered forecasting", "Integration with 100+ tools"]
        },
        "automation-suite": {
            name: "Automation Suite",
            icon: "⚡",
            price: "$299/month",
            rating: "4.7/5 (987 reviews)",
            description: "Automate workflows with intelligent AI. Connect 500+ apps and streamline your entire business.",
            features: ["500+ app integrations", "Visual workflow builder", "Conditional logic", "Error handling", "Custom webhooks", "Team management"]
        }
    };

    const product = products[productId] || products["ai-content-generator"];

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${product.name} - AI Marketplace</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #333; min-height: 100vh; padding: 20px; }
            .container { max-width: 1000px; margin: 0 auto; }
            .back-link { display: inline-block; margin: 20px 0; color: white; text-decoration: none; font-weight: 500; }
            .back-link:hover { text-decoration: underline; }
            .product-detail { background: white; border-radius: 12px; padding: 40px; box-shadow: 0 20px 60px rgba(0,0,0,0.2); }
            .product-header { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; margin-bottom: 40px; }
            .product-icon { font-size: 5em; text-align: center; }
            .product-info h1 { font-size: 2.5em; color: #667eea; margin-bottom: 15px; }
            .product-rating { color: #666; margin-bottom: 15px; font-size: 1.1em; }
            .product-price { font-size: 2.2em; color: #764ba2; font-weight: bold; margin-bottom: 20px; }
            .product-desc { color: #666; line-height: 1.8; margin-bottom: 20px; }
            .features { margin: 30px 0; }
            .features h3 { color: #667eea; margin-bottom: 15px; font-size: 1.3em; }
            .features-list { list-style: none; }
            .features-list li { padding: 10px 0; color: #666; border-bottom: 1px solid #eee; }
            .features-list li:before { content: "✓ "; color: #28a745; font-weight: bold; margin-right: 10px; }
            .actions { display: flex; gap: 15px; margin-top: 30px; flex-wrap: wrap; }
            .btn { padding: 15px 30px; border-radius: 6px; text-decoration: none; font-weight: bold; border: none; cursor: pointer; font-size: 1.1em; transition: all 0.3s; }
            .btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
            .btn-primary:hover { transform: scale(1.05); }
            .btn-secondary { background: #f0f0f0; color: #667eea; }
            .btn-secondary:hover { background: #e0e0e0; }
        </style>
    </head>
    <body>
        <div class="container">
            ${generateNavigation()}
            <a href="/products" class="back-link">← Back to Products</a>

            <div class="product-detail">
                <div class="product-header">
                    <div class="product-icon">${product.icon}</div>
                    <div class="product-info">
                        <h1>${product.name}</h1>
                        <div class="product-rating">${product.rating}</div>
                        <div class="product-price">${product.price}</div>
                        <p class="product-desc">${product.description}</p>
                    </div>
                </div>

                <div class="features">
                    <h3>✨ Key Features</h3>
                    <ul class="features-list">
                        ${product.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>

                <div class="actions">
                    <a href="/cart" class="btn btn-primary">🛒 Add to Cart</a>
                    <a href="/checkout" class="btn btn-primary">💳 Buy Now</a>
                    <button class="btn btn-secondary">❤️ Save for Later</button>
                    <button class="btn btn-secondary">📧 Get Updates</button>
                </div>

                <div style="margin-top: 30px; padding-top: 30px; border-top: 1px solid #eee; color: #666;">
                    <h3 style="color: #667eea; margin-bottom: 15px;">What's Included?</h3>
                    <p>✓ Full access to all features | ✓ 24/7 customer support | ✓ Free updates | ✓ 30-day money-back guarantee | ✓ Early access to new features</p>
                </div>
            </div>

            <a href="/products" class="back-link">← Back to Products</a>
        </div>
    </body>
    </html>
    `;
}

function generateCartPage() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Shopping Cart - AI Marketplace</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #333; min-height: 100vh; padding: 20px; }
            .container { max-width: 1000px; margin: 0 auto; }
            .header { text-align: center; color: white; margin-bottom: 30px; }
            .header h1 { font-size: 2.5em; margin-bottom: 10px; }
            .cart-content { display: grid; grid-template-columns: 2fr 1fr; gap: 30px; }
            .cart-items { background: white; border-radius: 12px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
            .empty-cart { text-align: center; padding: 40px; }
            .empty-cart-icon { font-size: 4em; margin-bottom: 20px; }
            .empty-cart p { color: #666; margin-bottom: 20px; }
            .cart-item { display: grid; grid-template-columns: 1fr 1fr 1fr auto; gap: 15px; padding: 15px; border: 1px solid #eee; border-radius: 6px; margin-bottom: 15px; align-items: center; }
            .cart-item-name { font-weight: bold; color: #667eea; }
            .cart-item-price { color: #764ba2; font-weight: bold; }
            .remove-btn { background: #ff6b6b; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; }
            .summary { background: white; border-radius: 12px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); height: fit-content; }
            .summary-row { display: flex; justify-content: space-between; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee; }
            .summary-total { display: flex; justify-content: space-between; font-size: 1.3em; font-weight: bold; color: #764ba2; margin: 20px 0; }
            .btn { width: 100%; padding: 15px; border-radius: 6px; border: none; font-weight: bold; font-size: 1.1em; cursor: pointer; transition: all 0.3s; margin-bottom: 10px; }
            .btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
            .btn-primary:hover { transform: scale(1.02); }
            .btn-secondary { background: #f0f0f0; color: #667eea; }
            .btn-secondary:hover { background: #e0e0e0; }
            .back-link { display: inline-block; margin: 20px 0; color: white; text-decoration: none; font-weight: 500; }
            .back-link:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <div class="container">
            ${generateNavigation()}
            <div class="header">
                <h1>🛍️ Shopping Cart</h1>
            </div>

            <div class="cart-content">
                <div class="cart-items">
                    <h2 style="margin-bottom: 20px; color: #667eea;">Cart Items</h2>
                    <div class="empty-cart">
                        <div class="empty-cart-icon">🛒</div>
                        <p>Your cart is currently empty.</p>
                        <p style="font-size: 0.9em; color: #999;">Start by browsing our products!</p>
                        <a href="/shop" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; border-radius: 6px; text-decoration: none; font-weight: bold;">Browse Products →</a>
                    </div>
                </div>

                <div class="summary">
                    <h2 style="margin-bottom: 20px; color: #667eea;">Order Summary</h2>
                    <div class="summary-row">
                        <span>Subtotal:</span>
                        <span>$0.00</span>
                    </div>
                    <div class="summary-row">
                        <span>Shipping:</span>
                        <span>FREE</span>
                    </div>
                    <div class="summary-row">
                        <span>Tax:</span>
                        <span>$0.00</span>
                    </div>
                    <div class="summary-total">
                        <span>Total:</span>
                        <span>$0.00</span>
                    </div>
                    <button class="btn btn-primary" disabled style="opacity: 0.6;">💳 Proceed to Checkout</button>
                    <button class="btn btn-secondary">Continue Shopping</button>
                </div>
            </div>

            <a href="/" class="back-link">← Back to Home</a>
        </div>
    </body>
    </html>
    `;
}

function generateCheckoutPage() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Checkout - AI Marketplace</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #333; min-height: 100vh; padding: 20px; }
            .container { max-width: 900px; margin: 0 auto; }
            .header { text-align: center; color: white; margin-bottom: 30px; }
            .header h1 { font-size: 2.5em; margin-bottom: 10px; }
            .checkout-form { background: white; border-radius: 12px; padding: 40px; box-shadow: 0 20px 60px rgba(0,0,0,0.2); }
            .form-section { margin-bottom: 30px; }
            .form-section h2 { font-size: 1.4em; color: #667eea; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #667eea; }
            .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 15px; }
            .form-row.full { grid-template-columns: 1fr; }
            .form-group { display: flex; flex-direction: column; }
            .form-group label { font-weight: bold; margin-bottom: 8px; color: #333; }
            .form-group input, .form-group select { padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1em; }
            .form-group input:focus, .form-group select:focus { outline: none; border-color: #667eea; box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1); }
            .order-summary { background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 30px 0; }
            .order-item { display: flex; justify-content: space-between; margin-bottom: 10px; }
            .order-total { font-size: 1.3em; font-weight: bold; color: #764ba2; margin-top: 15px; padding-top: 15px; border-top: 1px solid #ddd; display: flex; justify-content: space-between; }
            .btn { padding: 15px 30px; border-radius: 6px; border: none; font-weight: bold; font-size: 1.1em; cursor: pointer; transition: all 0.3s; }
            .btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; width: 100%; }
            .btn-primary:hover { transform: scale(1.02); }
            .btn-secondary { background: #f0f0f0; color: #667eea; }
            .back-link { display: inline-block; margin: 20px 0; color: white; text-decoration: none; font-weight: 500; }
            .back-link:hover { text-decoration: underline; }
            .security { text-align: center; margin-top: 20px; color: #666; }
            .security-badge { font-size: 0.9em; }
        </style>
    </head>
    <body>
        <div class="container">
            ${generateNavigation()}
            <div class="header">
                <h1>💳 Checkout</h1>
                <p>Secure payment with encrypted transmission</p>
            </div>

            <form class="checkout-form" onsubmit="handleCheckout(event)">
                <div class="form-section">
                    <h2>📍 Billing Address</h2>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="fname">First Name</label>
                            <input type="text" id="fname" name="fname" required>
                        </div>
                        <div class="form-group">
                            <label for="lname">Last Name</label>
                            <input type="text" id="lname" name="lname" required>
                        </div>
                    </div>
                    <div class="form-row full">
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                    </div>
                    <div class="form-row full">
                        <div class="form-group">
                            <label for="address">Street Address</label>
                            <input type="text" id="address" name="address" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="city">City</label>
                            <input type="text" id="city" name="city" required>
                        </div>
                        <div class="form-group">
                            <label for="state">State/Province</label>
                            <input type="text" id="state" name="state" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="zip">Zip/Postal Code</label>
                            <input type="text" id="zip" name="zip" required>
                        </div>
                        <div class="form-group">
                            <label for="country">Country</label>
                            <select id="country" name="country" required>
                                <option>United States</option>
                                <option>Canada</option>
                                <option>United Kingdom</option>
                                <option>Australia</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="form-section">
                    <h2>💳 Payment Information</h2>
                    <div class="form-row full">
                        <div class="form-group">
                            <label for="cardholder">Cardholder Name</label>
                            <input type="text" id="cardholder" name="cardholder" required>
                        </div>
                    </div>
                    <div class="form-row full">
                        <div class="form-group">
                            <label for="cardnum">Card Number</label>
                            <input type="text" id="cardnum" name="cardnum" placeholder="1234 5678 9012 3456" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="expiry">Expiry Date</label>
                            <input type="text" id="expiry" name="expiry" placeholder="MM/YY" required>
                        </div>
                        <div class="form-group">
                            <label for="cvv">CVV</label>
                            <input type="text" id="cvv" name="cvv" placeholder="123" required>
                        </div>
                    </div>
                </div>

                <div class="order-summary">
                    <h3 style="color: #667eea; margin-bottom: 15px;">Order Summary</h3>
                    <div class="order-item">
                        <span>Subtotal</span>
                        <span>$0.00</span>
                    </div>
                    <div class="order-item">
                        <span>Shipping</span>
                        <span>FREE</span>
                    </div>
                    <div class="order-item">
                        <span>Tax</span>
                        <span>$0.00</span>
                    </div>
                    <div class="order-total">
                        <span>Total Due</span>
                        <span>$0.00</span>
                    </div>
                </div>

                <button type="submit" class="btn btn-primary">🔒 Complete Purchase</button>
                <div class="security">
                    <p class="security-badge">🔐 SSL Encrypted | 🛡️ Fraud Protected | ✓ PCI Compliant</p>
                </div>
            </form>

            <a href="/cart" class="back-link">← Back to Cart</a>
        </div>

        <script>
            function handleCheckout(event) {
                event.preventDefault();
                alert('Payment processing: This would connect to Stripe in production. ✅ Order placed successfully!');
                window.location.href = '/orders';
            }
        </script>
    </body>
    </html>
    `;
}

function generateLoginPage() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login - AI Marketplace</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #333; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px; }
            .login-container { background: white; border-radius: 12px; padding: 40px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); max-width: 400px; width: 100%; }
            .login-header { text-align: center; margin-bottom: 30px; }
            .login-header h1 { font-size: 2em; color: #667eea; margin-bottom: 10px; }
            .login-header p { color: #666; }
            .form-group { margin-bottom: 20px; }
            .form-group label { display: block; font-weight: bold; margin-bottom: 8px; color: #333; }
            .form-group input { width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1em; }
            .form-group input:focus { outline: none; border-color: #667eea; box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1); }
            .remember-forgot { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
            .remember-forgot a { color: #667eea; text-decoration: none; font-size: 0.9em; }
            .remember-forgot a:hover { text-decoration: underline; }
            .btn { width: 100%; padding: 12px; border-radius: 6px; border: none; font-weight: bold; font-size: 1.1em; cursor: pointer; transition: all 0.3s; }
            .btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
            .btn-primary:hover { transform: scale(1.02); }
            .divider { text-align: center; margin: 20px 0; color: #999; }
            .divider::before, .divider::after { content: ''; display: inline-block; width: 45%; height: 1px; background: #ddd; vertical-align: middle; }
            .divider::before { margin-right: 10px; }
            .divider::after { margin-left: 10px; }
            .social-login { display: flex; gap: 10px; margin-bottom: 20px; }
            .social-btn { flex: 1; padding: 10px; border: 1px solid #ddd; border-radius: 6px; background: white; cursor: pointer; font-weight: bold; transition: all 0.3s; }
            .social-btn:hover { border-color: #667eea; background: #f9f9f9; }
            .signup-link { text-align: center; margin-top: 20px; }
            .signup-link p { color: #666; }
            .signup-link a { color: #667eea; text-decoration: none; font-weight: bold; }
            .signup-link a:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <div class="login-container">
            <div class="login-header">
                <h1>👤 Login</h1>
                <p>Welcome back to AI Marketplace</p>
            </div>

            <form onsubmit="handleLogin(event)">
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" required placeholder="your@email.com">
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required placeholder="••••••••">
                </div>

                <div class="remember-forgot">
                    <label style="display: flex; align-items: center; font-weight: normal;">
                        <input type="checkbox" style="margin-right: 8px; width: auto;">
                        Remember me
                    </label>
                    <a href="#forgot">Forgot password?</a>
                </div>

                <button type="submit" class="btn btn-primary">Sign In</button>
            </form>

            <div class="divider">OR</div>

            <div class="social-login">
                <button class="social-btn">🔵 Google</button>
                <button class="social-btn">🔵 GitHub</button>
            </div>

            <div class="signup-link">
                <p>Don't have an account? <a href="/register">Create one</a></p>
            </div>

            <div style="margin-top: 20px; text-align: center;">
                <a href="/" style="color: #667eea; text-decoration: none;">← Back to Home</a>
            </div>
        </div>

        <script>
            function handleLogin(event) {
                event.preventDefault();
                alert('Logged in successfully! 🎉');
                window.location.href = '/dashboard';
            }
        </script>
    </body>
    </html>
    `;
}

function generateRegisterPage() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Register - AI Marketplace</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #333; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px; }
            .register-container { background: white; border-radius: 12px; padding: 40px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); max-width: 450px; width: 100%; }
            .register-header { text-align: center; margin-bottom: 30px; }
            .register-header h1 { font-size: 2em; color: #667eea; margin-bottom: 10px; }
            .register-header p { color: #666; }
            .form-group { margin-bottom: 20px; }
            .form-group label { display: block; font-weight: bold; margin-bottom: 8px; color: #333; }
            .form-group input { width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1em; }
            .form-group input:focus { outline: none; border-color: #667eea; box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1); }
            .password-strength { margin-top: 8px; height: 4px; background: #ddd; border-radius: 2px; overflow: hidden; }
            .strength-bar { height: 100%; width: 0%; background: #ff6b6b; }
            .btn { width: 100%; padding: 12px; border-radius: 6px; border: none; font-weight: bold; font-size: 1.1em; cursor: pointer; transition: all 0.3s; }
            .btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
            .btn-primary:hover { transform: scale(1.02); }
            .terms { font-size: 0.85em; color: #666; margin-bottom: 15px; }
            .terms a { color: #667eea; text-decoration: none; }
            .login-link { text-align: center; margin-top: 20px; }
            .login-link p { color: #666; }
            .login-link a { color: #667eea; text-decoration: none; font-weight: bold; }
            .login-link a:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <div class="register-container">
            <div class="register-header">
                <h1>✨ Create Account</h1>
                <p>Join AI Marketplace today</p>
            </div>

            <form onsubmit="handleRegister(event)">
                <div class="form-group">
                    <label for="fullname">Full Name</label>
                    <input type="text" id="fullname" name="fullname" required placeholder="John Doe">
                </div>

                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" required placeholder="your@email.com">
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required placeholder="••••••••" onkeyup="checkPasswordStrength(this.value)">
                    <div class="password-strength">
                        <div class="strength-bar" id="strengthBar"></div>
                    </div>
                    <small style="color: #999;">At least 8 characters, mix of uppercase, lowercase, numbers and symbols</small>
                </div>

                <div class="form-group">
                    <label for="confirm">Confirm Password</label>
                    <input type="password" id="confirm" name="confirm" required placeholder="••••••••">
                </div>

                <div style="margin-bottom: 20px;">
                    <label style="display: flex; align-items: flex-start; font-weight: normal;">
                        <input type="checkbox" required style="margin-right: 8px; margin-top: 4px; width: auto;">
                        <span class="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
                    </label>
                </div>

                <button type="submit" class="btn btn-primary">Create Account</button>
            </form>

            <div class="login-link">
                <p>Already have an account? <a href="/login">Sign in</a></p>
            </div>

            <div style="margin-top: 20px; text-align: center;">
                <a href="/" style="color: #667eea; text-decoration: none;">← Back to Home</a>
            </div>
        </div>

        <script>
            function checkPasswordStrength(password) {
                let strength = 0;
                if (password.length >= 8) strength += 25;
                if (/[A-Z]/.test(password)) strength += 25;
                if (/[0-9]/.test(password)) strength += 25;
                if (/[^a-zA-Z0-9]/.test(password)) strength += 25;
                document.getElementById('strengthBar').style.width = strength + '%';
            }
            function handleRegister(event) {
                event.preventDefault();
                alert('Account created successfully! 🎉');
                window.location.href = '/login';
            }
        </script>
    </body>
    </html>
    `;
}

function generateDashboardPage() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dashboard - AI Marketplace</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #333; min-height: 100vh; padding: 20px; }
            .container { max-width: 1200px; margin: 0 auto; }
            .header { color: white; margin-bottom: 30px; }
            .header h1 { font-size: 2.5em; margin-bottom: 10px; }
            .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px; }
            .stat-card { background: white; padding: 25px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
            .stat-icon { font-size: 2.5em; margin-bottom: 10px; }
            .stat-value { font-size: 2em; font-weight: bold; color: #667eea; }
            .stat-label { color: #666; font-size: 0.95em; margin-top: 5px; }
            .dashboard-section { background: white; border-radius: 12px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); margin-bottom: 30px; }
            .section-title { font-size: 1.5em; color: #667eea; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 2px solid #667eea; }
            .quick-actions { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
            .action-btn { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 25px; border-radius: 8px; text-decoration: none; text-align: center; font-weight: bold; transition: all 0.3s; border: none; cursor: pointer; }
            .action-btn:hover { transform: translateY(-3px); box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4); }
            .recent-activity { margin-top: 20px; }
            .activity-item { padding: 15px; border: 1px solid #eee; border-radius: 6px; margin-bottom: 10px; }
            .activity-item:last-child { margin-bottom: 0; }
            .activity-time { color: #999; font-size: 0.85em; }
            .activity-title { font-weight: bold; color: #333; margin-bottom: 5px; }
            .back-link { display: inline-block; margin: 20px 0; color: white; text-decoration: none; font-weight: 500; }
            .back-link:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <div class="container">
            ${generateNavigation()}
            <div class="header">
                <h1>📊 Welcome Back!</h1>
                <p>Here's your account dashboard</p>
            </div>

            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon">🛒</div>
                    <div class="stat-value">4</div>
                    <div class="stat-label">Active Subscriptions</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">💰</div>
                    <div class="stat-value">$647</div>
                    <div class="stat-label">Total Spent</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">📦</div>
                    <div class="stat-value">12</div>
                    <div class="stat-label">Orders Completed</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">⭐</div>
                    <div class="stat-value">98%</div>
                    <div class="stat-label">Satisfaction Rate</div>
                </div>
            </div>

            <div class="dashboard-section">
                <h2 class="section-title">Quick Actions</h2>
                <div class="quick-actions">
                    <a href="/shop" class="action-btn">🛍️ Browse Products</a>
                    <a href="/orders" class="action-btn">📋 View Orders</a>
                    <a href="/account" class="action-btn">⚙️ Account Settings</a>
                    <a href="/support" class="action-btn">💬 Get Support</a>
                </div>
            </div>

            <div class="dashboard-section">
                <h2 class="section-title">Recent Activity</h2>
                <div class="recent-activity">
                    <div class="activity-item">
                        <div class="activity-time">2 hours ago</div>
                        <div class="activity-title">✓ Renewed AI Content Generator subscription</div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-time">1 day ago</div>
                        <div class="activity-title">📊 Generated 847 words with AI Content Generator</div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-time">3 days ago</div>
                        <div class="activity-title">💳 Payment of $99.00 processed successfully</div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-time">1 week ago</div>
                        <div class="activity-title">✓ Added SEO Optimization Tool to subscriptions</div>
                    </div>
                </div>
            </div>

            <a href="/" class="back-link">← Back to Home</a>
        </div>
    </body>
    </html>
    `;
}

function generateOrdersPage() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Orders - AI Marketplace</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #333; min-height: 100vh; padding: 20px; }
            .container { max-width: 1000px; margin: 0 auto; }
            .header { color: white; margin-bottom: 30px; }
            .header h1 { font-size: 2.5em; margin-bottom: 10px; }
            .orders-list { background: white; border-radius: 12px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
            .order-item { border: 1px solid #eee; border-radius: 8px; padding: 20px; margin-bottom: 20px; }
            .order-item:last-child { margin-bottom: 0; }
            .order-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; }
            .order-id { font-weight: bold; color: #667eea; font-size: 1.1em; }
            .order-date { color: #666; font-size: 0.9em; }
            .order-status { padding: 5px 12px; border-radius: 20px; font-weight: bold; font-size: 0.85em; }
            .status-completed { background: #d4edda; color: #155724; }
            .status-pending { background: #fff3cd; color: #856404; }
            .order-details { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 15px; }
            .detail-item { }
            .detail-label { color: #666; font-size: 0.85em; margin-bottom: 5px; }
            .detail-value { font-weight: bold; color: #333; }
            .order-items { background: #f9f9f9; padding: 15px; border-radius: 6px; margin-bottom: 15px; }
            .order-items h4 { color: #667eea; margin-bottom: 10px; }
            .item-line { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; }
            .item-line:last-child { border-bottom: none; }
            .action-links { display: flex; gap: 10px; }
            .action-link { color: #667eea; text-decoration: none; font-weight: 500; padding: 8px 15px; border: 1px solid #667eea; border-radius: 4px; transition: all 0.3s; }
            .action-link:hover { background: #667eea; color: white; }
            .empty-orders { text-align: center; padding: 40px; }
            .empty-icon { font-size: 3em; margin-bottom: 15px; }
            .back-link { display: inline-block; margin: 20px 0; color: white; text-decoration: none; font-weight: 500; }
            .back-link:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <div class="container">
            ${generateNavigation()}
            <div class="header">
                <h1>📋 My Orders</h1>
                <p>Track your purchases and subscriptions</p>
            </div>

            <div class="orders-list">
                <div class="order-item">
                    <div class="order-header">
                        <div>
                            <div class="order-id">Order #ORD-2025-001</div>
                            <div class="order-date">January 15, 2025</div>
                        </div>
                        <span class="order-status status-completed">✓ Completed</span>
                    </div>
                    <div class="order-details">
                        <div class="detail-item">
                            <div class="detail-label">Total Amount</div>
                            <div class="detail-value">$99.00</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Payment Method</div>
                            <div class="detail-value">Credit Card</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Delivery</div>
                            <div class="detail-value">Instant (Digital)</div>
                        </div>
                    </div>
                    <div class="order-items">
                        <h4>Items in Order</h4>
                        <div class="item-line">
                            <span>AI Content Generator (1 month)</span>
                            <strong>$99.00</strong>
                        </div>
                    </div>
                    <div class="action-links">
                        <a href="#" class="action-link">📧 Receipt</a>
                        <a href="#" class="action-link">❓ Support</a>
                        <a href="#" class="action-link">♻️ Renew</a>
                    </div>
                </div>

                <div class="order-item">
                    <div class="order-header">
                        <div>
                            <div class="order-id">Order #ORD-2025-002</div>
                            <div class="order-date">January 8, 2025</div>
                        </div>
                        <span class="order-status status-completed">✓ Completed</span>
                    </div>
                    <div class="order-details">
                        <div class="detail-item">
                            <div class="detail-label">Total Amount</div>
                            <div class="detail-value">$149.00</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Payment Method</div>
                            <div class="detail-value">Credit Card</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Delivery</div>
                            <div class="detail-value">Instant (Digital)</div>
                        </div>
                    </div>
                    <div class="order-items">
                        <h4>Items in Order</h4>
                        <div class="item-line">
                            <span>SEO Optimization Tool (1 month)</span>
                            <strong>$149.00</strong>
                        </div>
                    </div>
                    <div class="action-links">
                        <a href="#" class="action-link">📧 Receipt</a>
                        <a href="#" class="action-link">❓ Support</a>
                        <a href="#" class="action-link">♻️ Renew</a>
                    </div>
                </div>
            </div>

            <a href="/dashboard" class="back-link">← Back to Dashboard</a>
        </div>
    </body>
    </html>
    `;
}

function generateAccountPage() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Account Settings - AI Marketplace</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #333; min-height: 100vh; padding: 20px; }
            .container { max-width: 800px; margin: 0 auto; }
            .header { color: white; margin-bottom: 30px; }
            .header h1 { font-size: 2.5em; margin-bottom: 10px; }
            .settings-container { background: white; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); overflow: hidden; }
            .settings-sidebar { background: #f9f9f9; padding: 20px; border-right: 1px solid #eee; }
            .settings-tabs { display: flex; flex-direction: column; gap: 10px; }
            .tab-btn { padding: 12px 20px; border: none; background: transparent; text-align: left; cursor: pointer; color: #666; transition: all 0.3s; font-weight: 500; }
            .tab-btn:hover, .tab-btn.active { background: #667eea; color: white; border-left: 4px solid #764ba2; }
            .settings-content { padding: 40px; }
            .form-group { margin-bottom: 25px; }
            .form-group label { display: block; font-weight: bold; margin-bottom: 8px; color: #333; }
            .form-group input, .form-group select { width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1em; }
            .form-group input:focus, .form-group select:focus { outline: none; border-color: #667eea; box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1); }
            .form-buttons { display: flex; gap: 10px; margin-top: 30px; }
            .btn { padding: 12px 30px; border-radius: 6px; border: none; font-weight: bold; cursor: pointer; transition: all 0.3s; }
            .btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
            .btn-primary:hover { transform: scale(1.02); }
            .btn-danger { background: #ff6b6b; color: white; }
            .btn-danger:hover { background: #ff5252; }
            .btn-secondary { background: #f0f0f0; color: #667eea; }
            .btn-secondary:hover { background: #e0e0e0; }
            .back-link { display: inline-block; margin: 20px 0; color: white; text-decoration: none; font-weight: 500; }
            .back-link:hover { text-decoration: underline; }
            .section-title { font-size: 1.3em; color: #667eea; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 2px solid #667eea; }
        </style>
    </head>
    <body>
        <div class="container">
            ${generateNavigation()}
            <div class="header">
                <h1>⚙️ Account Settings</h1>
                <p>Manage your profile and preferences</p>
            </div>

            <div class="settings-container">
                <div class="settings-sidebar">
                    <div class="settings-tabs">
                        <button class="tab-btn active">👤 Profile</button>
                        <button class="tab-btn">🔐 Security</button>
                        <button class="tab-btn">🔔 Notifications</button>
                        <button class="tab-btn">💳 Billing</button>
                        <button class="tab-btn">🗑️ Danger Zone</button>
                    </div>
                </div>

                <div class="settings-content">
                    <h2 class="section-title">Profile Information</h2>

                    <div class="form-group">
                        <label for="fullname">Full Name</label>
                        <input type="text" id="fullname" name="fullname" value="John Doe">
                    </div>

                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" value="john@example.com">
                    </div>

                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" value="+1 (555) 123-4567">
                    </div>

                    <div class="form-group">
                        <label for="company">Company</label>
                        <input type="text" id="company" name="company" value="Acme Inc.">
                    </div>

                    <div class="form-group">
                        <label for="bio">Bio</label>
                        <input type="text" id="bio" name="bio" value="AI enthusiast and digital marketer">
                    </div>

                    <h2 class="section-title" style="margin-top: 40px;">Preferences</h2>

                    <div class="form-group">
                        <label for="timezone">Timezone</label>
                        <select id="timezone">
                            <option>Eastern Time (ET)</option>
                            <option>Central Time (CT)</option>
                            <option>Mountain Time (MT)</option>
                            <option>Pacific Time (PT)</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label>
                            <input type="checkbox" checked> Receive email notifications about new features
                        </label>
                    </div>

                    <div class="form-group">
                        <label>
                            <input type="checkbox" checked> Receive promotional offers and updates
                        </label>
                    </div>

                    <div class="form-buttons">
                        <button class="btn btn-primary">💾 Save Changes</button>
                        <button class="btn btn-secondary">Cancel</button>
                    </div>
                </div>
            </div>

            <a href="/dashboard" class="back-link">← Back to Dashboard</a>
        </div>
    </body>
    </html>
    `;
}

function generateSupportPage() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Support - AI Marketplace</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #333; min-height: 100vh; padding: 20px; }
            .container { max-width: 1000px; margin: 0 auto; }
            .header { color: white; text-align: center; margin-bottom: 40px; }
            .header h1 { font-size: 2.5em; margin-bottom: 10px; }
            .support-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; margin-bottom: 40px; }
            .support-card { background: white; border-radius: 12px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); text-align: center; transition: all 0.3s; }
            .support-card:hover { transform: translateY(-10px); }
            .support-icon { font-size: 3em; margin-bottom: 15px; }
            .support-title { font-size: 1.3em; color: #667eea; font-weight: bold; margin-bottom: 10px; }
            .support-desc { color: #666; line-height: 1.6; }
            .support-link { display: inline-block; margin-top: 15px; padding: 10px 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 6px; font-weight: bold; transition: all 0.3s; }
            .support-link:hover { transform: scale(1.05); }
            .faq-section { background: white; border-radius: 12px; padding: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
            .faq-title { font-size: 1.8em; color: #667eea; margin-bottom: 30px; }
            .faq-item { margin-bottom: 20px; border: 1px solid #eee; border-radius: 8px; }
            .faq-question { padding: 20px; background: #f9f9f9; cursor: pointer; font-weight: bold; color: #667eea; transition: all 0.3s; }
            .faq-question:hover { background: #667eea; color: white; }
            .faq-answer { padding: 20px; display: none; color: #666; line-height: 1.8; }
            .faq-answer.show { display: block; }
            .contact-form { background: white; border-radius: 12px; padding: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); margin-top: 30px; }
            .form-group { margin-bottom: 20px; }
            .form-group label { display: block; font-weight: bold; margin-bottom: 8px; color: #333; }
            .form-group input, .form-group textarea { width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1em; font-family: inherit; }
            .form-group input:focus, .form-group textarea:focus { outline: none; border-color: #667eea; box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1); }
            .btn { width: 100%; padding: 12px; border-radius: 6px; border: none; font-weight: bold; font-size: 1.1em; cursor: pointer; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; transition: all 0.3s; }
            .btn:hover { transform: scale(1.02); }
            .back-link { display: inline-block; margin: 30px 0; color: white; text-decoration: none; font-weight: 500; }
            .back-link:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <div class="container">
            ${generateNavigation()}
            <div class="header">
                <h1>📞 Support Center</h1>
                <p>We're here to help! Choose your preferred support method.</p>
            </div>

            <div class="support-grid">
                <div class="support-card">
                    <div class="support-icon">💬</div>
                    <div class="support-title">Live Chat</div>
                    <p class="support-desc">Chat with our support team in real-time. Available Mon-Fri, 9AM-6PM EST.</p>
                    <a href="#" class="support-link">Start Chat →</a>
                </div>

                <div class="support-card">
                    <div class="support-icon">📧</div>
                    <div class="support-title">Email Support</div>
                    <p class="support-desc">Send us an email and we'll respond within 24 hours.</p>
                    <a href="mailto:support@ai-market.com" class="support-link">Send Email →</a>
                </div>

                <div class="support-card">
                    <div class="support-icon">📞</div>
                    <div class="support-title">Phone Support</div>
                    <p class="support-desc">Call our support hotline for urgent issues.</p>
                    <a href="tel:+15551234567" class="support-link">Call Now →</a>
                </div>

                <div class="support-card">
                    <div class="support-icon">📚</div>
                    <div class="support-title">Knowledge Base</div>
                    <p class="support-desc">Browse our comprehensive documentation and tutorials.</p>
                    <a href="/faq" class="support-link">View Docs →</a>
                </div>

                <div class="support-card">
                    <div class="support-icon">🎓</div>
                    <div class="support-title">Video Tutorials</div>
                    <p class="support-desc">Learn how to use our tools with step-by-step videos.</p>
                    <a href="#" class="support-link">Watch Now →</a>
                </div>

                <div class="support-card">
                    <div class="support-icon">🚀</div>
                    <div class="support-title">Getting Started</div>
                    <p class="support-desc">New user? Get started with our onboarding guide.</p>
                    <a href="#" class="support-link">Start Guide →</a>
                </div>
            </div>

            <div class="faq-section">
                <h2 class="faq-title">Frequently Asked Questions</h2>
                
                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFaq(this)">How do I get started?</div>
                    <div class="faq-answer">Sign up for a free account, choose your products, and start using them immediately. Our team will guide you through the onboarding process.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFaq(this)">What payment methods do you accept?</div>
                    <div class="faq-answer">We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for enterprise customers.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFaq(this)">Do you offer refunds?</div>
                    <div class="faq-answer">Yes! We offer a 30-day money-back guarantee on all products. If you're not satisfied, contact us for a full refund.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFaq(this)">Can I cancel my subscription anytime?</div>
                    <div class="faq-answer">Absolutely! You can cancel your subscription at any time from your dashboard. No hidden fees or long-term contracts.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFaq(this)">Is there a free trial?</div>
                    <div class="faq-answer">Yes! All products come with a 14-day free trial. No credit card required to start your trial.</div>
                </div>
            </div>

            <div class="contact-form">
                <h2 style="color: #667eea; margin-bottom: 20px;">Send us a Message</h2>
                <form onsubmit="handleSupportForm(event)">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required>
                    </div>

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>

                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" name="subject" required>
                    </div>

                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="6" required></textarea>
                    </div>

                    <button type="submit" class="btn">Send Message</button>
                </form>
            </div>

            <a href="/" class="back-link">← Back to Home</a>
        </div>

        <script>
            function toggleFaq(element) {
                const answer = element.nextElementSibling;
                answer.classList.toggle('show');
            }
            function handleSupportForm(event) {
                event.preventDefault();
                alert('Thank you! Your message has been sent. We\'ll respond within 24 hours.');
            }
        </script>
    </body>
    </html>
    `;
}

function generateFaqPage() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>FAQ - AI Marketplace</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #333; min-height: 100vh; padding: 20px; }
            .container { max-width: 900px; margin: 0 auto; }
            .header { color: white; text-align: center; margin-bottom: 40px; }
            .header h1 { font-size: 2.5em; margin-bottom: 10px; }
            .faq-container { background: white; border-radius: 12px; padding: 40px; box-shadow: 0 20px 60px rgba(0,0,0,0.2); }
            .faq-section { margin-bottom: 40px; }
            .faq-section-title { font-size: 1.6em; color: #667eea; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #667eea; }
            .faq-item { margin-bottom: 15px; border: 1px solid #eee; border-radius: 8px; overflow: hidden; }
            .faq-question { padding: 20px; background: #f9f9f9; cursor: pointer; font-weight: bold; color: #667eea; transition: all 0.3s; display: flex; justify-content: space-between; align-items: center; }
            .faq-question:hover { background: #667eea; color: white; }
            .faq-toggle { font-size: 1.3em; }
            .faq-answer { padding: 20px; display: none; color: #666; line-height: 1.8; background: #fafafa; }
            .faq-answer.show { display: block; }
            .back-link { display: inline-block; margin: 30px 0; color: white; text-decoration: none; font-weight: 500; }
            .back-link:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <div class="container">
            ${generateNavigation()}
            <div class="header">
                <h1>❓ Frequently Asked Questions</h1>
                <p>Find answers to common questions about AI Marketplace</p>
            </div>

            <div class="faq-container">
                <div class="faq-section">
                    <h2 class="faq-section-title">Getting Started</h2>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>How do I create an account?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">Click on the "Sign Up" button, enter your email, choose a password, and you're all set! You can start using our free trial immediately without needing a payment method.</div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>What is the free trial period?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">All of our products come with a 14-day free trial. You get full access to all features during your trial period. No credit card required!</div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>How do I upgrade to a paid plan?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">Once your trial period ends, you can upgrade to a paid subscription from your dashboard. Choose your preferred plan and add your payment information. Your subscription will activate immediately.</div>
                    </div>
                </div>

                <div class="faq-section">
                    <h2 class="faq-section-title">Billing & Payments</h2>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>What payment methods do you accept?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for enterprise customers. All transactions are processed securely using industry-standard encryption.</div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>Can I change or cancel my subscription?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">Yes! You can upgrade, downgrade, or cancel your subscription at any time from your dashboard. Changes take effect on your next billing date. No hidden fees or penalties.</div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>Do you offer a money-back guarantee?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">Yes! We offer a 30-day money-back guarantee on all products. If you're not satisfied with your purchase for any reason, contact our support team for a full refund.</div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>How often will I be billed?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">We offer monthly and annual billing options. Monthly subscriptions renew on the same day each month. Annual subscriptions renew yearly. You can change your billing frequency anytime.</div>
                    </div>
                </div>

                <div class="faq-section">
                    <h2 class="faq-section-title">Features & Usage</h2>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>What features are included in each plan?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">Each product has different tiers with varying features. Visit our pricing page to see detailed feature comparisons. All paid plans include priority support and access to new features.</div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>Is there a limit on how much I can use?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">Most of our tools have generous usage limits or unlimited access on higher-tier plans. Check the feature details for your specific product for usage limits and overages.</div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>Can I use multiple products together?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">Absolutely! Our tools are designed to work seamlessly together. You can subscribe to multiple products and manage all of them from your unified dashboard.</div>
                    </div>
                </div>

                <div class="faq-section">
                    <h2 class="faq-section-title">Support & Technical</h2>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>What kind of support is available?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">We offer live chat, email support, phone support, and a comprehensive knowledge base. Free users get email support, while paid customers get priority support with faster response times.</div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>How can I contact your support team?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">You can reach us via live chat (Mon-Fri 9AM-6PM EST), email at support@ai-market.com, or phone at +1 (555) 123-4567. Visit our <a href="/support" style="color: #667eea;">support center</a> for more options.</div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>What's your uptime guarantee?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">We maintain a 99.9% uptime SLA for all our services. In the rare event of an outage, we'll send notifications and work to restore service as quickly as possible.</div>
                    </div>
                </div>

                <div class="faq-section">
                    <h2 class="faq-section-title">Security & Privacy</h2>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>Is my data secure?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">Yes! We use industry-standard SSL encryption, regular security audits, and comply with GDPR, CCPA, and other privacy regulations. Your data is stored in secure, redundant data centers.</div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>Do you share my data with third parties?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">No. We never sell your data or share it with third parties without your explicit consent. Read our privacy policy for complete details on how we handle your information.</div>
                    </div>
                </div>
            </div>

            <a href="/support" class="back-link">← Back to Support</a>
        </div>

        <script>
            function toggleFaq(element) {
                const answer = element.parentElement.querySelector('.faq-answer');
                const toggle = element.querySelector('.faq-toggle');
                answer.classList.toggle('show');
                toggle.textContent = answer.classList.contains('show') ? '−' : '+';
            }
        </script>
    </body>
    </html>
    `;
}

// ===== API HANDLER FUNCTIONS =====

// Shopping Cart Handlers
async function handleGetCart(request) {
    const cartData = JSON.parse(localStorage.getItem('cart') || '{"items":[],"total":0,"count":0}');
    return new Response(JSON.stringify(cartData), { headers: { 'Content-Type': 'application/json' } });
}

async function handleAddToCart(request) {
    try {
        const { productId, quantity = 1, productName, productPrice } = await request.json();
        const cartData = JSON.parse(localStorage.getItem('cart') || '{"items":[],"total":0,"count":0}');
        
        const existingItem = cartData.items.find(item => item.productId === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cartData.items.push({ productId, productName, productPrice, quantity });
        }
        
        cartData.count = cartData.items.reduce((sum, item) => sum + item.quantity, 0);
        cartData.total = cartData.items.reduce((sum, item) => sum + (item.productPrice * item.quantity), 0);
        
        localStorage.setItem('cart', JSON.stringify(cartData));
        return new Response(JSON.stringify({ success: true, cart: cartData }), { headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }
}

async function handleRemoveFromCart(request) {
    try {
        const { productId } = await request.json();
        const cartData = JSON.parse(localStorage.getItem('cart') || '{"items":[],"total":0,"count":0}');
        cartData.items = cartData.items.filter(item => item.productId !== productId);
        cartData.count = cartData.items.reduce((sum, item) => sum + item.quantity, 0);
        cartData.total = cartData.items.reduce((sum, item) => sum + (item.productPrice * item.quantity), 0);
        localStorage.setItem('cart', JSON.stringify(cartData));
        return new Response(JSON.stringify({ success: true, cart: cartData }), { headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }
}

async function handleClearCart(request) {
    localStorage.setItem('cart', JSON.stringify({ items: [], total: 0, count: 0 }));
    return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
}

// Product Search & Filter Handlers
async function handleProductSearch(request) {
    const url = new URL(request.url);
    const query = url.searchParams.get('q')?.toLowerCase() || '';
    
    const allProducts = [
        { id: 1, name: 'AI Content Generator', category: 'Content', price: 99, rating: 4.9 },
        { id: 2, name: 'SEO Optimization Tool', category: 'SEO', price: 149, rating: 4.8 },
        { id: 3, name: 'Analytics Dashboard', category: 'Analytics', price: 199, rating: 4.9 },
        { id: 4, name: 'Automation Suite', category: 'Automation', price: 299, rating: 4.7 }
    ];
    
    const results = allProducts.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query)
    );
    
    return new Response(JSON.stringify({ query, results, count: results.length }), { headers: { 'Content-Type': 'application/json' } });
}

async function handleProductFilter(request) {
    const url = new URL(request.url);
    const category = url.searchParams.get('category');
    const minPrice = parseFloat(url.searchParams.get('minPrice') || '0');
    const maxPrice = parseFloat(url.searchParams.get('maxPrice') || '10000');
    const minRating = parseFloat(url.searchParams.get('minRating') || '0');
    
    const allProducts = [
        { id: 1, name: 'AI Content Generator', category: 'Content', price: 99, rating: 4.9 },
        { id: 2, name: 'SEO Optimization Tool', category: 'SEO', price: 149, rating: 4.8 },
        { id: 3, name: 'Analytics Dashboard', category: 'Analytics', price: 199, rating: 4.9 },
        { id: 4, name: 'Automation Suite', category: 'Automation', price: 299, rating: 4.7 }
    ];
    
    const filtered = allProducts.filter(p => {
        if (category && p.category !== category) return false;
        if (p.price < minPrice || p.price > maxPrice) return false;
        if (p.rating < minRating) return false;
        return true;
    });
    
    return new Response(JSON.stringify({ filters: { category, minPrice, maxPrice, minRating }, results: filtered }), { headers: { 'Content-Type': 'application/json' } });
}

// Wishlist Handlers
async function handleGetWishlist(request) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    return new Response(JSON.stringify({ items: wishlist, count: wishlist.length }), { headers: { 'Content-Type': 'application/json' } });
}

async function handleAddToWishlist(request) {
    try {
        const { productId, productName, productPrice } = await request.json();
        const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        
        if (!wishlist.find(item => item.productId === productId)) {
            wishlist.push({ productId, productName, productPrice, addedDate: new Date().toISOString() });
        }
        
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        return new Response(JSON.stringify({ success: true, wishlist }), { headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }
}

async function handleRemoveFromWishlist(request) {
    try {
        const { productId } = await request.json();
        const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        const filtered = wishlist.filter(item => item.productId !== productId);
        localStorage.setItem('wishlist', JSON.stringify(filtered));
        return new Response(JSON.stringify({ success: true, wishlist: filtered }), { headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }
}

// User Profile Handlers
async function handleGetProfile(request) {
    const profile = JSON.parse(localStorage.getItem('userProfile') || '{"name":"","email":"","company":"","phone":""}');
    return new Response(JSON.stringify(profile), { headers: { 'Content-Type': 'application/json' } });
}

async function handleUpdateProfile(request) {
    try {
        const profile = await request.json();
        localStorage.setItem('userProfile', JSON.stringify(profile));
        return new Response(JSON.stringify({ success: true, profile }), { headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }
}

// Reviews Handlers
async function handleGetReviews(request) {
    const url = new URL(request.url);
    const productId = url.searchParams.get('productId');
    
    const reviews = [
        { id: 1, productId: '1', author: 'John Doe', rating: 5, text: 'Amazing tool! Saved me hours.', date: '2025-01-15' },
        { id: 2, productId: '1', author: 'Jane Smith', rating: 5, text: 'Best investment for content creation.', date: '2025-01-10' },
        { id: 3, productId: '2', author: 'Mike Johnson', rating: 4, text: 'Great features, small learning curve.', date: '2025-01-05' }
    ];
    
    const productReviews = productId ? reviews.filter(r => r.productId === productId) : reviews;
    return new Response(JSON.stringify({ reviews: productReviews, total: productReviews.length }), { headers: { 'Content-Type': 'application/json' } });
}

async function handleCreateReview(request) {
    try {
        const review = await request.json();
        const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
        review.id = Math.max(...reviews.map(r => r.id), 0) + 1;
        review.date = new Date().toISOString().split('T')[0];
        reviews.push(review);
        localStorage.setItem('reviews', JSON.stringify(reviews));
        return new Response(JSON.stringify({ success: true, review }), { headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }
}

// Orders Handlers
async function handleGetOrders(request) {
    const orders = JSON.parse(localStorage.getItem('orders') || '[{"id":"ORD-2025-001","date":"2025-01-15","total":99,"status":"completed"},{"id":"ORD-2025-002","date":"2025-01-08","total":149,"status":"completed"}]');
    return new Response(JSON.stringify({ orders, count: orders.length }), { headers: { 'Content-Type': 'application/json' } });
}

async function handleCreateOrder(request) {
    try {
        const orderData = await request.json();
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        const newOrder = {
            id: `ORD-${Date.now()}`,
            date: new Date().toISOString().split('T')[0],
            total: orderData.total,
            items: orderData.items,
            status: 'pending',
            ...orderData
        };
        orders.push(newOrder);
        localStorage.setItem('orders', JSON.stringify(orders));
        return new Response(JSON.stringify({ success: true, order: newOrder }), { headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }
}

async function handleGetOrderDetail(request, orderId) {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const order = orders.find(o => o.id === orderId);
    if (!order) return new Response(JSON.stringify({ error: 'Order not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
    return new Response(JSON.stringify(order), { headers: { 'Content-Type': 'application/json' } });
}

// Subscriptions Handlers
async function handleGetSubscriptions(request) {
    const subscriptions = JSON.parse(localStorage.getItem('subscriptions') || '[{"id":1,"name":"AI Content Generator","status":"active","renewDate":"2025-02-15"},{"id":2,"name":"SEO Tool","status":"active","renewDate":"2025-02-10"}]');
    return new Response(JSON.stringify({ subscriptions, active: subscriptions.filter(s => s.status === 'active').length }), { headers: { 'Content-Type': 'application/json' } });
}

async function handleCreateSubscription(request) {
    try {
        const subData = await request.json();
        const subscriptions = JSON.parse(localStorage.getItem('subscriptions') || '[]');
        const newSub = {
            id: Math.max(...subscriptions.map(s => s.id), 0) + 1,
            status: 'active',
            startDate: new Date().toISOString().split('T')[0],
            ...subData
        };
        subscriptions.push(newSub);
        localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
        return new Response(JSON.stringify({ success: true, subscription: newSub }), { headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }
}

// Analytics Handlers
async function handleAnalyticsSummary(request) {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const subscriptions = JSON.parse(localStorage.getItem('subscriptions') || '[]');
    
    const totalRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);
    const totalOrders = orders.length;
    const activeSubscriptions = subscriptions.filter(s => s.status === 'active').length;
    
    return new Response(JSON.stringify({
        totalRevenue,
        totalOrders,
        activeSubscriptions,
        avgOrderValue: totalOrders > 0 ? Math.round(totalRevenue / totalOrders) : 0,
        conversionRate: '3.2%',
        customerSatisfaction: '4.8/5'
    }), { headers: { 'Content-Type': 'application/json' } });
}

// Global Search Handler
async function handleGlobalSearch(request) {
    const url = new URL(request.url);
    const query = url.searchParams.get('q')?.toLowerCase() || '';
    
    if (!query || query.length < 2) {
        return new Response(JSON.stringify({ results: [], message: 'Search query too short' }), { headers: { 'Content-Type': 'application/json' } });
    }
    
    const searchResults = {
        products: [
            { id: 1, name: 'AI Content Generator', type: 'product', url: '/products/ai-content-generator' },
            { id: 2, name: 'SEO Optimization Tool', type: 'product', url: '/products/seo-tool' }
        ],
        pages: [
            { title: 'About Us', type: 'page', url: '/about' },
            { title: 'Contact Support', type: 'page', url: '/support' }
        ],
        articles: [
            { title: 'Getting Started Guide', type: 'article', url: '#' },
            { title: 'API Documentation', type: 'article', url: '#' }
        ]
    };
    
    const allResults = [
        ...searchResults.products,
        ...searchResults.pages,
        ...searchResults.articles
    ].filter(item => item.name?.toLowerCase().includes(query) || item.title?.toLowerCase().includes(query));
    
    return new Response(JSON.stringify({ query, results: allResults, count: allResults.length }), { headers: { 'Content-Type': 'application/json' } });
}

// Recommendations Handler
async function handleGetRecommendations(request) {
    const url = new URL(request.url);
    const category = url.searchParams.get('category') || 'all';
    
    const recommendations = [
        { id: 1, name: 'AI Content Generator', category: 'Content', score: 0.95, reason: 'Popular with your interests' },
        { id: 2, name: 'SEO Optimization Tool', category: 'SEO', score: 0.88, reason: 'Often bought together' },
        { id: 3, name: 'Analytics Dashboard', category: 'Analytics', score: 0.82, reason: 'Trending this month' },
        { id: 4, name: 'Automation Suite', category: 'Automation', score: 0.79, reason: 'Customers like you prefer this' }
    ];
    
    const filtered = category === 'all' ? recommendations : recommendations.filter(r => r.category === category);
    return new Response(JSON.stringify({ recommendations: filtered.slice(0, 4) }), { headers: { 'Content-Type': 'application/json' } });
}

