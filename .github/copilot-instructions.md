<!-- .github/copilot-instructions.md -->
<!-- .github/copilot-instructions.md -->
# AI coding assistant instructions — Ai-Market (concise)

Purpose: give an AI coding agent the precise, actionable context needed to be productive in this repository.

- **Big picture**: autonomous marketing-site generator. Core runtime: Node (serverless-friendly) with Cloudflare Workers (`worker.js`) as the AI/API entrypoint. Business logic lives under `src/` (agents in `src/agents/`, modules in `src/modules/`), and small service wrappers live in `src/services/` (Stripe, Billing, Config).

- **Start here (high value files)**
  - `worker.js` — primary AI/API routing and orchestration for agent flows.
  - `src/agents/AutonomousMarketingAgent.js` — the top-level agent composition and step sequence.
  - `src/modules/` — individual modules (keyword research, niche discovery, tech stack setup).
  - `src/services/StripeClient.js`, `src/services/BillingStore.js`, `src/services/ConfigStore.js` — external integrations and config access.
  - `tests/` — many focused unit/integration tests and example payloads.

- **Developer workflows (commands you should use)**
  - Start dev server: `npm start` (project-specific start). If you need local Worker emulation: `wrangler dev`.
  - Run tests: `npm test` (uses `scripts/run-tests.js` — preferred for CI-like runs). There are Jest-style tests in `tests/` you can run from repo root if needed.
  - E2E wrangler helper: `node scripts/run-e2e-wrangler.js` (used by e2e tests and CI preview jobs).
  - Deploy (Cloudflare): `npm run deploy` or use `wrangler publish` per `wrangler.toml`.

- **Environment & secrets (read before making runtime changes)**
  - Common env vars: `OPENAI_API_KEY`, `PAYMENT_GATEWAY_API_KEY`, `STRIPE_API_KEY`, `STRIPE_WEBHOOK_SECRET`, `ADMIN_TOKEN`.
  - Cloudflare/CI: `CF_ACCOUNT_ID`, `CF_API_TOKEN` (for `wrangler`), `DD_API_KEY`/`DD_APP_KEY` for Datadog checks.
  - DB/infra: look for `NEON_DATABASE_URL`, `REDIS_URL` references in `src/` and README.

- **Project patterns & constraints (what I've observed)**
  - API-first: logic exposed as HTTP POST endpoints consumed by UI and orchestration agents (see `worker.js`).
  - AI code centralization: prompts, orchestration and retry/stream logic are implemented in `worker.js` and `src/agents/*` — edit these for behavior changes.
  - Serverless assumptions: avoid long-running background tasks; persistent state lives in Neon/Redis and is accessed via small service wrappers.
  - Tests: prefer the repo's `scripts/run-tests.js` runner (CI uses it). Tests in `tests/` are the authoritative examples of expected request shapes.

- **Integration points to watch when changing behavior**
  - OpenAI usage: search for OpenAI client initialization and embedding calls in `src/` and `worker.js` to keep prompt patterns consistent.
  - Payments: `src/services/StripeClient.js` and `POST /marketplace/checkout` / `POST /webhooks/stripe` handlers — preserve existing token/admin guard (`ADMIN_TOKEN`).
  - Deployment: `wrangler.toml` config + `scripts/run-e2e-wrangler.js` — CI has a gated e2e job that requires Cloudflare secrets.

- **How to change code safely**
  - Make small, focused PRs touching one route/agent at a time and include tests that mirror `tests/*.test.js` request shapes.
  - Preserve env-driven behavior; prefer toggling features via env vars instead of hard-coding.
  - When editing prompts or agent flow, update the corresponding test in `tests/` or add a focused integration test that invokes `worker.js` directly.

- **Quick reference examples**
  - Agent orchestration: `src/agents/AutonomousMarketingAgent.js` (modify step sequence here).
  - Add new AI route: update `worker.js` to add a POST handler and route to a module in `src/modules/`.
  - Run unit tests: `npm test` (uses `scripts/run-tests.js`).

If anything above is unclear or you want me to expand a section (tests, `package.json` scripts, deploy, or `worker.js` routes), tell me which one and I will iterate.
