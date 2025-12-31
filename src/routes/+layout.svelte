<script lang="ts">
	import Header from './Header.svelte';
	import './layout.css';

	let { children } = $props();
</script>

<div class="app min-h-svh bg-a text-white dark:bg-d dark:text-gray-300">
	<Header/>

	<main class="min-h-svh">
		{@render children()}
	</main>

	<footer class="w-full bg-[#1a1a1a] text-white pt-10 flex flex-col items-center">
		
		<div class="w-full ml-150 max-w-5xl px-8 grid grid-cols-1 md:grid-cols-4 gap-5 mb-12">
			
			<div class="flex flex-col gap-3">
				<a href="/about" class="font-bold hover:text-blue-400">About Us</a>
				<a href="/members" class="font-bold hover:text-blue-400">Members</a>
				<a href="/resources" class="font-bold hover:text-blue-400">Open Resources</a>
				<a href="/contact" class="font-bold hover:text-blue-400">Contact Us</a>
			</div>
			<div class="flex justify-start ">
				<img src="/SM-Logo.png" alt="Logo" class="h-16 object-contain" />
			</div>
		</div>

		<div class="w-full bg-[#131313] py-6 border-t border-zinc-800 flex justify-center items-center">
			<p class="text-xs text-zinc-500">
				2025 @ STEAMachines.
			</p>
		</div>
	</footer>
</div>
