
export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        
        if (url.pathname === "/") {
            return new Response(generateHomePage(), {
                headers: { "Content-Type": "text/html" },
            });
        }

        if (url.pathname.startsWith("/api/generate")) {
            let content = await generateAIContent(env.OPENAI_API_KEY);
            return new Response(content, {
                headers: { "Content-Type": "text/html" },
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
        <title>Ultimate AI-Powered SEO Site</title>
        <meta name="description" content="AI-powered content for high-ranking SEO optimization.">
        <meta name="keywords" content="AI, SEO, Cloudflare, automation, high traffic, self-learning AI">
        <meta name="robots" content="index, follow">
        <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
            h1 { color: #0078D7; }
            .content { margin: auto; width: 80%; text-align: left; }
        </style>
    </head>
    <body>
        <h1>Welcome to the Future of AI-Powered Websites</h1>
        <div class="content">
            <p>This AI-powered website continuously improves itself.</p>
            <p>Click below to generate dynamic SEO-rich content:</p>
            <a href="/api/generate">Generate AI Content</a>
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
