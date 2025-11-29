<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { withThemeByClassName } from '@storybook/addon-themes';
  import './layout.css'
  import Header from './Header.svelte';
 
  const { Story } = defineMeta({
    component: Header,
  });
</script>
<Story
  name="Primary"
  args={{
    primary: true,
    label: 'Header'
  }}
  decorators={[withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark'
    },
    defaultTheme: 'light'
  })]}
/>