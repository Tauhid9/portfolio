'use client'

import Link from 'next/link'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { AuroraField } from '@/components/webgl/aurora-field'
import { HeroPortrait } from '@/components/sections/hero-portrait'
import { Magnetic } from '@/components/motion/magnetic'
import { siteConfig, whatsappUrl } from '@/lib/site'

const EASE = [0.16, 1, 0.3, 1] as const

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
}

const rise: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
}

const stackLine = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'APIs',
  'Databases',
]

export function Hero() {
  const reduced = useReducedMotion()

  return (
    <section
      id="home"
      className="grain relative isolate flex min-h-[100svh] w-full flex-col justify-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-36"
    >
      {/* Atmospheric background */}
      <AuroraField className="absolute inset-0 -z-20 h-full w-full" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-paper to-transparent" />

      {/* Copy carries the column now that the portrait is smaller. */}
      <div className="mx-auto grid w-full max-w-[88rem] items-center gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-10">
        {/* ---------------------------------------------------------- copy */}
        <motion.div variants={container} initial="hidden" animate="visible" className="order-2 lg:order-1">
          <motion.div variants={rise} className="mb-7 inline-flex items-center gap-2.5">
            <span className="glass-prism inline-flex items-center gap-2.5 rounded-full py-2 pl-3 pr-4">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-3 opacity-70 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-3" />
              </span>
              <span className="eyebrow !text-ink">{siteConfig.availability}</span>
            </span>
          </motion.div>

          <h1 className="headline text-[clamp(2.6rem,7.2vw,5.6rem)] text-ink">
            <motion.span variants={rise} className="block">
              Founders bring
            </motion.span>
            <motion.span variants={rise} className="block text-ink-muted">
              the ambition.
            </motion.span>
            <motion.span variants={rise} className="mt-2 block">
              I build the products that{' '}
              <em className="text-gradient font-normal italic">live up to it.</em>
            </motion.span>
          </h1>

          <motion.p
            variants={rise}
            className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-ink-muted sm:text-xl"
          >
            From the first product flow to full-scale launch, I turn ambitious ideas and complex
            business requirements into fast, reliable, production-ready web applications.
          </motion.p>

          <motion.p variants={rise} className="mt-5 max-w-xl text-sm leading-relaxed text-ink-muted">
            Frontend. Backend. Data. Integrations. Deployment.{' '}
            <span className="font-medium text-ink">Built together as one complete product.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div variants={rise} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Magnetic>
              <Link
                href="#work"
                className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-ink px-7 py-4 text-sm font-medium text-paper shadow-[var(--shadow-md)] transition-shadow duration-300 hover:shadow-[var(--shadow-glow)] sm:w-auto"
              >
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-brand via-brand-2 to-brand-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                Explore my work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Magnetic>

            <Magnetic>
              <Link
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-prism group inline-flex w-full items-center justify-center gap-2.5 rounded-full px-7 py-4 text-sm font-medium text-ink transition-colors duration-300 hover:bg-[var(--glass-bg-strong)] sm:w-auto"
              >
                Build with me
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Magnetic>
          </motion.div>

          {/* Stack line */}
          <motion.div variants={rise} className="mt-12">
            <p className="eyebrow mb-3">Full-stack product development</p>
            <ul className="flex flex-wrap items-center gap-x-2.5 gap-y-2">
              {stackLine.map((tech, index) => (
                <li key={tech} className="flex items-center gap-2.5">
                  <span className="text-sm font-medium text-ink/75">{tech}</span>
                  {index < stackLine.length - 1 && (
                    <span aria-hidden className="text-ink-muted/40">
                      ·
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* ------------------------------------------------------- portrait */}
        <div className="order-1 lg:order-2">
          <HeroPortrait />
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="mx-auto mt-14 hidden w-full max-w-[88rem] lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <Link
          href="#work"
          className="group inline-flex items-center gap-3 text-ink-muted transition-colors hover:text-ink"
        >
          <span className="glass-prism grid h-10 w-10 place-items-center rounded-full">
            <motion.span
              animate={reduced ? undefined : { y: [0, 4, 0] }}
              transition={reduced ? undefined : { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="h-4 w-4" />
            </motion.span>
          </span>
          <span className="eyebrow group-hover:text-ink">Scroll to see the work</span>
        </Link>
      </motion.div>
    </section>
  )
}
