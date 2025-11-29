<script lang="ts">
	import Header from '../Header.svelte';
	import './layout.css';
	
	let { children } = $props();
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>

	<footer>
		
	</footer>
</div>