// eslint.config.js
import js from '@eslint/js';

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
