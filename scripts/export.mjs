import { mkdir, cp, rm } from 'node:fs/promises';
const destination = new URL('../exports/site/', import.meta.url);
await mkdir(new URL('../exports/', import.meta.url), { recursive: true });
await rm(destination, { recursive: true, force: true });
await cp(new URL('../dist/', import.meta.url), destination, {
  recursive: true,
});
console.log(
  'Portable static site exported to exports/site/ (serve with an HTTP server).',
);
