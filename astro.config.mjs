import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

// Import the Vercel adapter
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: "https://sais-dns-2.vercel.app",
  integrations: [
    tailwind(),
    starlight({
      title: 'وقاية DNS',

      customCss: [
        // Path to your Tailwind base styles:
        './src/styles/docs.css',
      ],

      defaultLocale: 'root',
      locales: {
        // Arabic docs in `src/content/docs/ar/`
        root: {
          label: 'العربية',
          dir: 'rtl',
          lang: 'ar'
        }}

    })
  ],
  output: 'server',
  adapter: vercel(),
});