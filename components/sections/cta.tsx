'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-blue-600/10 border-y border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Stay Updated</h2>
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          Subscribe to my newsletter for the latest articles, project updates, and insights on web development.
        </p>

        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">
            Subscribe
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </form>

        <p className="text-xs text-foreground/60 mt-4">
          No spam, unsubscribe at any time. I respect your privacy.
        </p>
      </div>
    </section>
  )
}
