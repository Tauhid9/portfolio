export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
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
    description: "Architecture studio website with project archive, process storytelling, team profiles, and contact experience",
    longDescription: "A polished architecture and design studio website built for A. M. & Associates. The experience presents selected work through a visual project archive, dedicated process storytelling, contributor and team profiles, and a structured contact page with studio details and map integration. The website is built with Next.js, Supabase database, Cloudinary and Tailwind CSS, ensuring a responsive and visually appealing experience across devices.",
    image: "/projects/am-associates-top/projects-clean.png",
    images: [
      "/projects/am-associates-top/projects-clean.png",
      "/projects/am-associates-top/about-clean.png",
      "/projects/am-associates-top/process-clean.png",
      "/projects/am-associates-top/contact-clean.png"
    ],
    technologies: ["Next.js", "Tailwind CSS","Supabase database", "Cloudinary", "Google Maps"],
    live: "https://www.am-associate.com/",
    featured: false,
    category: "Full Stack",
    impact: "Live architecture studio presence for A. M. & Associates"
  },

  {
    id: 2,
    title: "Suzuki Digital Higher Purchase",
    description: "Comprehensive borrower and admin portals for digital hire-purchase platform",
    longDescription: "A sophisticated higher purchase platform with borrower and admin portals engineered using Next.js, Node.js, and MSSQL. Integrated Dana Score API for automated credit scoring, MDM and VTS APIs for asset tracking, and complex multi-stage approval workflows for financial tracking.",
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
    description: "Organization financial statement management and analytics platform",
    longDescription: "A comprehensive financial management application for tracking and managing organization finances. Built with Next.js and Firebase, featuring custom date range financial reports, interactive analytics dashboard with visual insights, and real-time data synchronization for up-to-date financial records.",
    image: "/projects/dus-financial/dashboard-clean.png",
    images: [
      "/projects/dus-financial/dashboard-clean.png",
      "/projects/dus-financial/statements-clean.png",
      "/projects/dus-financial/reports-clean.png",
      "/projects/dus-financial/login-clean.png"
    ],
    technologies: ["Next.js", "Tailwind CSS", "Firebase", "Chart.js", "TypeScript"],
    live: "https://dus-finance.vercel.app/",
    featured: false,
    category: "Full Stack"
  },

  {
    id: 4,
    title: "DUS App - Patient Management System",
    description: "Healthcare application for managing patient information and records",
    longDescription: "A secure patient management web application built with Next.js and Tailwind CSS. Features Firebase for real-time database and hosting, Cloudinary for secure document and image storage, hospital-wise patient count tracking, and role-based access control with real-time data synchronization.",
    image: "/projects/dus-app/dashboard-auth-clean.png",
    images: [
      "/projects/dus-app/dashboard-auth-clean.png",
      "/projects/dus-app/all-patients.png",
      "/projects/dus-app/add-patient.png",
      "/projects/dus-app/application-print.png",
      "/projects/dus-app/login-auth-clean.png"
    ],
    technologies: ["Next.js", "Tailwind CSS", "Firebase", "Cloudinary", "TypeScript"],
    featured: false,
    category: "Full Stack"
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
    featured: true,
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
    featured: true,
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