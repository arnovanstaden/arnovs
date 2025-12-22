import nextVitals from 'eslint-config-next/core-web-vitals';
import typescriptParser from '@typescript-eslint/parser';

import { defineConfig, globalIgnores } from 'eslint/config'

const eslintConfig = defineConfig([
  ...nextVitals,
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      }
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {},
      },
    },
    rules: {
      // Prettier handles formatting, so we disable conflicting rules
      quotes: 'off', // Prettier handles quotes
      'max-len': 'off',
      radix: 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/extensions': 'off',
      'import/order': 'off',
      'object-curly-newline': 'off',
      'no-plusplus': 'off',
      'function-paren-newline': 'off',
      'no-param-reassign': ['error', {
        props: false,
      }],
      'no-nested-ternary': 'off',
      'default-param-last': 'off',
      'import/no-cycle': 'off',
      'import/no-named-as-default': 'off',
      'consistent-return': 'off',
      'import/prefer-default-export': 'off',
      'no-case-declarations': 'off',
      camelcase: 'warn',
      'no-confusing-arrow': 'off',
      '@next/next/no-img-element': 'off',
      '@next/next/google-font-display': 'off',
      'no-useless-catch': 'off',
      'react/no-unescaped-entities': 'off',
    },
  }
]);

export default eslintConfig;
