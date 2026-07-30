import { Navigation } from '@/components/sections/navigation'
import { Hero } from '@/components/sections/hero'
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
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="bg-secondary border-t border-border py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground text-sm sm:text-base mb-3">Quick Links</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-foreground/70">
                <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
                <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
                <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground text-sm sm:text-base mb-3">Social</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-foreground/70">
                <li><a href="https://github.com/Tauhid9" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
                <li><a href="https://linkedin.com/in/tauhid26" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground text-sm sm:text-base mb-3">Contact</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-foreground/70">
                <li>Email: <a href="mailto:tauhidhasan2017bd@gmail.com" className="hover:text-primary transition-colors">tauhidhasan2017bd@gmail.com</a></li>
                <li>Phone: <a href="tel:+8801518972645" className="hover:text-primary transition-colors">+88 01518972645</a></li>
                <li>Location: Dhaka, Bangladesh</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-6 sm:pt-8 text-center text-foreground/60 text-xs sm:text-sm">
            <p>&copy; 2026 Tauhid Hasan Chowdhury. All rights reserved.</p>
            <p className="mt-2">Designed & Built with heart using Next.js, React & Tailwind CSS</p>
          </div>
        </div>
      </footer>
      <ScrollToTop />
      <FloatingWhatsApp />
    </>
  )
}
