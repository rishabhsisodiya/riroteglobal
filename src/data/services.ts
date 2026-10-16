// The services Rirote Global offers: one entry per homepage service card, each with its own page
// at /services/<slug>. Every claim here must be backed by the case studies on /projects or the
// homepage. Never add a client name, figure or result that the site doesn't already state.
import type { FaqItem } from '../lib/schema';

export const SERVICES_PATH = '/services';

export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceProof {
  kicker: string;
  title: string;
  text: string;
  stats?: ServiceStat[];
  link?: { href: string; label: string };
}

export interface Service {
  slug: string;
  /** Card and menu name. */
  name: string;
  /** H1, split so the second line takes the accent colour. */
  heading: [string, string];
  /** <title>, under 65 characters. */
  metaTitle: string;
  /** Meta description, under 160 characters. */
  description: string;
  /** One sentence, used on cards and in schema.org offers. */
  summary: string;
  /** Hero paragraph. */
  intro: string;
  includes: Array<{ title: string; text: string }>;
  proof: ServiceProof[];
  stack: string[];
  faq: FaqItem[];
  related: string[];
}

export const serviceUrl = (slug: string): string => `${SERVICES_PATH}/${slug}`;

/** How every engagement runs, shown on each service page. */
export const SERVICE_STEPS: Array<{ title: string; text: string }> = [
  { title: 'Understand', text: 'We start from what has to change for the business: the problem, the people who will use the software and the systems it must connect to.' },
  { title: 'Decide', text: 'Requirements, data model and trade-offs are written down and agreed before building, so nobody has to guess later.' },
  { title: 'Build', text: 'Small releases you can see and test, with security, monitoring and performance built in rather than added at the end.' },
  { title: 'Run', text: 'The same team deploys and supports what it built, with no hand-offs where context gets lost.' },
];

/** Ways to work with us, shown on /about and /services. */
export const ENGAGEMENTS: Array<{ title: string; text: string; href?: string }> = [
  { title: 'Fixed-Scope Projects', text: 'A defined outcome, scope and timeline, from a first MVP to a full platform.' },
  { title: 'Dedicated Engineers', text: 'Vetted full-stack, AI and backend engineers who join your team on a dedicated or flexible basis.', href: '/services/dedicated-engineers' },
  { title: 'Ready-Built Products', text: 'Software like ERPTick, set up and adapted to the way your team works.', href: '/products' },
];

const PROJECTS = { href: '/projects', label: 'Read the case studies →' };

const UNIFIED_ERP: ServiceProof = {
  kicker: 'Case study · Enterprise ERP · India',
  title: 'One platform for 9 business entities',
  text: 'An infrastructure group ran service ticketing and executive reporting as two separate apps on two servers, with dashboards querying 5 ERPNext sites one after another. Delivered with TCB Infotech, we replaced both with one platform: a NestJS ticketing engine with a 9-state SLA workflow, two-way ERPNext sync, and 11 role-based dashboards on a parallel multi-site middleware with Redis caching.',
  stats: [
    { value: '<500ms', label: 'Dashboard loads, down from 5s+' },
    { value: '2 → 1', label: 'Apps and servers merged' },
    { value: '11', label: 'Role-based dashboards' },
  ],
  link: PROJECTS,
};

const NIMNIM: ServiceProof = {
  kicker: 'Case study · SaaS · USA',
  title: 'A live laundry platform, stabilised and rebuilt',
  text: 'NimNim runs on-demand laundry and dry-cleaning across Boston, New York and Miami. We took over a production platform spread across loosely secured EC2 instances, consolidated it onto one hardened server behind Nginx and Cloudflare, fixed slow MongoDB queries, secured the API and delivered a full revamp while customers kept ordering.',
  stats: [
    { value: '50%', label: 'Lower AWS bill' },
    { value: '50%', label: 'Faster API responses' },
    { value: '1', label: 'Hardened server replacing many' },
  ],
  link: { href: 'https://www.getnimnim.com', label: 'Visit getnimnim.com →' },
};

