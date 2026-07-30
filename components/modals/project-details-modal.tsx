'use client'

import { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight, Github, ExternalLink, Code2, Layers3, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Project } from '@/data/projects'
import { cn } from '@/lib/utils'
import {
  getProjectImageTheme,
  getProjectScreenshotMeta,
  isProjectPortraitScreenshot,
  isProjectScreenshot,
} from '@/lib/project-gallery'

interface ProjectDetailsModalProps {
  project: Project
  isOpen: boolean
  onClose: () => void
}

const SHOWCASE_THEMES = {
  app: {
    shell: 'bg-[linear-gradient(135deg,#eef6ff_0%,#fbfdff_48%,#e7f0fb_100%)]',
    glow: 'bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.16),transparent_42%)]',
  },
  commerce: {
    shell: 'bg-[linear-gradient(135deg,#fff7d1_0%,#fffdf2_46%,#ffe8a3_100%)]',
    glow: 'bg-[radial-gradient(circle_at_top_left,rgba(255,193,7,0.22),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.18),transparent_42%)]',
  },
  studio: {
    shell: 'bg-[linear-gradient(135deg,#f8f4ee_0%,#f5efe6_46%,#ece2d6_100%)]',
    glow: 'bg-[radial-gradient(circle_at_top_left,rgba(180,120,60,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(120,98,80,0.16),transparent_42%)]',
  },
  default: {
    shell: 'bg-[linear-gradient(135deg,#eef6ff_0%,#fbfdff_48%,#e7f0fb_100%)]',
    glow: 'bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.16),transparent_42%)]',
  },
} as const

