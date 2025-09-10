<script lang="ts">
	import { Button, Checkbox, Label, Input } from 'flowbite-svelte';
	import EmailField from '$lib/components/form_fields/EmailField.svelte';
	import PasswordAndConfirmPassword from '$lib/components/form_fields/PasswordAndConfirmPassword.svelte';
	import GoogleLogo from '$lib/components/icons/GoogleLogo.svelte';
	import favicon from '$lib/assets/favicon.svg';

	let emailValue: string = '';
	let passwordValue: string = '';
	let confirmPasswordValue: string = '';

	let isEmailValid: boolean = false;
	let isPasswordValid: boolean = false;
	let confirmIsPasswordValid: boolean = false;

	$: isFormValid = isEmailValid && isPasswordValid && confirmIsPasswordValid;
</script>

<div class="flex h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
	<div
		class="mx-auto flex w-full flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0"
	>
		<a href="/" class="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
			<img class="mr-2 h-8 w-8" src={favicon} alt="logo" />
			Flowbite
		</a>
		<div
			class="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0 dark:border dark:border-gray-700 dark:bg-gray-800"
		>
			<div class="space-y-4 p-6 sm:p-8 md:space-y-6">
				<h1
					class="text-xl leading-tight font-bold tracking-tight text-gray-900 md:text-2xl dark:text-white"
				>
					Create an account
				</h1>
				<form class="space-y-4 md:space-y-6" action="#">
					<!-- <div>
						<Label for="email">Your email</Label>
						<Input type="email" name="email" id="email" placeholder="name@company.com" required />
					</div> -->
					<EmailField value={emailValue} bind:isValid={isEmailValid} />

					<PasswordAndConfirmPassword
						value={passwordValue}
						confirmValue={confirmPasswordValue}
						bind:isValid={isPasswordValid}
						bind:confirmIsValid={confirmIsPasswordValid}
					/>
					<div class="flex items-start">
						<Checkbox id="terms" class="cursor-pointer">
							I accept the <a
								class="font-medium text-primary-600 hover:underline dark:text-primary-500"
								href="/">Terms and Conditions</a
							>
						</Checkbox>
					</div>
					<Button
						type="submit"
						class="w-full cursor-pointer disabled:cursor-not-allowed"
						disabled={!isFormValid}>Create an account</Button
					>
				</form>

				<div
					class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300"
				>
					<p class="mx-4 mb-0 text-center font-semibold text-gray-500 dark:text-gray-300">or</p>
				</div>
				<Button class="w-full cursor-pointer" color="alternative">
					<!-- <GoogleSolid class="mr-2 h-4 w-4" /> -->
					<GoogleLogo />
					Sign up with Google
				</Button>
				<p class="text-sm font-light text-gray-500 dark:text-gray-400">
					Already have an account? <a
						href="/login"
						class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a
					>
				</p>
			</div>
		</div>
	</div>
</div>
