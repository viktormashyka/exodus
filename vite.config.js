import { defineConfig } from 'vite';
import json5Plugin from 'vite-plugin-json5';
import { globSync } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig(({ command, mode }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,

      rollupOptions: {
        input: globSync('./src/*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: '[name]-[hash].js',
        },
      },
      outDir: '../dist',
    },
    plugins: [injectHTML(), json5Plugin(), FullReload(['./src/**/**.html'])],
    assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.ttf', '**/*.otf'],
    base: '/',
  };
});
