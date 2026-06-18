# Portfolio Personalization Guide

## Your Personal Information Added

### Name
- **Full Name**: Tauhid Hasan Chowdhury
- **Location**: Updated in hero section
- Displayed prominently at the top of the portfolio hero section

## Skills & Expertise Added

### AI & Code Assistants (New Section)
Your expertise with modern AI tools has been highlighted as a dedicated skill category:
- **ChatGPT** - 90% proficiency
- **Claude (Anthropic)** - 88% proficiency
- **Gemini** - 85% proficiency
- **Codex (OpenAI)** - 87% proficiency
- **V0 (Vercel)** - 92% proficiency
- **AI-Assisted Development** - 90% proficiency

### Development Tools (New Section)
Your preferred development environment and tools are now showcased:
- **VS Code** - 95% proficiency (primary IDE)
- **Postman** - 88% proficiency (API testing)
- **PyCharm** - 82% proficiency (Python development)
- **Git & GitHub** - 92% proficiency
- **Docker** - 80% proficiency
- **DevTools** - 90% proficiency

### Updated Categories
- **Design & UI**: Reorganized to include User Research
- **Tools & Platforms**: Now includes Figma and npm Package Management

## How This Appears in Your Portfolio

### Hero Section
```
"Hello, I'm Tauhid Hasan Chowdhury"
Full-Stack Developer & UI/UX Enthusiast
```

### Skills Section
The skills page now displays 6 categories:
1. Frontend Development
2. Backend Development
3. AI & Code Assistants ⭐ (NEW)
4. Development Tools ⭐ (NEW)
5. Tools & Platforms
6. Design & UI

Each skill has a proficiency bar showing your expertise level.

## Updating More Information

To add or update other information in your portfolio:

### Profile Picture
Edit `/components/sections/hero.tsx` - Replace the emoji with your actual image

### Contact Information
Edit `/components/sections/contact.tsx` - Update email and phone

### Social Media Links
Edit `/components/sections/navigation.tsx` - Update GitHub, LinkedIn, Twitter URLs

### Experience & Education
Edit `/data/experience.ts` and `/data/education.ts` - Add your actual work and educational background

### Projects
Edit `/data/projects.ts` - Update with your actual projects and portfolio pieces

### Blog Posts
Edit `/data/blog.ts` - Add your technical articles and writings

## Quick Tips

- **AI Skills Prominence**: You can reorder skill categories by moving them in the array if you want AI skills more prominent
- **Proficiency Levels**: Update proficiency numbers (0-100) based on your actual expertise
- **Add More Skills**: Simply add new skill objects to any category array
- **Remove Skills**: Delete skill objects you don't want to display

## Building & Deploying

After making changes:
```bash
npm run dev      # Test locally
npm run build    # Build for production
```

Your portfolio is now production-ready with your personal information and expertise clearly displayed!
