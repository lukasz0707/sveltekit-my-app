<script lang="ts">
	import { Label, Input, Helper } from 'flowbite-svelte';

	export let value: string;
	export let confirmValue: string;
	export let isValid: boolean = false;
	export let confirmIsValid: boolean = false;
	export let minLength: number = 8;

	// Optional prop to check against a second password field.

	let error: string | undefined = undefined;
	// let isValid: boolean = false;
	let touched: boolean = false;
	let confirmError: string | undefined = undefined;
	// let confirmIsValid: boolean = false;
	let confirmTouched: boolean = false;

	// Define a type alias that matches the component's expected prop types.
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
	let confirmColor: FlowbiteColor;

	$: {
		if (touched) {
			if (value === '') {
				error = 'Password is required.';
				isValid = false;
			} else if (value.length < minLength) {
				error = `Password must be at least ${minLength} characters long.`;
				isValid = false;
			} else if (touched && confirmTouched && value !== confirmValue) {
				// New validation rule: check if the passwords match only if `confirmPasswordValue` is provided.
				error = 'Passwords do not match.';
				isValid = false;
			} else {
				error = undefined;
				isValid = true;
			}
		}
	}
	$: {
		if (confirmTouched) {
			if (confirmValue === '') {
				confirmError = 'Password is required.';
				confirmIsValid = false;
			} else if (confirmValue.length < minLength) {
				confirmError = `Password must be at least ${minLength} characters long.`;
				confirmIsValid = false;
			} else if (touched && confirmTouched && value !== confirmValue) {
				// New validation rule: check if the passwords match only if `confirmPasswordValue` is provided.
				confirmError = 'Passwords do not match.';
				confirmIsValid = false;
			} else {
				confirmError = undefined;
				confirmIsValid = true;
			}
		}
	}

	$: color = error ? 'red' : isValid && touched ? 'green' : undefined;
	$: confirmColor = confirmError ? 'red' : confirmIsValid && confirmTouched ? 'green' : undefined;
</script>

<div class="mb-4">
	<Label for="password" {color}>Password</Label>
	<Input
		id="password"
		type="password"
		placeholder="••••••••"
		{color}
		bind:value
		class="mt-1 block w-full"
		aria-invalid={error ? 'true' : 'false'}
		aria-describedby={error ? 'password-error' : undefined}
		onblur={() => (touched = true)}
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

<div class="mb-4">
	<Label for="confirm-password" color={confirmColor}>Confirm password</Label>
	<Input
		id="confirm-password"
		type="password"
		placeholder="••••••••"
		color={confirmColor}
		bind:value={confirmValue}
		class="mt-1 block w-full"
		aria-invalid={confirmError ? 'true' : 'false'}
		aria-describedby={confirmError ? 'confirm-password-error' : undefined}
		onblur={() => (confirmTouched = true)}
	/>
	{#if confirmError && confirmTouched}
		<Helper class="mt-2" color="red">
			<span class="font-medium">Oops!</span>
			{confirmError}
		</Helper>
		<!-- {:else if confirmIsValid && confirmTouched}
		<Helper class="mt-2" color="green">
			<span class="font-medium">Success!</span>
			Looks good.
		</Helper> -->
	{/if}
</div>
