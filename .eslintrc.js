module.exports = {
    env: {
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 13,
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
    },
};
