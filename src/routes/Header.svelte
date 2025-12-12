<script lang="ts">
	import { base } from '$app/paths';

	let mode = $state(`/light-mode-icon.png`);
	let props = $props();

	function toggleDarkMode() {
		if (mode === `/light-mode-icon.png`) {
			mode = `/dark-mode-icon.png`;
			document.documentElement.classList.add('dark');
		} else {
			mode = `/light-mode-icon.png`;
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<header
	class="header flex flex-row max-h-20 content-stretch p-5 rounded-b-lg static text-black dark:text-gray-600 bg-b dark:bg-c bg-[url('pattern.svg')] bg-cover"
>
	<div class="h-auto w-16 my-auto">
		<!-- or h-20, whatever you like -->
		<a href="/" class="flex items-center justify-center center h-12 w-12 shrink-0">
			<img src="/SM-Logo.png" alt="Logo" class="max-w-full max-h-full object-contain" />
		</a>
	</div>
	<div class="nav-links flex flex-row gap-8 p-1 mx-auto my-auto max-h-20 rounded-lg bg-white text-black dark:bg-black dark:text-white">
		<a
			aria-label="About Us"
			href="/about"
			class="mx-auto text-xl hover:underline-offset-4">About Us</a
		>
		<a
			aria-label="Members"
			href="/members"
			class="mx-auto text-xl hover:underline-offset-4">Members</a
		>
		<a aria-label="Stats" href="/stats" class="mx-auto text-xl hover:underline-offset-4"
			>Stats</a
		>
		<a
			aria-label="Contact Us"
			href="/contact"
			class="mx-auto text-xl hover:underline-offset-4">Contact Us</a
		>
	</div>
	<div class="my-auto max-h-20">
		<button onclick={toggleDarkMode} aria-label="Toggle Dark Mode" class="mx-auto">
			<img src={mode} alt="Toggle Dark Mode" class="h-10 w-10 object-scale-down" />
		</button>
	</div>
</header>
