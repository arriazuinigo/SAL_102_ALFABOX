import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';


export default defineConfig({
  site: 'https://alfabox.es',
  adapter: vercel(),
  integrations: [sitemap(), tailwind()],
  output: 'server',
  vite: {
    envDir: '.'
  }
});