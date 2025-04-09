import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['**/generated/**'] },
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Mantém o suporte para o ambiente do navegador, se necessário
        ...globals.node, // Adiciona suporte para Node.js, incluindo process
      },
    },
  },
  pluginJs.configs.recommended,
];
