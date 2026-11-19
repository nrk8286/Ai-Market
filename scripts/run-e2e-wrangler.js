import { spawn } from 'node:child_process';
import { unstable_dev } from 'wrangler';

const requestedUrl = process.env.E2E_BASE_URL ? new URL(process.env.E2E_BASE_URL) : null;
if (requestedUrl && (requestedUrl.protocol !== 'http:' || !['localhost', '127.0.0.1'].includes(requestedUrl.hostname))) {
  throw new Error('E2E_BASE_URL must use a local HTTP server.');
}

let worker;
try {
  // Wrangler owns startup and shutdown; an ephemeral port avoids other dev servers.
  worker = await unstable_dev('worker.js', {
    local: true,
    ip: '127.0.0.1',
    port: requestedUrl ? Number(requestedUrl.port || 80) : 0,
    persist: false,
    vars: { TEST_MODE: '1' },
    experimental: { disableExperimentalWarning: true }
  });
  const baseUrl = `http://127.0.0.1:${worker.port}`;
  console.log(`Running E2E tests against ${baseUrl}`);
  // Keep the event loop free so Wrangler can serve requests while Jest runs.
  const status = await new Promise((resolve, reject) => {
    const child = spawn(process.execPath, ['scripts/test.js'], {
      stdio: 'inherit',
      env: { ...process.env, E2E_BASE_URL: baseUrl, JEST_TEST_FILE: 'tests/e2e.wrangler.test.js' }
    });
    child.once('error', reject);
    child.once('exit', code => resolve(code ?? 1));
  });
  process.exitCode = status;
} catch (error) {
  console.error(error);
  process.exitCode = 1;
} finally {
  await worker?.stop();
}
