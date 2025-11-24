<script>
    import { onMount, onDestroy } from 'svelte';

    // Props
    export let slides = [{}]; // [{ src, alt?, caption? }]
    export let startIndex = 0;
    export let autoplay = true;
    export let interval = 4000;
    export let loop = true;
    export let showIndicators = true;
    export let showArrows = true;
    export let pauseOnHover = true;

    let index = Math.max(0, Math.min(startIndex, Math.max(0, slides.length - 1)));
    let timer;
    let container;
    let pointerStartX = null;
    const SWIPE_THRESHOLD = 40;

    const canAutoplay = () => autoplay && slides.length > 1;

    function next() {
        if (!slides.length) return;
        if (index < slides.length - 1) index += 1;
        else if (loop) index = 0;
    }

    function prev() {
        if (!slides.length) return;
        if (index > 0) index -= 1;
        else if (loop) index = slides.length - 1;
    }

    function goTo(i) {
        if (i >= 0 && i < slides.length) index = i;
    }

    function startAuto() {
        stopAuto();
        if (!canAutoplay()) return;
        timer = setInterval(() => next(), interval);
    }

    function stopAuto() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }

    function onKeydown(e) {
        if (e.key === 'ArrowLeft') prev();
        else if (e.key === 'ArrowRight') next();
    }

    function onPointerDown(e) {
        pointerStartX = e.clientX;
        container.setPointerCapture?.(e.pointerId);
    }

    function onPointerUp(e) {
        if (pointerStartX === null) return;
        const delta = e.clientX - pointerStartX;
        pointerStartX = null;
        if (Math.abs(delta) > SWIPE_THRESHOLD) {
            if (delta > 0) prev();
            else next();
        }
    }

    onMount(() => {
        startAuto();
        return () => stopAuto();
    });

    // pause on hover
    function handleMouseEnter() {
        if (pauseOnHover) stopAuto();
    }
    function handleMouseLeave() {
        if (pauseOnHover) startAuto();
    }
</script>

<style>
    :global(:root) {
        --carousel-height: 320px;
        --dot-size: 10px;
        --arrow-size: 36px;
        --arrow-bg: rgba(0,0,0,0.35);
        --arrow-color: #fff;
    }

    .carousel {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: var(--carousel-height);
        border-radius: 8px;
        background: #111;
    }

    .viewport {
        height: 100%;
        width: 100%;
        display: flex;
        transition: transform 350ms ease;
        will-change: transform;
    }

    .slide {
        min-width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        user-select: none;
        overflow: hidden;
        background: #000;
    }

    .slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .caption {
        position: absolute;
        left: 12px;
        bottom: 12px;
        right: 12px;
        color: #fff;
        text-shadow: 0 2px 8px rgba(0,0,0,0.6);
        background: linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.35));
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 0.95rem;
    }

    .arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: var(--arrow-size);
        height: var(--arrow-size);
        display: grid;
        place-items: center;
        background: var(--arrow-bg);
        color: var(--arrow-color);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        z-index: 5;
    }
    .arrow:focus { outline: 2px solid #fff; }

    .arrow.left { left: 8px; }
    .arrow.right { right: 8px; }

    .indicators {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 8px;
        z-index: 6;
    }

    .dot {
        width: var(--dot-size);
        height: var(--dot-size);
        border-radius: 50%;
        background: rgba(255,255,255,0.45);
        border: none;
        cursor: pointer;
        padding: 0;
    }
    .dot[aria-current="true"] {
        background: #fff;
        transform: scale(1.05);
    }

    .sr-only {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
    }

    /* responsive height example */
    @media (max-width: 640px) {
        :root { --carousel-height: 220px; }
    }
</style>

<div
    class="carousel"
    bind:this={container}
    role="region"
    aria-roledescription="carousel"
    aria-label="Image carousel"
    tabindex="0"
    on:keydown={onKeydown}
    on:pointerdown={onPointerDown}
    on:pointerup={onPointerUp}
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
>
    {#if slides.length === 0}
        <div class="slide">
            <slot>
                <div style="color:#fff; padding:1rem;">No slides provided</div>
            </slot>
        </div>
    {:else}
        <div
            class="viewport"
            style="transform: translateX(-{index * 100}%);"
            aria-live="polite"
        >
            {#each slides as s, i}
                <div class="slide" aria-hidden={i !== index}>
                    {#if s.href}
                        <a href={s.href} style="display:block; width:100%; height:100%;">
                            <img src={s.src} alt={s.alt ?? ''} draggable="false" />
                        </a>
                    {:else}
                        <img src={s.src} alt={s.alt ?? ''} draggable="false" />
                    {/if}
                    {#if s.caption}
                        <div class="caption">{s.caption}</div>
                    {/if}
                </div>
            {/each}
        </div>

        {#if showArrows && slides.length > 1}
            <button class="arrow left" on:click={prev} aria-label="Previous slide">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M15 6L9 12l6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>

            <button class="arrow right" on:click={next} aria-label="Next slide">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
        {/if}

        {#if showIndicators && slides.length > 1}
            <div class="indicators">
                {#each slides as _, i}
                    <button
                        class="dot"
                        aria-label={"Go to slide " + (i + 1)}
                        aria-current={i === index}
                        on:click={() => goTo(i)}
                    />
                {/each}
            </div>
        {/if}
    {/if}
</div>