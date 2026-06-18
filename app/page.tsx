import { Navigation } from '@/components/sections/navigation'
import { Hero } from '@/components/sections/hero'
import { Projects } from '@/components/sections/projects'
import { Experience } from '@/components/sections/experience'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-border/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Navigate</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#projects" className="hover:text-foreground transition-colors">Work</a></li>
                <li><a href="#experience" className="hover:text-foreground transition-colors">Experience</a></li>
                <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Connect</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="https://github.com/Tauhid9" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a></li>
                <li><a href="https://linkedin.com/in/tauhid26" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Get in Touch</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="mailto:tauhidhasan2017bd@gmail.com" className="hover:text-foreground transition-colors">Email</a></li>
                <li><a href="tel:+8801518972645" className="hover:text-foreground transition-colors">+88 01518972645</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/30 pt-8 text-center text-foreground/50 text-sm">
            <p>&copy; 2026 Tauhid Hasan Chowdhury</p>
          </div>
        </div>
      </footer>
    </>
  )
}
