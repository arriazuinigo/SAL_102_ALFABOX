// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://alfabox.es',
    adapter: vercel(),
    integrations: [sitemap(), tailwind(), react()],
    output: 'server', // genera problemas blog --> error 
    vite: {
      envDir: '.'
    },
    redirects: {
      '/index.html': '/',
      '/index.htm': '/',
      '/index.php': '/',
      'index': '/',
    },
    // headers: {
    //   '/*': [
    //     {
    //       'x-robots-tag': 'all'
    //     }
    //   ]
    // },
    server: {
      host: true
    }
});
