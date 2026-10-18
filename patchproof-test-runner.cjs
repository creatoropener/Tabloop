'use strict';

// Runs ordinary project tests and PatchProof's hidden generated regression test.
// The runner scans the repository root and ./tests because the adapter may place
// its generated test in either location. The local tsx loader supports JS and TS
// test files without requiring a network call during the test run.
const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const root = __dirname;
const testRoots = [root, path.join(root, 'tests')];
const ordinaryPattern = /\.(?:test|spec)\.(?:js|cjs|mjs|ts|cts|mts)$/i;
const patchProofPattern = /^\.test_patchproof_issue_\d+\.test\.(?:js|cjs|mjs|ts|cts|mts)$/i;
const candidates = new Set();

for (const directory of testRoots) {
  if (!fs.existsSync(directory)) continue;
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (!entry.isFile()) continue;
    if (ordinaryPattern.test(entry.name) || patchProofPattern.test(entry.name)) {
      candidates.add(path.join(directory, entry.name));
    }
  }
}

const testFiles = [...candidates].sort();
if (testFiles.length === 0) {
  console.error('No project or PatchProof regression tests were found.');
  process.exit(1);
}

const result = spawnSync(process.execPath, ['--import', 'tsx', '--test', ...testFiles], {
  cwd: root,
  stdio: 'inherit'
});

if (result.error) {
  console.error(`Unable to start the test runner: ${result.error.message}`);
  process.exit(1);
}
process.exit(result.status === null ? 1 : result.status);
