<script>
    let carouselCounter = 0;
    let carousel = [
        { id: 1, title: 'Slide 1', image: '/carousel/png.png' },
        { id: 2, title: 'Slide 2', image: '/carousel/png.png' },
        { id: 3, title: 'Slide 3', image: '/carousel/png.png' },
    ];
    let carouselLen = carousel.length;

    function next() {
        carouselCounter = (carouselCounter + 1) % carouselLen;
    }

    function prev() {
        carouselCounter = (carouselCounter - 1 + carouselLen) % carouselLen;
    }
</script>

<div class="w-full max-w-4xl mx-auto my-10">
    <div class="relative bg-gray-200 rounded-lg overflow-hidden h-96">
        <!-- Carousel Items -->
        <div class="relative w-full h-full">
            {#each carousel as slide, index}
                <div
                    class="absolute w-full h-full transition-opacity duration-500 ease-in-out"
                    class:opacity-0={index !== carouselCounter}
                    class:opacity-100={index === carouselCounter}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        class="w-full h-full object-cover"
                    />
                    <h2 class="absolute bottom-4 left-4 text-2xl font-bold bg-b dark:bg-c px-4 py-2 rounded">
                        {slide.title}
                    </h2>
                </div>
            {/each}
        </div>

        <!-- Previous Button -->
        <button
            onclick={prev}
            class="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 text-black rounded-xl p-3 transition"
            aria-label="Previous slide"
        >
            <img src="/left-arrow.png" class="w-8 h-8" alt="">
        </button>

        <!-- Next Button -->
        <button
            onclick={next}
            class="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 text-black rounded-xl p-3 transition"
            aria-label="Next slide"
        >
            <img src="/right-arrow.png" class="w-8 h-8" alt="">
        </button>
    </div>

    <!-- Indicator Dots -->
    <div class="flex justify-center gap-2 mt-4">
        {#each carousel as _, index}
            <button
                onclick={() => carouselCounter = index}
                class="w-3 h-3 rounded-full transition"
                class:bg-b={index === carouselCounter}
                class:dark:bg-c={index === carouselCounter}
                class:bg-gray-400={index !== carouselCounter}
                aria-label="Go to slide {index + 1}"
            ></button>
        {/each}
    </div>
</div>