module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    semi: 0,
    'space-before-function-paren': 0
  }
};
