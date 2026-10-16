// /sitemap.xml, built from the pages in src/pages. lastmod is when each page's source last changed.
import type { APIRoute } from 'astro';
import { absoluteUrl } from '../data/site';
import { SERVICES, serviceUrl } from '../data/services';
import { lastModified } from '../lib/lastModified';

// Pages that must stay out of search (they carry noindex). /invoice lives in public/, so the glob
// never sees it today; listing it guards against it moving into src/pages.
const EXCLUDE = new Set(['/404', '/invoice']);

const toPath = (file: string): string =>
  file.replace(/^\.\//, '/').replace(/\.(astro|md)$/, '').replace(/\/index$/, '') || '/';

export const GET: APIRoute = () => {
  const urls = Object.keys(import.meta.glob('./**/*.{astro,md}'))
    .filter((file) => !file.includes('['))
    .map((file) => ({ path: toPath(file), lastmod: lastModified(`src/pages/${file.slice(2)}`) }))
    // Dynamic routes are skipped by the glob above, so list the service pages from their data.
    .concat(SERVICES.map((s) => ({ path: serviceUrl(s.slug), lastmod: lastModified('src/data/services.ts', 'src/pages/services/[slug].astro') })))
    .filter(({ path }) => !EXCLUDE.has(path))
    .sort((a, b) => a.path.localeCompare(b.path));

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${absoluteUrl(u.path)}</loc><lastmod>${u.lastmod}</lastmod></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
