// Builders for schema.org JSON-LD nodes shared across pages.
import { absoluteUrl } from '../data/site';

export type SchemaNode = Record<string, unknown>;

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
