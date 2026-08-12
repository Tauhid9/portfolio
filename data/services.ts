export interface Service {
  id: string
  /** Material-style icon name resolved in the services section. */
  icon: 'rocket' | 'layers' | 'chart' | 'palette' | 'server' | 'puzzle' | 'handshake'
  eyebrow: string
  title: string
  summary: string
  scopeLabel: string
  scope: string[]
  bestForLabel: string
  bestFor: string[]
  cta: string
  /** Prefilled WhatsApp intent for this specific service. */
  intent: string
  featured?: boolean
}

export const services: Service[] = [
  {
    id: 'mvp',
    icon: 'rocket',
    eyebrow: 'MVP & product development',
    title: 'For founders ready to turn an idea into software',
    summary:
      'A startup idea, an early prototype, a Figma file, a business problem, or a rough concept — I turn it into a functional web product.',
    scopeLabel: 'Typical scope',
    scope: [
      'Requirement understanding',
      'Product flow',
      'Application architecture',
      'Frontend development',
      'Backend & API development',
      'Database integration',
      'Authentication',
      'Admin capabilities',
      'Third-party integrations',
      'Deployment',
      'Initial production support',
    ],
    bestForLabel: 'Best for',
    bestFor: ['MVPs', 'Startup products', 'SaaS', 'New digital services'],
    cta: 'Build your MVP',
    intent: "Hi Tauhid — I'd like to discuss building an MVP.",
    featured: true,
  },
  {
    id: 'production-apps',
    icon: 'layers',
    eyebrow: 'Production web applications',
    title: 'For products that need to handle real work',
    summary:
      'For businesses and teams that need more than a prototype — applications built around real roles, real workflows and real data.',
    scopeLabel: 'Typical scope',
    scope: [
      'Full-stack application architecture',
      'Role-based access',
      'Operational workflows',
      'Backend business logic',
      'Database design',
      'API integrations',
      'Reporting',
      'Admin systems',
      'Performance improvements',
      'Production deployment',
    ],
    bestForLabel: 'Best for',
    bestFor: [
      'Business platforms',
      'Customer portals',
      'Operational applications',
      'Service platforms',
      'Enterprise workflows',
    ],
    cta: 'Discuss your application',
    intent: "Hi Tauhid — I need a production web application built.",
    featured: true,
  },
  {
    id: 'dashboards',
    icon: 'chart',
    eyebrow: 'Dashboards & internal tools',
    title: 'Replace manual processes with better software',
    summary:
      'When important processes still run on spreadsheets, repeated manual work, or disconnected tools, a focused internal application makes them dramatically easier.',
    scopeLabel: 'Typical capabilities',
    scope: [
      'Dashboard',
      'Admin panel',
      'Reporting',
      'Data visualization',
      'Workflow automation',
      'Role permissions',
      'Search & filtering',
      'Record management',
      'Export',
      'Notifications',
      'Operational tracking',
    ],
    bestForLabel: 'Best for',
    bestFor: ['Finance', 'Healthcare', 'Operations', 'Management', 'Sales', 'Administration'],
    cta: 'Build an internal tool',
    intent: "Hi Tauhid — I'd like to discuss a dashboard or internal tool.",
  },
  {
    id: 'frontend',
    icon: 'palette',
    eyebrow: 'Frontend development',
    title: 'Turn product designs into working interfaces',
    summary:
      'Already have your design or product direction? I can focus specifically on implementing the frontend.',
    scopeLabel: 'Capabilities',
    scope: [
      'React',
      'Next.js',
      'TypeScript',
      'Responsive interfaces',
      'Design-system implementation',
      'Reusable components',
      'API-connected interfaces',
      'Dashboard UI',
      'Forms',
      'Animations',
      'Accessibility',
      'Performance optimization',
    ],
    bestForLabel: 'Best for',
    bestFor: ['Figma handoffs', 'Design systems', 'UI rebuilds', 'Marketing sites'],
    cta: 'Discuss frontend work',
    intent: "Hi Tauhid — I have designs that need frontend implementation.",
  },
  {
    id: 'backend',
    icon: 'server',
    eyebrow: 'Backend & API development',
    title: 'Build the logic behind the product',
    summary:
      'For products that need backend development or improvements without rebuilding the entire frontend.',
    scopeLabel: 'Capabilities',
    scope: [
      'Node.js',
      'Python',
      'FastAPI',
      'REST APIs',
      'Authentication',
      'Business logic',
      'Database integration',
      'Third-party integrations',
      'Data processing',
      'File handling',
      'Backend workflows',
    ],
    bestForLabel: 'Best for',
    bestFor: ['API layers', 'Data pipelines', 'Integrations', 'Auth systems'],
    cta: 'Discuss backend work',
    intent: "Hi Tauhid — I need backend or API development.",
  },
  {
    id: 'existing',
    icon: 'puzzle',
    eyebrow: 'Existing product development',
    title: "Already have a product? Let's make it better",
    summary:
      'Not every engagement needs to start from scratch. I can work inside an existing application and move it forward.',
    scopeLabel: 'What that looks like',
    scope: [
      'Build new features',
      'Improve UI',
      'Connect APIs',
      'Fix bugs',
      'Refactor existing functionality',
      'Improve performance',
      'Add dashboards',
      'Create admin workflows',
      'Integrate external services',
      'Extend backend systems',
    ],
    bestForLabel: 'Best for',
    bestFor: ['Legacy modernisation', 'Feature expansion', 'Performance work', 'Team augmentation'],
    cta: 'Improve your product',
    intent: "Hi Tauhid — I have an existing product that needs work.",
  },
  {
    id: 'custom',
    icon: 'handshake',
    eyebrow: 'Custom engagement',
    title: "Your requirement doesn't fit into a box?",
    summary:
      "That's normal. One new module, a complicated integration, a proof of concept, a complete rebuild, a technical partner — or help working out what needs to be built in the first place.",
    scopeLabel: 'Common shapes',
    scope: [
      'One new module',
      'A complicated integration',
      'A proof of concept',
      'A complete rebuild',
      'An ongoing technical partner',
      'Scoping and technical discovery',
    ],
    bestForLabel: 'Best for',
    bestFor: ['Unclear scope', 'Short engagements', 'Technical advisory'],
    cta: "Let's talk",
    intent: "Hi Tauhid — I have a requirement that doesn't fit a standard package.",
  },
]
