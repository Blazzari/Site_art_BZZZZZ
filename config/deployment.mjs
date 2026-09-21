// Public deployment metadata only. Never store credentials here.
export function deployment(env = {}) {
  const repository = env.GITHUB_REPOSITORY || '';
  const [owner, name] = repository.split('/');
  const defaultSite = owner
    ? 'https://' + owner.toLowerCase() + '.github.io'
    : undefined;
  const site = env.SITE_URL || defaultSite;
  const defaultBase =
    name && name.toLowerCase() !== owner.toLowerCase() + '.github.io'
      ? '/' + name + '/'
      : '/';
  const base = env.BASE_PATH || defaultBase;
  if (!/^\/(?:[a-zA-Z0-9_-]+\/)*$/.test(base))
    throw new Error(
      'BASE_PATH must be / or /folder/ (trailing slash required).',
    );
  if (site) {
    const url = new URL(site);
    if (
      url.protocol !== 'https:' ||
      url.username ||
      url.password ||
      url.search ||
      url.hash ||
      url.pathname !== '/'
    ) {
      throw new Error(
        'SITE_URL must be an HTTPS origin without path, credentials, query or fragment.',
      );
    }
  }
  return { site, base };
}
