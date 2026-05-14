# Kiyo's 30th Birthday Site — Design Doc

**Date:** 2026-05-14
**Honoree:** Kiyomasa "Kiyo" Kuwana · 桑名清正 · キヨくん
**Birthday:** May 20, 2026 (6 days away)
**Built by:** his sister & brother (Hiro)

## Goal

Take the design-handoff prototype at `~/Downloads/design_handoff_kiyo30/` and turn it into a working, locally-runnable site that:

1. Lets Hiro drop real photos (`~/Downloads/Kiyo photos/`, ~95 files, ~165MB) into the site.
2. Compresses them automatically before they're committed (GitHub-safe sizes).
3. Has correct names locked in (Kiyomasa / Kiyo / 桑名清正 / キヨくん).
4. Is easy to test locally with one command.
5. Ships with a README that walks a non-developer through install, edit, and run.

## Non-goals

- Live submissions API (handoff calls this v2 — skip).
- Next.js migration (single page, not maintained long-term — vanilla is correct).
- Real authentication (password gate is ceremony, not security — keep as-is).
- Hosting / deployment in this pass (separate step after content is locked).

## Stack

**Vanilla HTML + CSS + JS** — exactly as the prototype ships. No framework, no bundler, no transpiler. The site loads three local files (`styles.css`, `data.js`, `app.js`) plus Tailwind CDN and Google Fonts.

**Tooling** (dev-only, two packages):
- `sharp` — image optimization (jpeg/png/heic → webp + jpeg fallback)
- `serve` — one-command static server (`npm start`)

Node ≥ 18 required.

## Repo layout

```
colombo/
├── index.html                 ← renamed from "Birthday Site.html" (no spaces)
├── package.json               ← npm scripts + 2 dev deps
├── README.md                  ← non-developer install + edit guide
├── .gitignore                 ← ignore node_modules, originals/, .DS_Store
├── scripts/
│   └── optimize-photos.js     ← reads originals/ → writes optimized/
├── src/
│   ├── app.js                 ← (from handoff, unchanged)
│   ├── data.js                ← (from handoff, with names locked + image mappings)
│   ├── styles.css             ← (from handoff, unchanged)
│   ├── tokens.css             ← (from handoff, unchanged)
│   ├── fonts/
│   │   └── fraunces.css       ← (from handoff)
│   └── photos/
│       ├── originals/         ← .gitignore'd; drop raw photos here
│       └── optimized/         ← committed; webp files served by the site
└── docs/
    └── superpowers/specs/
        └── 2026-05-14-kiyo30-site-design.md  ← this file
```

## Photo workflow

**Concept:** Photos live in two folders. The committed folder is the small, optimized one. The originals stay on Hiro's machine.

1. Drop originals into `src/photos/originals/` (any format: jpg, jpeg, png, heic, HEIC, JPG).
2. Run `npm run photos`.
3. Script outputs `src/photos/optimized/<name>.webp` (and `<name>.jpg` fallback).
4. Reference in `data.js` as `image: 'src/photos/optimized/<name>.webp'`.

**Compression targets:**
- Max longest edge: 1600px (polaroid photos render ~720px on retina max).
- WebP quality 82 (high, but not lossless — typical 80–95% size reduction).
- Strip image metadata, including EXIF, XMP, ICC profiles, GPS tags, and face-region data.

Expected: 165MB originals → ~10–18MB optimized total. GitHub-safe.

## Data layer changes

`src/data.js` already supports `image: 'path'` as an alternative to `seed: 'placeholder'`. Two changes:

1. **Lock in names** — already correct in handoff (`Kiyomasa Kuwana` / `Kiyo` / `桑名清正`), but add `キヨくん` as a `honoreeNickname` field and surface it in the entry typewriter line so it reads "A scrapbook for Kiyo" → typed "Kiyo".

2. **Add a `// TODO: drop in photo` comment** above each polaroid entry where `seed:` is still used. This makes it obvious to Hiro which entries need real photos.

Polaroid filename suggestions are left to Hiro — he knows which photo fits which caption. The script will accept any filename.

## Optimize script — behavior

`scripts/optimize-photos.js`:

```
For each file in src/photos/originals/:
  - Skip if not image (by extension)
  - Read with sharp
  - Resize to fit within 1600x1600 (preserves aspect)
  - Strip image metadata
  - Write webp at quality 82 → src/photos/optimized/<basename>.webp
  - Write jpg at quality 82 → src/photos/optimized/<basename>.jpg  (fallback for old browsers)
  - Log: "  ✓ tokyo-day1.jpg  → 1.4MB → 142KB webp / 178KB jpg"
Print total savings summary.
```

Idempotent — re-running is safe. Skips outputs that exist and are newer than the original. Use `npm run photos:force` when changing compression or metadata policy. Use `npm run photos:verify` before sharing or committing.

## README content

Sections (in order):

1. **What this is** — one paragraph: it's a private 30th birthday scrapbook site, you can edit it.
2. **Quick start** (3 commands):
   ```
   npm install
   npm run photos             # if you've added photos
   npm run photos:verify      # before sharing or committing
   npm start                  # opens http://localhost:3000
   ```
3. **Password to enter** — `05/20/1996` (so Hiro doesn't lock himself out).
4. **How to add photos**:
   - Drop into `src/photos/originals/`
   - `npm run optimize-photos`
   - Open `src/data.js`, find the polaroid you want to update, change `seed: '...'` to `image: 'src/photos/optimized/<filename>.webp'`
5. **How to edit text** — open `src/data.js`, everything is labeled (chapters, captions, friend messages, bubbles, guestbook, letter).
6. **Deploying** — link to Vercel docs; drag-and-drop folder.
7. **Troubleshooting** — Node version, port conflict, image not showing.

## Testing plan

- Run `npm install` from a clean clone — completes with no errors.
- Run `npm start` — server starts on :3000.
- Open http://localhost:3000 in a browser:
  - Typewriter "Kiyo" plays
  - Date entry `05/20/1996` accepts
  - Candles light, site reveals
  - All 4 chapters render
  - Speech bubbles spawn while scrolling
  - Polaroids with messages open modal
- Drop a test photo into `src/photos/originals/`, run `npm run optimize-photos`, point a polaroid at it, refresh — image renders.

## Risks / open questions

- **Tailwind CDN dependency** — the handoff loads Tailwind from CDN. Site works offline only after first load. Acceptable for this use case (private share link).
- **No actual content edits in this pass** — Hiro will edit captions and messages himself in `data.js`. The site ships with handoff's placeholder messages, which are evocative but fictional.
- **HEIC support** — sharp v0.33+ requires libvips with HEIF. macOS Homebrew ships it; document in README.
- **Browser support** — site needs OKLCH (Safari 15.4+ / Chrome 111+). Modern only. Documented.

## Out of scope (note for later)

- v2 live submissions endpoint (per handoff).
- PDF export of the site as a keepsake.
- Real photo audit / curation — Hiro will pick.
