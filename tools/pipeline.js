import { spawnSync } from 'node:child_process';
// If you don't have chalk installed, you can use console.log
const env = process.env.NODE_ENV || 'local';
const isProd = env === 'production';
const isStaging = env === 'staging';

function runCommand(command, args, name) {
    console.log(`\n▶ [${env.toUpperCase()}] Running ${name}...`);

    const result = spawnSync(command, args, {
        stdio: 'inherit',
        shell: true,
        env: process.env
    });

    if (result.status !== 0) {
        console.error(`\n❌ ${name} failed.`);
        process.exit(1);
    }
}

// --- PIPELINE LOGIC ---

// Image Optimization (Run everywhere)
runCommand('node', ['tools/generate-webp.js'], 'Image Optimization');

// Astro Build (Conditional flags)
const astroArgs = ['astro', 'build'];
if (isStaging) astroArgs.push('--mode', 'staging');
if (process.env.PUBLIC_SITE_URL) {
    astroArgs.push('--site', process.env.PUBLIC_SITE_URL);
}
runCommand('npx', astroArgs, 'Astro Build');

// SEO, LLM & Robots Generation (Only needed for deployed environments)
if (isProd || isStaging) {
    runCommand('node', ['tools/build-seo.js'], 'SEO, LLM & Robots Generation');
}

// Basic Auth (Only for Staging)
if (isStaging) {
    runCommand('node', ['tools/setup-staging-auth.js'], 'Staging Security');
}

console.log(`\n✨ Pipeline finished for ${env}`);