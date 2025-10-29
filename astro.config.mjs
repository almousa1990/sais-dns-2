import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Import the Vercel adapter
import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://sais-dns-2.vercel.app",

  integrations: [
    starlight({
      title: 'التعليمات',

      sidebar: [
        {
          label: 'إعدادات الخدمة',
          items: [
            {
              slug: 'settings/windows',
            },
            {
              slug: 'settings/macos',
            },
            {
              slug: 'settings/linux',
            },
            {
              slug: 'settings/ios',
            },
          ],
        },
      ],
      logo: {
        light: './public/sais-dns-logo.svg',
        dark: './public/sais-dns-logo-light.svg',
      },
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
        }
      }

    }),
  ],

  output: 'server',
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
  },
});