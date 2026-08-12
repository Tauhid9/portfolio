'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, X, MessageCircle, Download } from 'lucide-react'
import { ThemeToggle } from '@/components/features/theme-toggle'
import { Magnetic } from '@/components/motion/magnetic'
import { navLinks, siteConfig, whatsappUrl } from '@/lib/site'

const EASE = [0.16, 1, 0.3, 1] as const

export function Navigation() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  // Hide on scroll down, reveal on scroll up — but never while the menu is open.
  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious() ?? 0
    setScrolled(current > 24)
    if (open) return
    setHidden(current > previous && current > 220)
  })

  // Track which section is in view for the nav indicator.
  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter((el): el is Element => Boolean(el))

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Lock body scroll behind the mobile sheet.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -120 : 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <nav
          aria-label="Primary"
          className={`mx-auto flex max-w-[88rem] items-center justify-between gap-4 rounded-full py-2.5 pl-3 pr-2.5 transition-shadow duration-500 sm:pl-5 sm:pr-3 ${
            scrolled ? 'glass-prism shadow-[var(--shadow-md)]' : 'glass-prism shadow-none'
          }`}
        >
          {/* Wordmark */}
          <Link href="#home" className="group flex items-center gap-2.5 rounded-full py-1 pr-2">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand via-brand-2 to-brand-3 text-[0.7rem] font-bold text-white">
              TH
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-ink sm:block">
              {siteConfig.shortName}
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    active === href ? 'text-ink' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {active === href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-ink/[0.06] dark:bg-white/10"
                      transition={{ duration: 0.35, ease: EASE }}
                    />
                  )}
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <Link
              href={siteConfig.cv}
              download
              className="hidden items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-ink transition-colors duration-300 hover:border-brand hover:text-brand md:inline-flex"
            >
              <Download className="h-4 w-4" />
              CV
            </Link>

            <ThemeToggle />

            <Magnetic clamp={8}>
              <Link
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-brand sm:inline-flex"
              >
                <MessageCircle className="h-4 w-4" />
                Start a project
              </Link>
            </Magnetic>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid h-10 w-10 place-items-center rounded-full text-ink transition-colors hover:bg-ink/[0.06] lg:hidden dark:hover:bg-white/10"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 bg-ink/20 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="glass-strong absolute inset-x-4 top-24 rounded-[2rem] p-6 shadow-[var(--shadow-lg)]"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <ul className="flex flex-col">
                {navLinks.map(({ label, href }, index) => (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.05, duration: 0.4, ease: EASE }}
                  >
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between border-b border-border py-4 text-lg font-medium text-ink"
                    >
                      {label}
                      <span className="font-mono text-xs text-ink-muted">
                        0{index + 1}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <Link
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-medium text-paper"
              >
                <MessageCircle className="h-4 w-4" />
                Start a project
              </Link>

              <Link
                href={siteConfig.cv}
                download
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-full border border-border px-6 py-4 text-sm font-medium text-ink"
              >
                <Download className="h-4 w-4" />
                Download CV
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
