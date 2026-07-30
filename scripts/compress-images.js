const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const MAX_SIZE = 1024 * 1024; // 1MB

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(filePath));
        } else {
            results.push(filePath);
        }
    });
    return results;
}

async function compressImage(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;

    const stats = fs.statSync(filePath);
    if (stats.size < MAX_SIZE) return;

    console.log(`Compressing: ${filePath} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);

    const buffer = fs.readFileSync(filePath);
    try {
        await sharp(buffer)
            .webp({ quality: 80 })
            .toFile(filePath.replace(ext, '.webp'));
        
        // If we want to replace the original file with a compressed version of the SAME format:
        if (ext === '.png') {
            await sharp(buffer)
                .png({ compressionLevel: 9, quality: 80 })
                .toFile(filePath + '.tmp');
        } else {
            await sharp(buffer)
                .jpeg({ quality: 80 })
                .toFile(filePath + '.tmp');
        }

        const newStats = fs.statSync(filePath + '.tmp');
        if (newStats.size < stats.size) {
            fs.renameSync(filePath + '.tmp', filePath);
            console.log(`  -> Success: ${(newStats.size / 1024 / 1024).toFixed(2)} MB`);
        } else {
            fs.unlinkSync(filePath + '.tmp');
            console.log(`  -> Skipped: No significant reduction`);
        }
    } catch (err) {
        console.error(`  -> Error: ${err.message}`);
    }
}

async function run() {
    console.log('Scanning public directory for large images...');
    const files = walk(PUBLIC_DIR);
    for (const file of files) {
        await compressImage(file);
    }
    console.log('Done.');
}

run();
