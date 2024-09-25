// eslint.config.js
module.exports = [
    {
        files: ['**/*.js'],
        rules: {
            'no-console': 'off',
            'semi': ['error', 'always'],
        },
        env: {
            node: true,
            es2020: true,
        },
        parserOptions: {
            ecmaVersion: 2020,
        },
    },
];
