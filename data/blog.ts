export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  images: string[]
  author: string
  date: string
  readTime: number
  category: string
  tags: string[]
  slug: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable APIs with Node.js",
    excerpt: "Learn how to design and build APIs that can handle millions of requests while maintaining optimal performance.",
    content: "In this comprehensive guide, we'll explore best practices for building scalable APIs using Node.js. We'll cover topics like load balancing, caching strategies, database optimization, and monitoring.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f70504466?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-adf4e565f900?w=900&h=600&fit=crop"
    ],
    author: "Developer Name",
    date: "Mar 15, 2024",
    readTime: 8,
    category: "Backend",
    tags: ["Node.js", "APIs", "Performance", "Scalability"],
    slug: "building-scalable-apis-nodejs"
  },
  {
    id: "2",
    title: "React Hooks: Advanced Patterns and Best Practices",
    excerpt: "Master advanced React hooks patterns including custom hooks, useContext, and performance optimization techniques.",
    content: "React Hooks have revolutionized how we write React components. In this article, we'll explore advanced patterns and best practices for using hooks effectively in your applications.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=600&fit=crop"
    ],
    author: "Developer Name",
    date: "Mar 10, 2024",
    readTime: 10,
    category: "Frontend",
    tags: ["React", "Hooks", "JavaScript", "Performance"],
    slug: "react-hooks-advanced-patterns"
  },
  {
    id: "3",
    title: "CSS Grid vs Flexbox: When to Use Each",
    excerpt: "Understand the differences between CSS Grid and Flexbox, and learn when to use each layout method.",
    content: "CSS Grid and Flexbox are two powerful layout tools. This guide will help you understand their differences and when to use each one for optimal results.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f70504466?w=900&h=600&fit=crop"
    ],
    author: "Developer Name",
    date: "Mar 1, 2024",
    readTime: 6,
    category: "Frontend",
    tags: ["CSS", "Layout", "Responsive Design", "Web Design"],
    slug: "css-grid-vs-flexbox"
  },
  {
    id: "4",
    title: "Getting Started with Docker for Developers",
    excerpt: "A beginner-friendly guide to containerization and Docker for streamlining your development workflow.",
    content: "Docker has become essential in modern development. Learn how to containerize your applications and simplify your development and deployment processes.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f70504466?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f70504466?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-adf4e565f900?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=600&fit=crop"
    ],
    author: "Developer Name",
    date: "Feb 20, 2024",
    readTime: 7,
    category: "DevOps",
    tags: ["Docker", "DevOps", "Containerization", "Tools"],
    slug: "getting-started-docker"
  },
  {
    id: "5",
    title: "TypeScript Best Practices for Large Projects",
    excerpt: "Best practices and patterns for using TypeScript effectively in large-scale production applications.",
    content: "TypeScript brings type safety to JavaScript. Discover best practices for leveraging TypeScript in large projects to improve code quality and maintainability.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f70504466?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-adf4e565f900?w=900&h=600&fit=crop"
    ],
    author: "Developer Name",
    date: "Feb 10, 2024",
    readTime: 9,
    category: "Backend",
    tags: ["TypeScript", "JavaScript", "Best Practices", "Code Quality"],
    slug: "typescript-best-practices"
  },
  {
    id: "6",
    title: "Web Performance Optimization Techniques",
    excerpt: "Practical techniques to optimize your web applications for faster load times and better user experience.",
    content: "Web performance directly impacts user satisfaction. Learn practical techniques to optimize your applications including code splitting, lazy loading, caching, and more.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f70504466?w=900&h=600&fit=crop"
    ],
    author: "Developer Name",
    date: "Feb 1, 2024",
    readTime: 11,
    category: "Frontend",
    tags: ["Performance", "Optimization", "Web Development", "UX"],
    slug: "web-performance-optimization"
  }
]
