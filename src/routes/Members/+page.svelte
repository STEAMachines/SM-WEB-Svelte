<script>
 let cardClasses = 'bg-amber-600 rounded-lg shadow-lg p-4 m-4 max-w-3xl bg-b flex flex-row gap-4 min-w- dark:bg-c hover:scale-105 transition-transform duration-100'
 let innerClasses = 'bg-b rounded-lg p-2 dark:bg-c'
 let imgClasses = 'w-30 h-45 rounded-lg'
 let personNameClasses = 'text-2xl font-bold mb-2'
</script>

<svelte:head>
    <title>STEAMachines - Members</title>
</svelte:head>

<section class="flex flex-row">
<div id="left" class="left-0">
        <div class="card {cardClasses} bg-[url('/akhdan-b.webp')] bg-cover bg-center">
            <img src="/akhdan.JPG" alt="" class="{imgClasses}">
            <div class="inner {innerClasses}">
                <h2 class="{personNameClasses}">Akhdan</h2>
                <p>Hello, my name is Akhdan. I am from East Jakarta. I have participated in FTC robotics activities for two years at TechnoNatura Jogja, and this is my third year. I served as team captain for one year in the last season and reorganized the team. Now I am back as team captain with a more mature vision and mission. I will strive to lead the team to greater success this season.</p>
            </div>
        </div>
        <div class="card {cardClasses} bg-[url('/ihsan-b.jpg')] bg-cover bg-center">
            <img src="/ihsan.JPG" alt="" class="{imgClasses}">
            <div class="inner {innerClasses}">
                <h2 class="{personNameClasses}">Ihsan</h2>
                <p></p>
            </div>
        </div>
        <div class="card {cardClasses} bg-[url('/pitu-b.webp')] bg-cover bg-center">
            <img src="/pitu.JPG" alt="" class="{imgClasses}">
            <div class="inner {innerClasses}">
                <h2 class="{personNameClasses}">Pitu</h2>
                <p></p>
            </div>
        </div>
        <div class="card {cardClasses} bg-[url('/zaki-b.jpeg')] bg-cover bg-center">
            <img src="/zaki.JPG" alt="" class="{imgClasses}">
            <div class="inner {innerClasses}">
                <h2 class="{personNameClasses}">Zaki</h2>
                <p></p>
            </div>
        </div>
        <div class="card {cardClasses} bg-[url('/zayyan-b.png')] bg-cover bg-center">
            <img src="/zayyan.JPG" alt="" class="{imgClasses}">
            <div class="inner {innerClasses}">
                <h2 class="{personNameClasses}">Zayyan</h2>
                <p></p>
            </div>
        </div>
</div>
<div id="right" class="left-1/2">
        <div class="card {cardClasses} bg-[url('/alghar-b.jpeg')] bg-cover bg-top">
            <img src="/alghar.JPG" alt="" class="{imgClasses}">
            <div class="inner {innerClasses}">
                <h2 class="{personNameClasses}">Alghar</h2>
                <p>Heya, I’m Alghar — the dude handling fundraising so our robotics squad can keep leveling up.</p>
            </div>
        </div>
        <div class="card {cardClasses} bg-[url('/raihan-b.jpg')] bg-cover bg-center">
            <img src="/raihan.JPG" alt="" class="{imgClasses}">
            <div class="inner {innerClasses}">
                <h2 class="{personNameClasses}">Raihan</h2>
                <p>Playful work, serious results - Hehe</p>
            </div>
        </div>
        <div class="card {cardClasses} bg-[url('/agna-b.jpg')] bg-cover bg-center">
            <img src="/agna.JPG" alt="" class="{imgClasses}">
            <div class="inner {innerClasses}">
                <h2 class="{personNameClasses}">Agna</h2>
                <p>A content creator is someone who creates and shares digital content such as videos, photos, or writing to entertain, educate, or promote something on social media.</p>
            </div>
        </div>
        <div class="card {cardClasses} bg-[url('/aziz-b.png')] bg-cover bg-center">
            <img src="/aziz.JPG" alt="" class="{imgClasses}">
            <div class="inner {innerClasses}">
                <h2 class="{personNameClasses}">Aziz</h2>
                <p>Someone who is trying to become a whole human being.
                <br>
                <br>
                <br>
                <br>
                Beware of Shark</p>
            </div>
        </div>
        <div class="card {cardClasses} bg-[url('/ibam-b.webp')] bg-cover bg-center">
            <img src="/ibam.JPG" alt="" class="{imgClasses}">
            <div class="inner {innerClasses}">
                <h2 class="{personNameClasses}">Ibam</h2>
                <p></p>
            </div>
        </div>
        <div class="card {cardClasses} bg-[url('/syauqi-b.webp')] bg-cover bg-center">
            <img src="/syauqi.JPG" alt="" class="{imgClasses}">
            <div class="inner {innerClasses}">
                <h2 class="{personNameClasses}">Syauqi</h2>
                <p></p>
            </div>
        </div>
</div>
</section>

