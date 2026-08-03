'use client'

import { useState, useRef, useEffect, type KeyboardEvent, type MouseEvent } from 'react'
import Link from 'next/link'
import { ExternalLink, Maximize2, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProjectDetailsModal } from '@/components/modals/project-details-modal'
import { motion } from 'framer-motion'
import type { Project } from '@/data/projects'
import { cn } from '@/lib/utils'
import {
  isProjectPortraitScreenshot,
  isProjectScreenshot,
} from '@/lib/project-gallery'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageSrc, setImageSrc] = useState(project.image)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const placeholderSrc = '/projects/project-placeholder.svg'

  const images = (project.images?.filter(Boolean).length ? project.images.filter(Boolean) : [project.image]).filter(Boolean)
  const currentImage = images[currentImageIndex] ?? images[0] ?? project.image
  const activeImage = imageSrc || placeholderSrc
  const isScreenshotImage = isProjectScreenshot(activeImage)
  const isPortraitImage = isProjectPortraitScreenshot(activeImage)

  const openDetails = () => {
    setIsModalOpen(true)
  }

  const handleCardClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement

    if (target.closest('a, button')) {
      return
    }

    openDetails()
  }

  const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return
    }

    event.preventDefault()
    openDetails()
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
    if (currentImageIndex >= images.length) {
      setCurrentImageIndex(0)
    }
  }, [currentImageIndex, images.length, project.id])

  useEffect(() => {
    setImageSrc(currentImage || placeholderSrc)
  }, [currentImage, placeholderSrc])

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
        <div
          role="button"
          tabIndex={0}
          onClick={handleCardClick}
          onKeyDown={handleCardKeyDown}
          aria-label={`Open details for ${project.title}`}
          className={`group relative h-full cursor-pointer overflow-hidden rounded-xl border bg-card transition-all duration-300 ${
          project.featured
            ? 'border-primary shadow-2xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:border-primary'
            : 'border-border hover:shadow-xl hover:shadow-accent/10 hover:border-accent/50'
        }`}
        >
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
            className="relative h-48 overflow-hidden bg-accent sm:h-56"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isScreenshotImage && isPortraitImage && (
              <img
                src={activeImage}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl opacity-25"
              />
            )}

            <img
              src={activeImage}
              alt={project.title}
              onError={() => setImageSrc(placeholderSrc)}
              className={cn(
                'relative h-full w-full transition-transform duration-500 group-hover:scale-110',
                isScreenshotImage
                  ? isPortraitImage
                    ? 'object-contain object-top p-4 sm:p-5'
                    : 'object-cover object-top'
                  : 'object-cover'
              )}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Image Counter */}
            {images.length > 1 && (
              <div
                className={cn(
                  'absolute top-3 right-3 rounded-lg px-2 py-1 text-xs transition-opacity',
                  isScreenshotImage
                    ? 'bg-white/95 text-slate-700 shadow-sm opacity-100'
                    : 'bg-black/70 text-white opacity-0 group-hover:opacity-100'
                )}
              >
                {currentImageIndex + 1}/{images.length}
              </div>
            )}

            {/* Quick Details Button */}
            <button
              onClick={openDetails}
              className="absolute bottom-3 right-3 p-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              aria-label="View details"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col h-full">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                {project.client && (
                  <span className="inline-flex rounded-full border border-border/70 bg-muted px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/60">
                    {project.client}
                  </span>
                )}
                <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  {project.category}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-foreground line-clamp-2 mb-2">{project.title}</h3>
              <p className="text-xs sm:text-sm text-foreground/60 mb-3 line-clamp-3">{project.description}</p>

              {project.contribution && (
                <p className="mb-4 rounded-2xl border border-border/60 bg-muted/40 px-4 py-3 text-xs leading-6 text-foreground/70 sm:text-sm">
                  <span className="font-semibold text-foreground">Contribution:</span> {project.contribution}
                </p>
              )}

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
                onClick={openDetails}
              >
                <Maximize2 className="w-4 h-4 mr-2" />
                Details
              </Button>
              {project.live && (
                <Button size="sm" asChild className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground text-xs sm:text-sm">
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
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
