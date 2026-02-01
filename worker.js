import { createRequire } from 'module';
const require = createRequire(typeof __filename === 'undefined' ? import.meta.url : __filename);

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

        // Gumroad webhook endpoint
        if (url.pathname.startsWith('/webhooks/gumroad')) {
            return handleGumroadWebhook(request, env);
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
            const AutonomousMarketingAgent = require('./src/agents/AutonomousMarketingAgent.cjs');
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
            
            const NicheDiscoveryModule = require('./src/modules/NicheDiscoveryModule.cjs');
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
            
            const KeywordResearchModule = require('./src/modules/KeywordResearchModule.cjs');
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
            
            const TechStackSetupModule = require('./src/modules/TechStackSetupModule.cjs');
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
    const mod = require('./src/services/ProductStore.cjs');
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
        const StripeClient = require('./src/services/StripeClient.cjs');
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
    const mod = require('./src/services/BillingStore.cjs');
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
        const StripeClient = require('./src/services/StripeClient.cjs');
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
                const StripeClientWebhook = require('./src/services/StripeClient.cjs');
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
        const ConfigStore = require('./src/services/ConfigStore.cjs');
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
                const ConfigStore = require('./src/services/ConfigStore.cjs');
                const configStore = new ConfigStore({ useFile: true });
                return new Response(JSON.stringify({ success: true, config: configStore.get('gumroad') || {} }), { headers: { 'Content-Type': 'application/json' } });
            }

            if (request.method === 'POST') {
                const body = await request.json();
                const ConfigStore = require('./src/services/ConfigStore.cjs');
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
