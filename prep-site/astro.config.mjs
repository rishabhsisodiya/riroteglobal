import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';
import remarkCallouts from './src/plugins/remark-callouts.mjs';
import rehypeImgAttrs from './src/plugins/rehype-img-attrs.mjs';
import rehypeFigure from './src/plugins/rehype-figure.mjs';

// The hub is served from https://rishabhsisodiya.github.io/riroteglobal/prep/
// and its built files are emitted into ../prep so the existing static site at
// the repo root is left untouched. If you move to a root domain later, set
// BASE to '/prep' and site to that domain.
const BASE = '/riroteglobal/prep';

export default defineConfig({
  site: 'https://rishabhsisodiya.github.io',
  base: BASE,
  outDir: '../prep',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  markdown: {
    remarkPlugins: [remarkCallouts],
    rehypePlugins: [[rehypeImgAttrs, { base: BASE }], rehypeFigure],
  },
  integrations: [
    expressiveCode({
      themes: ['github-dark'],
      styleOverrides: {
        borderRadius: '6px',
        codeFontFamily: "'Space Mono', ui-monospace, SFMono-Regular, monospace",
      },
    }),
    mdx(),
    sitemap(),
  ],
});
