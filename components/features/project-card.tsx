'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ExternalLink, Github, Maximize2, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProjectDetailsModal } from '@/components/modals/project-details-modal'
import { motion } from 'framer-motion'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  showCodeButton?: boolean
}

export function ProjectCard({ project, showCodeButton = true }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const images = project.images || [project.image]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const handleMouseEnter = () => {
    if (images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
      }, 2000)
    }
  }

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <>
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        <div className={`group h-full rounded-xl border bg-card overflow-hidden transition-all duration-300 relative ${
          project.featured
            ? 'border-primary shadow-2xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:border-primary'
            : 'border-border hover:shadow-xl hover:shadow-accent/10 hover:border-accent/50'
        }`}>
          {/* Glowing Top Border */}
          <div className={`absolute top-0 left-0 right-0 h-1 ${
            project.featured
              ? 'bg-gradient-to-r from-primary via-accent to-primary'
              : 'bg-gradient-to-r from-accent via-primary/50 to-accent'
          }`} />

          {/* Featured Ribbon */}
          {project.featured && (
            <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-bold rounded-full shadow-lg">
              <Star className="w-3 h-3 fill-current" />
              Featured
            </div>
          )}

          {/* Image Container with Auto-Rotate */}
          <div
            className="relative h-48 sm:h-56 overflow-hidden bg-accent"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={images[currentImageIndex]}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute top-3 right-3 px-2 py-1 text-xs bg-black/70 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                {currentImageIndex + 1}/{images.length}
              </div>
            )}

            {/* Quick Details Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="absolute bottom-3 right-3 p-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              aria-label="View details"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col h-full">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground line-clamp-2 mb-2">{project.title}</h3>
              <p className="text-xs sm:text-sm text-foreground/60 mb-3 line-clamp-2">{project.description}</p>

              {/* Impact Metric */}
              {project.impact && (
                <p className="text-xs sm:text-sm text-primary font-semibold mb-4 inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-full">
                  {project.impact}
                </p>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-muted text-foreground/70 border border-border">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-2 mt-auto">
              <Button
                size="sm"
                variant="outline"
                className="flex-1 text-xs sm:text-sm"
                onClick={() => setIsModalOpen(true)}
              >
                <Maximize2 className="w-4 h-4 mr-2" />
                Details
              </Button>
              {project.live && (
                <Button size="sm" asChild className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground text-xs sm:text-sm">
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <ProjectDetailsModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
