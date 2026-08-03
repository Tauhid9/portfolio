export interface SkillCategory {
  category: string
  description: string
  skills: string[]
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Frontend',
    description: 'Modern UI development for responsive product interfaces.',
    skills: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    category: 'Backend',
    description: 'Application logic, services, and backend delivery.',
    skills: ['Node.js', 'Express.js', 'Python', 'FastAPI'],
  },
  {
    category: 'Database',
    description: 'Structured storage and real-time data layers used across projects.',
    skills: ['MySQL', 'PostgreSQL', 'SQL', 'Firebase'],
  },
  {
    category: 'Testing & APIs',
    description: 'API workflows, validation, and debugging utilities.',
    skills: ['REST APIs', 'Postman', 'DevTools'],
  },
  {
    category: 'Development Tools',
    description: 'Daily engineering tools for implementation and debugging.',
    skills: ['VS Code', 'PyCharm', 'Git & GitHub', 'Docker'],
  },
  {
    category: 'Tools & Platforms',
    description: 'Deployment, collaboration, and platform services used in delivery.',
    skills: ['AWS', 'Vercel', 'CI/CD', 'npm & Package Management', 'Figma'],
  },
  {
    category: 'Design & UI',
    description: 'Interface quality, accessibility, and design system support.',
    skills: ['UI/UX Design', 'Responsive Design', 'Accessibility (WCAG)', 'CSS Animations', 'Design Systems', 'User Research'],
  },
  {
    category: 'AI-Assisted Development',
    description: 'Productivity tooling used to accelerate research, coding, and implementation quality.',
    skills: ['ChatGPT', 'Claude (Anthropic)', 'Gemini', 'Codex (OpenAI)', 'V0 (Vercel)'],
  },
]
