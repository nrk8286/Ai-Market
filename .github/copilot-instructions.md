# AI Marketplace - Cloudflare Workers Application

ALWAYS follow these instructions first and only search for additional information if these instructions are incomplete or found to be in error.

## Project Overview
AI Marketplace is a Cloudflare Workers-based application serving an AI-powered marketplace for tools and services. The application uses serverless JavaScript workers with static frontend assets (HTML/CSS/JS) and includes API endpoints for marketplace functionality.

## Essential Setup and Bootstrap Commands

Run these commands in exact order to set up the development environment:

1. **Install Node.js dependencies:**
   ```bash
   npm install
   ```
   - Expected time: 60 seconds. NEVER CANCEL - wait for completion.
   - Warnings about deprecated packages are expected and can be ignored.
   - Security vulnerabilities reported by npm audit are known and non-critical.

2. **Install Wrangler globally (required for development):**
   ```bash
   npm install -g wrangler
   ```
   - Expected time: 10 seconds. Required for local development.

3. **Start development server:**
   ```bash
   npm start
   ```
   - Expected time: 15 seconds to start. NEVER CANCEL.
   - Server will run on http://localhost:8787
   - Warnings about cloudflare.com connectivity are expected in development and can be ignored.
   - Set timeout to 30+ seconds when running this command.

## Build and Deployment

- **No build step required** - This is a direct Cloudflare Workers deployment.
- **Deploy (dry run):** `wrangler deploy --dry-run`
- **Deploy to production:** `npm run deploy` (requires Cloudflare authentication)
- **Deploy time:** 10-20 seconds. NEVER CANCEL deployment commands.

## Testing

- **Run tests:** `npm test`
  - Uses Jest but no tests currently exist.
  - This will exit with code 1 saying "No tests found" - this is expected.
  - To make tests pass, add `--passWithNoTests` flag.
  - Expected output: "No tests found, exiting with code 1" - this is normal.

## Critical Files and Structure

```
/
├── worker.js              # MAIN ENTRY POINT - Cloudflare Worker with all API routes
├── wrangler.toml          # Cloudflare configuration with environment variables
├── package.json           # Node.js dependencies and scripts
├── index.html            # Frontend homepage
├── styles.css            # Frontend styling
├── scripts.js            # Frontend JavaScript
├── README.md             # Project documentation
└── .github/
    └── workflows/
        └── datadog-synthetics.yml  # CI/CD pipeline
```

## API Endpoints and Routes

The application serves these endpoints (defined in worker.js):

- `GET /` - Homepage (serves index.html content)
- `GET /about` - About page
- `GET /contact` - Contact page  
- `GET /marketplace/items` - Returns JSON array of marketplace items
- `POST /marketplace/buy` - Processes item purchases (expects JSON: {"itemId": number})
- `GET /api/generate` - AI content generation
- `GET /api/fix-errors` - AI error fixing
- `POST /api/customer-support` - AI customer support
- All other routes return 404

## Environment Variables

Environment variables are configured in `wrangler.toml`:
- `SITE_TITLE` - Application title
- `OPENAI_API_KEY` - OpenAI API access key
- `PAYMENT_GATEWAY_API_KEY` - Payment processing key

DO NOT commit real API keys. Use placeholder values for development.

## Validation Requirements

ALWAYS validate your changes by running these complete scenarios:

### Basic Functionality Test
```bash
# Start the development server
npm start

# In another terminal, test key endpoints:
curl -s -o /dev/null -w "%{http_code}" http://localhost:8787  # Should return 200
curl -s http://localhost:8787/marketplace/items  # Should return JSON array
curl -s -X POST -H "Content-Type: application/json" -d '{"itemId": 1}' http://localhost:8787/marketplace/buy  # Should return success JSON
```

### Complete User Journey
1. Start development server with `npm start` (wait for "Ready on http://localhost:8787")
2. Open browser to http://localhost:8787
3. Verify homepage loads with "Welcome to the AI Marketplace" heading
4. Click "View Marketplace Items" - should show JSON response with AI tools
5. Navigate to /about - should show About Us page with team description
6. Navigate to /api/generate - should show AI-generated content page
7. Test a 404 route like /nonexistent - should return 404 status

### Pre-commit Validation
- Always test that `npm start` works after making changes
- Verify the development server starts within 30 seconds
- Test at least one API endpoint manually
- If modifying worker.js, test all affected routes

## Common Development Tasks

### Making Changes to API Routes
- Edit `worker.js` - this contains all backend logic
- Restart development server: Stop with Ctrl+C, run `npm start`
- Test changes immediately with curl or browser

### Making Frontend Changes  
- Edit `index.html`, `styles.css`, or `scripts.js`
- Changes are served directly by the worker - restart server to see updates

### Adding New Dependencies
- Add to `package.json` and run `npm install`
- Note: Many listed dependencies (express, mongoose, etc.) are not actually used

## Known Issues and Workarounds

- **npm audit warnings**: Multiple security vulnerabilities exist but are non-critical for this serverless application
- **Cloudflare connectivity warnings**: Expected in development environment - can be ignored
- **No tests**: Jest is configured but no test files exist - this is expected
- **Unused dependencies**: package.json contains many dependencies not used by the Cloudflare Worker

## Timing Expectations

| Command | Expected Time | Timeout Setting |
|---------|---------------|-----------------|
| `npm install` | 60 seconds | 90+ seconds |
| `npm start` | 15 seconds | 30+ seconds |
| `wrangler deploy --dry-run` | <1 second | 30+ seconds |
| `npm run deploy` | <1 second | 30+ seconds |
| API response tests | <1 second | 10 seconds |

## CI/CD Pipeline

- Uses GitHub Actions with Datadog Synthetics
- Tests production endpoints at searchenginepro.uk
- Runs on push to main branch and pull requests

## Emergency Debugging

If the development server fails to start:
1. Check wrangler.toml for syntax errors
2. Ensure worker.js has valid JavaScript
3. Try `wrangler dev worker.js` directly
4. Check that `main = "worker.js"` is set in wrangler.toml

Always run complete validation scenarios before committing changes.