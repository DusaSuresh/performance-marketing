# Northstar Performance

A production-ready, JSON-driven performance marketing website built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, Lucide, and React Router. Tailwind is initialized through Vite; the included design system is expressed in `src/styles.css` for reusable visual primitives.

## Run locally

```bash
npm install
npm run dev
```

Create a production bundle with `npm run build`. Preview it locally with `npm run preview`.

## Update content

All business content is separated from the React UI:

- `src/data/website.json` contains the homepage sections, copy, cards, CTAs, testimonials, and contact information.
- `src/data/navigation.json` contains the navigation links and header CTA.
- `src/data/footer.json` contains footer links and legal copy.

Change any values in these files and the site updates automatically. The components only render the JSON schema, making it straightforward to replace local JSON with a CMS/API later.

## Add navigation tabs

Add an item to the `menu` array in `src/data/navigation.json`:

```json
{ "label": "Industries", "href": "#industries" }
```

The navbar maps the array dynamically; no component changes are needed.

## Add services

Append an item to `services.items` in `src/data/website.json`. Use any icon available in `src/utils/icons.tsx`, for example `"Network"`, `"Target"`, or `"ShoppingBag"`. The shared card-grid component will render it.

## Deploy

The project is Vercel and GitHub Pages compatible. On Vercel, import the repository and use the default Vite settings (`npm run build`, output directory `dist`). For GitHub Pages, build the project and publish the generated `dist` directory; configure a Vite `base` setting if it will live under a repository subpath.
