import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const sizes = {
  mobile: 640,
  tablet: 1024,
  desktop: 1920
};

async function optimizeImages() {
  const inputDir = 'public/assets/images';
  const outputDir = 'public/assets/images/optimized';

  try {
    // Create output directory if it doesn't exist
    await fs.mkdir(outputDir, { recursive: true });

    // Read all images from input directory
    const files = await fs.readdir(inputDir);

    for (const file of files) {
      if (!/\.(jpg|jpeg|png)$/i.test(file)) continue;

      const inputPath = path.join(inputDir, file);
      const filename = path.parse(file).name;

      // Generate different sizes
      for (const [size, width] of Object.entries(sizes)) {
        await sharp(inputPath)
          .resize(width, null, { 
            fit: 'contain',
            withoutEnlargement: true 
          })
          .jpeg({ quality: 80, progressive: true })
          .toFile(path.join(outputDir, `${filename}-${width}.jpg`));

        // Also generate WebP version
        await sharp(inputPath)
          .resize(width, null, { 
            fit: 'contain',
            withoutEnlargement: true 
          })
          .webp({ quality: 80 })
          .toFile(path.join(outputDir, `${filename}-${width}.webp`));
      }
    }

    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();