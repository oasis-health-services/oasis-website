import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite'; // Import the new Vite plugin

export default defineConfig({
    site: process.env.VITE_WEBSITE_URL || 'https://oasishealthservices.com',
    integrations: [
        react(),
        sitemap()
    ],
    vite: {
        server: {
            allowedHosts: [".trycloudflare.com"]
        },
        plugins: [tailwindcss()], // Add Tailwind as a Vite plugin here
    },
});