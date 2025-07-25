import { defineConfig } from 'eslint/config';
import baseConfig from './eslint.config.js';
import prettier from 'eslint-plugin-prettier';

export default defineConfig([
  ...baseConfig,
  {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error', // Включаем ошибки Prettier
    },
  },
]);
