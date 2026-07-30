'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Download, ChevronDown, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, type Variants } from 'framer-motion'
import { Typewriter } from '@/components/features/typewriter'
import { siteConfig } from '@/lib/site'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 pb-20 pt-24 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-blue-50/30 to-purple-50/20 dark:from-background dark:via-blue-950/20 dark:to-purple-950/10" />

      <motion.div
        className="absolute top-20 -right-40 -z-10 h-80 w-80 rounded-full bg-cyan-200/20 blur-3xl dark:bg-cyan-900/10"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -left-40 -z-10 h-96 w-96 rounded-full bg-violet-200/20 blur-3xl dark:bg-violet-900/10"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="mx-auto w-full max-w-4xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-300 bg-green-100 px-4 py-2 dark:border-green-700 dark:bg-green-900/30"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
          <span className="text-sm font-medium text-green-700 dark:text-green-300">Available for hire</span>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8 flex flex-col items-center">
          <div className="relative mb-6">
            <motion.div
              className="h-32 w-32 overflow-hidden rounded-full border-4 border-primary animate-glow sm:h-40 sm:w-40"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image
                src={siteConfig.profileImage}
                alt={siteConfig.name}
                width={160}
                height={160}
                sizes="(max-width: 640px) 128px, 160px"
                className="h-full w-full object-cover"
                priority
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-3 -right-3 h-6 w-6 rounded-full border-2 border-white bg-green-500 shadow-lg animate-pulse dark:border-background"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="absolute -bottom-10 -right-10 whitespace-nowrap rounded-full bg-green-500 px-2 py-1 text-xs font-semibold text-white">
              Open to Work
            </div>
          </div>

          <motion.div variants={itemVariants}>
            <h1 className="mb-3 text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Tauhid Hasan <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Chowdhury
              </span>
            </h1>
            <h2 className="mb-4 min-h-10 text-lg font-semibold text-primary sm:text-2xl">
              <Typewriter
                words={['Full-Stack Developer', 'React & Next.js Expert', 'API Architect', 'Founder']}
                speed={80}
                delayBetweenWords={2000}
              />
            </h2>
            <p className="text-sm text-foreground/60 sm:text-base">
              Next.js - React - Node.js - Python - FastAPI
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Rocket className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Currently building at Loosely Coupled Technologies</span>
        </motion.div>

        <motion.div variants={itemVariants} className="mx-auto mb-10 max-w-2xl">
          <p className="mb-3 text-base leading-relaxed text-foreground/70 sm:text-lg">
            Building scalable, high-performance web applications with modern tech stack. Founder of THCNext IT Solution.
          </p>
          <p className="text-sm text-foreground/60 sm:text-base">
            Specialized in designing complex systems, API integration, and delivering production-ready software that users love.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-16 flex w-full flex-col justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            asChild
            className="group w-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90 sm:w-auto"
          >
            <Link href="#projects">
              Explore My Work
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="w-full border-2 hover:bg-accent/10 sm:w-auto"
          >
            <Link href="/Tauhid_Hasan_Chowdhury_CV.pdf" download="Tauhid_Hasan_Chowdhury_CV.pdf">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Link>
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mx-auto mb-16 grid max-w-md grid-cols-3 gap-4 sm:gap-6"
        >
          {[
            { value: '3+', label: 'Years Exp.' },
            { value: '15+', label: 'Projects' },
            { value: '10+', label: 'Tech Stack' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/50"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="mb-1 text-2xl font-bold text-primary sm:text-3xl">{stat.value}</p>
              <p className="text-xs text-foreground/60 sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <Link href="#projects" className="text-foreground/50 transition-colors hover:text-foreground">
            <ChevronDown className="h-8 w-8" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
