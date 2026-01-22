<script lang="ts">
	import Carousel from "./Carousel.svelte";
	import MovingTitle from "./MovingTitle.svelte";
</script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">  
<svelte:head>
	<title>Home - STEAMachines</title>
	<meta name="description" content="Welcome to STEAMachines, where innovation meets education. Explore our projects, team, and mission to inspire the next generation of creators." />
</svelte:head>

<Carousel/>

<section class="w-full bg-[#1e1e1e] text-white py-0 font-sans">
    
    <div class="w-full bg-b text-[#1a1a1a] py-12 px-5 text-center rounded-b-lg">
        <div class="max-w-6xl mx-auto"> <h1 class="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                Our Activities/Events
            </h1>
            <p class="text-sm font-bold opacity-90 mt-2 uppercase tracking-widest">
                2026
            </p>
        </div>
    </div>

    <div class="w-full py-16 px-5 flex justify-center">
        
        <div class="w-full max-w-5xl relative border-l-2 border-zinc-700/50 ml-4 md:ml-0 pl-10">
            
            <div class="mb-20 relative">
                <div class="absolute -left-[51px] top-1 w-5 h-5 bg-c rounded-full border-[4px] border-[#1a1a1a] shadow-[0_0_15px_rgba(69,92,136,0.6)]"></div>
                <p class="text-white font-bold text-2xl">SDN Ngemplak 1</p>
            </div>
            <div class="mb-20 relative">
                <div class="absolute -left-[51px] top-1 w-5 h-5 bg-c rounded-full border-[4px] border-[#1a1a1a] shadow-[0_0_15px_rgba(69,92,136,0.6)]"></div>
                <p class="text-white font-bold text-2xl">SDN Koroulon 1</p>
            </div>
            <!-- <div class="mb-20 relative">
                <div class="absolute -left-[51px] top-1 w-5 h-5 bg-c rounded-full border-[4px] border-[#1a1a1a] shadow-[0_0_15px_rgba(69,92,136,0.6)]"></div>
                <p class="text-white font-bold text-2xl">SDN Ngemplak 4</p>
            </div> -->
        </div>
    </div>
</section>

<!-- <div class="event-box">
	<div class="event-title">
		<h1>Upcoming Events</h1>
		<p>Main Activities</p>
	</div>
</div> -->

