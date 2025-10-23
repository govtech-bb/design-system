import { defineConfig } from 'tsdown';

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  external: ['react', 'react-dom'],
  format: ['esm', 'cjs'],
  target: 'es6',
});
