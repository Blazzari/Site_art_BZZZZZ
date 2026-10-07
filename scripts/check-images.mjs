import assert from 'node:assert/strict';
import { relative, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile, readdir } from 'node:fs/promises';
import { gallery } from '../src/content/gallery.ts';

// Read dimensions directly from WebP headers; no image library dependency.
function dimensions(buffer) {
  assert.equal(buffer.toString('ascii', 0, 4), 'RIFF');
  assert.equal(buffer.toString('ascii', 8, 12), 'WEBP');
  for (let offset = 12; offset + 8 <= buffer.length;) {
    const type = buffer.toString('ascii', offset, offset + 4);
    const size = buffer.readUInt32LE(offset + 4);
    const start = offset + 8;
    if (type === 'VP8X')
      return [
        1 + buffer.readUIntLE(start + 4, 3),
        1 + buffer.readUIntLE(start + 7, 3),
      ];
    if (type === 'VP8 ')
      return [
        buffer.readUInt16LE(start + 6) & 16383,
        buffer.readUInt16LE(start + 8) & 16383,
      ];
    if (type === 'VP8L') {
      const bits = buffer.readUInt32LE(start + 1);
      return [(bits & 16383) + 1, ((bits >>> 14) & 16383) + 1];
    }
    offset = start + size + (size % 2);
  }
  throw new Error('Missing WebP dimensions');
}
const root = new URL('../public/images/', import.meta.url);
const registered = new Set();
let bytes = 0;
for (const photo of Object.values(gallery).flat()) {
  assert.match(photo.file, /^[a-z0-9-]+\/[a-z0-9-]+\.webp$/);
  assert.ok(photo.alt.trim(), `Missing alt: ${photo.file}`);
  assert.ok(!registered.has(photo.file), `Duplicate: ${photo.file}`);
  registered.add(photo.file);
  const buffer = await readFile(new URL(photo.file, root));
  assert.deepEqual(dimensions(buffer), [photo.width, photo.height], photo.file);
  bytes += buffer.length;
  if (buffer.length > 500 * 1024)
    console.warn(`Review image weight: ${photo.file}`);
}
for (const file of await readdir(root, {
  recursive: true,
  withFileTypes: true,
})) {
  if (!file.isFile()) continue;
  if (file.name === '.gitkeep') continue;
  const path = relative(fileURLToPath(root), join(file.parentPath, file.name));
  assert.ok(registered.has(path), `Unregistered published image: ${path}`);
}
console.log(
  `${registered.size} images checked; ${(bytes / 1024 / 1024).toFixed(2)} MiB total (not initial load).`,
);
