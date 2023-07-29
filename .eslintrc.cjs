module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        es6: true,
        browser: true,
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'jsx-quotes': [1, 'prefer-double'],
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': 0,
    'react/button-has-type': 0,
    '@typescript-eslint/no-shadow': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/prefer-default-export':
      'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 0,
    'no-console': 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
      },
    },
    extensions: ['.ts'],
  },
  ignorePatterns: ['vite.config.ts'],
};
