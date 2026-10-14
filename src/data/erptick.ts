// ERPTick product facts used by the product page, the products list and their schema.
import { SITE, absoluteUrl, type ShareImage } from './site';
import type { SchemaNode } from '../lib/schema';

const MEDIA = '/assets/products/erptick';
export const ERPTICK_PATH = '/products/erptick';

export const ERPTICK_SHARE_IMAGE: ShareImage = {
  path: `${MEDIA}/posters/promo.jpg`,
  width: 1280,
  height: 720,
  alt: 'ERPTick Service Desk dashboard',
};

interface TourVideo {
  slug: string;
  name: string;
  description: string;
  /** ISO 8601 duration, e.g. PT56S */
  duration: string;
  /** YYYY-MM-DD */
  uploaded: string;
  /** Section of the page the video plays in. */
  anchor: string;
}

export const ERPTICK_VIDEOS: TourVideo[] = [
  { slug: "promo", name: "ERPTick Service Desk — 90-second overview", description: "An overview of ERPTick, the field service desk for equipment makers running ERPNext: tickets with SLAs, field visits, AMC contracts, quotations, a customer portal and reports.", duration: "PT1M28S", uploaded: "2026-10-05", anchor: "#promo" },
  { slug: "01-tickets", name: "ERPTick: Every Breakdown, Tracked to Closure", description: "Log a ticket against the exact machine and ERPTick knows whether it's under AMC, under warranty or chargeable. Response and resolution clocks run on your business calendar and warn the team before a breach — not after.", duration: "PT56S", uploaded: "2026-10-03", anchor: "#tour" },
  { slug: "02-visits", name: "ERPTick: The Whole Job, Recorded on Site", description: "Engineers accept the job, mark when they reach the site and log the visit from a phone or laptop: what was done, the spares fitted, photos and the customer's signature.", duration: "PT54S", uploaded: "2026-10-03", anchor: "#tour" },
  { slug: "03-quotations", name: "ERPTick: Quote Chargeable Work Before It Starts", description: "When a machine is out of warranty and AMC, the ticket asks for a quotation. Build it from your ERP items, send it, and record the customer's purchase order against it.", duration: "PT44S", uploaded: "2026-10-03", anchor: "#tour" },
  { slug: "04-amc", name: "ERPTick: Contracts That Plan Their Own Visits", description: "Set up an annual maintenance contract once — cover period, value, the machines it covers and the planned preventive visits. ERPTick raises the visit tickets ahead of time and reminds you before the contract ends.", duration: "PT45S", uploaded: "2026-10-03", anchor: "#tour" },
  { slug: "05-customers", name: "ERPTick: Know the Machine Before You Answer", description: "Customers, sites, contacts, machines by serial number, spares, prices and stock are read from your ERP. Each machine shows its cover, so the desk knows who pays before logging the call.", duration: "PT47S", uploaded: "2026-10-03", anchor: "#tour" },
  { slug: "06-dispatch", name: "ERPTick: Your Rules, Without a Developer", description: "Decide how tickets are routed, timed and billed from the settings screens: regions by pincode, skill tags, SLA targets, business calendars and service charges.", duration: "PT44S", uploaded: "2026-10-03", anchor: "#tour" },
  { slug: "07-portal", name: "ERPTick: Customers Help Themselves", description: "Customers sign in with an emailed link, raise tickets, follow progress and approve quotations with their PO number. After closure they rate the job, and updates go out by email or WhatsApp.", duration: "PT40S", uploaded: "2026-10-03", anchor: "#tour" },
  { slug: "08-reports", name: "ERPTick: Numbers You Can Act On", description: "Run service reports on demand, compare every region with its targets in the KPI matrix, and schedule any report to arrive by email as a CSV.", duration: "PT36S", uploaded: "2026-10-03", anchor: "#tour" },
  { slug: "09-erp", name: "ERPTick: Connected to ERPNext, on Your Terms", description: "An administrator adds the ERPNext connection on screen and tests it before saving. Master data flows in; draft invoices and stock entries go back only when you switch them on.", duration: "PT37S", uploaded: "2026-10-03", anchor: "#tour" },
  { slug: "10-admin", name: "ERPTick: Control Who Sees and Does What", description: "Invite your team, shape roles with a permission grid, give partners a scoped API key and load customers in bulk — with every change recorded in an audit log.", duration: "PT49S", uploaded: "2026-10-03", anchor: "#tour" },
];

export const erptickSoftwareApp = (): SchemaNode => ({
  '@type': 'SoftwareApplication',
  '@id': absoluteUrl(`${ERPTICK_PATH}#app`),
  name: 'ERPTick Service Desk',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: absoluteUrl(ERPTICK_PATH),
  image: absoluteUrl(ERPTICK_SHARE_IMAGE.path),
  description: 'Field service desk for equipment makers, connected to ERPNext: tickets, field visits, AMC contracts, quotations, customer portal and reports.',
  publisher: { '@type': 'Organization', '@id': absoluteUrl('/#organization'), name: SITE.name, url: absoluteUrl('/') },
});

export const erptickVideoObjects = (): SchemaNode[] =>
  ERPTICK_VIDEOS.map((v) => ({
    '@type': 'VideoObject',
    name: v.name,
    description: v.description,
    thumbnailUrl: absoluteUrl(`${MEDIA}/posters/${v.slug}.jpg`),
    contentUrl: absoluteUrl(`${MEDIA}/${v.slug}.mp4`),
    uploadDate: `${v.uploaded}T00:00:00+05:30`,
    duration: v.duration,
    embedUrl: absoluteUrl(`${ERPTICK_PATH}${v.anchor}`),
  }));
