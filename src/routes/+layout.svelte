<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>sveltekit-my-app</title>
	<meta name="description" content="Main page." />
</svelte:head>

{@render children?.()}
