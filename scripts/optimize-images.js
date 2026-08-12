import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');

const imagesToOptimize = [
  { input: 'voyara.jpg', output: 'voyara.webp', quality: 80 },
  { input: 'zentrix.jpg', output: 'zentrix.webp', quality: 80 },
  { input: 'deno_cabs.jpg', output: 'deno_cabs.webp', quality: 80 },
  { input: 'profile.jpg', output: 'profile.webp', quality: 85 }
];

async function optimizeImages() {
  console.log('🖼️ Starting image optimization & WebP conversion...');

  for (const item of imagesToOptimize) {
    const inputPath = path.join(publicDir, item.input);
    const outputPath = path.join(publicDir, item.output);

    if (fs.existsSync(inputPath)) {
      const origSize = fs.statSync(inputPath).size;
      await sharp(inputPath)
        .webp({ quality: item.quality })
        .toFile(outputPath);

      const newSize = fs.statSync(outputPath).size;
      const savings = ((1 - newSize / origSize) * 100).toFixed(1);
      console.log(`✅ Converted ${item.input} (${(origSize / 1024).toFixed(1)} KB) -> ${item.output} (${(newSize / 1024).toFixed(1)} KB) [Saved ${savings}%]`);
    } else {
      console.warn(`⚠️ Warning: ${item.input} not found in public/`);
    }
  }

  console.log('🎉 Image optimization complete!');
}

optimizeImages().catch(err => {
  console.error('❌ Error optimizing images:', err);
  process.exit(1);
});
