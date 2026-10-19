import { test } from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from './patchproof_helpers/jsdom.mjs';
import { readFileSync } from 'node:fs';

test('contact form submission targets correct relative path', async () => {
  const html = readFileSync(new URL('./index.html', import.meta.url), 'utf8');
  const dom = new JSDOM(html, { url: 'https://patchproof.invalid/', runScripts: 'outside-only' });
  const form = dom.window.document.querySelector('form[name="tabloop-contact"]');
  assert.strictEqual(form.getAttribute('action'), 'thank-you.html');
});
