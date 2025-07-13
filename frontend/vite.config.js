import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // 👈 ensures React Router routes are served correctly
  },
  build: {
    chunkSizeWarningLimit: 1000,
  },
});
