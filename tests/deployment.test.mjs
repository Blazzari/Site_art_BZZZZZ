import test from 'node:test';
import assert from 'node:assert/strict';
import { deployment } from '../config/deployment.mjs';
test('local build needs neither a GitHub account nor credentials', () => {
  assert.deepEqual(deployment(), { site: undefined, base: '/' });
});
test('GitHub project URL follows a new owner and renamed repository', () => {
  assert.deepEqual(
    deployment({ GITHUB_REPOSITORY: 'NewArtist/NewPortfolio' }),
    { site: 'https://newartist.github.io', base: '/NewPortfolio/' },
  );
});
test('GitHub user site is served at the root', () => {
  assert.equal(
    deployment({ GITHUB_REPOSITORY: 'NewArtist/newartist.github.io' }).base,
    '/',
  );
});
test('custom domain and root path override GitHub defaults', () => {
  assert.deepEqual(
    deployment({
      GITHUB_REPOSITORY: 'NewArtist/NewPortfolio',
      SITE_URL: 'https://example.org',
      BASE_PATH: '/',
    }),
    { site: 'https://example.org', base: '/' },
  );
});
test('deployment rejects embedded credentials and malformed paths', () => {
  for (const site of [
    'http://example.org',
    'https://user:secret@example.org',
    'https://example.org/path',
    'https://example.org?q=x',
  ])
    assert.throws(() => deployment({ SITE_URL: site }));
  for (const base of [
    '//example.org/',
    '/../',
    '/missing-trailing-slash',
    '/a?b/',
  ])
    assert.throws(() => deployment({ BASE_PATH: base }));
});
