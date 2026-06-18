# Tauhid's Portfolio

A modern, minimalist portfolio website showcasing full-stack engineering work and professional experience. Built with Next.js, React, and Tailwind CSS for optimal performance and user experience.

## 🚀 Features

- **Responsive Design** - Mobile-first approach with seamless desktop experience
- **Project Showcase** - Interactive project cards with image galleries and live/code links
- **Project Details Modal** - Deep-dive into projects with overview and code tabs
- **Experience Timeline** - Professional work history and achievements
- **Contact Form** - Email integration for inquiries
- **Dark/Light Theme** - Built-in theme toggle
- **SEO Optimized** - Proper metadata, OG tags, and structured data
- **Production Ready** - Fast, accessible, and optimized for all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **UI Library**: React 19
- **Form Handling**: React Hook Form
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📋 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── api/
│       └── contact/        # Contact form endpoint
├── components/
│   ├── sections/           # Page sections (hero, projects, experience, contact)
│   ├── features/           # Reusable components (project-card, theme-toggle, etc.)
│   ├── modals/             # Modal components
│   └── ui/                 # shadcn/ui components
├── data/
│   ├── projects.ts         # Project data
│   └── experience.ts       # Experience data
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
└── public/                 # Static assets
```

## 🎨 Design System

### Colors
- **Primary**: #000000 (foreground) and #FFFFFF (background)
- **Accents**: Subtle grays and borders for visual hierarchy
- **Semantic**: Uses CSS variables for themeable design tokens

### Typography
- **Headings**: Bold, high-contrast for impact
- **Body**: Clear, readable, optimized for scanning
- **Monospace**: For technical content and code references

### Components
- Clean, minimal component design
- Focus on substance over decoration
- Accessibility-first approach
- Consistent spacing and sizing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/Tauhid9/portfolio.git
cd portfolio

# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Build
pnpm run build

# Start production server
pnpm start
```

## 📝 Customization

### Update Project Data
Edit `/data/projects.ts` to add, remove, or modify projects:

```typescript
{
  id: 'project-slug',
  title: 'Project Name',
  description: 'Short description',
  longDescription: 'Detailed description',
  image: 'image-url',
  images: ['image1', 'image2'],
  live: 'https://live-link.com',
  github: 'https://github.com/link',
  technologies: ['Tech1', 'Tech2'],
  impact: 'Key metrics or impact',
  featured: true
}
```

### Update Experience Data
Edit `/data/experience.ts` to modify work history and achievements.

### Customize Theme
Edit `/app/globals.css` to update design tokens:
- Color variables
- Font definitions
- Border radius
- Spacing scale

## 🌐 Deployment

The portfolio is optimized for deployment on Vercel:

```bash
# Deploy to Vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments on push.

## 📧 Contact Form

The contact form sends emails using a backend API. To enable:

1. Set up an email service (Nodemailer, SendGrid, etc.)
2. Create an API route at `/app/api/contact/route.ts`
3. Add environment variables as needed

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles where appropriate
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## 📊 Performance

- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Minimal CSS with Tailwind
- Fast builds with Next.js 16
- Mobile-first responsive design

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 About

Portfolio of Tauhid Hasan Chowdhury, a full-stack engineer based in Dhaka, Bangladesh. 

- **Email**: tauhidhasan2017bd@gmail.com
- **GitHub**: [@Tauhid9](https://github.com/Tauhid9)
- **LinkedIn**: [@tauhid26](https://linkedin.com/in/tauhid26)

---

Built with ❤️ using Next.js and Tailwind CSS.
