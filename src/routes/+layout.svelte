<script lang="ts">
	import Header from './Header.svelte';
	import './layout.css';
	
	let { children } = $props();
</script>

<div class="app min-h-svh bg-a text-black dark:bg-d dark:text-gray-300">
	<Header />

	<main class="min-h-svh">
		{@render children()}
	</main>

	<footer class="bg-b dark:bg-c">
		<p class="mx-auto self-center">Assets Property of STEAMachines #15242</p>
		<p class="mx-auto self-center">FOSS code made with Sveltekit, Storybook, PostCSS, Tailwind</p>
	</footer>
</div>