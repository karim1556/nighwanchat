import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: false, // Disable CSS source maps
  },
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    allowedHosts: ['615b-160-191-123-243.ngrok-free.app'], // Explicitly allow this ngrok host
    hmr: {
      host: '615b-160-191-123-243.ngrok-free.app', // Use your current ngrok URL for HMR
      protocol: 'wss', // Use 'wss' if you're serving over https (ngrok typically uses https)
    },
  },
})
