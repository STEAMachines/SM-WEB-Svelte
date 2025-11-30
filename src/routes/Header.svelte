<script lang="ts">
    import { base } from '$app/paths';

    let mode = `${base}/light-mode-icon.png`;
    let bg = 'bg-amber-600';

    function toggleDarkMode() {
        if (mode === `${base}/light-mode-icon.png`) {
            mode = `${base}/dark-mode-icon.png`;
            bg = 'bg-blue-600'
            document.documentElement.classList.add('dark');
        } else {
            mode = `${base}/light-mode-icon.png`;
            bg = 'bg-amber-600'
            document.documentElement.classList.remove('dark');
        }
    } 
</script>

<div class="header {bg} flex flex-row max-h-30 p-5">
        <div class="max-h-20">
            <a href="/" class="mx-auto"><img src="{base}/SM-Logo.png" alt="Logo" class="h-20 w-20 object-scale-down"></a>
        </div>
        <div class="nav-links flex flex-row gap-8 p-4 mx-auto max-h-20">
            <a aria-label="About Us" href="/About" class="mx-auto text-xl text-white hover:underline-offset-4">About Us</a>
            <a aria-label="Members" href="/Members" class="mx-auto text-xl text-white hover:underline-offset-4">Members</a>
            <a aria-label="Stats" href="/Stats" class="mx-auto text-xl text-white hover:underline-offset-4">Stats</a>
            <a aria-label="Contact Us" href="/Contact" class="mx-auto text-xl text-white hover:underline-offset-4">Contact Us</a>
        </div>
        <div class="max-h-20">
            <button on:click={toggleDarkMode} aria-label="Toggle Dark Mode" class="mx-auto">
                <img src="{mode}" alt="Toggle Dark Mode" class="h-10 w-10 object-scale-down">
            </button>
        </div>
</div>