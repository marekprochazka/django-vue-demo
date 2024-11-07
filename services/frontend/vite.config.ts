import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: "/static/",
    root: path.resolve(__dirname, "src"),
    build: {
        manifest: "manifest.json",
        outDir: path.resolve("../static/bridge"),
        rollupOptions: {
            input: {
                app: path.resolve(__dirname, "src/entry.ts"),
            }
        },
        
    }
})
