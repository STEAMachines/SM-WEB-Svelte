<script>
  let name = "";
  let email = "";
  let message = "";
  let status = "";

  async function handleSubmit(event) {
    status = "Sending...";
  }
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
    <div class="contact-container">
        <section class="form-section">
            <h2>DIRECT MESSAGES</h2>
            
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" on:submit={handleSubmit}>
            <div class="input-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" bind:value={name} placeholder="Enter your Name" required />
            </div>

            <div class="input-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="_replyto" bind:value={email} placeholder="email@steamachines.com" required />
            </div>

            <div class="input-group">
                <label for="message">Messages</label>
                <textarea id="message" name="message" bind:value={message} rows="5" placeholder="Write your messages here...." required></textarea>
            </div>

            <button type="submit" class="submit-btn">Send Messages</button>
            
            {#if status}
                <p class="status-msg">{status}</p>
            {/if}
            </form>
        </section>
    </div>
</div>

<style>
  .contact-container {
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    font-family: 'Inter', sans-serif;
    color: #333;
  }

  header {
    text-align: center;
    margin-bottom: 40px;
  }

  h1 { font-size: 2.5rem; margin-bottom: 10px; color: #1a1a1a; }

  /* Social Media Grid */
  .social-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    margin-bottom: 50px;
    /* width: 25%; */
  }

  .social-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid #eee;
    border-radius: 12px;
    text-decoration: none;
    color: #333;
    transition: all 0.3s ease;
    font-weight: 600;  
  }

  .social-card:hover {
    background-color: var(--brand-color);
    color: white;
    transform: translateY(-5px);
    border-color: transparent;
  }

  .icon { font-size: 2rem; margin-bottom: 10px; }

  /* Form Styling */
  .form-section {
    background: #f9f9f9;
    padding: 30px;
    border-radius: 16px;
  }

  h2 { margin-bottom: 20px; text-align: center; }

  .input-group {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
  }

  label { margin-bottom: 5px; font-weight: 500; }

  input, textarea {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
  }

  input:focus, textarea:focus {
    outline: none;
    border-color: #ff7300;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }

  .submit-btn {
    width: 100%;
    padding: 14px;
    background-color: #ff7300;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s;
  }

  .submit-btn:hover { background-color: #ff7300c5; }

  .status-msg { margin-top: 15px; text-align: center; color: #ff7300; }

  hr { border: 0; height: 1px; background: #eee; margin: 40px 0; }
</style>