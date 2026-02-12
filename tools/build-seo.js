#!/usr/bin/env node

/**
 * Master SEO Build Script
 * Runs all SEO-related generation tasks in the correct order
 */

import 'dotenv/config';
import fs from 'node:fs/promises';
import path from 'node:path'
import { globby } from 'globby'
import * as cheerio from 'cheerio'

const DIST_DIR = './dist';
const SITE_URL = process.env.PUBLIC_SITE_URL; // || 'https://oasishealthservices.com';

async function generateSitemap() {

  console.log('🗺️  Generating post-build sitemap...');

  const files = await globby(`${DIST_DIR}/**/*.html`, {
    ignore: [`${DIST_DIR}/404.html`]
  });

  // 1. Create Sitemap Entries
  const urls = await Promise.all(files.map(async (file) => {
    const stats = await fs.stat(file);
    const relativePath = path.relative(DIST_DIR, file)
      .replace(/index\.html$/, '')
      .replace(/\.html$/, '');

    const url = `${SITE_URL}/${relativePath}`.replace(/\/+$/, '') || '/';
    const lastmod = stats.mtime.toISOString();
    let priority = 0.7;
    let changefreq = 'monthly';
    if (relativePath.startsWith('blog/categories') || relativePath.startsWith('blog/tags')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (relativePath.startsWith('blog')) {
      priority = 0.9;
      changefreq = 'daily';
    } else if (relativePath.startsWith('about/conditions')) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (relativePath.startsWith('about/our-team')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (relativePath.startsWith('services')) {
      priority = 0.8;
    } else if (relativePath.startsWith('about/our-team')) {
      priority = 0.8;
    } else if (relativePath.startsWith('resources')) {
      priority = 0.8;
    } else if (relativePath.startsWith('policies') || relativePath.startsWith('terms-and-conditions') || relativePath.startsWith('hipaa')) {
      priority = 0.5;
      changefreq = 'yearly';
    }

    return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }));

  // 2. Build sitemap-0.xml
  const sitemap0Content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  // 3. Build sitemap-index.xml
  const sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_URL}/sitemap-0.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;

  await fs.writeFile(path.join(DIST_DIR, 'sitemap-0.xml'), sitemap0Content);
  await fs.writeFile(path.join(DIST_DIR, 'sitemap-index.xml'), sitemapIndexContent);

  console.log('✅ Sitemap files generated in dist/');
}

async function generateLLMs() {
  console.log('🗺️  Generating LLMs.txt...');

  const files = await globby(`${DIST_DIR}/**/*.html`, { ignore: [`${DIST_DIR}/404.html`] })

  // 1. Initialize our Category Buckets
  const categories = {
    blog: { title: 'Articles', items: [] },
    conditions: { title: 'Conditions We Treat', items: [] },
    services: { title: 'Services We Offer', items: [] },
    team: { title: 'Members of Our Team', items: [] },
    resources: { title: 'Mental Health Resources', items: [] },
    static: { title: 'General Information', items: [] }, // Fallback
  };

  for (const file of files) {
    const html = await fs.readFile(file, 'utf-8');
    const $ = cheerio.load(html);

    const title = $('title').text().trim();
    const description = $('meta[name="description"]').attr('content') || 'No description.';
    //    const canonical = $('link[rel="canonical"]').attr('href') || '';

    const relativePath = path.relative(DIST_DIR, file)
      .replace(/index\.html$/, '')
      .replace(/\.html$/, '');

    const url = `${SITE_URL}/${relativePath}`.replace(/\/+$/, '') || '/';
    const route = `/${relativePath}`.replace(/\/+$/, '') || '/';
    const entry = `[${title}](${url}): ${description}`;

    if (route.startsWith('/blog')) {
      categories.blog.items.push(entry);
    } else if (route.startsWith('/about/conditions')) {
      categories.conditions.items.push(entry);
    } else if (route.startsWith('/services')) {
      categories.services.items.push(entry);
    } else if (route.startsWith('/about/our-team')) {
      categories.team.items.push(entry);
    } else if (route.startsWith('/resources')) {
      categories.resources.items.push(entry);
    } else {
      categories.static.items.push(entry);
    }
  }

  // 3. Build Markdown Content
  let content = `# Oasis Health Services\n> Comprehensive site context for AI agents.\n\n`;

  // order of sections
  const order = ['static', 'blog', 'conditions', 'services', 'team', 'resources']

  for (const key of order) {
    const cat = categories[key];
    if (cat.items.length > 0) {
      content += `## ${cat.title}\n${cat.items.join('\n')}\n\n`;
    }
  }

  await fs.writeFile(path.join(DIST_DIR, 'llms.txt'), content);
  console.log('✅ Categorized LLMs.txt generated');
}

async function generateRobotsTxt() {
  console.log('🗺️  Generating robots.txt...');

  const siteUrl = SITE_URL; // || "https://oasishealthservices.com";
  const isProd = process.env.NODE_ENV === 'production';

  const privatePaths = ['/thank-you', '/privacy-policy', '/terms-and-conditions'];

  const disallowRules = privatePaths.map(path => `Disallow: ${path}`).join('\n');

  const robots = isProd ? `# Production Environment
User-agent: *
Allow: /
${disallowRules}

# Sitemap & AI Discovery
Sitemap: ${new URL('sitemap-index.xml', siteUrl).href}
llms: ${new URL('llms.txt', siteUrl).href}

# Block AI scrapers
User-agent: GPTBot
Disallow: /
User-agent: CCBot
Disallow: /` : `# Test Environment
User-agent: *
Disallow: /`;

  await fs.writeFile(path.join(DIST_DIR, 'robots.txt'), robots);
  console.log('✅ robots.txt generated in dist/');
}

//import { exec } from 'child_process';
//import { promisify } from 'util';

//const execAsync = promisify(exec);

//const tools = [
//  { name: 'Robots.txt', script: 'node --env-file=.env tools/generate-robots.js' },
//  { name: 'LLMs.txt', script: 'node --env-file=.env tools/generate-llms.js' },
//];

// async function runScript(name, script) {
//   console.log(`\n🔧 Running: ${name}...`);
//   try {
//     const { stdout, stderr } = await execAsync(script);
//     if (stdout) console.log(stdout);
//     if (stderr) console.error(stderr);
//     console.log(`✅ ${name} completed`);
//     return true;
//   } catch (error) {
//     console.error(`❌ ${name} failed:`, error.message);
//     return false;
//   }
// }

async function main() {
  console.log('🚀 Starting SEO Build Process...\n');
  console.log('='.repeat(50));

  let allSuccess = true;

  // Run pre-build tools
  // for (const tool of tools) {
  //   const success = await runScript(tool.name, tool.script);
  //   if (!success) allSuccess = false;
  // }

  //  console.log('\n' + '='.repeat(50));

  await generateSitemap();
  await generateLLMs();
  await generateRobotsTxt();

  console.log('✅ All pre-build SEO tasks completed successfully!');

  //  if (allSuccess) {
  //    console.log('\n📦 Now running Astro build...\n');
  //  } else {
  //    console.log('⚠️  Some tasks failed, but continuing with build...');
  //  }
}

const isMainModule = import.meta.url === `file://${process.argv[1]}`;

if (isMainModule) {
  main().catch(error => {
    console.error('Fatal error in SEO build:', error);
    process.exit(1);
  });
}

export default main;
