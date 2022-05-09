import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: 'packages/index.js',
  output: {
    file: 'output/main.bundle.js',
    format: 'es',
  },
  plugins: [nodeResolve()],
};