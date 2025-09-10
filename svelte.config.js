import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			// This must match your GitHub repository name exactly.
			base: process.env.NODE_ENV === 'production' ? '/sveltekit-my-app' : ''
		}
	}
};

export default config;
