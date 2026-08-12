export interface ProcessStep {
  id: string
  index: string
  title: string
  headline: string
  body: string
  items: string[]
  output: string
}

export const processSteps: ProcessStep[] = [
  {
    id: 'discovery',
    index: '01',
    title: 'Discovery',
    headline: "Understand what we're actually building",
    body: 'Before development starts, the shape of the problem has to be clear.',
    items: [
      'The problem',
      'The users',
      'The business goal',
      'The main workflow',
      'Existing systems',
      'Important constraints',
      'Required integrations',
      'What success looks like',
    ],
    output: 'Clear product direction.',
  },
  {
    id: 'flow',
    index: '02',
    title: 'Product flow',
    headline: 'Map the experience',
    body: 'Before worrying about individual components, the important journeys have to make sense.',
    items: [
      'User roles',
      'Navigation',
      'Core screens',
      'User actions',
      'Application states',
      'Data requirements',
      'Admin workflows',
      'System responses',
    ],
    output: 'A product flow development can follow.',
  },
  {
    id: 'foundation',
    index: '03',
    title: 'Technical foundation',
    headline: 'Decide how the product works behind the interface',
    body: 'This stage sets the major technical approach, sized to what the project actually needs.',
    items: [
      'Frontend structure',
      'Backend architecture',
      'Database approach',
      'Authentication',
      'Permissions',
      'API design',
      'Third-party integrations',
      'File management',
      'Deployment strategy',
    ],
    output: 'A technical path aligned with the product.',
  },
  {
    id: 'development',
    index: '04',
    title: 'Development',
    headline: 'Turn the plan into software',
    body: 'Development runs across every layer the product needs — interfaces, business logic, data and integrations together.',
    items: [
      'Interfaces and components',
      'Responsive behaviour',
      'Forms and application states',
      'APIs and business logic',
      'Authentication and validation',
      'Database integration and queries',
      'External APIs and cloud services',
    ],
    output: 'Working software, layer by layer.',
  },
  {
    id: 'testing',
    index: '05',
    title: 'Testing & refinement',
    headline: 'Make sure the workflow actually works',
    body: "Development shouldn't stop when the happy path works once.",
    items: [
      'Core workflows',
      'Error states',
      'Edge cases',
      'Responsive behaviour',
      'Data behaviour',
      'Form validation',
      'API responses',
      'Integrations',
      'Usability and performance',
    ],
    output: 'A more reliable product before release.',
  },
  {
    id: 'deployment',
    index: '06',
    title: 'Deployment',
    headline: 'Move from development to production',
    body: 'Where required, I prepare and ship the application to its production environment.',
    items: [
      'Production build',
      'Environment configuration',
      'Deployment',
      'Domain configuration',
      'Database connection',
      'Cloud setup',
      'CI/CD',
      'Final production checks',
    ],
    output: 'A live application.',
  },
  {
    id: 'handoff',
    index: '07',
    title: 'Handoff & support',
    headline: "Make sure launch isn't the end of the story",
    body: 'Depending on the engagement, handoff gives your team everything needed to keep going.',
    items: [
      'Source code',
      'Git repository',
      'Environment guidance',
      'Technical notes',
      'Implementation context',
      'Deployment documentation',
      'Follow-up fixes',
      'Post-launch improvements',
    ],
    output: 'A product that can keep evolving.',
  },
]

export interface Principle {
  index: string
  title: string
  body: string
}

export const principles: Principle[] = [
  {
    index: '01',
    title: 'Start with the problem',
    body: 'Before choosing architecture, framework or database, understand the problem the product needs to solve.',
  },
  {
    index: '02',
    title: 'Build for real users',
    body: "Software needs to make sense to someone who doesn't know how it was engineered.",
  },
  {
    index: '03',
    title: 'Keep complexity earned',
    body: 'Not every application needs enterprise-level complexity from day one. Build what the product actually needs.',
  },
  {
    index: '04',
    title: 'Make change possible',
    body: 'Requirements evolve. The software should be structured so that change never requires destroying everything that came before it.',
  },
  {
    index: '05',
    title: 'Think beyond launch',
    body: 'The real test begins when users arrive, real data appears, edge cases happen and new features are requested. That is why maintainability matters.',
  },
]
