#!/usr/bin/env node
/**
 * optimize-photos.js
 *
 * Reads everything in `src/photos/originals/`, writes compressed WebP +
 * JPEG-fallback copies to `src/photos/optimized/`.
 *
 * Usage:
 *   npm run optimize-photos
 *
 * Notes:
 *   - Idempotent: re-running is safe; skips outputs that already exist and
 *     are newer than their source. Pass --force to rebuild all outputs.
 *   - Strips image metadata (no GPS, face regions, or camera info leaks).
 *   - Resizes to fit within 1600x1600 (preserves aspect ratio).
 *   - Quality 82 — high but not lossless. Typical 80–95% size reduction.
 */

const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');

const ROOT = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT, 'src', 'photos', 'originals');
const OUT_DIR = path.join(ROOT, 'src', 'photos', 'optimized');

const ALLOWED = new Set(['.jpg', '.jpeg', '.png', '.heic', '.heif', '.tif', '.tiff', '.webp']);
const MAX_EDGE = 1600;
const QUALITY = 82;
const FORCE = process.argv.includes('--force');

function fmtBytes(n) {
  if (n < 1024) return `${n}B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)}KB`;
  return `${(n / (1024 * 1024)).toFixed(2)}MB`;
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/\.[^.]+$/, '')        // strip extension
    .replace(/[^a-z0-9]+/g, '-')    // non-alphanumeric → dash
    .replace(/^-+|-+$/g, '');       // trim leading/trailing dashes
}

async function isUpToDate(srcPath, outPath) {
  try {
    const [s, o] = await Promise.all([fs.promises.stat(srcPath), fs.promises.stat(outPath)]);
    return o.mtimeMs >= s.mtimeMs;
  } catch {
    return false;
  }
}

async function processFile(file) {
  const srcPath = path.join(SRC_DIR, file);
  const ext = path.extname(file).toLowerCase();
  if (!ALLOWED.has(ext)) {
    return { file, status: 'skip', reason: `unknown extension ${ext}` };
  }

  const slug = slugify(file);
  const webpOut = path.join(OUT_DIR, `${slug}.webp`);
  const jpgOut = path.join(OUT_DIR, `${slug}.jpg`);

  const [webpFresh, jpgFresh] = await Promise.all([
    isUpToDate(srcPath, webpOut),
    isUpToDate(srcPath, jpgOut),
  ]);
  if (!FORCE && webpFresh && jpgFresh) {
    return { file, status: 'cached', slug };
  }

  const srcStat = await fs.promises.stat(srcPath);
  const pipeline = sharp(srcPath, { failOn: 'none' })
    .rotate()                               // honor EXIF orientation, then strip
    .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true });

  await Promise.all([
    pipeline.clone().webp({ quality: QUALITY, effort: 4 }).toFile(webpOut),
    pipeline.clone().jpeg({ quality: QUALITY, mozjpeg: true }).toFile(jpgOut),
  ]);

  const [webpStat, jpgStat] = await Promise.all([
    fs.promises.stat(webpOut),
    fs.promises.stat(jpgOut),
  ]);

  return {
    file,
    status: 'ok',
    slug,
    src: srcStat.size,
    webp: webpStat.size,
    jpg: jpgStat.size,
  };
}

async function main() {
  if (!fs.existsSync(SRC_DIR)) {
    console.error(`! originals folder not found: ${SRC_DIR}`);
    process.exit(1);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const files = (await fs.promises.readdir(SRC_DIR))
    .filter((f) => !f.startsWith('.'))
    .sort();

  if (files.length === 0) {
    console.log('No files in src/photos/originals/. Drop some photos in there and re-run.');
    return;
  }

  console.log(`Optimizing ${files.length} file(s) → ${path.relative(ROOT, OUT_DIR)}/\n`);

  let totalSrc = 0, totalOut = 0, ok = 0, cached = 0, skipped = 0;

  for (const file of files) {
    try {
      const r = await processFile(file);
      if (r.status === 'ok') {
        ok++;
        totalSrc += r.src;
        totalOut += r.webp;
        const savings = ((1 - r.webp / r.src) * 100).toFixed(0);
        console.log(`  ✓ ${file}  ${fmtBytes(r.src)} → ${fmtBytes(r.webp)} webp / ${fmtBytes(r.jpg)} jpg  (-${savings}%)`);
        console.log(`     → src/photos/optimized/${r.slug}.webp`);
      } else if (r.status === 'cached') {
        cached++;
        console.log(`  · ${file}  (cached → ${r.slug}.webp)`);
      } else {
        skipped++;
        console.log(`  ! ${file}  skipped — ${r.reason}`);
      }
    } catch (err) {
      skipped++;
      console.log(`  × ${file}  FAILED — ${err.message}`);
    }
  }

  console.log('');
  console.log(`Done. ${ok} optimized, ${cached} cached, ${skipped} skipped.`);
  if (ok > 0) {
    const pct = ((1 - totalOut / totalSrc) * 100).toFixed(0);
    console.log(`Total: ${fmtBytes(totalSrc)} → ${fmtBytes(totalOut)} (-${pct}%)`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
