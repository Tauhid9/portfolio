'use client'

import { useState } from 'react'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/features/project-card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function Projects() {
  const priorityProjectIds = [1, 4, 3]
  const primaryProjects = priorityProjectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is NonNullable<typeof project> => Boolean(project))
  const secondaryProjects = projects.filter((project) => !priorityProjectIds.includes(project.id))
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? [...primaryProjects, ...secondaryProjects] : primaryProjects
  const hasMoreProjects = secondaryProjects.length > 3

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">Projects</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto">
            Showcase of my recent work and technical expertise across various domains
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {hasMoreProjects && !showAll && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Button
              size="lg"
              onClick={() => setShowAll(true)}
              className="border-0 bg-gradient-to-r from-sky-400 via-cyan-400 to-violet-600 px-8 font-semibold text-slate-950 shadow-[0_18px_40px_-20px_rgba(99,102,241,0.65)] transition-all hover:scale-[1.02] hover:from-sky-500 hover:via-cyan-500 hover:to-violet-700 hover:text-slate-950 sm:w-auto"
            >
              View All {projects.length} Projects
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
