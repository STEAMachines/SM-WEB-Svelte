/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        a: 'var(--color-a)',
        b: 'var(--color-b)',
        c: 'var(--color-c)',
        d: 'var(--color-d)',
      }
    },
  },
  plugins: [],
}