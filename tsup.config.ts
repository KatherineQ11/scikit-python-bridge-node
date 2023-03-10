import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['bin/**/*.ts', 'src/**/*.ts'],
  outDir: 'build',
  target: 'node16',
  platform: 'node',
  format: ['esm'],
  splitting: false,
  sourcemap: true,
  minify: false,
  shims: false
})
