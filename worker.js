export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        
        if (url.pathname === "/") {
            return new Response(generateHomePage(), {
                headers: { "Content-Type": "text/html" },
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

        // Simple admin API (token-protected) for managing marketplace items
        if (url.pathname.startsWith("/admin")) {
            return handleAdmin(request, env);
        }

        // Pricing page
        if (url.pathname === '/pricing') {
            return handlePricing(request, env);
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
            const AutonomousMarketingAgent = (await import('./src/agents/AutonomousMarketingAgent.js')).default;
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
            
            const NicheDiscoveryModule = (await import('./src/modules/NicheDiscoveryModule.js')).default;
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
            
            const KeywordResearchModule = (await import('./src/modules/KeywordResearchModule.js')).default;
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
            
            const TechStackSetupModule = (await import('./src/modules/TechStackSetupModule.js')).default;
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
    const mod = await import('./src/services/ProductStore.js');
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

        // Simulate creating a payment session (replace with Stripe/real gateway in production)
        const session = {
            id: `sess_${Math.random().toString(36).slice(2, 10)}`,
            checkoutUrl: `https://payments.example.com/checkout/${item.id}?session=${Math.random().toString(36).slice(2, 8)}`
        };

        return new Response(JSON.stringify({ success: true, session }), { headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

// Billing / Subscriptions
let billingStore = null;
async function getBillingStore() {
    if (billingStore) return billingStore;
    const mod = await import('./src/services/BillingStore.js');
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
    return new Response(JSON.stringify({ plans: [{ id: 'free', price: 0 }, { id: 'pro', price: 29 }, { id: 'team', price: 99 }] }), { headers: { 'Content-Type': 'application/json' } });
}

async function handleProFeature(request, env) {
    const userId = request.headers.get('X-USER-ID');
    if (!userId) return new Response(JSON.stringify({ error: 'Missing X-USER-ID header' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
    const store = await getBillingStore();
    if (!store.hasActiveSubscription(userId)) return new Response(JSON.stringify({ error: 'Payment required' }), { status: 402, headers: { 'Content-Type': 'application/json' } });
    return new Response(JSON.stringify({ success: true, message: 'Welcome to Pro features' }), { headers: { 'Content-Type': 'application/json' } });
}

async function handleStripeWebhook(request, env) {
    try {
        if (request.method !== 'POST') {
            return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
        }

        const payload = await request.text();
        let event = null;

        // If a webhook secret is available, attempt to verify the signature (only works when Stripe SDK available)
        const sig = request.headers.get('stripe-signature') || request.headers.get('Stripe-Signature');
        if (env.STRIPE_WEBHOOK_SECRET && sig) {
            try {
                const Stripe = require('stripe');
                const stripe = Stripe(env.STRIPE_SECRET_KEY || '');
                event = stripe.webhooks.constructEvent(payload, sig, env.STRIPE_WEBHOOK_SECRET);
            } catch (err) {
                return new Response(JSON.stringify({ error: 'Webhook signature verification failed', details: err.message }), { status: 400, headers: { 'Content-Type': 'application/json' } });
            }
        } else {
            // Fallback: parse JSON body (test or demo mode)
            try {
                event = JSON.parse(payload);
            } catch (err) {
                return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
            }
        }

        // Handle events
        if (event && event.type === 'checkout.session.completed') {
            const data = event.data || event.data || {};
            const session = data.object || event.data?.object || event.object || {};
            const userId = session.client_reference_id || session.client_reference || session.metadata?.userId || null;
            if (userId) {
                const store = await getBillingStore();
                const subscription = { id: session.subscription || session.subscription_id || `sub_${Math.random().toString(36).slice(2,8)}`, status: 'active', customer: session.customer || session.customer_id || null, createdAt: new Date().toISOString() };
                store.upsertSubscription(userId, subscription);
                console.log('Billing: set active subscription for', userId, subscription.id);
            } else {
                console.log('Webhook: checkout.session.completed missing client_reference_id');
            }
        }

        return new Response(JSON.stringify({ received: true }), { headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
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
