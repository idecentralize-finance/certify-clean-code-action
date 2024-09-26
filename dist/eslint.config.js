// eslint.config.js
const js = require('@eslint/js');

export default [
    js.configs.recommended,
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {},
        },
        rules: {
            'no-console': 'off',
            'semi': ['error', 'always'],
        },
    },
];
