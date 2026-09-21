import { readdir, readFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
const forbidden = [
  /file:\/\//i,
  /\/(?:Users|home)\/[A-Za-z0-9_.-]+\//,
  /[A-Z]:\\Users\\/i,
  /https?:\/\/(?:localhost|127\.0\.0\.1|0\.0\.0\.0)(?=[:/"'\s]|$)/i,
  /-----BEGIN (?:OPENSSH |RSA |EC )?PRIVATE KEY-----/,
  /(?:gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,})/,
];
async function inspect(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = join(dir, entry.name);
    if (entry.isSymbolicLink())
      throw new Error('Symlink in public output: ' + file);
    if (entry.isDirectory()) {
      await inspect(file);
      continue;
    }
    if (
      entry.name.endsWith('.map') ||
      entry.name.startsWith('.env') ||
      /\.(?:pem|key|p12|pfx)$/.test(entry.name)
    )
      throw new Error('Private/development file in output: ' + file);
    if (
      ['.html', '.js', '.css', '.json', '.xml', '.txt', '.svg'].includes(
        extname(file),
      )
    ) {
      const text = await readFile(file, 'utf8');
      if (forbidden.some((pattern) => pattern.test(text)))
        throw new Error('Possible local reference or secret in: ' + file);
    }
  }
}
await inspect('dist');
console.log(
  'Static output checked: no detected local paths, local URLs, keys or source maps.',
);
