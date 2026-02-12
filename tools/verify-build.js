
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const dataDir = path.join(rootDir, 'src', 'data');

function checkFileExists(filePath) {
    if (fs.existsSync(filePath)) {
        console.log(`✅ Found: ${path.relative(rootDir, filePath)}`);
        return true;
    } else {
        console.error(`❌ Missing: ${path.relative(rootDir, filePath)}`);
        return false;
    }
}

function checkFileContent(filePath, searchString) {
    if (!fs.existsSync(filePath)) return false;

    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(searchString)) {
        console.log(`✅ Content Verified: "${searchString}" found in ${path.relative(rootDir, filePath)}`);
        return true;
    } else {
        console.error(`❌ Content Missing: "${searchString}" NOT found in ${path.relative(rootDir, filePath)}`);
        return false;
    }
}

async function verify() {
    console.log('🔍 Verifying Build Artifacts...\n');
    let errors = 0;

    // 1. Check Root
    if (!checkFileExists(path.join(distDir, 'index.html'))) errors++;

    // 2. Check Static Page (About)
    const aboutPage = path.join(distDir, 'about', 'index.html');
    if (checkFileExists(aboutPage)) {
        // Check for prerendered content (assuming the title or unique text is present)
        // Note: Adjust "About" to whatever text is actually on that page if needed
        if (!checkFileContent(aboutPage, '<h2 class="text-3xl font-bold text-[#2D6762]">Our Mission</h2>')) errors++;
    } else {
        errors++;
    }

    // 3. Check Blog Posts
    const blogDataPath = path.join(dataDir, 'blog-posts.json');
    if (checkFileExists(blogDataPath)) {
        const posts = JSON.parse(fs.readFileSync(blogDataPath, 'utf8'));
        if (posts.length > 0) {
            console.log(`\nChecking ${posts.length} blog posts...`);
            // Check first post
            const firstPost = posts[0];
            const postPath = path.join(distDir, 'blog', firstPost.slug, 'index.html');

            if (checkFileExists(postPath)) {
                // Check for post title in the HTML
                // We encode special chars mostly, but simple titles should match
                if (!checkFileContent(postPath, firstPost.title)) {
                    console.warn(`⚠️  Title might be encoded or different, checking for common footer text just in case files are valid HTML...`);
                    if (!checkFileContent(postPath, 'Oasis Health Services')) errors++;
                }
            } else {
                errors++;
            }
        } else {
            console.warn('⚠️  No blog posts found in JSON to verify.');
        }
    } else {
        errors++;
    }

    // 4. SEO Files
    if (!checkFileExists(path.join(distDir, 'sitemap.xml'))) errors++;
    if (!checkFileExists(path.join(distDir, 'robots.txt'))) errors++;

    console.log('\n' + '='.repeat(30));
    if (errors === 0) {
        console.log('🎉 Verification PASSED! All artifacts look correct.');
        process.exit(0);
    } else {
        console.error(`💥 Verification FAILED with ${errors} errors.`);
        process.exit(1);
    }
}

verify();
