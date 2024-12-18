import mkcert from "vite-plugin-mkcert";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
    plugins: [
        sveltekit(),
        ...(mode === 'development' ? [mkcert()] : [])
    ],
    server: {
        host: true, // Listen on all available network interfaces
        port: process.env.PORT || 3000, // Use PORT from the environment or default to 3000
        proxy: {} // Avoid "can't use Symbol where you need a string" error
    }
}));
