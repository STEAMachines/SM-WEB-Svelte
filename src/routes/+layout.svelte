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

	<footer class="min-h-40 flex flex-row justify-center gap-10 bg-b p-5 dark:bg-c bg-[url('pattern.svg')] bg-cover">
		<div class="flex flex-row gap-4 bg-white dark:bg-black rounded-lg p-2">
			<h1 class="font-[VarsityTeam] flex flex-col self-center-safe text-2xl">
				<strong class="self-center"> STEAM </strong>
				<strong class="self-center">MACHINES</strong>
			</h1>
			<div class="flex flex-col self-center-safe text-1xl">
				<p class="mx-auto text-center">Icons from Flaticon</p>
				<p class="mx-auto text-center">Assets &copy;STEAMachines #15242</p>
				<p class="mx-auto text-center">FOSS code made with Sveltekit, Storybook, PostCSS, Tailwind</p>
			</div>
		</div>
	</footer>
</div>
