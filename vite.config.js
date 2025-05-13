import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  // Make sure to serve jsx files correctly
  server: {
    fs: {
      // Allow serving files from these directories
      allow: ['./components', './stories']
    }
  }
}); 