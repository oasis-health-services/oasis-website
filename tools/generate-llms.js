#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const CLEAN_CONTENT_REGEX = {
  comments: /\/\*[\s\S]*?\*\/|\/\/.*$/gm,
  templateLiterals: /`[\s\S]*?`/g,
  strings: /'[^']*'|"[^"]*"/g,
  jsxExpressions: /\{.*?\}/g,
  htmlEntities: {
    quot: /&quot;/g,
    amp: /&amp;/g,
    lt: /&lt;/g,
    gt: /&gt;/g,
    apos: /&apos;/g
  }
};

const EXTRACTION_REGEX = {
  route: /<Route\s+[^>]*>/g,
  path: /path=["']([^"']+)["']/,
  element: /element=\{<(\w+)[^}]*\/?\s*>\}/,
  helmet: /<Helmet[^>]*?>([\s\S]*?)<\/Helmet>/i,
  helmetTest: /<Helmet[\s\S]*?<\/Helmet>/i,
  seo: /<SEO\s+([^>]*?)(?:\/?>|>[\s\S]*?<\/SEO>)/i,
  seoTest: /<SEO[\s\S]*?(?:\/?>|<\/SEO>)/i,
  layout: /<Layout\s+([^>]*?)(?:\/?>|>[\s\S]*?<\/Layout>)/i,
  layoutTest: /<Layout[\s\S]*?(?:\/?>|<\/Layout>)/i,
  seoProp: /(\w+)=\{([^}]*)\}|(\w+)="([^"]*)"/g,
  title: /<title[^>]*?>\s*(.*?)\s*<\/title>/i,
  description: /<meta\s+name=["']description["']\s+content=["'](.*?)["']/i
};

function cleanContent(content) {
  return content
    .replace(CLEAN_CONTENT_REGEX.comments, '')
    .replace(CLEAN_CONTENT_REGEX.templateLiterals, '""')
    .replace(CLEAN_CONTENT_REGEX.strings, '""');
}

function cleanText(text) {
  if (!text) return text;

  return text
    .replace(CLEAN_CONTENT_REGEX.jsxExpressions, '')
    .replace(CLEAN_CONTENT_REGEX.htmlEntities.quot, '"')
    .replace(CLEAN_CONTENT_REGEX.htmlEntities.amp, '&')
    .replace(CLEAN_CONTENT_REGEX.htmlEntities.lt, '<')
    .replace(CLEAN_CONTENT_REGEX.htmlEntities.gt, '>')
    .replace(CLEAN_CONTENT_REGEX.htmlEntities.apos, "'")
    .trim();
}

function extractRoutes(appJsxPath) {
  if (!fs.existsSync(appJsxPath)) return new Map();

  try {
    const content = fs.readFileSync(appJsxPath, 'utf8');
    const routes = new Map();
    const routeMatches = [...content.matchAll(EXTRACTION_REGEX.route)];

    for (const match of routeMatches) {
      const routeTag = match[0];
      const pathMatch = routeTag.match(EXTRACTION_REGEX.path);
      const elementMatch = routeTag.match(EXTRACTION_REGEX.element);
      const isIndex = routeTag.includes('index');

      if (elementMatch) {
        const componentName = elementMatch[1];
        let routePath;

        if (isIndex) {
          routePath = '/';
        } else if (pathMatch) {
          routePath = pathMatch[1].startsWith('/') ? pathMatch[1] : `/${pathMatch[1]}`;
        }

        routes.set(componentName, routePath);
      }
    }

    return routes;
  } catch (error) {
    return new Map();
  }
}

