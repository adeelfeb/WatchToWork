import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'https://watchtowork-tcnq--3000--28a8ce1b.local-credentialless.webcontainer.io/'
  }
}
  ,
  plugins: [react()],
})
