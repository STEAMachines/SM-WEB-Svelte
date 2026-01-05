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

<header
	class="header flex flex-row max-h-20 content-stretch p-5 rounded-b-lg static text-black dark:text-gray-600 bg-b dark:bg-c bg-[url('navbar-blue-sm_1.png')] bg-cover"
>
	<div class="absolute inset-0 z-0 opacity-80 pointer-events-none">	
		</div>
	<div class="z-10 bg-white p-3 rounded-2xl -mt-2.5 relative left-10 shadow-md flex items-center justify-center w-20 h-15">
        <a href="/" class="flex items-center justify-center w-full h-full">
            <img 
                src="/SM-Logo-black.png" 
                alt="Logo" 
                class="dark:invert max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-110" 
            />	
        </a>
    </div>
	<div class="nav-links flex flex-row gap-8 p-1 mx-auto my-auto max-h-20 rounded-lg bg-white text-black dark:bg-black dark:text-white">
		<a
			aria-label="About Us"	
			href="/about"
			class="mx-auto text-xl hover:underline-offset-4">About Us</a
		>
		<a
			aria-label="Members"
			href="/members"
			class="mx-auto text-xl hover:underline-offset-4">Members</a
		>
		<!-- <a aria-label="Stats" href="/stats" class="mx-auto text-xl hover:underline-offset-4"
			>Stats</a
		> -->
		<a
			aria-label="Contact Us"
			href="/contact"
			class="mx-auto text-xl hover:underline-offset-4">Contact Us</a
		>
		<div class="relative group mx-auto my-auto">
			<button class="text-xl flex items-center gap-1 hover:underline-offset-4">
				Open Resources
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
			</button>
			<div class="absolute left-0 mt-2 w-48 bg-white dark:bg-zinc-800 rounded-xl shadow-xl border border-gray-100 dark:border-zinc-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div class="py-2">
                    <a href="https://drive.google.com/drive/u/0/folders/1yBjUC-gW5U0dYwEIe-x4LkKtCjsU10oK" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-700">Portfolio</a>
                </div>
            </div>
		</div>
	</div>
	<div class="my-auto max-h-20">
		<button onclick={toggleDarkMode} aria-label="Toggle Dark Mode" class="mx-auto">
			<img src={mode} alt="Toggle Dark Mode" class="h-10 w-10 object-scale-down" />
		</button>
	</div>
</header>
