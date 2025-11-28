<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Carousel from '../routes/Carousel.svelte';

  const { Story } = defineMeta({
    title: 'Example/Carousel',
    component: Carousel,
    tags: ['autodocs'],
  });
</script>

<Story name="Default" />