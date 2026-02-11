// generate-webp.js
import 'dotenv/config';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const directory = './public/images'; // Your image folder

// Recursive function to find all images
function processDirectory(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            processDirectory(filePath);
        } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
            const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

            // Only convert if the webp version doesn't exist
            if (!fs.existsSync(webpPath)) {
                sharp(filePath)
                    .webp({ quality: 80 })
                    .toFile(webpPath)
                    .then(() => console.log(`Converted: ${file} -> .webp`))
                    .catch(err => console.error(`Error converting ${file}:`, err));
            }
        }
    });
}

processDirectory(directory);