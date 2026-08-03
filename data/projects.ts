export interface Project {
  id: number
  title: string
  client?: string
  description: string
  longDescription: string
  contribution?: string
  highlights?: string[]
  image: string
  images: string[]
  technologies: string[]
  github?: string
  live?: string
  featured: boolean
  category: string
  impact?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "A. M. & Associates - Architecture Studio Website",
    client: "A. M. & Associates",
    description: "Production website for an architecture studio with project archive, process storytelling, team profiles, and lead-focused contact flow.",
    longDescription: "Built and maintained the public-facing A. M. & Associates website to present the studio's work, process, team, and contact pathways in a polished format. The platform supports project discovery, process storytelling, contributor visibility, and structured inquiry flow across desktop and mobile screens.",
    contribution: "Designed and developed the studio's public website experience and supporting content workflows.",
    highlights: [
      "Project archive with architecture and interior showcase screens",
      "Dedicated process storytelling and studio narrative pages",
      "Team and contributor presentation for studio credibility",
      "Structured contact experience with office details and inquiry flow",
    ],
    image: "/projects/am-associates-top/home-clean.png",
    images: [
      "/projects/am-associates-top/home-clean.png",
      "/projects/am-associates-top/projects-clean.png",
      "/projects/am-associates-top/process-clean.png",
      "/projects/am-associates-top/about-clean.png",
      "/projects/am-associates-top/contact-clean.png"
    ],
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "Cloudinary", "Google Maps"],
    live: "https://www.am-associate.com/",
    featured: true,
    category: "Full Stack",
    impact: "Live architecture studio presence for A. M. & Associates"
  },

  {
    id: 2,
    title: "Suzuki Digital Higher Purchase",
    client: "Suzuki Bangladesh",
    description: "Borrower and admin portals for a digital hire-purchase platform with approval, financing, and documentation workflows.",
    longDescription: "A sophisticated higher purchase platform with borrower and admin portals engineered using Next.js, Node.js, and MSSQL. Integrated Dana Score API for automated credit scoring, MDM and VTS APIs for asset tracking, and complex multi-stage approval workflows for financial tracking.",
    contribution: "Contributed to borrower and admin flows for loan application, review, and platform operations.",
    highlights: [
      "Borrower application flow with multi-step document handling",
      "Admin dashboard for approvals and disbursement workflows",
      "Integrated credit scoring, tracking, and operational APIs",
    ],
    image: "/projects/suzuki-digital/models-clean.png",
    images: [
      "/projects/suzuki-digital/login-clean.png",
      "/projects/suzuki-digital/models-clean.png",
      "/projects/suzuki-digital/financing-modal-clean.png",
      "/projects/suzuki-digital/personal-info-clean.png",
      "/projects/suzuki-digital/documents-clean.png",
      "/projects/suzuki-digital/admin-dashboard-clean.png"
    ],
    technologies: ["Next.js", "Node.js", "MSSQL", "Prisma", "TypeScript"],
    live: "https://dhp.suzuki.com.bd",
    featured: true,
    category: "Full Stack",
    impact: "Serving financial platform for Suzuki Bangladesh"
  },

  {
    id: 3,
    title: "DUS Financial - Financial Management Dashboard",
    client: "Dristy Unnayan Sangstha (DUS)",
    description: "Financial management platform for statements, reporting, and analytics across organizational finance workflows.",
    longDescription: "Built the DUS financial management platform to support statement management, reporting, and operational finance visibility. The application combines custom date-range reports, dashboard analytics, and synchronized records for day-to-day financial tracking.",
    contribution: "Developed the dashboard, statement views, and reporting workflows for finance operations.",
    highlights: [
      "Custom date-range financial reports",
      "Interactive dashboard for finance visibility",
      "Statement management and synchronized record updates",
    ],
    image: "/projects/dus-financial/dashboard-clean.png",
    images: [
      "/projects/dus-financial/dashboard-clean.png",
      "/projects/dus-financial/statements-clean.png",
      "/projects/dus-financial/reports-clean.png",
      "/projects/dus-financial/login-clean.png"
    ],
    technologies: ["Next.js", "Tailwind CSS", "Firebase", "Chart.js", "TypeScript"],
    live: "https://dus-finance.vercel.app/",
    featured: true,
    category: "Full Stack",
    impact: "Financial reporting and statement management for DUS"
  },

  {
    id: 4,
    title: "DUS App - Patient Management System",
    client: "Dristy Unnayan Sangstha (DUS)",
    description: "Patient management platform for managing records, workflow visibility, and document handling across healthcare operations.",
    longDescription: "Built the DUS patient management system to support secure patient record handling, administrative workflows, and day-to-day operational access. The platform combines real-time data synchronization, document storage, and role-based access for staff-facing use cases.",
    contribution: "Developed patient record workflows, dashboard screens, and supporting administrative tools.",
    highlights: [
      "Patient record and intake management workflows",
      "Role-based access with real-time synchronization",
      "Cloudinary-backed document and image storage",
      "Hospital-wise tracking and printable application output",
    ],
    image: "/projects/dus-app/dashboard-auth-clean.png",
    images: [
      "/projects/dus-app/dashboard-auth-clean.png",
      "/projects/dus-app/all-patients.png",
      "/projects/dus-app/add-patient.png",
      "/projects/dus-app/application-print.png",
      "/projects/dus-app/login-auth-clean.png"
    ],
    technologies: ["Next.js", "Tailwind CSS", "Firebase", "Cloudinary", "TypeScript"],
    featured: true,
    category: "Full Stack",
    impact: "Patient workflow and records platform for DUS"
  },

  {
    id: 5,
    title: "EZAssist POS Solution",
    description: "High-speed Point of Sale system with real-time inventory updates",
    longDescription: "A robust Point of Sale system built with AngularJS and Node.js optimized for high-speed transaction processing. Features WebSocket integration for real-time inventory updates, RESTful APIs with parameterized queries for SQL injection prevention, and responsive Bootstrap UI for mobile and desktop.",
    image: "/projects/ezassist-pos/pos-terminal.png",
    images: [
      "/projects/ezassist-pos/pos-terminal.png",
      "/projects/ezassist-pos/sales-orders.png",
      "/projects/ezassist-pos/business-setup.png",
      "/projects/ezassist-pos/reports-overview.png",
      "/projects/ezassist-pos/production-note.png",
      "/projects/ezassist-pos/delivery-overview.png",
      "/projects/ezassist-pos/zone-configuration.png"
    ],
    technologies: ["AngularJS", "Node.js", "MSSQL", "WebSocket", "Bootstrap"],
    live: "https://signup.ezassist.me/",
    featured: false,
    category: "Full Stack",
    impact: "Real-time inventory for retail businesses"
  },

  {
    id: 6,
    title: "Sharedtoday.com - Social Data Analysis Platform",
    description: "AI-powered social media analytics and trend forecasting platform",
    longDescription: "A high-performance social data analysis platform engineered with Next.js for frontend rendering and Python-based AI models for sentiment analysis and trend prediction. Manages large-scale datasets using MSSQL with optimized data retrieval pipelines for real-time insights.",
    image: "/projects/sharedtoday/landing-clean.png",
    images: [
      "/projects/sharedtoday/landing-clean.png",
      "/projects/sharedtoday/industry-overview-clean.png",
      "/projects/sharedtoday/viral-post-clean.png",
      "/projects/sharedtoday/influencer-analysis-clean.png"
    ],
    technologies: ["Next.js", "Node.js", "Python", "MSSQL", "Machine Learning"],
    live: "https://client.sharedtoday.com/",
    featured: false,
    category: "Full Stack",
    impact: "AI-powered analytics for social media trends"
  },

  {
    id: 7,
    title: "Daily Weather - Weather Forecast Application",
    description: "Real-time weather forecasting app with location-based predictions",
    longDescription: "A comprehensive weather application providing real-time weather data and detailed forecasts. Features location-based weather updates, hourly and 7-day forecasts, weather alerts, beautiful responsive UI with dark mode support, and integration with weather APIs for accurate data. Built with modern JavaScript, HTML5, CSS3, and responsive design principles.",
    image: "/projects/daily-weather/forecast-clean.png",
    images: [
      "/projects/daily-weather/forecast-clean.png",
      "/projects/daily-weather/search-clean.png"
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "REST API", "Bootstrap"],
    github: "https://github.com/Tauhid9/Daily-Weather",
    live: "https://tauhid9.github.io/Daily-Weather/",
    featured: false,
    category: "Frontend"
  }
]
