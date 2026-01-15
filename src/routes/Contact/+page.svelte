<script>
  let name = "";
  let email = "";
  let message = "";
  let status = "";
</script>

<svelte:head>
	<title>STEAMachines - Contact Us</title>
</svelte:head>

<div class="top-lvh flex flex-row w-4xl self-center mx-auto gap-4 my-10">
    <div id="Info" class="flex flex-col text-2xl bg-b dark:bg-c rounded-lg justify bg-center gap-4 p-4">
    	<div class="flex flex-row gap-4"><img src="/whatsapp.png" alt="CP 1 Raihan" class="w-12 h-12 dark:invert">Raihan<a target="_blank" href="https://wa.me/628122732347">+62 812-2732-347</a></div>
        <div class="flex flex-row gap-4"><img src="/whatsapp.png" alt="CP 2 " class="w-12 h-12 dark:invert">Aziz <a target="_blank" href="https://wa.me/6282211224215">+62 822-1122-4215</a></div>
        <div class="flex flex-row gap-4"><img src="/whatsapp.png" alt="WA Channel" class="w-12 h-12 dark:invert"><a target="_blank" href="https://whatsapp.com/channel/0029VbBO72NCHDysImsemT1C">Whatsapp Channel</a></div>
        <div class="flex flex-row gap-4"><img src="/instagram.png" alt="Instagram" class="w-12 h-12 dark:invert"><a target="_blank" href="https://instagram.com/steammachines42/">@steammachines42</a></div>
        <div class="flex flex-row gap-4"><img src="/twitter.png" alt="X/Twitter" class="w-12 h-12 dark:invert"><a target="_blank" href="https://x.com/FTCSteamMachine">@FTCSteamMachine</a></div>
        <div class="flex flex-row gap-4"><img src="/youtube.png" alt="Youtube" class="w-12 h-12 dark:invert"><a target="_blank" href="https://youtube.com/@ftcsteammachines15242">@ftcsteammachines15242</a></div>
        <div class="flex flex-row gap-4"><img src="/discord.png" alt="Discord" class="w-12 h-12 dark:invert"><a target="_blank" href=""></a></div>
        <div class="flex flex-row gap-4"><img src="/facebook.png" alt="Facebook" class="w-12 h-12 dark:invert"><a target="_blank" href="https://facebook.com/profile.php?id=61581189765153">Steam Machines</a></div>
        <div class="flex flex-row gap-4"><img src="/email.png" alt="Email" class="w-12 h-12 dark:invert"><a target="_blank" href="mailto:steamachines_42@Outlook.com">steamachines_42@Outlook.com</a></div>


    </div>
    <div class="flex-1 bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-md border border-gray-100 dark:border-zinc-800">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white uppercase tracking-wider">Direct Messages</h2>
      
      <form action="https://formspree.io/f/mjggkbvz" method="POST" on:submit={handleSubmit} class="space-y-4">
        <div class="flex flex-col gap-1">
          <label for="name" class="font-semibold text-gray-700 dark:text-gray-300">Full Name</label>
          <input type="text" id="name" name="name" bind:value={name} placeholder="Enter your Name" 
            class="w-full p-3 rounded-lg border text-black border-gray-300 dark:bg-zinc-800 dark:border-zinc-700 focus:ring-2 focus:ring-orange-500 outline-none transition-all" required />
        </div>

        <div class="flex flex-col gap-1">
          <label for="email" class="font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
          <input type="email" id="email" name="_replyto" bind:value={email} placeholder="email@steamachines.com" 
            class="w-full p-3 rounded-lg border text-black border-gray-300 dark:bg-zinc-800 dark:border-zinc-700 focus:ring-2 focus:ring-orange-500 outline-none transition-all" required />
        </div>

        <div class="flex flex-col gap-1"> 
          <label for="message" class="font-semibold text-gray-700 dark:text-gray-300">Messages</label>
          <textarea id="message" name="message" bind:value={message} rows="5" placeholder="Write your messages here...." 
            class="w-full p-3 rounded-lg border text-black border-gray-300 dark:bg-zinc-800 dark:border-zinc-700 focus:ring-2 focus:ring-orange-500 outline-none transition-all" required></textarea>
        </div>

        <button type="submit" class="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg transform active:scale-[0.98] transition-all uppercase tracking-widest">
          Send Messages
        </button>
        
        {#if status}
          <p class="text-center text-orange-500 font-medium animate-pulse">{status}</p>
        {/if}
      </form>
    </div>
</div>
