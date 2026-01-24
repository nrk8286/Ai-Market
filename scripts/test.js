const { spawnSync } = require('child_process');

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