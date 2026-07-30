export interface Skill {
  name: string
  proficiency: number
}

export interface SkillCategory {
  category: string
  skills: Skill[]
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: [
     
      { name: "Next.js", proficiency: 90 },
      { name: "TypeScript", proficiency: 88 },
      { name: "Tailwind CSS", proficiency: 92 },
      { name: "JavaScript", proficiency: 95 },
       { name: "React", proficiency: 75 },
      { name: "HTML5", proficiency: 92 },
      { name: "CSS3", proficiency: 90 },
      { name: "Bootstrap", proficiency: 85 }
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", proficiency: 88 },
      { name: "Express.js", proficiency: 75 },
      { name: "Python", proficiency: 80 },
      { name: "FastAPI", proficiency: 82 },
      { name: "PostgreSQL", proficiency: 85 },
      { name: "MySQL", proficiency: 90 },
      { name: "SQL", proficiency: 90 },
      { name: "REST APIs", proficiency: 90 }
    ]
  },
  {
    category: "AI & Code Assistants",
    skills: [
      { name: "ChatGPT", proficiency: 90 },
      { name: "Claude (Anthropic)", proficiency: 88 },
      { name: "Gemini", proficiency: 85 },
      { name: "Codex (OpenAI)", proficiency: 87 },
      { name: "V0 (Vercel)", proficiency: 92 },
      { name: "AI-Assisted Development", proficiency: 90 }
    ]
  },
  {
    category: "Development Tools",
    skills: [
      { name: "VS Code", proficiency: 95 },
      { name: "Postman", proficiency: 88 },
      { name: "PyCharm", proficiency: 82 },
      { name: "Git & GitHub", proficiency: 92 },
      { name: "Docker", proficiency: 80 },
      { name: "DevTools", proficiency: 90 }
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "AWS", proficiency: 75 },
      { name: "Firebase", proficiency: 82 },
      { name: "CI/CD", proficiency: 85 },
      { name: "Vercel", proficiency: 88 },
      { name: "Figma", proficiency: 85 },
      { name: "npm & Package Management", proficiency: 90 }
    ]
  },
  {
    category: "Design & UI",
    skills: [
      { name: "UI/UX Design", proficiency: 82 },
      { name: "Responsive Design", proficiency: 92 },
      { name: "Accessibility (WCAG)", proficiency: 88 },
      { name: "CSS Animations", proficiency: 87 },
      { name: "Design Systems", proficiency: 85 },
      { name: "User Research", proficiency: 80 }
    ]
  }
]
