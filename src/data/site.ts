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

/** Absolute URL on the live domain, e.g. absoluteUrl('/products') → https://riroteglobal.com/products */
export const absoluteUrl = (path: string): string => new URL(path, SITE.url).href;
