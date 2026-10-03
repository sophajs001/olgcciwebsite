# Our Lady of Grace Catholic Church — Parish Website

A plain React (Vite) website built for OLGCC, using the navy/gold/ivory
palette drawn from the parish crest.

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

To build for deployment:

```bash
npm run build
```

This outputs a static site in `dist/`, which can be deployed to Netlify,
Vercel, GitHub Pages, or any static host.

## Deploying to WHOGOHOST

In the WHOGOHOST terminal, run this once to clone the repository, build the
site, and publish the generated files to `public_html`:

```bash
git clone https://github.com/sophajs001/olgcciwebsite.git "$HOME/olgcciwebsite" && cd "$HOME/olgcciwebsite" && npm install && npm run build && cp -a dist/. "$HOME/public_html/"
```

For later updates, run:

```bash
cd "$HOME/olgcciwebsite" && git pull && npm install && npm run build && cp -a dist/. "$HOME/public_html/"
```

The `.htaccess` file is included in the build for React Router page refreshes.
This requires Node.js and npm to be available in the hosting account.

## Project structure

```
src/
  assets/          logo (crest.svg) and any future images
  components/       shared UI: Navbar, Footer, Hero, ArchCard, PhotoSlot, etc.
  hooks/            useReveal — the scroll-reveal animation hook
  pages/            one file per route (Home, About, Mass & Sacraments, ...)
  App.jsx           routing
  main.jsx          entry point
  index.css         design tokens (colors, type, spacing) and shared styles
```

## Pages included

- Home (now includes a Building Project banner and a Leadership teaser)
- About (history, mission & vision, clergy)
- Mass & Sacraments (schedule + sacrament preparation info)
- **Leadership** (Diocesan Bishop, Parish Priest, Church Chairman, Chief Catechist, and the full Parish Pastoral Council)
- Ministries & Societies
- News & Events
- Gallery
- **Giving & Our Building Project** (progress bar toward the building fund goal; donating is arranged directly with the Parish Administrator via WhatsApp or email — no bank details are published on the site)
- Contact

## Updating the building fund progress

The progress bar and figures appear in two places — update both when the
finance committee reports new totals:

- `src/pages/Home.jsx` (the homepage banner)
- `src/pages/Giving.jsx` (the full building project section)

Each has a `style={{ width: '35%' }}` on the `.progress__fill` div and a
line of text with the current amount raised vs. the goal.

## Changing the WhatsApp number / email for giving

Both live as constants at the top of `src/pages/Giving.jsx` and
`src/components/Footer.jsx`:

```js
const WHATSAPP = 'https://wa.me/2348000000000?text=...';
const EMAIL = 'mailto:admin@olgcc.org';
```

Update the phone number (international format, no `+` or spaces) and email
address in both files.

## Replacing the placeholder photography

Every photo you see is a styled placeholder (the `PhotoSlot` component),
not a real image — labelled so you know what should go there. To swap one
in:

1. Add your photo to `src/assets/photos/`.
2. Import it in the page/component: `import parishPhoto from '../assets/photos/your-photo.jpg';`
3. Replace `<PhotoSlot label="..." />` with `<img src={parishPhoto} alt="..." />`
   (keep the same wrapping `arch-card__top` / `photo-slot` class if you want
   the arched frame to stay).

## Editing text content

All copy (Mass times, event listings, sacrament details, ministry
descriptions, contact info) lives directly in each page file under
`src/pages/` as plain arrays or JSX — no CMS, easy to hand-edit.

## Design notes

- **Palette**: deep navy (`--navy-700` / `--navy-900`), warm gold
  (`--gold-500`), and ivory (`--cream-50`), drawn from the parish crest.
- **Type**: Cormorant Garamond (headings) + Source Sans 3 (body).
- **Motif**: the arch shape recurs throughout (hero, photo frames, cards)
  echoing church architecture, instead of generic rounded cards.
- All tokens are defined once in `src/index.css` under `:root` — change a
  color there and it updates everywhere.
