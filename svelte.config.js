import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		appDir: 'app', // Required as the default is _app
		adapter: adapter({
			fallback: '404.html'
		}),
		// For github pages setup below
		paths: {
			base: process.env.BASE_PATH || ''
		},
		// This tells SvelteKit to not prerender any pages by default.
		// It will only prerender pages with `export const prerender = true`.
		prerender: {
			// Ignore any routes that are not explicitly prerendered to prevent the build from failing.
			handleUnseenRoutes: 'ignore'
		}
	}
};

export default config;
