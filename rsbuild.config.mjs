import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { fileURLToPath } from 'node:url';

const srcRoot = fileURLToPath(new URL('./src', import.meta.url));
const publicRoot = fileURLToPath(new URL('./public', import.meta.url));

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index: './src/main.tsx',
    },
  },
  html: {
    template: './index.html',
  },
  resolve: {
    alias: {
      '@': srcRoot,
    },
  },
  tools: {
    rspack: {
      resolve: {
        roots: [publicRoot],
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3090,
  },
});
