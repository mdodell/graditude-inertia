import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// @ts-ignore no types
import eslint from 'vite-plugin-eslint';
import RubyPlugin from 'vite-plugin-ruby';

export default defineConfig({
  plugins: [
    react(),
    RubyPlugin(),
    eslint({
      include: ['**/*.ts', '**/*.tsx'],
      fix: true,
    }),
  ],
});
