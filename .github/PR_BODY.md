This PR aligns `package.json` to the README (Next.js 14, Fastify, Drizzle, Redis, Clerk),
adds integration tests for worker endpoints, adds a CI workflow, fixes security issues
(replaced `bcrypt` with `bcryptjs`), and adds E2E/wrangler support.

What changed:
- Aligned dependencies to README (Next.js 14, Fastify, Drizzle ORM, `pg`, Redis, Clerk)
- Added unit tests for core modules and integration tests for `worker.js` endpoints
- Added E2E tests (Jest + script fallback) and `wrangler`-based E2E runner
- Added CI workflow to run tests and optional gated E2E job when `CF_API_TOKEN`/`CF_ACCOUNT_ID` secrets are set
- Fixed security issue by replacing native `bcrypt` (pulled in vulnerable tar via node-pre-gyp) with `bcryptjs`
- Added `.env.example`, `jest.config.cjs`, and improved developer docs (README, `.github/copilot-instructions.md`)

Testing:
- Unit + integration tests pass locally via `npm test` (lightweight runner). E2E script and wrangler-based E2E runner also verified locally when `wrangler` and Cloudflare secrets are available.

Notes:
- `wrangler.toml` was cleaned to remove embedded HTML and hard-coded secrets; secrets should be provided via Cloudflare/CI secrets.
- CI `e2e-wrangler` job is gated behind `CF_API_TOKEN` and `CF_ACCOUNT_ID` to avoid leaking tokens.

Please review and advise whether you'd prefer we update the README to reflect the current dependencies instead of aligning `package.json` to the README.