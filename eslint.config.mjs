import js from '@eslint/js';
import * as globals from 'globals';
import { defineConfig } from 'eslint/config';
import * as eslintPluginImport from 'eslint-plugin-import';

export default defineConfig([
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      js,
      import: eslintPluginImport,
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-console': 'warn',
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
        },
      ],
    },
  },
]);
