import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import * as globals from 'globals';
import * as eslintPluginImport from 'eslint-plugin-import';

export default defineConfig([
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        document: true,
        window: true,
        console: true,
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