const FOUNDRY: ServiceProof = {
  kicker: 'Case study · Manufacturing ERP · India',
  title: 'A foundry ERP that talks to ERPNext safely',
  text: 'A domain-specific ERP for a foundry, from sales order to dispatch across a 17-module map, with heat-number genealogy as the traceability key. It integrates with the client’s existing ERPNext only for finance and payroll, through a REST-only boundary with idempotent correlation-ID calls, retry and backoff queues, and a nightly reconciliation run for one-sided records.',
  link: PROJECTS,
};

const MULTI_SERVICE: ServiceProof = {
  kicker: 'Case study · Logistics & delivery',
  title: 'Food, parcels and rides on one platform',
  text: 'A unified platform for food delivery, parcel logistics and ride booking, built on microservices so each vertical scales on its own. We led the engineering team, drove product decisions and owned features from API design through production support.',
  link: PROJECTS,
};

const ECOMMERCE: ServiceProof = {
  kicker: 'Case study · E-commerce · India',
  title: 'A monolith-to-microservices plan for a high-traffic store',
  text: 'For a high-traffic Indian e-commerce platform, we designed the system architecture, planned the migration from a monolith to microservices, led the redesign and improved backend performance, working directly with business stakeholders.',
  link: PROJECTS,
};

const STOP_GUESSING: ServiceProof = {
  kicker: 'Open source · MIT',
  title: 'stop-guessing: guardrails for AI coding agents',
  text: 'Our open-source agent skills stop a coding agent from inventing decisions nobody made, and from calling a job done when it isn’t. Decisions get written down first, and the work survives a new session or a new machine. It is the same discipline we bring to AI features in client products.',
  link: { href: 'https://github.com/rishabhsisodiya/stop-guessing', label: 'View on GitHub →' },
};

const ERPTICK: ServiceProof = {
  kicker: 'Our product',
  title: 'ERPTick Service Desk',
  text: 'We build on ERPNext ourselves. ERPTick is our service desk for equipment makers: tickets, field visits, AMC contracts and quotations, with customers, machines and stock read from ERPNext and draft invoices written back only when you switch it on.',
  link: { href: '/products/erptick', label: 'Explore ERPTick →' },
};

