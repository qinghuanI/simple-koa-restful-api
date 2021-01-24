const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const app = require('../app');

let config;
try {
  config = yaml.load(
    fs.readFileSync(path.join(__dirname, '..', 'config/index.yaml'), 'utf8')
  );
} catch (e) {
  console.log(e);
}

app.listen(config.PORT, err => {
  if (err) {
    throw err;
  }

  console.log(`http server is running at ${config.HOST}:${config.PORT}`);
});
