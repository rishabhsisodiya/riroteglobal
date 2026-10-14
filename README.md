# riroteglobal.com

Company site for Rirote Global, built with [Astro](https://astro.build) as a fully static site and served by a
Cloudflare Worker (`riroteglobal`) as static assets.

## Commands

Requires Node 24 (see `.nvmrc`).

| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server at http://localhost:4321 |
| `npm run build` | Type-check, then build the site into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run check` | Type-check only |
| `npx wrangler dev` | Serve `dist/` in the real Workers runtime (run `npm run build` first) to test redirects, headers and the 404 page |

## Layout

```
public/                 Copied to the site as-is: assets/ (CSS, JS, fonts, images, videos),
                        invoice.html, _headers, _redirects, robots.txt, .well-known/
src/data/site.ts        Site name, URL, email, legal details, default share image
src/data/erptick.ts     ERPTick share image, tour videos and product schema
src/lib/schema.ts       schema.org builders (Organization, WebSite, breadcrumbs)
src/components/         Seo (all <head> tags), Nav and Footer for sub-pages
src/layouts/BaseLayout.astro   Page shell used by every page
src/pages/              One file per URL; sitemap.xml.ts builds /sitemap.xml
```

URLs have no `.html` and no trailing slash (`/products`, `/products/erptick`). `astro.config.mjs` builds
`products.html` rather than `products/index.html`, which the Worker serves at `/products`. Keep it that way:
changing the URL format would break existing links and search rankings.

## Adding a page

1. Create `src/pages/<name>.astro` and wrap it in `BaseLayout`, passing `seo` (title, path, description;
   optionally image and schema). Copy `src/pages/products.astro` as a starting point.
2. Shared styles live in `public/assets/site.css`. Page-only CSS goes in a `<style is:inline>` inside
   `<Fragment slot="head">`.
3. The page appears in `/sitemap.xml` automatically. Add its path to `EXCLUDE` in `src/pages/sitemap.xml.ts`
   only if it must stay out of search.

The homepage (`src/pages/index.astro`) keeps its own nav, footer and stylesheet by design. Do not move it onto
`site.css`.

Inline `<script>` and `<style>` tags use `is:inline` so Astro ships them exactly as written. Without it, Astro bundles
scripts and scopes styles, which changes how they behave.

## Deploying (Cloudflare Workers)

`wrangler.jsonc` tells the `riroteglobal` Worker to serve `dist/`, to answer unknown URLs with `404.html`, and how to
map URLs to `.html` files. Workers Builds (connected to this GitHub repo) builds on every push: `main` deploys to
production, other branches upload a preview version with its own URL.

| Setting (Worker → Settings → Build) | Value |
|---|---|
| Production branch | `main` |
| Root directory | *(empty: repo root)* |
| Build command | *(empty: `wrangler.jsonc` runs `npm run build` before every deploy and preview)* |
| Deploy command | `npx wrangler deploy` |
| Non-production branch deploy command | `npx wrangler preview` (needs the `previews` block in `wrangler.jsonc`) |
| Build variable | `NODE_VERSION` = `24` |

`public/_headers` and `public/_redirects` end up at the root of `dist/`, where the Worker applies them.
