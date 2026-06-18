'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProjectDetailsModal } from '@/components/modals/project-details-modal'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start py-8 border-b border-border/50 last:border-b-0">
        {/* Image */}
        <div className="aspect-video bg-foreground/5 rounded-lg overflow-hidden order-2 md:order-1">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between order-1 md:order-2">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
            <p className="text-base text-foreground/70 mb-4 leading-relaxed">
              {project.longDescription}
            </p>

            {/* Impact */}
            {project.impact && (
              <div className="mb-4 pb-4 border-b border-border/30">
                <p className="text-sm font-medium text-foreground/60 mb-1">Impact</p>
                <p className="text-base text-foreground">{project.impact}</p>
              </div>
            )}

            {/* Technologies */}
            <div className="mb-6">
              <p className="text-sm font-medium text-foreground/60 mb-2">Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-foreground/5 text-foreground border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 flex-col sm:flex-row">
            {project.live && (
              <Button
                asChild
                className="flex items-center gap-2 bg-foreground text-background hover:bg-foreground/90"
              >
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  View Live
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Button>
            )}
            {project.github && (
              <Button
                asChild
                variant="outline"
                className="flex items-center gap-2"
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </Button>
            )}
            <Button
              variant="outline"
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2"
            >
              More Details
            </Button>
          </div>
        </div>
      </div>

      <ProjectDetailsModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
