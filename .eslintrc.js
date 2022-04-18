module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'eslint:recommended',
        'plugin:react/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        JSX: true,
    },
    rules: {
        'prettier/prettier': ['error', { endOfLine: 'auto', singleQuote: true, parser: 'typescript' }],
        'no-unused-vars': ['error', { vars: 'all', args: 'none' }],
        'react/jsx-key': 'error',
        'array-element-newline': 0,
        'default-case': 'error',
        'no-loop-func': 'error',
        eqeqeq: 'error',
        'id-length': ['warn', { min: 2 }],
        'react-native/no-inline-styles': 'error',
        'react-hooks/exhaustive-deps': 'off',
        'react/prop-types': 'off',
        'react/display-name': 'off',
        camelcase: [2, { properties: 'always' }],
    },
};