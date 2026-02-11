import fs from 'node:fs';
import path from 'node:path';
import bcrypt from 'bcryptjs';

const USER = process.env.STAGING_USER || 'admin';
const PASS = process.env.STAGING_PASS || 'oasis#2026!';
const DIST_DIR = path.resolve('./dist');
const PUBLIC_DIR = path.resolve('./public');

if (process.env.PUBLIC_SITE_URL?.includes('dev') || process.env.NODE_ENV === 'staging') {
    console.log('🔒 Setting up Basic Auth for Staging...');

    // 1. Generate .htpasswd content
    // Apache supports bcrypt hasshes (prefixed with $2y$)
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(PASS, salt).replaceAll(/^\$2a\$/, '$2y$');
    const htpasswdContent = `${USER}:${hash}`;

    // Read existing .htaccess from /public
    const htaccessPath = path.join(PUBLIC_DIR, '.htaccess');
    let existingContent = '';
    if (fs.existsSync(htaccessPath)) {
        existingContent = fs.readFileSync(htaccessPath, 'utf-8');
    }

    // Define auth block
    const authBlock = `
# --- STAGING AUTH START ---
AuthType Basic
AuthName "Staging Environment - oasishealthservices.com"
AuthUserFile ${path.join(DIST_DIR, '.htpasswd')}
Require valid-user

# Security: Prevent the auth files from being downloaded
<FilesMatch "^\\.ht">
    Order allow,deny
    Deny from all
</FilesMatch>
# --- STAGING AUTH END ---
`.trim();

    let finalHtaccess = existingContent;
    if (!existingContent.includes('STAGING AUTH START')) {
        finalHtaccess = authBlock + '\n' + existingContent;
    }

    // write both files to /dist and /public
    try {
        fs.writeFileSync(path.join(DIST_DIR, '.htpasswd'), htpasswdContent);
        fs.writeFileSync(path.join(DIST_DIR, '.htaccess'), finalHtaccess);
        console.log('✅ Updated .htaccess and created .htpasswd in dist/');
    } catch (error) {
        console.error('❌ Failed to write .htaccess and .htpasswd files:', error);
    }

} else {
    console.log('⏩ Skipping Basic Auth setup for non-staging environment.');
}