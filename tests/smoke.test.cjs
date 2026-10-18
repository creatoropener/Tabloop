'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');

test('homepage keeps the named contact form and confirmation page', () => {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  assert.match(html, /<form\b[^>]*\bname=["']tabloop-contact["']/i);
  assert.ok(fs.existsSync(path.join(root, 'thank-you.html')));
});
