// Site-wide facts. Change them here, never in individual pages.

export interface ShareImage {
  path: string;
  width: number;
  height: number;
  alt: string;
}

export const SITE = {
  name: 'Rirote Global',
  url: 'https://riroteglobal.com',
  email: 'info@riroteglobal.com',
  legal: {
    name: 'Rirote Global',
    type: 'Sole proprietorship',
    city: 'Jaipur',
    state: 'Rajasthan',
    country: 'India',
  },
  defaultImage: {
    path: '/assets/og-image.jpg',
    width: 1200,
    height: 630,
    alt: 'Rirote Global — Rise · Robust · Tech',
  } satisfies ShareImage,
} as const;

/** Google Analytics 4 measurement ID. Loads only after the visitor accepts cookies (ConsentBanner).
 *  Leave empty to remove analytics and the consent banner. */
export const GA_ID = 'G-W050S5NEBB';

/** Official company profiles, used as schema.org sameAs. */
export const SOCIAL_PROFILES = [
  'https://www.linkedin.com/company/rirote-global/',
  'https://www.youtube.com/channel/UCl11RgCfdXUcOZxbbplZIXA',
  'https://www.instagram.com/riroteglobal/',
  'https://x.com/riroteglobal',
  'https://github.com/rirote-global',
] as const;

/** Company track record, shown on the About and Projects pages. */
export const COMPANY_STATS = {
  projects: { value: '11+', label: 'Projects Delivered' },
  industries: { value: '5+', label: 'Industries Served' },
} as const;

/** Absolute URL on the live domain, e.g. absoluteUrl('/products') → https://riroteglobal.com/products */
export const absoluteUrl = (path: string): string => new URL(path, SITE.url).href;
