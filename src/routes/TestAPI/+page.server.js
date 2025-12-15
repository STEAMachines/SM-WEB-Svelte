import { onMount } from 'svelte';

    let users = [];

    onMount(async () => {
        const response = await fetch('/api/users'); // Fetch from your SvelteKit API endpoint
        users = await response.json();
    });
