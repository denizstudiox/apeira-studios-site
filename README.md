# Apeira Studios — Website

Dark, cinematic one-page studio site. Vite + React + Tailwind v4 + Framer Motion.
Static output, deploys to GitHub Pages.

## Run

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # -> dist/
npm run preview   # preview the production build
```

## Editing content

**Everything the site says lives in [`src/content.js`](src/content.js).**
Headline, projects, capabilities, process, links, e-mail — all of it.
No component needs to be touched to change copy.

To add a project, append an object to the `work` array:

```js
{
  title: "Nightfall",
  tag: "Game",              // Minecraft Mod | Android App | Extension | Tool …
  year: "2026",
  summary: "One or two sentences.",
  stack: ["Fabric", "Java"],
  href: "https://store-page-or-site",       // "" hides the link
  linkLabel: "View on CurseForge",          // defaults to "View project"
  repo: "https://github.com/you/nightfall", // optional second "Source" link
  featured: true,                           // optional — spans the full row
  wip: true,                                // optional — "In development", no link
}
```

The whole card is clickable via `href`; `repo` renders as a separate link on top
of it.

### Still to fill in
- `public/og.png` — 1200x630 social preview image, referenced by `index.html`.

## The three layers

The page is a descent through the world the studio is named after. None of it
is explained in words — it exists only as colour and artwork:

| Where | Layer | What you see | Accent |
| --- | --- | --- | --- |
| Hero, marquee | The surface | Night meadow: ridges, pines, stars, low sun, fireflies (`Landscape.jsx`) | green |
| Work, Disciplines | The veins | A branching coloured network, capillaries at the top thickening into roots below (`Veins.jsx`) | violet |
| Contact, footer | The apeiron | The blue flame, burning at the very bottom of the page (`Flame.jsx`) | blue |

`Backdrop.jsx` interpolates the page background between the three as you
scroll. The `.layer-surface` / `.layer-veins` / `.layer-apeiron` wrappers in
`App.jsx` re-declare the accent custom properties, and because custom
properties inherit, every component inside re-tints itself — no colour props
are threaded anywhere.

Both `Landscape` and `Veins` are generated from a seeded PRNG, so the artwork
is identical on every render and reload while still looking hand-scattered.

## Design tokens

Colours, fonts and effects are defined once in the `@theme` block at the top of
[`src/index.css`](src/index.css). Changing `--color-accent` there re-skins the
whole site.

## Deploying to GitHub Pages

1. Push this folder to a GitHub repo.
2. Repo → **Settings → Pages → Source: GitHub Actions**.
3. Push to `main`. `.github/workflows/deploy.yml` builds and publishes.

### The `base` path matters

In [`vite.config.js`](vite.config.js):

| Where it is hosted | `base` |
| --- | --- |
| Custom domain (e.g. `apeirastudios.com`) | `'/'` |
| `username.github.io` repo | `'/'` |
| Project repo `username.github.io/apeira` | `'/apeira/'` |

### Custom domain (GitHub Student Pack)

The Student Developer Pack includes a free `.me` domain from Namecheap
(one year) and Name.com credit.

1. Create `public/CNAME` containing just the domain, e.g. `apeirastudios.me`.
2. At the registrar add DNS records:
   - `A` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `<username>.github.io`
3. Repo → Settings → Pages → Custom domain → enter the domain → tick
   **Enforce HTTPS** (may take up to an hour for the certificate).
4. Keep `base: '/'`.
