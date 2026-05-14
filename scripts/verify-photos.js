#!/usr/bin/env node
/**
 * verify-photos.js
 *
 * Checks the photo workflow invariants:
 *   - every image referenced by src/data.js exists
 *   - optimized JPG/WebP files contain no EXIF, XMP, or ICC metadata
 *   - original photo files are ignored by git
 */

const childProcess = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');

const ROOT = path.resolve(__dirname, '..');
const ORIGINALS_DIR = path.join(ROOT, 'src', 'photos', 'originals');
const OPTIMIZED_DIR = path.join(ROOT, 'src', 'photos', 'optimized');

function rel(file) {
  return path.relative(ROOT, file).replace(/\\/g, '/');
}

function git(args) {
  return childProcess.spawnSync('git', args, {
    cwd: ROOT,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
}

function listFiles(dir, predicate) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .map((file) => path.join(dir, file))
    .filter((file) => fs.statSync(file).isFile())
    .filter(predicate);
}

async function main() {
  const failures = [];

  global.window = {};
  require(path.join(ROOT, 'src', 'data.js'));
  const data = global.window.BIRTHDAY_DATA;
  const referenced = [
    data.endingImage,
    ...data.chapters.flatMap((chapter) =>
      chapter.polaroids.map((polaroid) => polaroid.image).filter(Boolean)
    ),
  ];

  const missing = referenced.filter((image) => {
    if (/^https?:\/\//i.test(image)) return false;
    return !fs.existsSync(path.join(ROOT, image));
  });
  if (missing.length > 0) {
    failures.push(`Missing referenced images:\n${missing.map((image) => `  - ${image}`).join('\n')}`);
  }

  const optimized = listFiles(OPTIMIZED_DIR, (file) => /\.(jpe?g|webp)$/i.test(file));
  const metadataLeaks = [];
  for (const file of optimized) {
    const metadata = await sharp(file).metadata();
    if (metadata.exif || metadata.xmp || metadata.icc) {
      metadataLeaks.push(
        `${rel(file)} exif=${Boolean(metadata.exif)} xmp=${Boolean(metadata.xmp)} icc=${Boolean(metadata.icc)}`
      );
    }
  }
  if (metadataLeaks.length > 0) {
    failures.push(`Optimized images still contain metadata:\n${metadataLeaks.map((line) => `  - ${line}`).join('\n')}`);
  }

  const originalFiles = listFiles(ORIGINALS_DIR, (file) => path.basename(file) !== '.gitkeep');
  const notIgnored = [];
  for (const file of originalFiles) {
    const result = git(['check-ignore', '-q', rel(file)]);
    if (result.status !== 0) notIgnored.push(rel(file));
  }
  if (notIgnored.length > 0) {
    failures.push(`Original files are not gitignored:\n${notIgnored.map((file) => `  - ${file}`).join('\n')}`);
  }

  const trackedOriginals = git(['ls-files', 'src/photos/originals']);
  const tracked = trackedOriginals.stdout
    .split('\n')
    .filter(Boolean)
    .filter((file) => file !== 'src/photos/originals/.gitkeep');
  if (tracked.length > 0) {
    failures.push(`Original files are tracked by git:\n${tracked.map((file) => `  - ${file}`).join('\n')}`);
  }

  if (failures.length > 0) {
    console.error(failures.join('\n\n'));
    process.exit(1);
  }

  console.log(`Photo verification passed.`);
  console.log(`  Referenced images: ${referenced.length} (${new Set(referenced).size} unique)`);
  console.log(`  Optimized images checked: ${optimized.length}`);
  console.log(`  Metadata leaks: 0`);
  console.log(`  Original files ignored: ${originalFiles.length}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
