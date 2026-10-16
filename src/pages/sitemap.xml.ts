// /sitemap.xml, built from the pages in src/pages. No lastmod: Cloudflare builds from a shallow clone,
// so git dates there are always the latest commit, and an inaccurate lastmod is worse than none.
import type { APIRoute } from 'astro';
import { absoluteUrl } from '../data/site';
import { SERVICES, serviceUrl } from '../data/services';

// Pages that must stay out of search (they carry noindex). /invoice lives in public/, so the glob
// never sees it today; listing it guards against it moving into src/pages.
const EXCLUDE = new Set(['/404', '/invoice']);

const toPath = (file: string): string =>
  file.replace(/^\.\//, '/').replace(/\.(astro|md)$/, '').replace(/\/index$/, '') || '/';

export const GET: APIRoute = () => {
  const urls = Object.keys(import.meta.glob('./**/*.{astro,md}'))
    .filter((file) => !file.includes('['))
    .map(toPath)
    // Dynamic routes are skipped by the glob above, so list the service pages from their data.
    .concat(SERVICES.map((s) => serviceUrl(s.slug)))
    .filter((path) => !EXCLUDE.has(path))
    .sort((a, b) => a.localeCompare(b));

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${absoluteUrl(path)}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
