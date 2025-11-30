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
		
	</footer>
</div>