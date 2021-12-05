module.exports = {
    root: true,
    plugins: ['prettier'],
    extends: [
        'eslint:recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    env: {
        node: true,
        jest: true,
    },
    rules: {
        'prettier/prettier': 'warn',
    },
};
