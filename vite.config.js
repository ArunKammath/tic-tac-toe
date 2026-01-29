import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}', 'src/tests/**/*.{js,jsx,ts,tsx}'],
  },
})
