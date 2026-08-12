/** "Why me" — the four things that actually differentiate the engagement. */
export interface Pillar {
  id: string
  icon: 'bolt' | 'brain' | 'chart' | 'shield'
  label: string
  title: string
  body: string
  points: string[]
}

export const pillars: Pillar[] = [
  {
    id: 'end-to-end',
    icon: 'bolt',
    label: 'End-to-end development',
    title: 'One product. Every layer.',
    body: 'Working across the whole stack makes it far easier to keep the application consistent, because no layer is designed in isolation from the ones it depends on.',
    points: [
      'Frontend',
      'Backend',
      'Database',
      'APIs',
      'Third-party integrations',
      'Authentication',
      'Deployment',
      'Production support',
    ],
  },
  {
    id: 'product-minded',
    icon: 'brain',
    label: 'Product-minded engineering',
    title: 'Before writing code, understand the product.',
    body: 'Technology should support the business problem, not become the problem. I start from the questions that decide the architecture.',
    points: [
      'Who is using the system?',
      'What are they trying to accomplish?',
      'Which actions matter most?',
      'What information should they see?',
      'What can be simplified?',
      'What will need to scale later?',
    ],
  },
  {
    id: 'operational',
    icon: 'chart',
    label: 'Real operational experience',
    title: 'Software that supports actual work.',
    body: 'My work sits inside real operational processes, where software has to fit the way an organisation already runs.',
    points: [
      'Patient management',
      'Financial reporting',
      'POS operations',
      'Inventory workflows',
      'Delivery configuration',
      'Higher-purchase operations',
      'Administrative portals',
      'Business dashboards',
    ],
  },
  {
    id: 'production',
    icon: 'shield',
    label: 'Production-minded delivery',
    title: 'Launch is the beginning.',
    body: "A project isn't successful simply because it deployed. The standard I build toward is what the software is like to live with afterwards.",
    points: [
      'Reliable',
      'Responsive',
      'Maintainable',
      'Understandable',
      'Extendable',
      'Easy to improve',
      'Ready for real data and real users',
    ],
  },
]
