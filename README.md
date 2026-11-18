# Harsh Barnawa — Portfolio

Personal portfolio of Harsh Barnawa, a software engineer focused on full-stack applications, backend systems, and building useful products.

**Website:** https://harshbarnawa.in

## Stack

- React 19, React Router 7, Vite 8
- Tailwind CSS
- Three.js, React Three Fiber and Drei for the optional renderer experience

## Features

- Responsive portfolio with selectable visual themes and light/dark modes
- Interactive command-line inspired terminal
- Projects, blog and contact pages
- Lazy-loaded 3D renderer route
- Optimized background image generation during development and builds

## Run locally

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run build
npm run preview
```

## Routes

- `/` — Home
- `/projects` — Projects
- `/blog` — Blog
- `/contact` — Contact
- `/renderer` — 3D renderer

## Deployment

Build with `npm run build` and publish the `dist` directory. Configure SPA fallback routing so direct visits to client-side routes load `index.html`.

## Notes

Background images are processed by `scripts/optimize-backgrounds.mjs` before `dev` and `build`. The contact form uses Web3Forms; check its account configuration before deploying a fork.

## Links

- [Portfolio](https://harshbarnawa.in)
- [GitHub](https://github.com/harshbarnawa)
- [LinkedIn](https://linkedin.com/in/harsh-barnawa)
