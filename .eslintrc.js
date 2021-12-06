module.exports = {
    root: true,
    plugins: ['prettier'],
    extends: ['eslint:recommended', 'prettier', 'plugin:prettier/recommended'],
    env: {
        node: true,
        jest: true,
        es6: true,
    },
    rules: {
        'prettier/prettier': 'warn',
    },
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
    },
};
