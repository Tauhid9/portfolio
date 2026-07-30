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
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function Skills() {
  const visibleCategories = skillsData.filter((category) => category.category !== 'AI & Code Assistants')
  const primaryCategories = visibleCategories.slice(0, 2)
  const supportingCategories = visibleCategories.filter((category) =>
    ['Development Tools', 'Tools & Platforms', 'Design & UI'].includes(category.category),
  )

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.10),_transparent_32%),linear-gradient(to_bottom,_rgba(248,250,252,0.95),_rgba(241,245,249,0.88))] dark:bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_28%),linear-gradient(to_bottom,_rgba(15,23,42,0.82),_rgba(15,23,42,0.95))]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-base sm:text-lg text-foreground/60 max-w-3xl mx-auto">
            A balanced toolkit across product design, frontend craft, backend systems, and practical delivery workflows
          </p>
        </motion.div>

        <AIToolsBanner />

        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-8 mb-16">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {primaryCategories.map((category, index) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="relative overflow-hidden rounded-3xl border border-white/60 dark:border-white/10 bg-white/80 dark:bg-slate-900/70 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] backdrop-blur-xl"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" />
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70 mb-3">
                        {index === 0 ? 'Core Stack' : 'Engineering Focus'}
                      </p>
                      <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                    </div>
                    <div className="rounded-2xl border border-primary/15 bg-primary/10 px-3 py-2 text-right">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-foreground/50">Coverage</p>
                      <p className="text-lg font-bold text-primary">{category.skills.length} skills</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <SkillBadge key={skill.name} name={skill.name} proficiency={skill.proficiency} />
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
            className="rounded-3xl border border-white/60 dark:border-white/10 bg-slate-950 text-white shadow-[0_24px_80px_-32px_rgba(15,23,42,0.65)] overflow-hidden"
          >
            <div className="p-7 sm:p-8 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.24),_transparent_38%)]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80 mb-4">How I Work</p>
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-4">
                I blend code quality, delivery speed, and UI clarity into one workflow.
              </h3>
              <p className="text-sm sm:text-base text-white/70 leading-7 mb-8">
                My strongest work happens where product thinking meets implementation detail: translating ideas into
                fast, maintainable interfaces and dependable backend systems.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { value: '6', label: 'Core Domains' },
                  { value: '40+', label: 'Tools Used' },
                  { value: '90%+', label: 'Top Proficiency' },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5">
                    <p className="text-2xl font-bold text-white mb-1">{item.value}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {[
                  'Design systems with responsive and accessible UI patterns',
                  'Modern React and Next.js application architecture',
                  'API design, databases, and reliable shipping workflows',
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
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70 mb-3">Supporting Capabilities</p>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Development workflow, tooling, platform delivery, and UI systems
          </h3>
          <p className="text-sm sm:text-base text-foreground/60 max-w-3xl mx-auto">
            These are the areas that help me ship polished products end-to-end, not just isolated screens or features.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-16">
          {supportingCategories.map((category) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-border/70 bg-card/95 backdrop-blur-sm p-6 shadow-[0_18px_50px_-36px_rgba(15,23,42,0.5)]"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70 mb-2">Category</p>
                  <h3 className="text-xl font-bold text-foreground leading-snug">{category.category}</h3>
                </div>
                <span className="rounded-2xl border border-primary/15 bg-primary/10 px-3 py-2 text-sm font-bold text-primary">
                  {category.skills.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.04 }}
                    className="rounded-full border border-primary/15 bg-primary/10 px-3 py-2 text-sm font-medium text-foreground/85 transition-colors hover:border-primary/35 hover:bg-primary/15"
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { value: '15+', label: 'Technologies' },
            { value: '100%', label: 'Quality Focus' },
            { value: '3+', label: 'Years Exp.' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 sm:p-8 rounded-3xl bg-card/90 border border-border/70 hover:border-primary/40 text-center group transition-all duration-300 shadow-[0_18px_50px_-38px_rgba(15,23,42,0.55)]"
              whileHover={{ y: -4 }}
            >
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </p>
              <p className="text-sm sm:text-base text-foreground/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
