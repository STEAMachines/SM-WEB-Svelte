<script lang="ts">
    import { base } from '$app/paths';

    let mode = $state(`/light-mode-icon.png`);
    let props = $props();

    function toggleDarkMode() {
        if (mode === `/light-mode-icon.png`) {
            mode = `/dark-mode-icon.png`;
            document.documentElement.classList.add('dark');
        } else {
            mode = `/light-mode-icon.png`;
            document.documentElement.classList.remove('dark');
        }
    } 
</script>

<header class="header flex flex-row max-h-30 p-5 rounded-b-lg static     text-black dark:text-gray-600 bg-b dark:bg-c">
        <div class="my-auto max-h-20">
            <a href="/" class="mx-auto"><img src="/SM-Logo.png" alt="Logo" class="h-20 w-20 object-scale-down"></a>
        </div>
        <div class="nav-links flex flex-row gap-8 p-4 mx-auto my-0 max-h-20">
            <a aria-label="About Us" href="/about" class="mx-auto text-xl text-white hover:underline-offset-4">About Us</a>
            <a aria-label="Members" href="/members" class="mx-auto text-xl text-white hover:underline-offset-4">Members</a>
            <a aria-label="Stats" href="/stats" class="mx-auto text-xl text-white hover:underline-offset-4">Stats</a>
            <a aria-label="Contact Us" href="/contact" class="mx-auto text-xl text-white hover:underline-offset-4">Contact Us</a>
        </div>
        <div class="my-auto max-h-20">
            <button onclick={toggleDarkMode} aria-label="Toggle Dark Mode" class="mx-auto">
                <img src="{mode}" alt="Toggle Dark Mode" class="h-10 w-10 object-scale-down">
            </button>
        </div>
</header>