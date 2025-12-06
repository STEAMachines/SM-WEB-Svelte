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

	<footer class="flex flex-row gap-10 bg-b px-5 dark:bg-c">
		<h1 class="font-[Varsity] flex flex-col">
			<strong class="self-center"> steam </strong>
			<strong class="self-center">machines</strong>
		</h1>
		<div class="flex flex-col">
			<p class="mx-auto">Assets Property of STEAMachines #15242</p>
			<p class="mx-auto">FOSS code made with Sveltekit, Storybook, PostCSS, Tailwind</p>
		</div>
	</footer>
</div>