export function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [viewMode, setViewMode] = useState<'overview' | 'code'>('overview')
  const [imageSrc, setImageSrc] = useState(project.image)
  const placeholderSrc = '/projects/project-placeholder.svg'

  const images = (project.images?.filter(Boolean).length ? project.images.filter(Boolean) : [project.image]).filter(Boolean)
  const currentImage = images[currentImageIndex] ?? images[0] ?? project.image
  const activeImage = imageSrc || placeholderSrc
  const usesScreenshotGallery = isProjectScreenshot(activeImage)
  const imageMeta = getProjectScreenshotMeta(activeImage, project.title)
  const imageTheme = getProjectImageTheme(activeImage)
  const showcaseTheme = SHOWCASE_THEMES[imageTheme as keyof typeof SHOWCASE_THEMES] ?? SHOWCASE_THEMES.default
  const isPortraitImage = isProjectPortraitScreenshot(activeImage)
  const hasGithub = Boolean(project.github)
  const hasLive = Boolean(project.live)

  const detailCards = [
    { label: 'Category', value: project.category },
    { label: 'Gallery', value: `${images.length} ${images.length === 1 ? 'screen' : 'screens'}` },
    { label: 'Stack', value: `${project.technologies.length} technologies` },
    { label: 'Access', value: hasLive ? 'Live demo' : hasGithub ? 'Repository' : 'Private build' },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0)
      setViewMode('overview')
    }
  }, [isOpen, project.id])

  useEffect(() => {
    if (currentImageIndex >= images.length) {
      setCurrentImageIndex(0)
    }
  }, [currentImageIndex, images.length, project.id])

  useEffect(() => {
    setImageSrc(currentImage || placeholderSrc)
  }, [currentImage, placeholderSrc])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-slate-950/72 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      <div className="fixed inset-0 z-50 overflow-y-auto p-3 sm:p-6">
        <div className="mx-auto flex min-h-full max-w-7xl items-start justify-center py-2 sm:py-6">
          <div className="pointer-events-auto w-full overflow-hidden rounded-[2rem] border border-white/10 bg-background shadow-[0_35px_120px_-40px_rgba(15,23,42,0.78)] animate-scale-in">
            <div className="relative border-b border-border/80">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,212,255,0.14),transparent_34%),radial-gradient(circle_at_top_right,rgba(124,58,237,0.12),transparent_32%)]" />

              <div className="relative flex flex-col gap-5 p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1 space-y-4 pr-2 sm:pr-6">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        {project.category}
                      </span>
                      <span className="rounded-full border border-border/70 bg-card/80 px-3 py-1 text-xs font-medium text-foreground/65">
                        {images.length} {images.length === 1 ? 'screen' : 'screens'}
                      </span>
                      {project.impact && (
                        <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                          {project.impact}
                        </span>
                      )}
                    </div>

                    <div className="max-w-[60rem]">
                      <h2 className="break-words pb-1 text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-foreground">
                        {project.title}
                      </h2>
                      <p className="mt-3 max-w-[52rem] text-sm leading-7 text-foreground/70 sm:text-base">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={onClose}
                    className="shrink-0 rounded-2xl border border-border/70 bg-card/80 p-3 text-foreground/70 transition-colors hover:bg-accent/10 hover:text-foreground"
                    aria-label="Close modal"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
                  <div className="space-y-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/45">
                      Technology Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {hasGithub && (
                      <Button asChild size="sm" variant="outline" className="rounded-full">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    )}
                    {hasLive && (
                      <Button asChild size="sm" className="rounded-full bg-primary hover:bg-primary/90">
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setViewMode('overview')}
                      className={cn(
                        'rounded-full px-4 py-2 text-sm font-medium transition-all',
                        viewMode === 'overview'
                          ? 'bg-foreground text-background shadow-lg shadow-foreground/10'
                          : 'border border-border/70 bg-card/70 text-foreground/70 hover:text-foreground'
                      )}
                    >
                      Project Overview
                    </button>
                    {hasGithub && (
                      <button
                        onClick={() => setViewMode('code')}
                        className={cn(
                          'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all',
                          viewMode === 'code'
                            ? 'bg-foreground text-background shadow-lg shadow-foreground/10'
                            : 'border border-border/70 bg-card/70 text-foreground/70 hover:text-foreground'
                        )}
                      >
                        <Code2 className="h-4 w-4" />
                        Source & Links
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div>
              {viewMode === 'overview' ? (
                <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[minmax(0,1.45fr)_360px]">
                  <section className="min-w-0 space-y-4">
                    <div
                      className={cn(
                        'overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_26px_90px_-48px_rgba(15,23,42,0.55)]',
                        usesScreenshotGallery && showcaseTheme.shell
                      )}
                    >
                      <div className="flex items-center justify-between border-b border-white/50 px-4 py-3 sm:px-5">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1.5">
                            <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                          </div>

                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/45">
                              {usesScreenshotGallery ? imageMeta.eyebrow : 'Gallery Preview'}
                            </p>
                            <h3 className="text-sm font-semibold text-foreground sm:text-base">
                              {usesScreenshotGallery ? imageMeta.label : project.title}
                            </h3>
                          </div>
                        </div>

                        <div className="rounded-full border border-white/70 bg-white/85 px-3 py-1 text-sm font-medium text-slate-600 shadow-sm">
                          {currentImageIndex + 1} / {images.length}
                        </div>
                      </div>

                      <div className="p-3 sm:p-4">
                        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/92">
                          {usesScreenshotGallery && (
                            <div className={cn('absolute inset-0 opacity-95', showcaseTheme.glow)} />
                          )}

                          <div
                            className={cn(
                              'relative flex min-h-[320px] items-center justify-center p-4 sm:min-h-[520px] sm:p-6',
                              usesScreenshotGallery ? 'bg-[linear-gradient(180deg,#ffffff_0%,#f7fafc_100%)]' : 'bg-card'
                            )}
                          >
                            {usesScreenshotGallery && isPortraitImage && (
                              <img
                                src={activeImage}
                                alt=""
                                aria-hidden="true"
                                className="absolute inset-0 h-full w-full scale-110 object-cover blur-3xl opacity-20"
                              />
                            )}

                            <div
                              className={cn(
                                'relative w-full',
                                usesScreenshotGallery
                                  ? isPortraitImage
                                    ? 'mx-auto max-w-[42%]'
                                    : 'max-w-full'
                                  : 'h-full'
                              )}
                            >
                              <img
                                src={activeImage}
                                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                                onError={() => setImageSrc(placeholderSrc)}
                                className={cn(
                                  'w-full rounded-[1.1rem]',
                                  usesScreenshotGallery
                                    ? 'object-contain object-top shadow-[0_28px_55px_rgba(15,23,42,0.14)]'
                                    : 'h-full object-cover'
                                )}
                              />
                            </div>

                            {images.length > 1 && (
                              <>
                                <button
                                  onClick={prevImage}
                                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-white/95 p-2.5 text-slate-700 shadow-lg transition-all hover:scale-105 hover:bg-white"
                                  aria-label="Previous image"
                                >
                                  <ChevronLeft className="h-5 w-5" />
                                </button>
                                <button
                                  onClick={nextImage}
                                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-white/95 p-2.5 text-slate-700 shadow-lg transition-all hover:scale-105 hover:bg-white"
                                  aria-label="Next image"
                                >
                                  <ChevronRight className="h-5 w-5" />
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                  </section>

                  <aside className="space-y-4 lg:sticky lg:top-4 lg:self-start">
                    <div className="rounded-[1.75rem] border border-border/70 bg-card p-5 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Sparkles className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/45">
                            Project Story
                          </p>
                          <h3 className="text-lg font-semibold text-foreground">What this build delivers</h3>
                        </div>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-foreground/70">
                        {project.longDescription}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {detailCards.map((item) => (
                        <div
                          key={item.label}
                          className="rounded-[1.35rem] border border-border/70 bg-card p-4 shadow-sm"
                        >
                          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/45">
                            {item.label}
                          </p>
                          <p className="mt-2 text-sm font-semibold leading-6 text-foreground">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-[1.75rem] border border-border/70 bg-card p-5 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                          <Layers3 className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/45">
                            Current View
                          </p>
                          <h3 className="text-lg font-semibold text-foreground">
                            {usesScreenshotGallery ? imageMeta.label : `Gallery Image ${currentImageIndex + 1}`}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-foreground/70">
                        {usesScreenshotGallery
                          ? `${imageMeta.eyebrow} screen selected from the project walkthrough. Use the navigation arrows to move across the most important product moments.`
                          : 'Selected gallery visual from the project showcase.'}
                      </p>
                    </div>
                  </aside>
                </div>
              ) : (
                <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[minmax(0,1.15fr)_360px]">
                  <div className="rounded-[2rem] border border-border/70 bg-card p-6 shadow-sm sm:p-7">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Code2 className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/45">
                          Source Access
                        </p>
                        <h3 className="text-2xl font-semibold text-foreground">
                          Repository and delivery links
                        </h3>
                      </div>
                    </div>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-foreground/70">
                      Review the implementation references, inspect the codebase, and jump straight into the live experience from one clean workspace.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {hasGithub && (
                        <Button asChild className="h-12 rounded-2xl bg-foreground text-background hover:bg-foreground/90">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                            View Repository
                          </a>
                        </Button>
                      )}

                      {hasLive && (
                        <Button asChild variant="outline" className="h-12 rounded-2xl">
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            Open Live Demo
                          </a>
                        </Button>
                      )}
                    </div>

                    <div className="mt-6 rounded-[1.5rem] border border-border/70 bg-muted/30 p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/45">
                        Tech Stack
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <aside className="space-y-4">
                    <div className="rounded-[1.75rem] border border-border/70 bg-card p-5 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                          <Sparkles className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/45">
                            Project Summary
                          </p>
                          <h3 className="text-lg font-semibold text-foreground">Quick context</h3>
                        </div>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-foreground/70">
                        {project.longDescription}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {detailCards.map((item) => (
                        <div
                          key={item.label}
                          className="rounded-[1.35rem] border border-border/70 bg-card p-4 shadow-sm"
                        >
                          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/45">
                            {item.label}
                          </p>
                          <p className="mt-2 text-sm font-semibold leading-6 text-foreground">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-[1.75rem] border border-border/70 bg-card p-5 shadow-sm">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/45">
                        Available Destinations
                      </p>

                      <div className="mt-4 space-y-3">
                        <div className="rounded-2xl border border-border/70 bg-muted/20 px-4 py-3">
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <p className="text-sm font-semibold text-foreground">Repository</p>
                              <p className="text-sm text-foreground/60">
                                {hasGithub ? 'Source code available for review.' : 'Public repository not attached.'}
                              </p>
                            </div>
                            <Github className="h-5 w-5 text-foreground/45" />
                          </div>
                        </div>

                        <div className="rounded-2xl border border-border/70 bg-muted/20 px-4 py-3">
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <p className="text-sm font-semibold text-foreground">Live Experience</p>
                              <p className="text-sm text-foreground/60">
                                {hasLive ? 'Deployment link available for preview.' : 'Live deployment link not attached.'}
                              </p>
                            </div>
                            <ExternalLink className="h-5 w-5 text-foreground/45" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
