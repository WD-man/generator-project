module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'airbnb-base',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        semi: ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': ['error',
            {
                devDependencies: [
                    '**/*.test.ts',
                    '**/*.spec.ts',
                    '**/mocks/handlers.ts',
                    '**/mocks/server.ts',
                ],
            },
        ],
        indent: ['error', 4],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.js'],
            },
        },
    },
};
