import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode })=> {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@styles': path.resolve(__dirname, './src/styles'),
        '@components': path.resolve(__dirname, './src/components'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@api': path.resolve(__dirname, '../src/api'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@layouts': path.resolve(__dirname, './src/layouts'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@fonts': path.resolve(__dirname, './src/fonts'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
      },
    },
    define: {
      'import.meta.env.VITE_FIREBASE_API_KEY': JSON.stringify(process.env.VITE_FIREBASE_API_KEY),
      'import.meta.env.VITE_FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.VITE_FIREBASE_AUTH_DOMAIN),
      'import.meta.env.VITE_FIREBASE_PROJECT_ID': JSON.stringify(process.env.VITE_FIREBASE_PROJECT_ID),
    },
    plugins: [react()],
  }
})
