import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { spawn } from 'node:child_process';
const require = createRequire(import.meta.url);
const pkgPath = require.resolve('astro/package.json');
const pkg = require(pkgPath);
const child = spawn(
  process.execPath,
  [
    resolve(
      dirname(pkgPath),
      typeof pkg.bin === 'string' ? pkg.bin : pkg.bin.astro,
    ),
    ...process.argv.slice(2),
  ],
  {
    stdio: 'inherit',
    env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' },
  },
);
child.on('error', (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
child.on('exit', (code) => {
  process.exitCode = code ?? 1;
});
