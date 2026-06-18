export interface Project {
  id: string
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
    title: "Suzuki Digital Higher Purchase",
    description: "Comprehensive borrower and admin portals for digital hire-purchase platform",
    longDescription: "A sophisticated higher purchase platform with borrower and admin portals engineered using Next.js, Node.js, and MSSQL. Integrated Dana Score API for automated credit scoring, MDM and VTS APIs for asset tracking, and complex multi-stage approval workflows for financial tracking.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-adf4e565f900?w=800&h=600&fit=crop"
    ],
    technologies: ["Next.js", "Node.js", "MSSQL", "Prisma", "TypeScript"],
    github: "https://github.com/Tauhid9/suzuki-digital",
    live: "https://suzukidigital.com",
    featured: true,
    category: "Full Stack",
    impact: "Serving financial platform for Suzuki Bangladesh"
  },
  {
    id: 2,
    title: "Sharedtoday.com - Social Data Analysis Platform",
    description: "AI-powered social media analytics and trend forecasting platform",
    longDescription: "A high-performance social data analysis platform engineered with Next.js for frontend rendering and Python-based AI models for sentiment analysis and trend prediction. Manages large-scale datasets using MSSQL with optimized data retrieval pipelines for real-time insights.",
    image: "https://images.unsplash.com/photo-1677442d019cecf481b2fef2a9ea008de46461e7?w=500&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1677442d019cecf481b2fef2a9ea008de46461e7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f70504466?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-adf4e565f900?w=800&h=600&fit=crop"
    ],
    technologies: ["Next.js", "Node.js", "Python", "MSSQL", "Machine Learning"],
    github: "https://github.com/Tauhid9/sharedtoday-analytics",
    live: "https://sharedtoday.com",
    featured: true,
    category: "Full Stack",
    impact: "AI-powered analytics for social media trends"
  },
  {
    id: 3,
    title: "EZAssist POS Solution",
    description: "High-speed Point of Sale system with real-time inventory updates",
    longDescription: "A robust Point of Sale system built with AngularJS and Node.js optimized for high-speed transaction processing. Features WebSocket integration for real-time inventory updates, RESTful APIs with parameterized queries for SQL injection prevention, and responsive Bootstrap UI for mobile and desktop.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f70504466?w=800&h=600&fit=crop"
    ],
    technologies: ["AngularJS", "Node.js", "MSSQL", "WebSocket", "Bootstrap"],
    github: "https://github.com/Tauhid9/ezassist-pos",
    live: "https://ezassist.me",
    featured: true,
    category: "Full Stack",
    impact: "Real-time inventory for retail businesses"
  },
  {
    id: 4,
    title: "Portal.Sonirvor.com - Service Marketplace",
    description: "Platform for service discovery and worker management with geo-location",
    longDescription: "A service marketplace platform built with Next.js frontend and Python FastAPI backend. Features worker registration and profile management, secure APIs for fast data exchange, PostgreSQL for efficient data storage, and responsive mobile-friendly Tailwind CSS interface for optimal UX.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-adf4e565f900?w=800&h=600&fit=crop"
    ],
    technologies: ["Next.js", "Python FastAPI", "PostgreSQL", "Tailwind CSS", "RESTful APIs"],
    github: "https://github.com/Tauhid9",
    live: "https://portal.sonirvor.com",
    featured: false,
    category: "Full Stack"
  },
  {
    id: 5,
    title: "DUS App - Patient Management System",
    description: "Healthcare application for managing patient information and records",
    longDescription: "A secure patient management web application built with Next.js and Tailwind CSS. Features Firebase for real-time database and hosting, Cloudinary for secure document and image storage, hospital-wise patient count tracking, and role-based access control with real-time data synchronization.",
    image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=500&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop"
    ],
    technologies: ["Next.js", "Tailwind CSS", "Firebase", "Cloudinary", "TypeScript"],
    github: "https://github.com/Tauhid9",
    live: "https://dus-app.firebase.com",
    featured: false,
    category: "Full Stack"
  },
  {
    id: 6,
    title: "DUS Financial - Financial Management Dashboard",
    description: "Organization financial statement management and analytics platform",
    longDescription: "A comprehensive financial management application for tracking and managing organization finances. Built with Next.js and Firebase, featuring custom date range financial reports, interactive analytics dashboard with visual insights, and real-time data synchronization for up-to-date financial records.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1660482537662-e0fa8d87e6e7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop"
    ],
    technologies: ["Next.js", "Tailwind CSS", "Firebase", "Chart.js", "TypeScript"],
    github: "https://github.com/Tauhid9",
    live: "https://dus-financial.firebase.com",
    featured: false,
    category: "Full Stack"
  },
  {
    id: 7,
    title: "Studio Karigor - Architecture Studio Website",
    description: "Production-ready architect portfolio and CMS with admin and client portals",
    longDescription: "A professional architecture studio website with comprehensive CMS capabilities. Built with Next.js App Router, Supabase Auth and PostgreSQL for secure data management, Cloudinary for optimized image storage with signed server uploads, and role-based admin panel for content management. Features project portfolio showcase, team member profiles, job listings, and client messaging system.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f70504466?w=800&h=600&fit=crop"
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Cloudinary", "Tailwind CSS"],
    github: "https://github.com/Tauhid9",
    live: "https://studiokarigor.com",
    featured: false,
    category: "Full Stack"
  },
  {
    id: 8,
    title: "Daily Weather - Weather Forecast Application",
    description: "Real-time weather forecasting app with location-based predictions",
    longDescription: "A comprehensive weather application providing real-time weather data and detailed forecasts. Features location-based weather updates, hourly and 7-day forecasts, weather alerts, beautiful responsive UI with dark mode support, and integration with weather APIs for accurate data. Built with modern JavaScript, HTML5, CSS3, and responsive design principles.",
    image: "https://images.unsplash.com/photo-1601912213441-1e67f284e655?w=500&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1601912213441-1e67f284e655?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-adf4e565f900?w=800&h=600&fit=crop"
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "REST API", "Bootstrap"],
    github: "https://github.com/Tauhid9",
    live: "https://daily-weather.netlify.app",
    featured: false,
    category: "Frontend"
  }
]
