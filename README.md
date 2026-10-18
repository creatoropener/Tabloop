# Tabloop PatchProof preparation bundle

This bundle prepares the repository for a first **experimental static-web** PatchProof attempt on Tabloop issue #2. It does not fix the target bug in `index.html`.

## Files to copy to the root of `creatoropener/Tabloop`

Copy/replace `package.json`, `patchproof.json`, and `tsconfig.json`; add `patchproof-test-runner.cjs`; add `tests/smoke.test.cjs`.

Changes included:

- Corrects the `checkJs` typo (`flase` -> `false`).
- Selects the `static-web` runtime because the reported issue concerns an HTML form URL, not a TypeScript function.
- Replaces the placeholder `npm test` script with a real test runner.
- Adds one smoke test that checks the form and confirmation page exist, but deliberately does **not** assert the form action. That means the intended bug remains available for PatchProof to reproduce.
- The test runner also explicitly includes PatchProof's generated hidden test filename, when it is placed at the repository root or in `tests/`.

## Before triggering the issue

1. Keep `index.html`'s current `action="/thank-you.html"` unchanged until PatchProof has had a chance to test it.
2. From the repository root, run `npm ci` and then `npm test`. The test should pass and report one test.
3. Commit and push these preparation changes to the default branch.
4. In GitHub Actions secrets, ensure `CONTREE_IMAGE` points to a compatible Contree image prepared with the **web** or **all** profile, including `jsdom`. The checked-in workflow passes this secret as `sandbox-image`; it does not use a runtime-specific image input.
5. Open issue #2 (`Root-Absolute Form Action Breaks Subpath / Staging Deploys`) and add the `shadow-fix` label. Do not trigger until the preparation commit is on the default branch.
6. Review the PatchProof report on the issue and the Actions run. `verified` means the generated regression distinguished the baseline from the repair; `no_reproduction`, `readiness_blocked`, or `verifier_invalid` means the report must be diagnosed before claiming success.

## Limitations

The `static-web` adapter is experimental in the project's run guide; this preparation bundle makes the project testable but cannot guarantee that the model-generated test will reproduce the behavior correctly. The GitHub Action and issue label still need to be triggered in GitHub.
