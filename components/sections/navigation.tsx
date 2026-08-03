'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/features/theme-toggle'
import { ScrollProgressBar } from '@/components/features/scroll-progress-bar'
import { useActiveSection } from '@/hooks/use-active-section'
import { siteConfig } from '@/lib/site'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const activeSection = useActiveSection()

  return (
    <>
      <ScrollProgressBar />
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-xl">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex h-14 items-center justify-between sm:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0 transition-opacity hover:opacity-90">
              <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-[0_12px_30px_-18px_rgba(0,212,255,0.7)] ring-1 ring-white/50">
                <Image
                  src={siteConfig.profileImage}
                  alt={siteConfig.name}
                  fill
                  sizes="40px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="hidden min-w-0 sm:flex sm:flex-col sm:leading-tight">
                <span className="truncate text-sm font-bold text-foreground lg:text-base">{siteConfig.shortName}</span>
                <span className="truncate text-[11px] font-medium text-foreground/55 lg:text-xs">Full-Stack Developer</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1)
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 text-xs sm:text-sm font-medium transition-all rounded-md ${
                      isActive
                        ? 'text-primary bg-primary/10 border-b-2 border-primary'
                        : 'text-foreground/70 hover:text-foreground hover:bg-primary/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>

          {/* Social Links & Mobile Menu */}
          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeToggle />
            <div className="hidden md:flex items-center gap-1">
              <Button variant="ghost" size="icon" className="w-8 h-8 sm:w-10 sm:h-10" asChild>
                <Link href="https://github.com/Tauhid9" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <Github className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8 sm:w-10 sm:h-10" asChild>
                <Link href="https://linkedin.com/in/tauhid26" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:bg-accent lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-border/50 bg-background/90 backdrop-blur-md lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1)
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all ${
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground/80 hover:text-foreground hover:bg-primary/5'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              })}
              <div className="pt-2 flex gap-2 px-3">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/Tauhid9" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://linkedin.com/in/tauhid26" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      </nav>
    </>
  )
}
