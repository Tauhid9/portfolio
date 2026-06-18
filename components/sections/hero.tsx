'use client'

import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Profile photo */}
        <div className="mb-8">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tauhid-VHHD493h1OfKcG0Gx2B7VzyvmOjBAa.jpg"
            alt="Tauhid Hasan Chowdhury"
            className="w-20 h-20 rounded-full object-cover border border-border"
          />
        </div>

        {/* Main heading and value prop */}
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground mb-4">
            Full-Stack Developer & Software Engineer
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed mb-4">
            I build production-ready web applications with Next.js, React, and Node.js. Focused on performance, clean code, and solving real problems for users.
          </p>
          <p className="text-base text-foreground/60">
            Currently at Loosely Coupled Technologies. Founder of THCNext IT Solution.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-12">
          <Button
            size="lg"
            asChild
            className="bg-foreground text-background hover:bg-foreground/90 font-medium"
          >
            <Link href="#projects">
              View My Work
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border border-border hover:bg-accent/5"
          >
            <Link href="/resume.pdf" download>
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Link>
          </Button>
        </div>

        {/* Key stats - simple and minimal */}
        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
          <div>
            <div className="text-3xl font-bold text-foreground mb-1">4+</div>
            <div className="text-sm text-foreground/60">Years building</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground mb-1">20+</div>
            <div className="text-sm text-foreground/60">Live projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground mb-1">10+</div>
            <div className="text-sm text-foreground/60">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  )
}
