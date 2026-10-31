// Every product and open-source project. To add one, add an entry here: it then appears on /products,
// gets its own page (generatedPage) and joins the sitemap. ERPTick has its own hand-built page.
import type { ProblemId } from './cases';

export interface Product {
  id: string;
  name: string;
  short: string;
  /** Shown as a badge. Leave out when there is nothing to flag. */
  status?: 'In development' | 'Open source';
  group: 'Products' | 'Open source';
  tags: ProblemId[];
  /** Relative page path, or a full URL when the project lives elsewhere. */
  path: string;
  generatedPage?: boolean;
  line: string;
  points: string[];
  heading?: [string, string];
  intro?: string;
  note?: string;
  metaTitle?: string;
  description?: string;
  /** Option in the contact form's service list. */
  formService?: string;
  cta?: string;
  link?: { href: string; label: string };
  services?: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'erptick', name: 'ERPTick Service Desk', short: 'ERPTick', group: 'Products',
    tags: ['service', 'erp', 'reports'], path: '/products/erptick',
    line: 'The service desk for equipment makers, connected to ERPNext. Breakdown calls, engineer visits, AMC contracts, quotations and response deadlines in one place, with customers, machines and stock taken straight from your ERP.',
    points: ['Tickets with SLA clocks & routing', 'Field visits with customer sign-off', 'AMC contracts & quotations', 'Customer portal, email & WhatsApp'],
    formService: 'ERPTick (our product)',
  },
  {
    id: 'roomcraftr', name: 'Roomcraftr', short: 'Roomcraftr', status: 'In development', group: 'Products',
    tags: ['custom'], path: '/products/roomcraftr', generatedPage: true,
    line: 'Quotes, orders and dealer commissions for curtain and blind shops.',
    points: ['Measure a window, price it and share the quote', 'Orders, payments and fitting visits in one place', 'Dealers quote under your rules, commission tracked in a ledger'],
    heading: ['Quotes, orders and dealers', 'for curtain and blind shops.'],
    intro: 'Software for curtain and blind shops in India. It is still being built, and we will write to you when it is ready.',
    note: 'Roomcraftr is not public yet, so this page shows only what is settled. Screens and a demo will be added here when they exist.',
    metaTitle: 'Roomcraftr: Quotes & Orders for Curtain and Blind Shops',
    description: 'Roomcraftr is software for curtain and blind shops in India: measure, quote, track orders and manage dealer commissions. In development, from Rirote Global.',
    formService: 'Roomcraftr (our product)', cta: 'Tell us you are interested', services: ['full-stack-development'],
  },
  {
    id: 'stop-guessing', name: 'stop-guessing', short: 'stop-guessing', status: 'Open source', group: 'Open source',
    tags: ['ai', 'team'], path: '/products/stop-guessing', generatedPage: true,
    line: 'Agent Skills that stop a coding agent from inventing decisions nobody made, and from calling a job done when it is not. Free under the MIT licence.',
    points: ['Decisions get written down before the agent builds', 'The work survives a new session or a new machine', 'The same discipline we bring to AI features in client products'],
    heading: ['Guardrails for', 'AI coding agents.'],
    intro: 'Our open-source agent skills stop a coding agent from inventing decisions nobody made, and from calling a job done when it isn’t.',
    metaTitle: 'stop-guessing: Open-Source Guardrails for AI Coding Agents',
    description: 'stop-guessing is a free, MIT-licensed set of Agent Skills that stops AI coding agents from inventing decisions or calling a job done when it is not.',
    cta: 'Talk about AI in your product', link: { href: 'https://github.com/rirote-global/stop-guessing', label: 'View on GitHub' }, services: ['ai-integration'],
  },
  {
    id: 'crack-the-prep', name: 'CrackThePrep', short: 'CrackThePrep', status: 'Open source', group: 'Open source',
    tags: ['team'], path: 'https://rirote-global.github.io/crack-the-prep/',
    line: 'Interview preparation for web developers: notes, questions and worked examples on JavaScript, React, Node.js, system design, data structures and behavioural rounds.',
    points: [],
  },
];
