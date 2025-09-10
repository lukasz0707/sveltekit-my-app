<script lang="ts">
	import { Label, Input, Helper } from 'flowbite-svelte';

	export let value: string;
	// This special Svelte prop forwards any extra attributes or events
	// passed to this component to the underlying <Input> element.
	// It resolves the TypeScript error related to the 'on:blur' event.
	// export let $$restProps;
	export let isValid: boolean = false;

	let error: string | undefined = undefined;
	// let isValid: boolean = false;
	let touched: boolean = false;

	type FlowbiteColor =
		| 'red'
		| 'green'
		| 'disabled'
		| 'primary'
		| 'secondary'
		| 'emerald'
		| 'blue'
		| 'yellow'
		| 'orange'
		| 'gray'
		| 'teal'
		| 'cyan'
		| 'sky'
		| 'indigo'
		| 'lime'
		| 'amber'
		| 'violet'
		| 'purple'
		| 'fuchsia'
		| 'pink'
		| 'rose'
		| undefined;

	// Explicitly type the color variable to resolve the error.
	let color: FlowbiteColor;

	$: {
		if (touched) {
			if (value === '') {
				error = 'Email is required.';
				isValid = false;
			} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
				error = 'Invalid email format.';
				isValid = false;
			} else {
				error = undefined;
				isValid = true;
			}
		}
	}

	$: color = error ? 'red' : isValid && touched ? 'green' : undefined;
</script>

<div class="mb-4">
	<Label for="email" {color}>Email</Label>
	<Input
		id="email"
		type="email"
		placeholder="name@company.com"
		{color}
		bind:value
		class="mt-1 block w-full"
		aria-invalid={error ? 'true' : 'false'}
		aria-describedby={error ? 'email-error' : undefined}
		onBlur={() => (touched = true)}
	/>
	{#if error && touched}
		<Helper class="mt-2" color="red">
			<span class="font-medium">Oops!</span>
			{error}
		</Helper>
		<!-- {:else if isValid && touched}
		<Helper class="mt-2" color="green">
			<span class="font-medium">Success!</span>
			Looks good.
		</Helper> -->
	{/if}
</div>
