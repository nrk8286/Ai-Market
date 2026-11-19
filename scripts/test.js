import { spawnSync } from 'child_process';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
let jest;
try {
  jest = require.resolve('jest/bin/jest');
} catch (error) {
  if (error.code !== 'MODULE_NOT_FOUND') throw error;
}

function finish(run) {
  if (run.error) console.error(run.error.message);
  // A launch failure has a null status; process.exit(null) incorrectly succeeds.
  process.exit(run.status ?? 1);
}

const requestedTestFile = process.env.JEST_TEST_FILE;
if (requestedTestFile) {
  if (!jest) {
    console.error('Jest is required to run JEST_TEST_FILE. Install development dependencies with npm ci.');
    process.exit(1);
  }
  finish(spawnSync(process.execPath, [jest, requestedTestFile, '--runInBand'], { stdio: 'inherit', env: process.env }));
}

// Try to list Jest tests first
const list = jest ? spawnSync(process.execPath, [jest, '--listTests', '--runInBand'], { encoding: 'utf8' }) : null;
if (list && (list.error || list.status !== 0)) {
  process.stderr.write(list.stderr || list.stdout || 'Jest test discovery failed.\n');
  finish(list);
}

if (list?.stdout.trim()) {
  // Run Jest normally
  finish(spawnSync(process.execPath, [jest, '--runInBand'], { stdio: 'inherit' }));
} else {
  console.log('No Jest tests found or Jest not usable in this environment — falling back to lightweight runner.');
  finish(spawnSync(process.execPath, ['scripts/run-tests.js'], { stdio: 'inherit' }));
}
