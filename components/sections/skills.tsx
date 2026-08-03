'use client'

import { motion } from 'framer-motion'
import { skillsData } from '@/data/skills'
import { AIToolsBanner } from '@/components/features/ai-tools-banner'
import { SkillBadge } from '@/components/features/skill-badge'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
}

export function Skills() {
  const mainCategories = skillsData.filter((category) =>
    ['Frontend', 'Backend', 'Database', 'Testing & APIs'].includes(category.category),
  )
  const supportingCategories = skillsData.filter((category) =>
    ['Development Tools', 'Tools & Platforms', 'Design & UI'].includes(category.category),
  )
  const aiAssistedCategory = skillsData.find((category) => category.category === 'AI-Assisted Development')

  return (
    <section
      id="skills"
      className="bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.10),_transparent_32%),linear-gradient(to_bottom,_rgba(248,250,252,0.95),_rgba(241,245,249,0.88))] px-4 py-20 dark:bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_28%),linear-gradient(to_bottom,_rgba(15,23,42,0.82),_rgba(15,23,42,0.95))] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">Skills & Expertise</h2>
          <p className="mx-auto max-w-3xl text-base text-foreground/60 sm:text-lg">
            Core technologies I use to build, ship, and maintain production-ready web applications.
          </p>
        </motion.div>

        <div className="mb-16 grid grid-cols-1 gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            className="grid grid-cols-1 gap-6 lg:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {mainCategories.map((category) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" />
                <div className="p-6 sm:p-7">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">Core Category</p>
                      <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                      <p className="mt-3 text-sm leading-6 text-foreground/65">{category.description}</p>
                    </div>
                    <div className="rounded-2xl border border-primary/15 bg-primary/10 px-3 py-2 text-right">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-foreground/50">Stack</p>
                      <p className="text-lg font-bold text-primary">{category.skills.length}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <SkillBadge key={skill} name={skill} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl border border-white/60 bg-slate-950 text-white shadow-[0_24px_80px_-32px_rgba(15,23,42,0.65)] dark:border-white/10"
          >
            <div className="bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.24),_transparent_38%)] p-7 sm:p-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80">Working Style</p>
              <h3 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">
                Full-stack delivery with equal focus on implementation quality and product usability.
              </h3>
              <p className="mb-8 text-sm leading-7 text-white/70 sm:text-base">
                My strongest work sits at the intersection of product thinking, frontend clarity, and reliable backend execution. I focus on systems that are easier to use, maintain, and extend.
              </p>

              <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { value: '2024', label: 'Business Started' },
                  { value: '2', label: 'Key Clients' },
                  { value: '3', label: 'Core Client Projects' },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5">
                    <p className="mb-1 text-2xl font-bold text-white">{item.value}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {[
                  'Frontend delivery with React, Next.js, and responsive UI systems',
                  'Backend work spanning Node.js, Python, databases, and API integration',
                  'Production-minded delivery for internal tools, dashboards, and client platforms',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                    <p className="text-sm text-white/80">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">Supporting Capabilities</p>
          <h3 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">
            Development workflow, tooling, platform delivery, and UI support skills
          </h3>
          <p className="mx-auto max-w-3xl text-sm text-foreground/60 sm:text-base">
            Supporting skills that help me move from implementation to deployment with cleaner UI, stronger handoff, and more reliable delivery.
          </p>
        </motion.div>

        <div className="mb-16 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {supportingCategories.map((category) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-border/70 bg-card/95 p-6 shadow-[0_18px_50px_-36px_rgba(15,23,42,0.5)] backdrop-blur-sm"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">Category</p>
                  <h3 className="text-xl font-bold leading-snug text-foreground">{category.category}</h3>
                  <p className="mt-3 text-sm leading-6 text-foreground/62">{category.description}</p>
                </div>
                <span className="rounded-2xl border border-primary/15 bg-primary/10 px-3 py-2 text-sm font-bold text-primary">
                  {category.skills.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <motion.div key={skill} whileHover={{ scale: 1.04 }}>
                    <SkillBadge name={skill} tone="subtle" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {aiAssistedCategory && <AIToolsBanner />}
      </div>
    </section>
  )
}
