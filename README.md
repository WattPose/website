# WattPose Landing Page

React + Vite + Tailwind + Framer Motion landing page, deployable as a static site on World4you or any web host.

---

## Adding Your Screenshots

1. Copy your iPhone screenshots to `public/screenshots/`
2. Name them `screen1.png` … `screen5.png` (or update paths in the components)
3. Recommended size: **390 × 844 px** or **430 × 932 px** (iPhone 14 / Pro Max)
4. The phone frame, dynamic island, and side buttons are rendered in CSS — no editing needed

| File          | Used in        | Content suggestion           |
|---------------|----------------|------------------------------|
| `screen1.png` | Hero & Screenshots | Live session with skeleton  |
| `screen2.png` | How It Works step 1 + Screenshots | Calibration / setup screen |
| `screen3.png` | How It Works step 2 + Screenshots | Metrics dashboard during ride |
| `screen4.png` | How It Works step 3 + Screenshots | Post-workout analysis        |
| `screen5.png` | Screenshots    | Session history / stats      |

---

## Development

```bash
npm install
npm run dev       # http://localhost:5173
```

---

## Production Build

```bash
npm run build     # outputs to dist/
npm run preview   # preview the built site locally
```

---

## Deploying to World4you

1. Run `npm run build`
2. Open your World4you File Manager (or connect via FTP/SFTP)
3. Navigate to `public_html/` (or your domain's root folder)
4. Upload **the contents** of the `dist/` folder (not the folder itself)
5. The `.htaccess` file is included in `dist/` automatically — make sure it's uploaded

> ⚠️ If you deploy to a **subdirectory** (e.g. `yourdomain.com/app/`), update `base` in `vite.config.ts` to `'/app/'` before building.

---

## Updating the App Store Link

Search for `href="#"` in `src/components/Hero.tsx` and `src/components/CTA.tsx` and replace `#` with your App Store URL.

---

## Adding an OG Image

Place a `og-image.jpg` (1200 × 630 px) in `public/` for social sharing previews.
