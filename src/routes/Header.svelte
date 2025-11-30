<script lang="ts">
    import { base } from '$app/paths';

    let mode = $state(`/light-mode-icon.png`);
    let bg = $state('bg-amber-600');
    let props = $props();

    function toggleDarkMode() {
        if (mode === `/light-mode-icon.png`) {
            mode = `/dark-mode-icon.png`;
            bg = 'bg-blue-600'
            document.documentElement.classList.add('dark');
        } else {
            mode = `/light-mode-icon.png`;
            bg = 'bg-amber-600'
            document.documentElement.classList.remove('dark');
        }
    } 
</script>

<header class="header {bg} flex flex-row max-h-30 p-5">
        <div class="my-auto max-h-20">
            <a href="/" class="mx-auto"><img src="/SM-Logo.png" alt="Logo" class="h-20 w-20 object-scale-down"></a>
        </div>
        <div class="nav-links flex flex-row gap-8 p-4 mx-auto my-0 max-h-20">
            <a aria-label="About Us" href="/About" class="mx-auto text-xl text-white hover:underline-offset-4">About Us</a>
            <a aria-label="Members" href="/Members" class="mx-auto text-xl text-white hover:underline-offset-4">Members</a>
            <a aria-label="Stats" href="/Stats" class="mx-auto text-xl text-white hover:underline-offset-4">Stats</a>
            <a aria-label="Contact Us" href="/Contact" class="mx-auto text-xl text-white hover:underline-offset-4">Contact Us</a>
        </div>
        <div class="my-auto max-h-20">
            <button onclick={toggleDarkMode} aria-label="Toggle Dark Mode" class="mx-auto">
                <img src="{mode}" alt="Toggle Dark Mode" class="h-10 w-10 object-scale-down">
            </button>
        </div>
</header>