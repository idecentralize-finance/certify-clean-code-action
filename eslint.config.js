// eslint.config.js
const js = require('@eslint/js');

module.exports = [
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
