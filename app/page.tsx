import { Navigation } from '@/components/sections/navigation'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Projects } from '@/components/sections/projects'
import { Skills } from '@/components/sections/skills'
import { Experience } from '@/components/sections/experience'
import { Education } from '@/components/sections/education'
import { Contact } from '@/components/sections/contact'
import { ScrollToTop } from '@/components/features/scroll-to-top'
import { FloatingWhatsApp } from '@/components/features/floating-whatsapp'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-border/70 bg-secondary px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr_1fr]">
            <div>
              <p className="text-lg font-bold text-foreground">{'Tauhid Hasan Chowdhury'}</p>
              <p className="mt-2 text-sm font-medium text-primary">Full-Stack Developer</p>
              <p className="mt-4 max-w-md text-sm leading-6 text-foreground/65">
                Building production-ready web applications with modern frontend, backend, and product delivery workflows.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-bold text-foreground sm:text-base">Quick Links</h4>
              <ul className="space-y-2 text-xs text-foreground/70 sm:text-sm">
                <li><a href="#home" className="transition-colors hover:text-primary">Home</a></li>
                <li><a href="#about" className="transition-colors hover:text-primary">About</a></li>
                <li><a href="#projects" className="transition-colors hover:text-primary">Projects</a></li>
                <li><a href="#experience" className="transition-colors hover:text-primary">Experience</a></li>
                <li><a href="#skills" className="transition-colors hover:text-primary">Skills</a></li>
                <li><a href="#contact" className="transition-colors hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-bold text-foreground sm:text-base">Contact & Profiles</h4>
              <ul className="space-y-2 text-xs text-foreground/70 sm:text-sm">
                <li>Email: <a href="mailto:tauhidhasan2017bd@gmail.com" className="transition-colors hover:text-primary">tauhidhasan2017bd@gmail.com</a></li>
                <li>Phone: <a href="tel:+8801518972645" className="transition-colors hover:text-primary">+88 01518972645</a></li>
                <li>Location: Dhaka, Bangladesh</li>
                <li><a href="https://github.com/Tauhid9" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">GitHub</a></li>
                <li><a href="https://linkedin.com/in/tauhid26" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-6 text-center text-xs text-foreground/60 sm:pt-8 sm:text-sm">
            <p>&copy; 2026 Tauhid Hasan Chowdhury. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <ScrollToTop />
      <FloatingWhatsApp />
    </>
  )
}
