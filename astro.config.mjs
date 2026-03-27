import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import rehypeExternalLinks from 'rehype-external-links';
//import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite'; // Import the new Vite plugin
//import fs from 'node:fs';
//import path from 'node:path';
//import { execSync } from 'node:child_process';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

export default defineConfig({
    site: env.PUBLIC_SITE_URL,
    integrations: [
        react(),
    ],
    markdown: {
        rehypePlugins: [
            [rehypeExternalLinks, { target: '_blank', rel: ['nofollow', 'noopener', 'noreferrer'] }]
        ],
    },
    vite: {
        server: {
            allowedHosts: [".trycloudflare.com"]
        },
        define: {
            'import.meta.env.STAGING': JSON.stringify(env.NODE_ENV?.toLowerCase() === 'staging' || env.PUBLIC_STAGING === 'true'),
            'import.meta.env.PROD': JSON.stringify(env.NODE_ENV?.toLowerCase() === 'production' || process.env.NODE_ENV === 'production' || env.PUBLIC_PROD === 'true'),
        },
        plugins: [tailwindcss()], // Add Tailwind as a Vite plugin here
    },
});