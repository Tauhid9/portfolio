'use client'

import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/features/project-card'

export function Projects() {
  const featuredProjects = projects.filter(p => p.featured)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Selected Work</h2>
          <p className="text-lg text-foreground/60">
            Full-stack projects showcasing design, backend architecture, and production deployment.
          </p>
        </div>

        {/* Projects Grid - 2 col on desktop, 1 col on mobile */}
        <div className="space-y-12">
          {featuredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
