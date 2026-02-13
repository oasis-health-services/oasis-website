import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
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
        /*        sitemap({
                    serialize: (item) => {
        
                        const url = new URL(item.url);
                        // Normalize pathname: remove trailing slash and leading slash for logic
                        const pathname = url.pathname.replace(/\/$/, "") || "";
        
                        let sourceFilePath = null;
        
                        if (pathname.startsWith('/blog') && pathname !== '/blog') {
                            const parts = pathname.split('/');
                            // parts looks like ["", "blog", "2025", "01", "slug"]
                            const year = parts[2];
                            const month = parts[3];
                            const slug = parts[4];
        
                            // Reconstruct the file path based on your folder structure
                            const mdPath = path.join(process.cwd(), 'src/content/blog', year, month, `${slug}.md`);
                            if (fs.existsSync(mdPath)) {
                                sourceFilePath = mdPath;
                            }
                        }
                        else if (pathname.startsWith('/blog/category/')) {
                            const parts = pathname.split('/');
                            const categorySlug = parts[3];
        
                            const jsonPath = path.join(process.cwd(), 'src/content/categories', `${categorySlug}.json`);
                            if (fs.existsSync(jsonPath)) {
                                sourceFilePath = jsonPath;
                            } else {
                                sourceFilePath = path.join(process.cwd(), 'src/pages/blog/category/index.astro');
                            }
        
                        }
                        else if (pathname === '/blog') {
                            sourceFilePath = path.join(process.cwd(), 'src/pages/blog/index.astro');
                        }
                        else if (pathname === "") {
                            sourceFilePath = path.join(process.cwd(), 'src/pages/index.astro');
                        }
                        else {
                            const testPath = path.join(process.cwd(), 'src/pages', `${pathname}.astro`);
                            if (fs.existsSync(testPath)) sourceFilePath = testPath;
                        }
        
                        //                if (sourceFilePath === null)
                        console.log("sourceFilePath: ", sourceFilePath, "==>", item.url, "pathname: ", pathname);
                        // 5. Apply Git Lastmod
                        if (sourceFilePath) {
                            try {
                                const gitDate = execSync(`git log -1 --format=%cI "${sourceFilePath}"`, {
                                    encoding: 'utf-8',
                                }).trim();
                                if (gitDate) item.lastmod = gitDate;
                            } catch (e) {
                                item.lastmod = new Date().toISOString();
                            }
                        }
        
                        if (pathname === '/blog') {
                            item.changefreq = 'daily';
                            item.priority = 0.9;
                        }
        
                        return item;
        
        
                        // let relativePath = url.pathname;
        
                        // console.log("what I got: ", item.url, relativePath);
        
                        // if (relativePath == "/") relativePath = '/index';
        
                        // const extensions = ['.astro', '.md', '.html'];
                        // let filePath = null;
        
                        // for (const ext of extensions) {
        
                        //     const testPath = path.join(process.cwd(), 'src/pages', `${relativePath}${ext}`);
                        //     //                    const testPath2 = path.join(process.cwd(), 'src/pages', `${relativePath}`, `index${ext}`);
                        //     const indexPath = path.join(process.cwd(), 'src/pages', relativePath, `index${ext}`);
        
                        //     //                    console.log(testPath);
                        //     //                  console.log(indexPath);
        
                        //     if (fs.existsSync(testPath)) {
                        //         filePath = testPath;
                        //         break;
                        //     } else if (fs.existsSync(indexPath)) {
                        //         filePath = indexPath;
                        //         break;
                        //     }
                        // }
        
                        // console.log(item.url, filePath);
        
                        // // if (filePath) {
                        // //     const stats = fs.statSync(filePath);
                        // //     item.lastmod = stats.mtime.toISOString();
                        // // }
        
                        // if (filePath) {
                        //     try {
                        //         // git log -1 gets the most recent commit
                        //         // --format=%cI returns the committer date in ISO 8601 format
                        //         const gitDate = execSync(`git log -1 --format=%cI "${filePath}"`, {
                        //             encoding: 'utf-8',
                        //         }).trim();
        
                        //         //                        console.log(item.url, gitDate);
                        //         if (gitDate) {
                        //             item.lastmod = gitDate;
                        //         }
                        //     } catch (e) {
                        //         // Fallback to build date if file isn't tracked by Git
                        //         //                        console.log("Git error", e);
                        //         item.lastmod = new Date().toISOString();
                        //     }
                        // }
        
                        // return {
                        //     ...item,
                        //     //                    lastmod: new Date().toISOString(),
                        //     changefreq: 'monthly',
                        //     priority: 0.7
                        // }
                    }
                })*/
    ],
    vite: {
        server: {
            allowedHosts: [".trycloudflare.com"]
        },
        plugins: [tailwindcss()], // Add Tailwind as a Vite plugin here
    },
});