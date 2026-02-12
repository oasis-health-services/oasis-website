
// Tools/prerender.js content
import puppeteer from 'puppeteer';
import http from 'http';
import handler from 'serve-handler';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STATIC_ROUTES = [
    '/',
    '/about',
    '/patients',
    '/patients/faqs',
    '/providers',
    '/providers/referrals',
    '/contact',
    '/start',
    '/policies',
    '/terms-and-conditions',
    '/blog',
    '/conditions',
    '/conditions/anxiety-disorders',
    '/conditions/mood-disorders',
    '/conditions/neurodevelopmental-disorders',
    '/conditions/personality-disorders',
    '/conditions/psychotic-disorders',
    '/conditions/ocd-related-disorders',
    '/conditions/substance-related-disorders',
    '/conditions/trauma-stress-disorders',
    '/services',
    '/services/comprehensive-psychiatric-assessment',
    '/services/genetic-testing',
    '/services/adhd-testing-and-management',
    '/services/therapy-and-counseling',
    '/services/medication-management',
    '/services/substance-use-disorder-treatment',
    '/services/spravato',
    '/services/remote-patient-monitoring',
    '/services/autism-assessment-and-management',
    '/services/telehealth',
];

async function fetchBlogRoutes() {
    try {
        const dataPath = path.join(process.cwd(), 'src', 'data', 'blog-posts.json');
        if (!fs.existsSync(dataPath)) {
            console.warn('⚠️  Blog posts data file not found. Skipping blog routes.');
            return [];
        }
        const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        return posts.map(post => `/blog/${post.slug}`);
    } catch (error) {
        console.error('Error fetching blog routes:', error);
        return [];
    }
}

async function serve(port) {
    const server = http.createServer((request, response) => {
        return handler(request, response, {
            public: 'dist',
            rewrites: [
                { source: '**', destination: '/index.html' }
            ]
        });
    });

    return new Promise((resolve) => {
        server.listen(port, () => {
            resolve(server);
        });
    });
}

async function prerender() {
    console.log('🚀 Starting prerendering process...');

    // 1. Fetch dynamic routes
    const blogRoutes = await fetchBlogRoutes();
    const allRoutes = [...STATIC_ROUTES, ...blogRoutes];
    console.log(`📋 Found ${allRoutes.length} routes to prerender.`);

    // 2. Start local server
    const port = 3000 + Math.floor(Math.random() * 1000); // Random port
    const server = await serve(port);
    const baseUrl = `http://localhost:${port}`;
    console.log(`📡 Server started on ${baseUrl}`);

    // 3. Launch Puppeteer
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    let successCount = 0;
    let errorCount = 0;

    try {
        // 4. Iterate and render
        for (const route of allRoutes) {
            try {
                const page = await browser.newPage();

                // Set viewport to desktop to ensure all content is visible
                await page.setViewport({ width: 1280, height: 800 });

                const url = `${baseUrl}${route}`;
                // console.log(`Rendering ${route}...`);

                await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

                // Wait for a key element to ensure React has mounted
                // Adjust selector based on your App's structure, e.g., 'main', '#root > div'
                await page.waitForSelector('#root', { timeout: 5000 });

                const html = await page.content();

                // 5. Save HTML
                // Handle root route
                const routePath = route === '/' ? '' : route.substring(1);
                const outputPath = path.join(process.cwd(), 'dist', routePath, 'index.html');

                const dir = path.dirname(outputPath);
                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir, { recursive: true });
                }

                fs.writeFileSync(outputPath, html);
                process.stdout.write('.'); // Progress indicator
                successCount++;

                await page.close();
            } catch (err) {
                console.error(`\n❌ Failed to render ${route}: ${err.message}`);
                errorCount++;
            }
        }
    } finally {
        await browser.close();
        server.close();
        console.log('\n🛑 Browser and server stopped.');
    }

    console.log('\n' + '='.repeat(30));
    console.log(`✅ Prerendering complete!`);
    console.log(`✓ Success: ${successCount}`);
    console.log(`✗ Errors: ${errorCount}`);
    console.log('='.repeat(30));

    if (errorCount > 0) {
        process.exit(1);
    }
}

const isMainModule = import.meta.url === `file://${process.argv[1]}`;

if (isMainModule) {
    prerender().catch(err => {
        console.error('Fatal error:', err);
        process.exit(1);
    });
}

export default prerender;
