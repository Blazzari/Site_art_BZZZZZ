import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import { deployment } from './config/deployment.mjs';
export default defineConfig({
  ...deployment(process.env),
  output: 'static',
  devToolbar: { enabled: false },
  server: { host: '127.0.0.1', port: 4321 },
  vite: {
    server: {
      host: '127.0.0.1',
      strictPort: true,
      allowedHosts: ['localhost'],
      cors: false,
      fs: {
        strict: true,
        allow: [fileURLToPath(new URL('.', import.meta.url))],
      },
    },
    preview: { host: '127.0.0.1', strictPort: true, cors: false },
    build: { sourcemap: false },
  },
});
