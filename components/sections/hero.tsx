'use client'

import Link from 'next/link'
import { ArrowRight, Download, ChevronDown, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Typewriter } from '@/components/features/typewriter'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export function Hero() {
  return (
    <section id="about" className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-blue-50/30 to-purple-50/20 dark:from-background dark:via-blue-950/20 dark:to-purple-950/10" />
      
      {/* Animated background circles */}
      <motion.div
        className="absolute top-20 -right-40 w-80 h-80 bg-cyan-200/20 dark:bg-cyan-900/10 rounded-full blur-3xl -z-10"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -left-40 w-96 h-96 bg-violet-200/20 dark:bg-violet-900/10 rounded-full blur-3xl -z-10"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="max-w-4xl mx-auto w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Available for hire badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-green-700 dark:text-green-300">Available for hire</span>
        </motion.div>

        {/* Profile image and name section */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex flex-col items-center"
        >
          <div className="mb-6 relative">
            <motion.div
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-primary overflow-hidden animate-glow"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tauhid-VHHD493h1OfKcG0Gx2B7VzyvmOjBAa.jpg"
                alt="Tauhid Hasan Chowdhury"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-3 -right-3 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-background animate-pulse shadow-lg"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="absolute -bottom-10 -right-10 text-xs font-semibold bg-green-500 text-white px-2 py-1 rounded-full whitespace-nowrap">
              Open to Work
            </div>
          </div>

          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-3 leading-tight">
              Tauhid Hasan <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Chowdhury
              </span>
            </h1>
            <h2 className="text-lg sm:text-2xl font-semibold text-primary mb-4 min-h-10">
              <Typewriter
                words={['Full-Stack Developer', 'React & Next.js Expert', 'API Architect', 'Founder']}
                speed={80}
                delayBetweenWords={2000}
              />
            </h2>
            <p className="text-sm sm:text-base text-foreground/60">
              Next.js • React • Node.js • Python • FastAPI
            </p>
          </motion.div>
        </motion.div>

        {/* Floating company badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/30"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Rocket className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Currently building at Loosely Coupled Technologies</span>
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants} className="mb-10 max-w-2xl mx-auto">
          <p className="text-base sm:text-lg text-foreground/70 leading-relaxed mb-3">
            Building scalable, high-performance web applications with modern tech stack. Founder of THCNext IT Solution.
          </p>
          <p className="text-sm sm:text-base text-foreground/60">
            Specialized in designing complex systems, API integration, and delivering production-ready software that users love.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 w-full"
        >
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group w-full sm:w-auto"
          >
            <Link href="#projects">
              Explore My Work
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-2 hover:bg-accent/10 w-full sm:w-auto"
          >
            <Link href="/resume.pdf" download>
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Link>
          </Button>
        </motion.div>

        {/* Animated stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 sm:gap-6 mb-16 max-w-md mx-auto"
        >
          {[
            { value: '4+', label: 'Years Exp.' },
            { value: '20+', label: 'Projects' },
            { value: '10+', label: 'Tech Stack' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-xs sm:text-sm text-foreground/60">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <Link href="#projects" className="text-foreground/50 hover:text-foreground transition-colors">
            <ChevronDown className="w-8 h-8" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
