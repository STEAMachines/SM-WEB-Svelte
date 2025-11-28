    <script>
        import { onMount } from 'svelte';
        
        onMount(() => {
            const interval = setInterval(() => {
                displayTitle = displayTitle.slice(1) + displayTitle[0];
            }, 250);
            return () => clearInterval(interval);
            console.log(displayTitle)
        });
    </script>

    <svelte:head>
        <title>{displayTitle}</title>
    </svelte:head>