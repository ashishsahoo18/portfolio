import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: false,
    host: true,
    allowedHosts: [
      'ashish-personal-portfolio.localhost',
      '.localhost'
    ]
  },
  preview: {
    port: 3000,
    host: true,
    allowedHosts: [
      'ashish-personal-portfolio.localhost',
      '.localhost'
    ]
  }
});

