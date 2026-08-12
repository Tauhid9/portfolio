export interface CapabilityGroup {
  id: string
  index: string
  title: string
  headline: string
  /** Named technologies with a one-line reason each. */
  primary: { name: string; note: string }[]
  /** Supporting skills shown as plain chips. */
  supporting: string[]
}

export const capabilityGroups: CapabilityGroup[] = [
  {
    id: 'frontend',
    index: '01',
    title: 'Frontend',
    headline: 'Interfaces people actually want to use',
    primary: [
      { name: 'Next.js', note: 'Production web apps and server-rendered experiences' },
      { name: 'React', note: 'Component-driven frontend applications' },
      { name: 'TypeScript', note: 'Stronger, more predictable application development' },
      { name: 'JavaScript', note: 'Core frontend and backend implementation' },
      { name: 'AngularJS', note: 'Existing enterprise and product development' },
      { name: 'Tailwind CSS', note: 'Fast, structured interface implementation' },
    ],
    supporting: [
      'Responsive design',
      'Reusable components',
      'Forms',
      'Dashboard interfaces',
      'CSS animation',
      'Performance optimization',
      'Accessibility',
    ],
  },
  {
    id: 'backend',
    index: '02',
    title: 'Backend',
    headline: 'Business logic that holds the product together',
    primary: [
      { name: 'Node.js', note: 'APIs and backend services' },
      { name: 'Python', note: 'Data workflows and backend implementation' },
      { name: 'FastAPI', note: 'Modern Python API development' },
    ],
    supporting: [
      'REST APIs',
      'Authentication',
      'Authorization',
      'Business logic',
      'Data validation',
      'File handling',
      'Background workflows',
      'Third-party services',
    ],
  },
  {
    id: 'data',
    index: '03',
    title: 'Data & database',
    headline: 'Structure matters',
    primary: [
      { name: 'Microsoft SQL Server', note: 'Relational data for financial and operational systems' },
      { name: 'Firebase', note: 'Real-time data and rapid product delivery' },
    ],
    supporting: [
      'Database-driven architecture',
      'Data querying',
      'Application records',
      'Operational data',
      'Reporting structures',
      'Real-time data workflows',
    ],
  },
  {
    id: 'integrations',
    index: '04',
    title: 'APIs & integrations',
    headline: "Products don't exist in isolation",
    primary: [
      { name: 'Google Maps', note: 'Delivery zones and location workflows' },
      { name: 'Cloudinary', note: 'Document and media handling at scale' },
    ],
    supporting: [
      'External APIs',
      'Cloud services',
      'Authentication systems',
      'Application databases',
      'Data services',
      'Business platforms',
    ],
  },
  {
    id: 'infrastructure',
    index: '05',
    title: 'Infrastructure & delivery',
    headline: 'From local development to production',
    primary: [
      { name: 'Vercel', note: 'Production hosting for Next.js applications' },
      { name: 'AWS', note: 'Cloud infrastructure and services' },
      { name: 'Docker', note: 'Reproducible environments' },
    ],
    supporting: ['Git', 'GitHub', 'CI/CD', 'npm', 'VS Code', 'PyCharm', 'Deployment environments'],
  },
  {
    id: 'product',
    index: '06',
    title: 'Product & UI',
    headline: 'Engineering with interface awareness',
    primary: [
      { name: 'Figma', note: 'Design collaboration and accurate handoff' },
      { name: 'Design systems', note: 'Consistent, reusable interface language' },
    ],
    supporting: [
      'UI/UX fundamentals',
      'Responsive design',
      'Accessibility',
      'CSS animations',
      'User flows',
      'Interface refinement',
    ],
  },
]

export const aiTools = ['ChatGPT', 'Claude', 'Gemini', 'Codex', 'v0'] as const

export const aiAssistedAreas = [
  'Research',
  'Technical exploration',
  'Debugging',
  'Code review support',
  'Documentation',
  'Implementation assistance',
  'Test-case thinking',
  'Refactoring support',
  'Development planning',
  'Rapid prototyping',
] as const

/** What engineering judgement still has to decide, whatever the AI proposes. */
export const aiJudgementChecks = [
  'Matches the requirement',
  'Handles edge cases',
  'Fits the existing architecture',
  'Maintains security',
  'Performs correctly',
  'Is maintainable',
  "Actually solves the user's problem",
] as const
