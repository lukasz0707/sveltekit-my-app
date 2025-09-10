declare module '*.svg?component' {
	const component: import('svelte').SvelteComponent;
	export default component;
}

declare module '*.svg' {
	const src: string;
	export default src;
}
