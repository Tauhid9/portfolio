'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { BlogPost } from '@/data/blog'

interface BlogDetailsModalProps {
  post: BlogPost
  isOpen: boolean
  onClose: () => void
}

export function BlogDetailsModal({ post, isOpen, onClose }: BlogDetailsModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = post.images || [post.image]

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
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-background/95 backdrop-blur">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{post.title}</h2>
            <p className="text-sm text-foreground/60 mt-1">
              {post.date} • {post.readTime} min read
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative group">
              <img
                src={images[currentImageIndex]}
                alt={`${post.title} image ${currentImageIndex + 1}`}
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

          {/* Article Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-accent/50 rounded-lg">
            {/* Author */}
            <div>
              <h4 className="text-sm font-medium text-foreground/60 uppercase tracking-wide mb-1">Author</h4>
              <p className="text-foreground font-medium">{post.author}</p>
            </div>

            {/* Category */}
            <div>
              <h4 className="text-sm font-medium text-foreground/60 uppercase tracking-wide mb-1">Category</h4>
              <span className="inline-block px-3 py-1 text-sm bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full border border-blue-500/20">
                {post.category}
              </span>
            </div>

            {/* Date */}
            <div>
              <h4 className="text-sm font-medium text-foreground/60 uppercase tracking-wide mb-1">Published</h4>
              <p className="text-foreground font-medium">{post.date}</p>
            </div>
          </div>

          {/* Article Content */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Article</h3>
            <p className="text-foreground/70 leading-relaxed whitespace-pre-wrap">{post.content}</p>
          </div>

          {/* Tags */}
          <div>
            <h4 className="text-sm font-medium text-foreground/60 uppercase tracking-wide mb-3">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-accent text-foreground/70 rounded-full text-sm border border-border hover:border-blue-500/50 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="pt-4 border-t border-border">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12">
              Share Article
            </Button>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
