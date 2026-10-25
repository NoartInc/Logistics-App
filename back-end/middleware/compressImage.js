const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const moment = require('moment');

const compressImage = async (req, res, next) => {
  if (!req.file) {
    return next();
  }

  const { mimetype, path: tempPath, originalname } = req.file;

  // Bukan image, skip
  if (!mimetype.startsWith('image/')) {
    return next();
  }

  try {
    const outputDir = path.resolve('public/images');

    // Generate filename
    const currentTime = moment().format('YYYYMMDDHHmmss');
    const uniqueSuffix = `${(req?.body?.suratJalan || '').replace(/\t/g, '')}-${currentTime}`;
    const fileExtension = originalname.split('.').pop().toLowerCase();
    const outputExtension = ['jpg', 'jpeg'].includes(fileExtension) ? 'jpg' : 'webp';
    const filename = `${uniqueSuffix}.${outputExtension}`;
    const outputPath = path.join(outputDir, filename);

    // Stream dari disk (tempPath) langsung ke disk (outputPath) - tidak load ke RAM
    await sharp(tempPath, { limitInputPixels: false })
      .resize(1920, 1920, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .toFormat(outputExtension === 'jpg' ? 'jpeg' : 'webp', {
        quality: 80,
        progressive: true,
        optimizeScans: true
      })
      .toFile(outputPath);

    // Hapus file temp dari diskStorage
    fs.unlink(tempPath, (err) => {
      if (err) console.error('Gagal hapus temp file:', err);
    });

    // Update req.file
    req.file.filename = filename;
    req.file.path = `/images/${filename}`;
    req.file.mimetype = `image/${outputExtension}`;

    next();
  } catch (error) {
    console.error('Error compressing image:', error);
    // Hapus temp file jika error
    fs.unlink(tempPath, () => {});
    next(error);
  }
};

module.exports = compressImage;
