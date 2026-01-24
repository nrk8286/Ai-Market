const { spawn, spawnSync } = require('child_process');
const fetch = global.fetch || require('node-fetch');

const WRANGLER_CMD = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const WRANGLER_ARGS = ['wrangler', 'dev', '--port', '8787'];
const BASE_URL = process.env.E2E_BASE_URL || 'http://127.0.0.1:8787';
const START_TIMEOUT = Number(process.env.WRANGLER_START_TIMEOUT || 30000);

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

async function waitForServer(url, timeoutMs) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const r = await fetch(url, { method: 'GET' });
      if (r.status === 200) return true;
    } catch (err) {
      // ignore
    }
    await sleep(500);
  }
  return false;
}

(async () => {
  console.log('Starting wrangler dev...');

  const fs = require('fs');
  const path = require('path');

  const candidates = [];
  // Prefer local node_modules binary if present
  const binPath = path.join(process.cwd(), 'node_modules', '.bin', `wrangler${process.platform === 'win32' ? '.cmd' : ''}`);
  if (fs.existsSync(binPath)) candidates.push({ cmd: binPath, args: ['dev', 'worker.js', '--port', '8787'] });

  // Fallback to npx (works if npm installed globally)
  if (process.platform === 'win32') {
    candidates.push({ cmd: 'npx.cmd', args: ['wrangler', 'dev', 'worker.js', '--port', '8787'] });
  } else {
    candidates.push({ cmd: 'npx', args: ['wrangler', 'dev', 'worker.js', '--port', '8787'] });
  }

  // Try a plain 'wrangler' command as a last resort
  candidates.push({ cmd: 'wrangler', args: ['dev', 'worker.js', '--port', '8787'] });

  const trySpawn = (cmd, args) => new Promise(resolve => {
    try {
      const c = spawn(cmd, args, { stdio: ['ignore', 'pipe', 'pipe'], env: { ...process.env }, shell: true });
      let failed = false;

      const onError = (err) => {
        failed = true;
        try { c.kill(); } catch (e) {}
        resolve(null);
      };

      c.on('error', onError);
      c.stdout.on('data', d => process.stdout.write(d));
      c.stderr.on('data', d => process.stderr.write(d));

      // If spawn happens without error within a short window, assume success
      c.on('spawn', () => resolve(c));
      setTimeout(() => {
        if (!failed) resolve(c);
      }, 500);
    } catch (err) {
      console.warn(`Could not spawn '${cmd}': ${err.message}`);
      resolve(null);
    }
  });

  let child = null;
  let startedBy = null;

  for (const c of candidates) {
    /* eslint-disable no-await-in-loop */
    const maybe = await trySpawn(c.cmd, c.args);
    if (maybe) {
      child = maybe;
      startedBy = `${c.cmd} ${c.args.join(' ')}`;
      break;
    } else {
      console.warn(`Attempt with '${c.cmd}' failed, trying next candidate...`);
    }
  }

  if (!child) {
    console.error('Failed to start wrangler dev. Ensure `wrangler` is installed (npm i --save-dev wrangler) or available in PATH.');
    process.exit(1);
  }

  const running = await waitForServer(BASE_URL + '/', START_TIMEOUT);
  if (!running) {
    console.error(`wrangler dev (started with ${startedBy}) did not start within ${START_TIMEOUT}ms`);
    try { child.kill(); } catch (e) {}
    process.exit(1);
  }

  console.log(`wrangler dev started (${startedBy}), running E2E Jest tests...`);

  // Run the project's test wrapper and request only the E2E wrangler test file
  const jestRun = spawnSync('node', ['scripts/test.js'], {
    stdio: 'inherit',
    env: { ...process.env, E2E_BASE_URL: BASE_URL, JEST_TEST_FILE: 'tests/e2e.wrangler.test.js' }
  });

  console.log('Killing wrangler dev...');
  try { child.kill(); } catch (e) { /* ignore */ }

  process.exit(jestRun.status || 0);
})();