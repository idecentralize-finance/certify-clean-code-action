// eslint.config.js
import js from '@eslint/js';

export default [
    js.configs.recommended, // Use the recommended settings from ESLint

    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest', // Specifies the ECMAScript version
            sourceType: 'module',  // Indicates that we're using ES modules
            globals: {             // Define any global variables here
                // Add custom global variables here if needed, e.g.,
                // myGlobalVar: 'readonly',
            },
        },
        rules: {
            'no-console': 'off',
            'semi': ['error', 'always'],
        },
    },
];
