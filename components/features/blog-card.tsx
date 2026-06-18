'use client'

import { useState, useRef, useEffect } from 'react'
import { Maximize2 } from 'lucide-react'
import { BlogDetailsModal } from '@/components/modals/blog-details-modal'
import type { BlogPost } from '@/data/blog'

export function BlogCard({ post }: { post: BlogPost }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const images = post.images || [post.image]

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
      <article className="group rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300 hover:border-blue-500/50 flex flex-col h-full">
        {/* Image with Auto-Rotate */}
        <div
          className="relative h-48 overflow-hidden bg-accent"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={images[currentImageIndex]}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute top-3 right-3 px-2 py-1 text-xs bg-black/60 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {currentImageIndex + 1}/{images.length}
            </div>
          )}

          {/* Quick Details Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute bottom-3 right-3 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
            aria-label="Read full article"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Category & Date */}
          <div className="flex items-center justify-between gap-3 mb-3">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-foreground/60">{post.date}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-foreground/70 text-sm mb-4 flex-grow line-clamp-2">{post.excerpt}</p>

          {/* Meta */}
          <div className="flex items-center justify-between gap-3 pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <span className="text-xs text-foreground/60">{post.readTime} min read</span>
            </div>
            <div className="flex gap-1">
              {post.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-xs px-2 py-1 rounded bg-accent text-foreground/70">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            Read Article →
          </button>
        </div>
      </article>

      {/* Modal */}
      <BlogDetailsModal
        post={post}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
