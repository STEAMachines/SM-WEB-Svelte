<script lang="ts">
    import { base } from '$app/paths';

    let mode = `${base}/light-mode-icon.png`;

    function toggleDarkMode() {
        if (mode === `${base}/light-mode-icon.png`) {
            mode = `${base}/dark-mode-icon.png`;
            document.documentElement.classList.add('dark');
        } else {
            mode = `${base}/light-mode-icon.png`;
            document.documentElement.classList.remove('dark');
        }
    } 
</script>

<div class="header bg-amber-600 flex flex-row">
    <div>
        <a href="/"><img src="{base}/SM-Logo.png" alt="Logo     "></a>
    </div>
    <div class="nav-links flex flex-row gap-8 p-4 mx-auto ">
        <a aria-label="About Us" href="/About" class="mx-auto text-xl text-white hover:underline-offset-4">About Us</a>
        <a aria-label="Members" href="/Members" class="mx-auto text-xl text-white hover:underline-offset-4">Members</a>
        <a aria-label="Stats" href="/Stats" class="mx-auto text-xl text-white hover:underline-offset-4">Stats</a>
        <a aria-label="Contact Us" href="/Contact" class="mx-auto text-xl text-white hover:underline-offset-4">Contact Us</a>
        <button on:click={toggleDarkMode}><img src="{mode}" alt=""></button>
    </div>
</div>