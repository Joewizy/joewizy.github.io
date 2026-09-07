# Joseph Gimba — Portfolio

My personal site. Software engineer building backend systems, AI agents, and blockchain infrastructure.

Live at https://joewizy.github.io/

## Stack

**Languages:** JavaScript, TypeScript, Python, Rust, Solidity, Move, Cairo

**Focus:** Backend systems, AI agents (LangGraph, RAG), and blockchain infrastructure — shipping secure, production-grade software end to end.

- React 19 + Vite
- Tailwind CSS (via PostCSS)
- Framer Motion for animations
- lucide-react for icons
- gh-pages for deployment

The hero portrait is an interactive ASCII canvas that samples an image at
`public/portraits/` and redraws it as characters. The project carousel and the
rest of the layout are plain React.

## Local development

```bash
npm install      # install dependencies
npm run dev      # start the dev server with hot reload
npm run build    # production build into dist/
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Deployment

Hosted on GitHub Pages, served from the `gh-pages` branch. To ship:

```bash
npm run deploy
```

`predeploy` runs `vite build` first, so `deploy` always publishes a fresh
`dist/`. `main` holds the source; `gh-pages` holds the compiled output.

One gotcha for `username.github.io` repos: Pages defaults to serving from
`main`, but the build lands on `gh-pages`. Set Settings → Pages → Source to the
`gh-pages` branch (root) once, or the live site will render blank because the
browser can't run JSX from source.

## Structure

```
index.html                  # entry, loads /src/main.jsx and the fonts
src/
  main.jsx                  # React entry point
  App.jsx
  index.css                 # Tailwind + design tokens and small components
  components/
    Portfolio.jsx           # the whole page
    AsciiPortrait.jsx       # interactive ASCII portrait (canvas)
    Spotlight.jsx           # project screenshot carousel
    Typewriter.jsx          # types the name in the hero
public/
  portraits/                # source image for the ASCII portrait
  projects/                 # carousel screenshots
vite.config.js              # base: '/'
tailwind.config.js
```
