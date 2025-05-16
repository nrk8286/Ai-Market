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

        if (url.pathname.startsWith("/marketplace/buy")) {
            let result = await processPayment(env.PAYMENT_GATEWAY_API_KEY, request);
            return new Response(result, {
                headers: { "Content-Type": "application/json" },
            });
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
        <meta name="robots" content="index, follow">
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
        <meta name="robots" content="index, follow">
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
        <meta name="robots" content="index, follow">
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
