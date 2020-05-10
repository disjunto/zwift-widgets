module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint', 'jsdoc'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:jsdoc/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    rules: {
        'jsdoc/require-description': 1,
        'jsdoc/require-returns-description': 0, // Return information is usually part of the method description
        '@typescript-eslint/typedef': 1,
    },
};