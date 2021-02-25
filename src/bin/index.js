// TODO: support config yaml
// import yaml from 'js-yaml';
// import fs from 'fs';
// import path from 'path';

import app from '../app';

// let config;
// try {
//   config = yaml.load(
//     fs.readFileSync(path.join(__dirname, '..', 'config/index.yaml'), 'utf8')
//   );
// } catch (e) {
//   console.log(e);
// }

const CONFIG = {
  PORT: '3001',
  HOST: 'localhost'
};

app.listen(CONFIG.PORT, err => {
  if (err) {
    throw err;
  }

  console.log(`http server is running at ${CONFIG.HOST}:${CONFIG.PORT}`);
});
