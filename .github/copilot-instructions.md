<!-- .github/copilot-instructions.md -->
# AI coding assistant instructions — Ai-Market

Purpose: give an AI coding agent concise, actionable context to be productive immediately in this repository.

- **Big picture**: This project is an autonomous marketing-website generator. The README describes a Next.js + Node.js stack (Next 14 frontend; Node/Fastify backend), Drizzle ORM + Neon Postgres, Redis, Clerk auth, and Vercel/Cloudflare deployment options. The code exposes HTTP API routes (e.g. `/api/autonomous-agent`, `/api/niche-discovery`, `/api/keyword-research`) that implement the 13-step automation flow.

- **Where to look first**:
  - README: c:\Users\nrk82\OneDrive\node_modules\Ai-Market\README.md
  - API routing and server handlers: search for `worker.js` and `api/` folders — the README mentions `worker.js` as the entry for AI routes.
  - Package scripts: inspect `package.json` for `start`, `test`, and `deploy` commands.

- **Essential dev workflows**:
  - Start dev server: `npm start` (per README). If project is Next.js, prefer `npm run dev` if present.
  - Tests: `npm test` (runs a lightweight Node test runner located at `scripts/run-tests.js`). Use this when running inside environments where Jest may ignore the repo (for example if the project is nested under `node_modules`). There are also `tests/*.test.js` files present for Jest if you run from a standard repo root.
  - Deploy (Cloudflare): `npm run deploy` or use `wrangler` as described in README.
  - Key env vars: `OPENAI_API_KEY`, `PAYMENT_GATEWAY_API_KEY` — must be present in `.env` for local runs.

- **Testing & CI**:
  - Local quick checks: `npm test` (lightweight runner).
  - CI: GitHub Actions workflow added at `.github/workflows/ci.yml` to run `npm test` on push/PR to `main`.
  - Add integration tests when adding new endpoints; prefer focused unit tests for modules and a small integration harness that calls `worker.js` endpoints with `wrangler dev` in CI if you need end-to-end verification.

- **Patterns & conventions discovered**:
  - API-first design: many features are exposed as POST endpoints used by the web UI and orchestration agents (example request in README to `/api/autonomous-agent`).
  - AI responsibilities are centralized in a worker/route (README references `worker.js`) — prefer editing that file for AI-related flows rather than scattering prompts across UI components.
  - Use serverless-friendly assumptions: database is Neon (serverless Postgres), hosting targets Vercel/Cloudflare; avoid long-running background processes unless explicitly implemented with Redis or external workers.

- **Integration points**:
  - OpenAI: used for prompt-driven generation and fixes — follow existing usage patterns (look for OpenAI client initialization, env var usage, and embedding calls).
  - Payments: `PAYMENT_GATEWAY_API_KEY` — changes here affect transactional flows.
  - Analytics & monitoring: Plausible and other services are referenced; keep telemetry additions minimal and privacy-focused.

- **How to generate changes safely**:
  - Small focused PRs: change one API route or worker behavior at a time and include a unit/integration test where possible.
  - Preserve environment-driven behavior: prefer feature toggles via env vars over hard-coded changes.

- **Examples to reference when editing or adding features**:
  - Example API call (from README): use the POST to `/api/autonomous-agent` payload shape shown in the README for end-to-end tests.
  - Deploy steps: `wrangler login` + `npm run deploy` for Cloudflare; use `npm start`/`npm test` locally.

- **Do not assume**:
  - That the codebase uses the exact file layout implied by the README; always search for `api/`, `worker.js`, `package.json`, and `pages/` or `app/` directories before making structural changes.

- **If you need more info**:
  - Ask the maintainer for the `package.json` scripts and the exact path for `worker.js` or the primary API router. If tests fail, request logs and the failing test name.

End: After you review this file, say which files or workflows you want me to expand (tests, package.json scripts, deploy, or worker routes) and I'll update the instructions accordingly.
