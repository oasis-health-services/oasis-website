
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: process.env.VITE_WEBSITE_URL || 'https://oasishealthservices.com',
    integrations: [
        react(),
        tailwind({
            applyBaseStyles: false, // We'll import our own base styles
        }),
        sitemap(),
    ],
});
