---
name: kiyo-photo-workflow
description: Use when adding, replacing, optimizing, or verifying photos for the Kiyo 30th birthday site. Covers the original-photo ignore policy, optimization commands, metadata verification, and data.js wiring.
---

# Kiyo Photo Workflow

Use this skill for any future photo changes in this repo.

## Rules

- Never commit raw originals from `src/photos/originals/`.
- Keep `src/photos/originals/.gitkeep` as the only commit-eligible file in that folder.
- Commit optimized outputs from `src/photos/optimized/`.
- Reference optimized WebP files from `src/data.js`.

## Commands

1. Drop raw files into `src/photos/originals/`.
2. Run `npm run photos`.
3. If compression or metadata policy changed, run `npm run photos:force`.
4. Run `npm run photos:verify`.
5. Wire new images in `src/data.js` with paths like `src/photos/optimized/example.webp`.

## Verification

Before reporting done, confirm:

```bash
npm run photos:verify
git check-ignore -v src/photos/originals/<one-original-file>
git status --ignored --short src/photos/originals
```

Expected result: verification passes, real originals show `!!`, and `.gitkeep` is the only file from `src/photos/originals/` that may be unignored.
