import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // Replace with your repo name
// const repoName = 'your-repo-name'

// export default defineConfig({
//   plugins: [react()],
//   base: `/${repoName}/`,
// })

