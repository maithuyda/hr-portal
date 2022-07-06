module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        quoteProps: 'consistent',
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
      },
    ],
    '@typescript-eslint/no-empty-function': ['warn'],
    '@typescript-eslint/no-empty-interface': 'warn',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'no-unused-vars': ['error', {vars: 'all', args: 'none'}],
    'react/jsx-key': 'error',
    'default-case': 'error',
    'no-loop-func': 'error',
    'id-length': ['error', {min: 2}],
  },
};
