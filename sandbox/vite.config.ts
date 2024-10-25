import * as path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    server: {
        host: 'localhost',
        port: 3000,
    },
    root: process.cwd(),
    publicDir: 'public',
    plugins: [
        react(),
    ],
    resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        }
});