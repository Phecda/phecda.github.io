/**
 * @type import('eslint').Linter.Config
 */
module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
  },
  env: {
    es6: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'preact',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react/prop-types': [1, { skipUndeclared: true }],
  },
};
