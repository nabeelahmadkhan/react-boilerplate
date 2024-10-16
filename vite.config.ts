import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),           // Alias for the 'src' folder
      '@components': path.resolve(__dirname, 'src/components'),  // Alias for 'components'
      '@pages': path.resolve(__dirname, 'src/pages'),  // Alias for 'pages'
      '@assets': path.resolve(__dirname, 'src/assets'),          // Alias for 'assets'
      '@hooks': path.resolve(__dirname, 'src/hooks'),            // Alias for 'hooks'
      '@styles': path.resolve(__dirname, 'src/styles'),          // Alias for 'styles'
      '@store': path.resolve(__dirname, 'src/store'),            // Alias for 'store'
      '@context': path.resolve(__dirname, 'src/context'),            // Alias for 'store'
    },
  }
})
