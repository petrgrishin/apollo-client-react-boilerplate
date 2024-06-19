module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:unicorn/recommended',
        'plugin:prettier/recommended',
        'prettier',
        'eslint-config-prettier',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'react-app',
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        babelOptions: {
            presets: [['babel-preset-react-app', false], 'babel-preset-react-app/prod'],
        },
    },
    plugins: ['prettier', 'react', 'react-hooks'],
    rules: {
        'react/prop-types': 'off',
        'unicorn/prefer-node-protocol': 'off',
        'unicorn/prevent-abbreviations': [
            'error',
            {
                ignore: ['\\.e2e-spec$', /^ignore/i],
            },
        ],
        'unicorn/prefer-module': 'off',
        'unicorn/prefer-top-level-await': 'off',
        'unicorn/no-null': 'off',
        'unicorn/no-process-exit': 'off',
        'unicorn/filename-case': 'warn',
        'no-unused-vars': 'warn',
    },
    overrides: [
        {
            files: ['*.graphql', '*.gql'],
            parser: '@graphql-eslint/eslint-plugin',
            plugins: ['@graphql-eslint'],
            rules: {
                '@graphql-eslint/known-type-names': 'error',
            },
        },
    ],
};
