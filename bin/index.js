const path = require('path');

const resolve = dir => path.resolve(__dirname, '..', dir);

require('esbuild')
  .build({
    entryPoints: [resolve('src/bin/index.js')],
    bundle: true,
    platform: 'node',
    target: ['es2020'],
    minify: true,
    errorLimit: 0,
    outfile: resolve('dist/main.js')
  })
  .catch(() => process.exit(1));
