export interface Experience {
  id: string
  company: string
  position: string
  startDate: string
  endDate?: string
  description: string
  achievements: string[]
}

export const experienceData: Experience[] = [
  {
    id: "1",
    company: "Loosely Coupled Technologies",
    position: "Software Developer",
    startDate: "Nov 2024",
    endDate: "Present",
    description: "Developed full-stack web applications with modern tech stack including Next.js, Node.js, and databases",
    achievements: [
      "Engineered Suzuki Digital Higher Purchase platform with borrower/admin portals using Next.js and MSSQL",
      "Built social data analysis platform integrating Python AI models for sentiment analysis and trend forecasting",
      "Developed EZAssist POS solution using AngularJS and Node.js with real-time inventory updates via WebSocket",
      "Implemented delivery configuration system with Google Maps API integration and radius-based zone calculation",
      "Integrated secure payment gateway with complete transaction lifecycle handling",
      "Optimized database queries and CRUD operations, improving application performance"
    ]
  },
  {
    id: "2",
    company: "THCNext IT Solution",
    position: "Founder & Software Engineer",
    startDate: "2024",
    endDate: "Present",
    description: "Founded and leading software development company providing IT solutions and development services",
    achievements: [
      "Established company with focus on full-stack development and modern web technologies",
      "Managed development of studio.karigar project - architect website with admin and client portals",
      "Led technical architecture and technology decisions for client projects",
      "Built scalable solutions using Next.js, Node.js, React.js, and FastAPI"
    ]
  },
  {
    id: "3",
    company: "Freelance & Personal Projects",
    position: "Full Stack Developer",
    startDate: "2023",
    endDate: "Present",
    description: "Developed multiple production applications with various tech stacks and for different domains",
    achievements: [
      "Built dus-app: Patient Management system with Firebase and Cloudinary integration",
      "Created dus-financial: Financial Management application with analytics dashboard",
      "Developed portal.sonirvor.com: Service marketplace with worker registration using FastAPI and PostgreSQL",
      "Engineered TechNex IT Solution corporate website with SSR/SSG optimization",
      "Achieved superior Core Web Vitals through asset optimization and lazy loading"
    ]
  },
  {
    id: "4",
    company: "Dristy Unnayan Sangstha",
    position: "IT Support",
    startDate: "2022",
    endDate: "2023",
    description: "Provided technical support and IT infrastructure management for organization operations",
    achievements: [
      "Managed IT infrastructure and supported 50+ users with daily technical issues",
      "Installed, configured, and maintained computer systems and office networks",
      "Troubleshot hardware and software problems, achieving 95% first-call resolution rate",
      "Performed system updates, security patches, and data backup management",
      "Documented IT procedures and provided user training on software applications"
    ]
  }
]
