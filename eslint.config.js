import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default tseslint.config(
    {
        // Build output, deps, generated, and static assets are not linted.
        // .astro files are type-checked by `astro check` (npm run typecheck).
        ignores: [
            'dist/**',
            'node_modules/**',
            '.astro/**',
            'public/**',
            '**/*.astro',
        ],
    },

    js.configs.recommended,
    ...tseslint.configs.recommended,

    {
        files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
        languageOptions: {
            ecmaVersion: 2023,
            sourceType: 'module',
            globals: { ...globals.browser, ...globals.node },
            parserOptions: { ecmaFeatures: { jsx: true } },
        },
        plugins: { 'react-hooks': reactHooks },
        rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            // Surface unused code without blocking commits; allow _-prefixed escapes.
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
            ],

            // Pragmatic for an existing codebase; revisit as types tighten.
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },

    {
        // Ambient declaration files legitimately use `var` for global augmentation.
        files: ['**/*.d.ts'],
        rules: {
            'no-var': 'off',
        },
    },

    {
        // Test files: allow Vitest patterns.
        files: ['**/*.{test,spec}.{js,ts}'],
        rules: {
            '@typescript-eslint/no-unused-expressions': 'off',
        },
    },
);
