const path = require('path');

const resolve = dir => path.resolve(__dirname, '..', dir);

(async () => {
  const { startService } = require('esbuild');
  const service = await startService();

  try {
    await service.build({
      entryPoints: [resolve('src/bin/index.js')],
      outfile: resolve('dist/main.js'),
      minify: true,
      bundle: true,
      platform: 'node',
      target: ['es2020']
    });
  } finally {
    service.stop();
  }
})();
