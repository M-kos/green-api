import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
  },
  css: {
    devSourcemap: true,
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
  },
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
});
