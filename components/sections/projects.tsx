'use client'

import { useState } from 'react'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/features/project-card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function Projects() {
  const [showAll, setShowAll] = useState(false)
  const topProjects = projects.slice(0, 3)
  const remainingProjects = projects.slice(3)
  const hasMoreProjects = projects.length > 3
  const displayedProjects = showAll ? projects : topProjects

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto">
            Showcase of my recent work and technical expertise across various domains
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {displayedProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              showCodeButton={!showAll}
            />
          ))}
        </motion.div>

        {/* View More CTA */}
        {hasMoreProjects && !showAll && (
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              onClick={() => setShowAll(true)}
              className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 text-primary-foreground font-semibold px-8"
            >
              View All {projects.length} Projects
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
