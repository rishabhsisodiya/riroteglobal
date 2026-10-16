// Builders for schema.org JSON-LD nodes shared across pages.
import { SITE, SOCIAL_PROFILES, absoluteUrl } from '../data/site';
import { SERVICES } from '../data/services';

export type SchemaNode = Record<string, unknown>;

export const ORGANIZATION_ID = absoluteUrl('/#organization');
export const WEBSITE_ID = absoluteUrl('/#website');

/** Reference to the Organization node defined on the homepage. */
export const organizationRef = (): SchemaNode => ({ '@id': ORGANIZATION_ID });

export function organization(): SchemaNode {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORGANIZATION_ID,
    name: SITE.name,
    url: absoluteUrl('/'),
    logo: { '@type': 'ImageObject', url: absoluteUrl('/assets/brand/logo-light-1200.png'), width: 1200, height: 388 },
    image: absoluteUrl(SITE.defaultImage.path),
    email: SITE.email,
    description:
      'Full-stack, AI and ERPNext engineering company in Jaipur, India: web platforms, AI agents and LLM integration, ERP integrations, and cloud infrastructure. Makers of ERPTick.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.legal.city,
      addressRegion: SITE.legal.state,
      addressCountry: 'IN',
    },
    areaServed: 'Worldwide',
    knowsAbout: [
      'Full-stack web development', 'Next.js', 'NestJS', 'Node.js', 'React',
      'AI agents', 'LLM integration', 'ERPNext', 'Frappe', 'ERP integration',
      'AWS', 'DevOps', 'PostgreSQL', 'Data pipelines',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: SITE.email,
      availableLanguage: 'English',
    },
    makesOffer: SERVICES.map((service) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: service.name, description: service.summary },
    })),
    sameAs: [...SOCIAL_PROFILES],
  };
}

export function aboutPage(path: string): SchemaNode {
  return {
    '@type': 'AboutPage',
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: `About ${SITE.name}`,
    about: organizationRef(),
    isPartOf: { '@id': WEBSITE_ID },
  };
}

export function website(): SchemaNode {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE.name,
    url: absoluteUrl('/'),
    publisher: organizationRef(),
    inLanguage: 'en',
  };
}

/** Service page node, provided by the homepage Organization. */
export function service(input: { name: string; description: string; path: string }): SchemaNode {
  return {
    '@type': 'Service',
    '@id': `${absoluteUrl(input.path)}#service`,
    name: input.name,
    serviceType: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: organizationRef(),
    areaServed: 'Worldwide',
  };
}

/** ItemList of links, e.g. the services on the /services hub. */
export function itemList(items: Array<{ name: string; path: string }>): SchemaNode {
  return {
    '@type': 'ItemList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
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
