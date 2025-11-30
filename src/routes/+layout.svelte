<script lang="ts">
	import Header from './Header.svelte';
	import './layout.css';
	
	let { children } = $props();
</script>

<div class="app bg-amber-400 dark:bg-gray-600">
	<Header />

	<main>
		{@render children()}
	</main>

	<footer>
		<p class="mx-auto self-center bg-amber-600 dark:bg-blue-500">Assets Property of STEAMachines #15242</p>
		<p class="mx-auto self-center bg-amber-600 dark:bg-blue-500">FOSS code made with Sveltekit, Storybook, PostCSS, Tailwind</p>
	</footer>
</div>