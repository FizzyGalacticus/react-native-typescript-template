module.exports = {
    env: {
        node: true,
        es6: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            impliedStrict: true,
        },
    },
    plugins: ['prettier', 'import', '@typescript-eslint'],
    ignorePatterns: ['shields_reporter.js'],
    rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/no-unused-vars': [2, { vars: 'all', args: 'after-used' }],
        'no-case-declarations': 0,
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'type'],
                'newlines-between': 'always-and-inside-groups',
                alphabetize: { order: 'asc', caseInsensitive: true },
            },
        ],
        'block-scoped-var': 2,
        'brace-style': 2,
        camelcase: [2, { properties: 'never' }],
        'comma-dangle': [
            1,
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'never',
            },
        ],
        'comma-style': 2,
        complexity: [1, { max: 32 }],
        'consistent-this': [2, 'self'],
        curly: [2, 'all'],
        'dot-notation': [2, { allowKeywords: true }],
        eqeqeq: 2,
        'key-spacing': [2, { beforeColon: false, afterColon: true }],
        'keyword-spacing': 2,
        'max-len': [
            2,
            120,
            4,
            {
                ignoreComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ],
        'max-params': [1, { max: 6 }],
        'new-cap': [2, { newIsCap: true, capIsNew: false }],
        'no-bitwise': 2,
        'no-caller': 2,
        'no-cond-assign': 2,
        'no-console': 2,
        'no-debugger': 2,
        'no-dupe-keys': 2,
        'no-else-return': 1,
        'no-empty': 2,
        'no-eval': 2,
        'no-iterator': 2,
        'no-loop-func': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-multi-str': 2,
        'no-new': 2,
        'no-proto': 2,
        'no-script-url': 2,
        'no-shadow': 0,
        'no-trailing-spaces': 1,
        'no-undef': 2,
        'no-var': 2,
        'padded-blocks': [2, 'never'],
        'prefer-const': 2,
        'no-const-assign': 2,
        'require-await': 2,
        semi: [2, 'always'],
        'space-before-blocks': 2,
        'spaced-comment': [2, 'always', { markers: ['global'] }],
        'valid-jsdoc': [2, { requireReturn: false }],
        'wrap-iife': [2, 'inside'],
        yoda: 2,
        'no-return-await': 2,
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                printWidth: 120,
                tabWidth: 4,
                trailingComma: 'es5',
                arrowParens: 'avoid',
                endOfLine: 'auto',
            },
        ],
    },
    globals: {
        TanError: true,
    },
};
