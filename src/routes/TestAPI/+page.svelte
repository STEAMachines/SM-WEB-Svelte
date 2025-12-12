    <script>
	import { json } from '@sveltejs/kit';
        import { onMount } from 'svelte';

        let image = [];

        onMount(async () => {
            fetch("https://api.nekosapi.com/v4/images/random?rating=safe", {
                method: "GET",
            }).then(res => res.json())
            .then(data => {
                console.log(data);
                image = data;
            })
        });
    </script>

    <p>
        {JSON.stringify(image)}
    </p>