export const SERVICES: Service[] = [
  {
    slug: 'full-stack-development',
    name: 'Full-Stack Product Development',
    heading: ['Full-Stack Product', 'Development'],
    metaTitle: 'Full-Stack Web & SaaS Development, Jaipur | Rirote Global',
    description: 'Web platforms and SaaS products on Next.js, React, NestJS and Node.js, from first MVP to production scale. Owned end to end by a Jaipur engineering team.',
    summary: 'Web platforms and SaaS products built on Next.js, React, NestJS and Node.js, from MVP to production scale.',
    intro: 'Web platforms and SaaS products built on Next.js, React, NestJS and Node.js: typed end to end, PWA-ready, and designed to grow from a first MVP to production scale. One team owns the work from system design and APIs through deployment and production support.',
    includes: [
      { title: 'Product scoping', text: 'Requirements, data model and trade-offs written down and agreed before the first line of code, so the build matches what the business needs.' },
      { title: 'Web apps and SaaS', text: 'Next.js and React front ends with server rendering where it helps, responsive layouts and PWA support for teams who work from phones.' },
      { title: 'APIs and back ends', text: 'NestJS, Node.js and FastAPI services with PostgreSQL or MongoDB, role-based access, audit logs and clear REST contracts.' },
      { title: 'Authentication and security', text: 'Short-lived JWT access tokens, rotating refresh tokens, permission checks on every route and secrets kept out of the code.' },
      { title: 'Taking over live products', text: 'Stabilising an existing platform first, fixing the urgent production bugs, then improving it without stopping the business.' },
      { title: 'Launch and support', text: 'Deployment, monitoring and production support after go-live, so the people who built it are the ones who keep it running.' },
    ],
    proof: [UNIFIED_ERP, NIMNIM, MULTI_SERVICE],
    stack: ['Next.js', 'React', 'TypeScript', 'NestJS', 'Node.js', 'FastAPI', 'Prisma', 'PostgreSQL', 'MongoDB', 'Redis', 'Tailwind CSS', 'PWA'],
    faq: [
      { question: 'Can you take over a product another team built?', answer: 'Yes. We start by stabilising what is live: infrastructure, urgent bugs and security. Then we plan improvements or a revamp that keeps the product running for its users, as we did for NimNim.' },
      { question: 'Do you build MVPs or only large platforms?', answer: 'Both. We scope a first version around the one outcome the business needs, and design the data model and APIs so the product can grow without a rewrite.' },
      { question: 'Who owns the code?', answer: 'You do. The code, the infrastructure accounts and the documentation are yours, and we can work inside your repositories from day one.' },
    ],
    related: ['ai-integration', 'cloud-devops', 'technical-leadership'],
  },
  {
    slug: 'ai-integration',
    name: 'AI Agents & LLM Integration',
    heading: ['AI Agents &', 'LLM Integration'],
    metaTitle: 'AI Agent & LLM Integration Services, India | Rirote Global',
    description: 'AI assistants, agent workflows and LLM features wired into your product and data, with clear specs, guardrails and checks so the output can be trusted.',
    summary: 'AI assistants, agent workflows and LLM features wired into your product and data, with guardrails and verification.',
    intro: 'AI assistants, agent workflows and LLM features wired into your product and your data, with clear specs, guardrails and verification so the output can be trusted in production. We treat an AI feature like any other part of the system: defined, tested and monitored.',
    includes: [
      { title: 'Use-case selection', text: 'Finding the tasks where a model saves real time, and being clear about the ones where it shouldn’t be trusted to act alone.' },
      { title: 'Assistants on your data', text: 'Chat and search features that answer from your documents, records and APIs, with sources shown so people can check the answer.' },
      { title: 'Agent workflows', text: 'Multi-step agents that call your tools and APIs with scoped permissions, and hand off to a person when a decision needs one.' },
      { title: 'LLM features in your product', text: 'Summaries, drafting, classification and extraction built into the screens your users already work in.' },
      { title: 'Guardrails and verification', text: 'Written specs for what the model may and may not do, input and output checks, and test sets that catch regressions before users do.' },
      { title: 'Cost and monitoring', text: 'Model choice, caching and logging so you can see what each feature costs and how often it gets things right.' },
    ],
    proof: [STOP_GUESSING],
    stack: ['LLM APIs', 'AI agents', 'Tool calling', 'Node.js', 'NestJS', 'FastAPI', 'PostgreSQL', 'Redis', 'TypeScript'],
    faq: [
      { question: 'Which AI models do you work with?', answer: 'We choose the model for the task, its cost and where your data is allowed to go. The integration is built so the model can be changed later without rewriting the feature.' },
      { question: 'How do you stop an AI feature from making things up?', answer: 'By narrowing what it is asked to do, grounding answers in your own data with sources shown, checking outputs before they reach users, and keeping a person in the loop for decisions that matter.' },
      { question: 'Can you add AI to our existing product?', answer: 'Yes. Most of our AI work sits inside an existing product or workflow, connected through your current APIs and permissions rather than as a separate tool.' },
    ],
    related: ['full-stack-development', 'data-pipelines', 'dedicated-engineers'],
  },
  {
    slug: 'erpnext-integration',
    name: 'ERP & Enterprise Integrations',
    heading: ['ERPNext & ERP', 'Integration Services'],
    metaTitle: 'ERPNext Integration & Custom ERP Development | Rirote Global',
    description: 'ERPNext integrations, custom ERP modules and executive dashboards from a Jaipur team that ships ERPNext software of its own. Idempotent, reconciled, safe.',
    summary: 'Custom ERP modules, ERPNext integrations and role-based executive dashboards that keep data consistent across systems.',
    intro: 'Custom ERP modules, ERPNext integrations and role-based executive dashboards. We connect ERPNext to the rest of your business through its APIs, with idempotent calls, retry queues and reconciliation so data stays consistent across systems, and we build ERPNext software of our own.',
    includes: [
      { title: 'ERPNext integrations', text: 'Two-way sync between ERPNext and your other apps through the REST API and webhooks, with no direct database writes and Frappe permissions respected.' },
      { title: 'Custom ERP modules', text: 'Domain-specific modules where standard ERP doesn’t fit, such as foundry operations, service ticketing or field visits, linked to ERPNext for finance.' },
      { title: 'Executive dashboards', text: 'Role-based dashboards for leadership, pulling from one or many ERPNext sites in parallel and cached so they load in under a second.' },
      { title: 'Multi-site and multi-company', text: 'Middleware that reads across several ERPNext sites or companies at once and keeps roles in sync between them.' },
      { title: 'Safe write-backs', text: 'Correlation IDs, retry and backoff queues and nightly reconciliation, so a failed call never leaves records half-written.' },
      { title: 'Service and field operations', text: 'Tickets, SLAs, AMC contracts and engineer visits tied to the customers, machines and stock already in your ERP.' },
    ],
    proof: [UNIFIED_ERP, FOUNDRY, ERPTICK],
    stack: ['ERPNext v15', 'Frappe', 'Frappe Cloud', 'REST API', 'Webhooks', 'NestJS', 'Next.js', 'PostgreSQL', 'MariaDB', 'Redis'],
    faq: [
      { question: 'Do you write directly to the ERPNext database?', answer: 'No. Writes go through ERPNext’s REST API so its validation and permission rules apply. We read from the database only where read-only access is agreed, for example for nightly master-data pulls.' },
      { question: 'Do you work with Frappe Cloud and self-hosted ERPNext?', answer: 'Yes. Our unified ERP platform for an infrastructure group runs across 5 ERPNext v15 sites on Frappe Cloud, and the same approach works for self-hosted installs.' },
      { question: 'Should we customise ERPNext or build a separate app?', answer: 'It depends on how far the process is from standard ERP. Small changes belong in ERPNext. A process with its own data and rules, like foundry operations or field service, is often better as a separate app that syncs with ERPNext.' },
    ],
    related: ['data-pipelines', 'full-stack-development', 'technical-leadership'],
  },
  {
    slug: 'cloud-devops',
    name: 'Cloud, DevOps & Performance',
    heading: ['Cloud, DevOps &', 'Performance'],
    metaTitle: 'Cloud, DevOps & Performance Engineering | Rirote Global',
    description: 'AWS and DigitalOcean infrastructure, Docker, CI/CD and server hardening. We cut cloud bills, fix slow queries and bring load times down to milliseconds.',
    summary: 'AWS and DigitalOcean infrastructure, Docker, CI/CD, server hardening, lower cloud bills and faster load times.',
    intro: 'AWS and DigitalOcean infrastructure, Docker, CI/CD and server hardening. We cut cloud bills, fix slow queries and bring load times down from seconds to milliseconds, on live systems, without taking your product offline.',
    includes: [
      { title: 'Infrastructure audit', text: 'A look at what you run, what it costs and where it is exposed, with a ranked list of fixes rather than a rebuild by default.' },
      { title: 'Cost reduction', text: 'Consolidating idle servers, right-sizing instances and removing what nobody uses, measured against your monthly bill.' },
      { title: 'Server hardening', text: 'Locked-down servers behind Nginx and Cloudflare, closed ports, secured APIs and secrets kept out of the code.' },
      { title: 'Performance tuning', text: 'Finding slow database queries and API calls, then fixing them with indexes, caching and parallel requests.' },
      { title: 'CI/CD and Docker', text: 'Repeatable builds and deployments so releases stop depending on one person’s laptop.' },
      { title: 'Monitoring and support', text: 'Uptime checks, logs and alerts, plus production support when something breaks.' },
    ],
    proof: [NIMNIM, UNIFIED_ERP],
    stack: ['AWS', 'EC2', 'DigitalOcean', 'Docker', 'CI/CD', 'Nginx', 'Cloudflare', 'Redis', 'PostgreSQL', 'MongoDB'],
    faq: [
      { question: 'Can you reduce our cloud bill without downtime?', answer: 'Usually, yes. For NimNim we consolidated several EC2 instances onto one hardened server and halved the AWS bill while customers kept ordering.' },
      { question: 'Do you only work on AWS?', answer: 'No. We work on AWS and DigitalOcean, and the same practices apply to other providers.' },
      { question: 'Where do you start with a slow application?', answer: 'With measurement. We find which queries and calls take the time, fix the biggest ones first, and confirm the gain with before-and-after numbers.' },
    ],
    related: ['full-stack-development', 'technical-leadership', 'data-pipelines'],
  },
  {
    slug: 'technical-leadership',
    name: 'Architecture & Technical Leadership',
    heading: ['Architecture &', 'Technical Leadership'],
    metaTitle: 'Software Architecture & Technical Leadership | Rirote Global',
    description: 'System design, microservices and monolith-to-microservices migrations, plus a senior engineer owning delivery for teams that need technical leadership.',
    summary: 'System design, microservices and migrations, plus a senior engineer owning delivery for your team.',
    intro: 'System design, microservices and monolith-to-microservices migrations, plus hands-on technical leadership for teams that need a senior engineer owning delivery. We plan the system right before code is written, then stay to make sure it gets built that way.',
    includes: [
      { title: 'Architecture reviews', text: 'A clear look at your current system: where it will break as you grow, what to keep, and what to change first.' },
      { title: 'Build-vs-buy decisions', text: 'Whether to build, buy or extend what you have, such as your ERP, with the cost and risk of each option written down.' },
      { title: 'Migration roadmaps', text: 'Step-by-step plans to move from a monolith to services, or from spreadsheets to an ERP, without stopping the business.' },
      { title: 'Specs into systems', text: 'Turning functional specs into data models, APIs and a delivery plan your team can follow.' },
      { title: 'Technical leadership', text: 'A senior engineer leading your team day to day: code reviews, mentoring, product decisions and release planning.' },
      { title: 'ERP roadmaps', text: 'Deciding what belongs inside ERPNext and what should be a connected app, before custom work starts.' },
    ],
    proof: [ECOMMERCE, MULTI_SERVICE, FOUNDRY],
    stack: ['System design', 'Microservices', 'Node.js', 'NestJS', 'FastAPI', 'PostgreSQL', 'Redis', 'ERPNext', 'DigitalOcean', 'AWS'],
    faq: [
      { question: 'Do you only advise, or do you also build?', answer: 'Both. We can review and plan on their own, but most clients ask us to stay and lead or build the work, so the plan and the code stay in step.' },
      { question: 'Can you lead our in-house team?', answer: 'Yes. A senior engineer can lead your developers day to day: setting technical direction, reviewing code and owning releases alongside your product team.' },
      { question: 'Is a microservices migration always the right move?', answer: 'No. We recommend it only when parts of the system need to scale or ship independently. Often a cleaner monolith with clear modules is the cheaper answer.' },
    ],
    related: ['full-stack-development', 'cloud-devops', 'erpnext-integration'],
  },
  {
    slug: 'data-pipelines',
    name: 'Data Pipelines & Reporting',
    heading: ['Data Pipelines &', 'Reporting'],
    metaTitle: 'Data Pipelines, ETL & Executive Dashboards | Rirote Global',
    description: 'ETL pipelines into Redshift and PostgreSQL, reporting APIs and SLA dashboards that turn operational data into decisions your leadership can act on.',
    summary: 'ETL pipelines into Redshift and PostgreSQL, reporting APIs and SLA dashboards for leadership.',
    intro: 'ETL pipelines into Redshift and PostgreSQL, reporting APIs and SLA dashboards that turn operational data into decisions your leadership can act on. We pull from ERPs and apps, model the numbers once, and serve them fast.',
    includes: [
      { title: 'ETL pipelines', text: 'Scheduled pipelines that pull from ERPNext, apps and databases into Redshift or PostgreSQL, with checks for missing and duplicate records.' },
      { title: 'Executive dashboards', text: 'Role-based dashboards for heads of sales, finance, manufacturing and the MD, each showing the numbers that role is accountable for.' },
      { title: 'Reporting APIs', text: 'APIs that serve the same agreed numbers to dashboards, apps and exports, so every screen tells the same story.' },
      { title: 'SLA and service reports', text: 'Response and resolution tracking, region-by-region comparisons and scheduled reports by email.' },
      { title: 'Multi-source reporting', text: 'Parallel queries across several ERP sites or databases, cached so leadership dashboards stay fast.' },
      { title: 'Decision views', text: 'Pace-to-target bands, pipeline funnels with bottleneck detection, and drill-downs to the deal or ticket behind a number.' },
    ],
    proof: [UNIFIED_ERP, ERPTICK],
    stack: ['PostgreSQL', 'Redshift', 'MariaDB', 'ETL', 'Redis', 'Node.js', 'NestJS', 'Next.js', 'ERPNext'],
    faq: [
      { question: 'Can you report across several ERPNext sites?', answer: 'Yes. Our multi-site middleware queries up to 5 ERPNext sites in parallel and caches each widget, bringing dashboard loads under 500ms from more than 5 seconds.' },
      { question: 'Do we need a data warehouse?', answer: 'Not always. For a handful of sources, well-indexed PostgreSQL and a reporting API are often enough. A warehouse like Redshift earns its place when data volume or the number of sources grows.' },
      { question: 'Can reports arrive by email?', answer: 'Yes. Any report can be scheduled to arrive by email, for example as a CSV each morning.' },
    ],
    related: ['erpnext-integration', 'ai-integration', 'cloud-devops'],
  },
  {
    slug: 'dedicated-engineers',
    name: 'Resource Outsourcing',
    heading: ['Dedicated Engineers', 'for Your Team'],
    metaTitle: 'Hire Dedicated Developers from India | Rirote Global',
    description: 'Vetted full-stack, AI, backend, ERP and DevOps engineers who join your team dedicated, part-time or per project. Rirote-managed, ready within days.',
    summary: 'Vetted senior full-stack, AI and ERP engineers embedded in your team, dedicated or part-time.',
    intro: 'Skilled, vetted developers and technical specialists who join your team on a dedicated or flexible basis. Whether you are an agency needing extra bandwidth, a startup building a product or an enterprise growing a team, they plug in fast and deliver from day one, and we stay accountable for the standard of their work.',
    includes: [
      { title: 'Full-stack developers', text: 'React, Next.js, Node.js and TypeScript engineers for web apps and SaaS products.' },
      { title: 'AI engineers', text: 'LLM integration and agent workflows, built with specs and checks so the output can be trusted.' },
      { title: 'Backend developers', text: 'NestJS, FastAPI and REST API engineers for services, integrations and data work.' },
      { title: 'ERP integration developers', text: 'ERPNext modules and integrations, from custom doctypes to two-way sync with other systems.' },
      { title: 'Cloud and DevOps engineers', text: 'AWS, Docker, CI/CD and Nginx for teams that need infrastructure owned properly.' },
      { title: 'Technical leads', text: 'Architecture and team leadership for projects that need a senior engineer in charge.' },
    ],
    proof: [
      {
        kicker: 'How it works',
        title: 'Rirote-managed, not just a CV',
        text: 'Every engineer is tested on real projects before joining a client. Engagements can be dedicated full-time, part-time or project-based, and engineers are usually ready to start within days, not months. Agencies can use us white-label to scale delivery without adding headcount. We are India-based and work with clients in the United States and the Middle East.',
      },
      { ...UNIFIED_ERP, kicker: 'Case study · Delivered with an agency partner' },
    ],
    stack: ['React', 'Next.js', 'Node.js', 'TypeScript', 'NestJS', 'FastAPI', 'ERPNext', 'AWS', 'Docker', 'LLM APIs'],
    faq: [
      { question: 'How quickly can an engineer start?', answer: 'Usually within days. Tell us the role, the stack and the hours you need, and we will propose someone who has already worked on similar projects.' },
      { question: 'Can agencies use your engineers under their own brand?', answer: 'Yes. We supply engineers white-label to digital agencies who need to scale delivery without scaling headcount.' },
      { question: 'What engagement models do you offer?', answer: 'Dedicated full-time, part-time or project-based. You decide, and the arrangement can change as your needs do.' },
    ],
    related: ['full-stack-development', 'ai-integration', 'erpnext-integration'],
  },
];

export const serviceBySlug = (slug: string): Service | undefined => SERVICES.find((s) => s.slug === slug);
