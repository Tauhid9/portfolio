/** "What I Build" — the product categories, ordered by how often they come up. */
export interface Offering {
  id: string
  index: string
  title: string
  headline: string
  description: string
  points: string[]
}

export const offerings: Offering[] = [
  {
    id: 'saas',
    index: '01',
    title: 'SaaS & web applications',
    headline: 'Build the product behind the idea',
    description:
      'Modern web applications combining user interfaces, backend logic, data, integrations and deployment.',
    points: [
      'Startup products',
      'SaaS applications',
      'Subscription platforms',
      'Digital services',
      'Customer portals',
    ],
  },
  {
    id: 'mvp',
    index: '02',
    title: 'MVP development',
    headline: 'Move from idea to working product',
    description:
      'For founders with an idea, a requirement or an early design who need a functional first version. The goal is not to build everything — it is to build the right first version.',
    points: [
      'Idea to product flow',
      'Application structure',
      'Frontend and backend',
      'Database and deployment',
      'A working MVP',
    ],
  },
  {
    id: 'business',
    index: '03',
    title: 'Business applications',
    headline: 'Software built around how your business works',
    description:
      "Custom applications for workflows that generic software doesn't handle well.",
    points: [
      'Operational systems',
      'Administration portals',
      'Record management',
      'Role-based applications',
      'Transaction systems',
      'Reporting platforms',
    ],
  },
  {
    id: 'dashboards',
    index: '04',
    title: 'Dashboards & reporting',
    headline: 'Turn data into something people can act on',
    description:
      'Dashboards that make operational and business information easier to understand and decide on.',
    points: [
      'KPIs and operational metrics',
      'Financial summaries',
      'Search, filters and export',
      'Role-based views',
      'Charts and history',
    ],
  },
  {
    id: 'internal',
    index: '05',
    title: 'Internal tools',
    headline: 'Replace repetitive manual work',
    description:
      'Many businesses still run important workflows through Excel, WhatsApp, email, shared documents and manual reporting. Internal tools bring those into one structured application.',
    points: [
      'Spreadsheet replacement',
      'Structured workflows',
      'Single source of truth',
      'Fewer manual handoffs',
    ],
  },
  {
    id: 'portals',
    index: '06',
    title: 'Customer & partner portals',
    headline: 'A better way to interact with the business',
    description: 'Customer-facing applications built around self-service and status visibility.',
    points: [
      'Accounts and dashboards',
      'Transactions and applications',
      'Requests and records',
      'Status tracking',
      'Documents and notifications',
    ],
  },
  {
    id: 'apis',
    index: '07',
    title: 'APIs & backend systems',
    headline: 'The product behind the interface',
    description: "The systems users don't directly see, but feel every time something works.",
    points: [
      'REST APIs',
      'Business logic',
      'Authentication',
      'Database architecture',
      'Data validation',
      'Integrations and file management',
    ],
  },
]
