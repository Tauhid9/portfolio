export interface FaqItem {
  question: string
  answer: string
  /** Rendered as a bullet list under the answer. */
  points?: string[]
}

export const faqs: FaqItem[] = [
  {
    question: 'Do you handle both frontend and backend?',
    answer:
      "Yes. I'm a full-stack developer and work across the frontend, backend, APIs, database, integrations and deployment where required. That lets me understand the complete application instead of viewing every layer in isolation.",
  },
  {
    question: 'What kind of projects are the best fit for you?',
    answer:
      'My strongest fit is products involving real workflows and business requirements.',
    points: [
      'SaaS products',
      'MVPs',
      'Business applications',
      'Customer portals',
      'Admin systems',
      'Dashboards',
      'Internal tools',
      'Healthcare platforms',
      'Financial systems',
      'Operational applications',
    ],
  },
  {
    question: 'Can you build an MVP from just an idea?',
    answer:
      "Yes. You don't need every screen or technical requirement defined already. If the idea is early, we first identify who the users are, what problem we're solving, what the essential workflow is, which features version one needs and what can wait. Development then starts from a much clearer foundation.",
  },
  {
    question: 'Can you help shape the product, not just code it?',
    answer:
      "Yes. I approach development with product usability and workflow in mind. I won't replace a dedicated product strategist or designer on every project, but I can translate business requirements into practical application flows and technical implementation decisions.",
  },
  {
    question: 'Can you work from an existing Figma design?',
    answer:
      'Yes. If you already have a Figma design, I can turn it into a functional application and connect it to the backend, APIs, database and application logic.',
  },
  {
    question: 'What if we already have an existing application?',
    answer: "That's completely fine. I can work inside an existing product for:",
    points: [
      'New features',
      'Bug fixing',
      'Integrations',
      'Frontend improvements',
      'Backend improvements',
      'Dashboard development',
      'Performance optimization',
      'Product expansion',
    ],
  },
  {
    question: 'Which technologies do you use?',
    answer:
      "My recent stack includes Next.js, React, TypeScript, JavaScript, Node.js, Python, FastAPI, Microsoft SQL Server, Firebase, Tailwind CSS, Docker, AWS and Vercel. But I don't believe every project should be forced onto the same stack — the product requirements should guide the choice.",
  },
  {
    question: 'Do you handle deployment?',
    answer:
      'Yes, where required. I work with Vercel, AWS, Docker, GitHub and CI/CD workflows. Deployment can be included as part of the broader product-delivery process.',
  },
  {
    question: 'Do you use AI to write code?',
    answer:
      "I use AI as part of my development workflow — ChatGPT, Claude, Gemini, Codex and v0 accelerate research, debugging, implementation, documentation and iteration. But AI output isn't treated as automatically correct. The implementation still gets evaluated against the actual requirements, architecture, maintainability and expected behaviour.",
  },
  {
    question: 'Can we start with a small project?',
    answer:
      "Absolutely. You don't need to begin with a full platform. Starting with one feature, one dashboard, one landing page, one workflow, one integration or one product module is an effective way to work together before expanding the engagement.",
  },
  {
    question: 'How long will my product take to build?',
    answer:
      'That depends on the scope. A focused application or feature can move quickly. A product involving multiple user roles, integrations, dashboards, complex workflows and backend systems naturally takes longer. I prefer understanding the requirement before suggesting a realistic development scope.',
  },
  {
    question: 'What do you need from me to get started?',
    answer: "You don't need a perfect technical brief. Send me:",
    points: [
      "What you're trying to build",
      'Who will use it',
      'What problem it should solve',
      'What currently exists',
      'Any design or reference you have',
      'Any important deadline or constraint',
    ],
  },
]
