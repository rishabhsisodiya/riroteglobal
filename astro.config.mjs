import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://riroteglobal.com',
  // Emit products.html / products/erptick.html (not products/index.html) so Cloudflare Pages
  // keeps serving the same extensionless URLs the site has always had: /products, /products/erptick.
  build: { format: 'file' },
  trailingSlash: 'never',
  // Keep output whitespace as authored; the pages were tuned against it.
  compressHTML: false,
  devToolbar: { enabled: false },
});
