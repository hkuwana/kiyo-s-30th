# 三十. — A scrapbook for Kiyo

A private one-page birthday site for **Kiyomasa Kuwana** (桑名清正 · キヨくん), turning 30 on **May 20, 2026**. Built by his sister and brother.

Four chapters of polaroids — Tokyo, Greenwich, Exeter & Brown, Adult — with handwritten captions, friend messages, floating speech bubbles, and a bilingual letter at the end.

---

## Quick start

You need **Node.js 18 or newer**. If you don't have it: download from [nodejs.org](https://nodejs.org/) (LTS version) or install via [Homebrew](https://brew.sh/): `brew install node`.

```bash
# 1. Install dependencies (one time)
npm install

# 2. Start the site
npm start
```

Then open **http://localhost:3000** in your browser.

When the date-entry screen appears, type **`05` `20` `1996`** to unlock.

---

## How to add or swap photos

Photos live in two folders inside `src/photos/`:

```
src/photos/
├── originals/     ← drop ANY photo here (jpg, png, heic, etc.) — never committed
└── optimized/     ← compressed WebP + JPG, ~150–500KB each — committed to git
```

**To add new photos:**

1. Drop the raw photo file(s) into `src/photos/originals/`.
2. Run the compressor:
   ```bash
   npm run photos
   ```
   This resizes (max 1600px), strips image metadata, and writes both a `.webp` and `.jpg` to `src/photos/optimized/`. Filenames are slugified (e.g. `IMG_1234.JPG` → `img-1234.webp`). Re-running is safe — it skips files that are already up to date. To intentionally rebuild everything, run `npm run photos:force`.

   To verify the photo set before sharing or committing:
   ```bash
   npm run photos:verify
   ```
   This checks that every referenced image exists, optimized images have no EXIF/XMP/ICC metadata, and originals are still ignored by git.

3. Wire the photo into a polaroid by editing **`src/data.js`**:
   ```js
   // before
   image: 'src/photos/optimized/img-3601.webp',
   // after — swap to a different photo
   image: 'src/photos/optimized/your-new-photo.webp',
   ```

**To remove a polaroid:** delete its `{ ... }` block in `src/data.js`.
**To add one:** copy an existing block and paste it inside the same `polaroids: [...]` array.

The 30 candles on the entry screen are hardcoded (one per year of his life) — leave those alone.

---

## How to edit names, captions, and messages

Everything visible on the site comes from **`src/data.js`**. It's the only file you need to touch for content edits. Sections, top to bottom:

| Section | What it does |
|---|---|
| `honoree*`, `password` | His name (typed letter-by-letter on entry) and the date-of-birth password gate |
| `title`, `subtitle` | The big headline on the first screen |
| `endingImage` | The signed polaroid at the very bottom |
| `chapters[]` | The four chapters and all polaroids — captions, dates, friend messages |
| `bubbles[]` | Quotes that float up while scrolling |
| `guestbook[]` | Names that appear at the bottom in handwriting |
| `letter` | The bilingual closing letter from siblings |

Save the file, refresh the browser — changes show up immediately. No build step.

---

## How to deploy to Vercel

This is a fully static site. No server needed. Two options:

### Option A — drag-and-drop (easiest)

1. Sign up at [vercel.com](https://vercel.com) (free).
2. Click **New Project → "Deploy without a repo"** (or "Upload").
3. Drag the entire project folder onto the upload area.
4. Vercel gives you a URL like `kiyo-30-xyz.vercel.app`. Share it.

### Option B — connect a GitHub repo (recommended if you'll edit later)

1. Create a **private** repo on GitHub and push this folder.
2. Vercel → **New Project → Import Git Repository → pick the repo**.
3. **Project settings to use:**
   - **Framework Preset:** `Other`
   - **Build Command:** *(leave empty)*
   - **Output Directory:** *(leave default — `./`)*
   - **Install Command:** *(leave default — `npm install`)*

   These are also baked into `vercel.json` in this repo, so Vercel will pick them up automatically. The `npm install` step will skip `sharp` and `serve` automatically in production (they're in `devDependencies`), so deploys stay fast (~10–15s).
4. Deploy. Every `git push` to the connected branch redeploys.

### Making the share link look good

The site already includes Open Graph and Twitter Card meta tags, so when you paste the URL into iMessage, Slack, Discord, or WhatsApp, you'll get a preview card with:
- **Title:** "三十. — A scrapbook for Kiyo"
- **Description:** "Thirty trips around the sun…"
- **Image:** the ending polaroid photo
- **Favicon:** a small cream square with "30" in terracotta

To customize the preview image, edit the `og:image` and `twitter:image` paths in `index.html` (line 18 area) to point at any photo in `src/photos/optimized/`.

If you want a **custom domain** like `kiyo30.com`:
1. Buy the domain (Namecheap, Cloudflare Registrar, etc.).
2. In Vercel: **Project Settings → Domains → Add Domain**.
3. Follow Vercel's DNS instructions — usually one `CNAME` record.

### Privacy

- The site has `<meta name="robots" content="noindex, nofollow, noarchive">` so search engines and AI crawlers won't index it.
- The "password" gate is **client-side only** — anyone who knows the URL and the date can enter. It's ceremony, not security.
- For real password protection: in Vercel, **Settings → Deployment Protection → Password Protection** (Pro plan, $20/mo).
- Or: just share the URL only with the people invited.

---

## Project layout

```
.
├── index.html                 ← the page
├── package.json               ← npm scripts + 2 dev dependencies
├── src/
│   ├── app.js                 ← all interactions (typewriter, candles, polaroids, modal, bubbles, audio, pencil trail)
│   ├── data.js                ← ⭐️ THE FILE YOU EDIT — all content
│   ├── styles.css             ← styling
│   ├── tokens.css             ← design tokens (colors, typography)
│   ├── fonts/                 ← Fraunces font import
│   └── photos/
│       ├── originals/         ← (gitignored) drop raw photos here
│       └── optimized/         ← (committed) the WebP files the site loads
├── scripts/
│   ├── optimize-photos.js     ← compresses originals → optimized
│   └── verify-photos.js       ← checks image paths, metadata, and ignored originals
└── docs/
    └── superpowers/specs/     ← design spec from project kickoff
```

---

## Troubleshooting

**`npm install` fails on macOS with sharp errors.**
Sharp ships pre-built binaries for most platforms. If you hit a `libvips` error: `brew install vips` and re-run `npm install`. (Apple Silicon Macs may need Xcode Command Line Tools: `xcode-select --install`.)

**Photos don't show up.**
- Open browser DevTools (Cmd+Opt+I) → Console. Look for 404 errors.
- Check the filename in `src/data.js` exactly matches one in `src/photos/optimized/` (slugified — lowercase, dashes).
- Make sure you ran `npm run photos` after dropping in originals.

**Port 3000 already in use.**
Edit `package.json` → change `--listen 3000` to `--listen 3001` (or any free port).

**Fonts look like Times New Roman.**
The site loads Fraunces, Special Elite, and Caveat from Google Fonts. If you're testing offline, those won't load. Just be online for the first load — browsers cache them after that.

**Site looks broken in Safari < 15.4 or Chrome < 111.**
The design uses OKLCH colors and `backdrop-filter` — both require modern browsers. Anyone receiving the share link should be on a current browser.

---

## License & credit

Private gift site. All photos and content belong to the Kuwana family. Design language adapted from the Kaiwa caramellatte theme.

*Built with love — May 2026.*
