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
  const child = spawn(WRANGLER_CMD, WRANGLER_ARGS, {
    stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env }
  });

  child.stdout.on('data', d => process.stdout.write(d));
  child.stderr.on('data', d => process.stderr.write(d));

  const running = await waitForServer(BASE_URL + '/', START_TIMEOUT);
  if (!running) {
    console.error(`wrangler dev did not start within ${START_TIMEOUT}ms`);
    child.kill();
    process.exit(1);
  }

  console.log('wrangler dev started, running E2E Jest tests...');

  const jestArgs = ['jest', 'tests/e2e.wrangler.test.js', '--runInBand'];
  const jestRun = spawnSync('npx', jestArgs, {
    stdio: 'inherit',
    env: { ...process.env, E2E_BASE_URL: BASE_URL }
  });

  console.log('Killing wrangler dev...');
  try { child.kill(); } catch (e) { /* ignore */ }

  process.exit(jestRun.status || 0);
})();