function findPageFiles(dir) {
  let files = [];
  if (!fs.existsSync(dir)) return files;

  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files = files.concat(findPageFiles(fullPath));
    } else if (stat.isFile() && (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.astro'))) {
      // Skip dynamic routes like [slug].astro
      if (!item.includes('[') && !item.includes(']')) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

function extractHelmetData(content, filePath, routes) {
  // Use a more careful cleaning for Layout/SEO tags
  let title, description;

  // 1. Try to find Layout props (Astro style)
  const layoutMatch = content.match(/<Layout\s+[^>]*title=\{?["'`]([^"'`}]*)["'`]\}?[^>]*description=\{?["'`]([^"'`}]*)["'`]\}?/i);
  if (layoutMatch) {
    title = layoutMatch[1];
    description = layoutMatch[2];
  }

  // 2. Try to find SEO props
  if (!title) {
    const seoMatch = content.match(/<SEO\s+[^>]*title=["']([^"']*)["'][^>]*description=["']([^"']*)["']/i);
    if (seoMatch) {
      title = seoMatch[1];
      description = seoMatch[2];
    }
  }

  // 3. Fall back to Helmet
  if (!title) {
    const helmetTitleMatch = content.match(/<title[^>]*?>\s*(.*?)\s*<\/title>/i);
    const helmetDescMatch = content.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
    if (helmetTitleMatch) title = cleanText(helmetTitleMatch[1]);
    if (helmetDescMatch) description = cleanText(helmetDescMatch[1]);
  }

  // If title looks like a variable (starts with { or contains .), skip it
  if (title && (title.includes('{') || title.includes('.') || title.includes('Astro.props'))) {
    return null;
  }

  if (!title) return null;

  const fileName = path.basename(filePath, path.extname(filePath));
  let url;

  if (filePath.includes('/src/pages/')) {
    const relativePath = path.relative(path.join(process.cwd(), 'src', 'pages'), filePath);
    url = '/' + relativePath.replace(/\.(astro|jsx|js)$/, '').replace(/\/index$/, '');
    if (url === '/index' || url === '') url = '/';
  } else {
    url = routes && routes.has(fileName)
      ? routes.get(fileName)
      : generateFallbackUrl(fileName);
  }

  return {
    url,
    title: title || 'Untitled Page',
    description: description || 'No description available'
  };
}

function generateFallbackUrl(fileName) {
  const cleanName = fileName.replace(/Page$/, '').toLowerCase();
  return cleanName === 'app' ? '/' : `/${cleanName}`;
}

function generateLlmsTxt(pages, blogPosts) {
  const sortedPages = pages.sort((a, b) => a.title.localeCompare(b.title));
  const pageEntries = sortedPages.map(page =>
    `- [${page.title}](${page.url}): ${page.description}`
  ).join('\n');

  let content = `## Pages\n${pageEntries}`;

  if (blogPosts && blogPosts.length > 0) {
    const sortedPosts = blogPosts.sort((a, b) => a.title.localeCompare(b.title));
    const postEntries = sortedPosts.map(post =>
      `- [${post.title}](${post.url}): ${post.description}`
    ).join('\n');
    content += `\n\n## Blog Posts\n${postEntries}`;
  }

  return content;
}

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function processPageFile(filePath, routes) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return extractHelmetData(content, filePath, routes);
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return null;
  }
}

async function main() {
  const pagesDir = path.join(process.cwd(), 'src', 'pages');
  const appJsxPath = path.join(process.cwd(), 'src', 'App.jsx');

  let pages = [];

  if (!fs.existsSync(pagesDir)) {
    pages.push(processPageFile(appJsxPath, []));
  } else {
    const routes = extractRoutes(appJsxPath);
    const pageFiles = findPageFiles(pagesDir);

    pages = pageFiles
      .map(filePath => processPageFile(filePath, routes))
      .filter(Boolean);

    if (pages.length === 0) {
      console.error('❌ No pages with Helmet components found!');
      process.exit(1);
    }
  }


  const llmsTxtContent = generateLlmsTxt(pages);
  const outputPath = path.join(process.cwd(), 'public', 'llms.txt');

  ensureDirectoryExists(path.dirname(outputPath));
  fs.writeFileSync(outputPath, llmsTxtContent, 'utf8');
  console.log(`✓ Generated llms.txt with ${pages.length} pages`);
}

const isMainModule = import.meta.url === `file://${process.argv[1]}`;

if (isMainModule) {
  main().catch(error => {
    console.error('Error generating llms.txt:', error);
    process.exit(1);
  });
}
