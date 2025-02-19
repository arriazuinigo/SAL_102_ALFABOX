/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgba(46,156,167,255)',
          light: 'rgba(46,156,167,0.8)',
        }
      }
    },
  },
  plugins: [],
}