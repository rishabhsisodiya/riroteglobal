// /sitemap.xml, built from the pages in src/pages. lastmod is each page file's last git commit.
import type { APIRoute } from 'astro';
import { execFileSync } from 'node:child_process';
import { absoluteUrl } from '../data/site';

// Pages that must stay out of search (they carry noindex).
const EXCLUDE = new Set(['/404']);

const toPath = (file: string): string =>
  file.replace(/^\.\//, '/').replace(/\.(astro|md)$/, '').replace(/\/index$/, '') || '/';

function lastModified(file: string): string {
  try {
    const date = execFileSync('git', ['log', '-1', '--format=%cs', '--', `src/pages/${file.slice(2)}`], {
      encoding: 'utf8',
    }).trim();
    if (date) return date;
  } catch {
    // Not a git checkout: fall back to the build date.
  }
  return new Date().toISOString().slice(0, 10);
}

export const GET: APIRoute = () => {
  const urls = Object.keys(import.meta.glob('./**/*.{astro,md}'))
    .filter((file) => !file.includes('['))
    .map((file) => ({ path: toPath(file), lastmod: lastModified(file) }))
    .filter(({ path }) => !EXCLUDE.has(path))
    .sort((a, b) => a.path.localeCompare(b.path));

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${absoluteUrl(u.path)}</loc><lastmod>${u.lastmod}</lastmod></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
