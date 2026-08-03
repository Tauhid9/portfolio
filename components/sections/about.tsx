'use client'

import { motion } from 'framer-motion'

const aboutHighlights = [
  'Builds production-ready web applications with modern frontend and backend technologies.',
  'Works across admin systems, operational workflows, dashboards, and client-facing platforms.',
  'Combines implementation detail, UI clarity, and practical delivery for real-world products.',
]

export function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-[2rem] border border-border/70 bg-card/90 p-7 shadow-[0_18px_50px_-38px_rgba(15,23,42,0.45)]"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">About</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Full-stack development focused on real product delivery</h2>
          <p className="mt-5 text-sm leading-7 text-foreground/70 sm:text-base">
            I build web applications that support real operational work, from internal dashboards and admin flows to
            public-facing websites and data-driven product experiences. My recent work spans patient management,
            financial reporting, architecture studio websites, and business workflow platforms.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="grid gap-4"
        >
          {aboutHighlights.map((highlight) => (
            <div
              key={highlight}
              className="rounded-[1.75rem] border border-border/70 bg-card/95 p-5 shadow-[0_18px_50px_-40px_rgba(15,23,42,0.4)]"
            >
              <div className="flex items-start gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary" />
                <p className="text-sm leading-7 text-foreground/75 sm:text-base">{highlight}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
