// eslint.config.mjs
import js from '@eslint/js';

export default [
    js.configs.recommended,
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                // Add any global variables here if needed
            },
        },
        rules: {
            'no-console': 'off',
            'semi': ['error', 'always'],
        },
    },
];
