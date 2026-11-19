import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { copyFileSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import test from 'node:test';

function runFixture(jestSource, requestedFile) {
  const fixture = mkdtempSync(join(tmpdir(), 'ai-market-runner-'));
  try {
    const scripts = join(fixture, 'scripts');
    const jest = join(fixture, 'node_modules', 'jest');
    mkdirSync(scripts, { recursive: true });
    mkdirSync(jest, { recursive: true });
    writeFileSync(join(fixture, 'package.json'), JSON.stringify({ type: 'module' }));
    writeFileSync(join(jest, 'package.json'), JSON.stringify({ name: 'jest', exports: { './bin/jest': './cli.cjs' } }));
    writeFileSync(join(jest, 'cli.cjs'), jestSource);
    copyFileSync(new URL('./test.js', import.meta.url), join(scripts, 'test.js'));
    writeFileSync(join(scripts, 'run-tests.js'), "throw new Error('A failed Jest invocation must not fall back');");
    const env = { ...process.env };
    delete env.JEST_TEST_FILE;
    if (requestedFile) env.JEST_TEST_FILE = requestedFile;
    return spawnSync(process.execPath, [join(scripts, 'test.js')], { cwd: fixture, env, encoding: 'utf8', timeout: 10000 });
  } finally {
    assert.equal(dirname(fixture), resolve(tmpdir()));
    rmSync(fixture, { recursive: true, force: true });
  }
}

test('an explicitly selected failing suite returns its failing exit code', () => {
  const result = runFixture("process.exit(process.argv.includes('selected.test.js') ? 7 : 99)", 'selected.test.js');
  assert.equal(result.status, 7, result.stderr);
});

test('Jest discovery errors cannot fall back to a smaller passing suite', () => {
  const result = runFixture("console.error('broken test configuration'); process.exit(3)");
  assert.equal(result.status, 3, result.stderr);
  assert.match(result.stderr, /broken test configuration/);
});

test('discovered suites execute through the current Node runtime', () => {
  const result = runFixture("if(process.argv.includes('--listTests')) console.log('example.test.js'); else console.log('full suite ran');");
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /full suite ran/);
});
