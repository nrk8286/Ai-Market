const { spawnSync } = require('child_process');

// If a specific Jest test file is requested (e.g., E2E wrangler tests), run it directly
const requestedTestFile = process.env.JEST_TEST_FILE;
if (requestedTestFile) {
  const run = spawnSync('npx', ['jest', requestedTestFile, '--runInBand'], { stdio: 'inherit', env: process.env });
  process.exit(run.status);
}

// Try to list Jest tests first
const list = spawnSync('npx', ['jest', '--listTests'], { encoding: 'utf8' });
const output = (list.stdout || '') + (list.stderr || '');

if (output && output.trim().length > 0 && !/No tests found/i.test(output)) {
  // Run Jest normally
  const run = spawnSync('npx', ['jest', '--runInBand'], { stdio: 'inherit' });
  process.exit(run.status);
} else {
  console.log('No Jest tests found or Jest not usable in this environment — falling back to lightweight runner.');
  const run = spawnSync('node', ['scripts/run-tests.js'], { stdio: 'inherit' });
  process.exit(run.status);
}