// Builders for schema.org JSON-LD nodes shared across pages.
import { SITE, absoluteUrl } from '../data/site';

export type SchemaNode = Record<string, unknown>;

export const ORGANIZATION_ID = absoluteUrl('/#organization');

export function organization(): SchemaNode {
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: SITE.name,
    url: absoluteUrl('/'),
    logo: { '@type': 'ImageObject', url: absoluteUrl('/assets/brand/logo-light-1200.png'), width: 1200, height: 388 },
    image: absoluteUrl(SITE.defaultImage.path),
    email: SITE.email,
    description: 'Full-stack product development, AI agents and LLM integration, ERP integrations, and cloud infrastructure.',
    address: { '@type': 'PostalAddress', addressCountry: 'IN' },
  };
}

export function website(): SchemaNode {
  return {
    '@type': 'WebSite',
    '@id': absoluteUrl('/#website'),
    name: SITE.name,
    url: absoluteUrl('/'),
    publisher: { '@id': ORGANIZATION_ID },
    inLanguage: 'en',
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

/** FAQPage from the same items the page shows, so the two never drift apart. */
export function faqPage(items: FaqItem[]): SchemaNode {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

/** BreadcrumbList from [name, path] pairs, starting at Home. */
export function breadcrumbs(...items: Array<[name: string, path: string]>): SchemaNode {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: absoluteUrl(path),
    })),
  };
}
