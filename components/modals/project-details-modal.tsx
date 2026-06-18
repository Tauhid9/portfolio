'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Github, ExternalLink, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Project } from '@/data/projects'

interface ProjectDetailsModalProps {
  project: Project
  isOpen: boolean
  onClose: () => void
}

export function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [viewMode, setViewMode] = useState<'overview' | 'code'>('overview')
  const images = project.images || [project.image]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/50" onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto">
        {/* Header */}
        <div className="sticky top-0 bg-background/95 backdrop-blur border-b border-border">
          <div className="flex items-center justify-between p-6 pb-0">
            <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-accent rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* View Mode Tabs */}
          <div className="flex gap-2 px-6 py-4 border-b border-border/50">
            <button
              onClick={() => setViewMode('overview')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'overview'
                  ? 'bg-primary/20 text-primary border border-primary/50'
                  : 'text-foreground/70 hover:text-foreground hover:bg-primary/5 border border-transparent'
              }`}
            >
              Overview
            </button>
            {project.github && (
              <button
                onClick={() => setViewMode('code')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  viewMode === 'code'
                    ? 'bg-primary/20 text-primary border border-primary/50'
                    : 'text-foreground/70 hover:text-foreground hover:bg-primary/5 border border-transparent'
                }`}
              >
                <Code2 className="w-4 h-4" />
                Code
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {viewMode === 'overview' ? (
            <>
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="relative group">
                  <img
                    src={images[currentImageIndex]}
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}
                </div>

                {/* Image Indicators */}
                {images.length > 1 && (
                  <div className="flex gap-2 justify-center">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-blue-600' : 'bg-border'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">About Project</h3>
                  <p className="text-foreground/70 leading-relaxed">{project.longDescription}</p>
                </div>

                {/* Details */}
                <div className="space-y-4">
                  {/* Category */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground/60 uppercase tracking-wide mb-2">Category</h4>
                    <p className="text-foreground font-medium">{project.category}</p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground/60 uppercase tracking-wide mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm border border-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4">
                    {project.github && (
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <Github className="w-4 h-4" />
                          View Code
                        </a>
                      </Button>
                    )}
                    {project.live && (
                      <Button
                        asChild
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="space-y-4">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Github className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Repository</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  View the complete source code on GitHub. Explore the implementation, contribute, or use it as a reference.
                </p>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Github className="w-4 h-4" />
                    View Repository on GitHub
                  </a>
                </Button>
              </div>
              
              {project.live && (
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <ExternalLink className="w-5 h-5 text-accent" />
                    <h3 className="text-lg font-semibold text-foreground">Live Demo</h3>
                  </div>
                  <p className="text-foreground/70 mb-4">
                    Experience the project live. Click below to visit the deployed application.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-accent hover:bg-accent/90"
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Visit Live Demo
                    </a>
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
        </div>
      </div>
    </>
  )
}
