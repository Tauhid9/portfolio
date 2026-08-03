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
    description: "Building and maintaining production web applications with modern JavaScript, backend services, and database-driven workflows.",
    achievements: [
      "Engineered Suzuki Digital Higher Purchase borrower and admin portals with Next.js and MSSQL.",
      "Built social data analysis workflows using Python-based sentiment analysis and forecasting models.",
      "Developed EZAssist POS modules with AngularJS, Node.js, and real-time inventory updates.",
      "Implemented Google Maps-based delivery configuration and operational zone calculation flows.",
      "Integrated payment handling and transaction lifecycle support across production modules.",
      "Optimized CRUD flows and query performance in database-backed applications."
    ]
  },
  {
    id: "2",
    company: "THCNext IT Solution",
    position: "Founder & Software Engineer",
    startDate: "2024",
    endDate: "Present",
    description: "Leading client-facing full-stack delivery for business websites, dashboards, and operational web applications.",
    achievements: [
      "Founded THCNext IT Solution in 2024 to deliver full-stack web products for local clients.",
      "Built the DUS patient management system with Firebase and Cloudinary-based record workflows.",
      "Developed the DUS financial dashboard and reporting application for operational finance tracking.",
      "Delivered the A. M. & Associates architecture studio website with project archive, process pages, and contact flow.",
      "Led architecture and implementation decisions across Next.js, Node.js, React, and FastAPI projects."
    ]
  },
  {
    id: "3",
    company: "Freelance & Personal Projects",
    position: "Full Stack Developer",
    startDate: "2023",
    endDate: "Present",
    description: "Built independent web products and showcase applications across different domains and technology stacks.",
    achievements: [
      "Built this portfolio with Next.js, Tailwind CSS, and TypeScript to showcase verified project work.",
      "Created Daily Weather with real-time data fetching and responsive frontend implementation.",
      "Engineered company and product websites with SSR and frontend performance improvements.",
      "Improved loading behavior through asset optimization and lighter UI delivery."
    ]
  },
  // {
  //   id: "4",
  //   company: "Dristy Unnayan Sangstha",
  //   position: "IT Support",
  //   startDate: "2023",
  //   endDate: "2024",
  //   description: "Provided day-to-day technical support and basic infrastructure assistance for organizational operations.",
  //   achievements: [
  //     "Installed, configured, and maintained computer systems and office network setups.",
  //     "Troubleshot hardware and software issues across daily operational use cases.",
  //     "Handled system updates, security patching, and basic data backup routines.",
  //     "Documented support procedures and guided staff on software usage."
  //   ]
  // }
]
