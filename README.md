# Joseph Gimba — Portfolio

Personal portfolio site for Joseph Gimba (Blockchain & Backend Engineer).
Live at **https://joewizy.github.io/**

## Tech stack

- **React 19** + **Vite** (build tool / dev server)
- **Tailwind CSS** (styling) via PostCSS + Autoprefixer
- **Framer Motion** (animations)
- **lucide-react** (icons)
- **gh-pages** (deployment to GitHub Pages)

## Local development

```bash
npm install      # install dependencies
npm run dev      # start the Vite dev server (hot reload)
npm run lint     # run ESLint
npm run build    # production build into dist/
npm run preview  # preview the production build locally
```

## Deployment

The site is hosted on **GitHub Pages**, served from the **`gh-pages` branch** (root).

To deploy, just run:

```bash
npm run deploy
```

`predeploy` runs `vite build` automatically before `deploy`, so the freshly
compiled `dist/` folder is always what gets published — you never have to
remember to build first.

### ⚠️ Important: never push source to `gh-pages`

GitHub Pages must serve the **compiled `dist/` output**, NOT the raw source.
If the `gh-pages` branch ever contains `src/main.jsx` and an `index.html` with
`<script src="/src/main.jsx">`, the site will load **blank** — browsers can't
run JSX directly.

- ✅ Deploy only with `npm run deploy` (publishes `dist/` via the `gh-pages` tool).
- ❌ Never run `git push origin main:gh-pages` or push source onto `gh-pages`.
- A correct `gh-pages` branch contains: `index.html`, `assets/index-*.js`,
  `assets/index-*.css`, `favicon.png`.

If the live site breaks, confirm in **Settings → Pages → Source** that it's set
to the **`gh-pages` branch (root)**.

## Project structure

```
index.html            # HTML entry (dev) — references /src/main.jsx
src/
  main.jsx            # React entry point
  App.jsx
  components/
    Portfolio.jsx     # main portfolio component
  index.css           # Tailwind directives + global styles
public/               # static assets copied as-is (favicon, etc.)
vite.config.js        # Vite config (base: '/')
tailwind.config.js
dist/                 # build output (published to gh-pages — not committed to main)
```
