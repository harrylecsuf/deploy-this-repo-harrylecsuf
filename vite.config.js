import mkcert from "vite-plugin-mkcert";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
	plugins: [
		sveltekit(),
		...(mode === 'development' ? [mkcert()] : []) // Include mkcert only in development
	],
	server: {
		https: mode === 'development', // Enable HTTPS only in development
		proxy: {}, // Essential to avoid "can't use Symbol where you need a string" error
	},
}));
