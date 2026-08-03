'use client'

import { motion } from 'framer-motion'
import { Bot, Sparkles } from 'lucide-react'

const aiTools = ['ChatGPT', 'Claude', 'Gemini', 'Codex', 'V0']

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
}

export function AIToolsBanner() {
  return (
    <motion.div
      className="rounded-[1.75rem] border border-border/70 bg-card/90 p-6 shadow-[0_18px_50px_-38px_rgba(15,23,42,0.45)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">AI-Assisted Development</p>
          <h3 className="mt-2 text-xl font-bold text-foreground">Used to accelerate delivery, iteration, and technical workflow quality</h3>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Bot className="h-5 w-5" />
        </div>
      </div>

      <p className="mb-6 max-w-3xl text-sm leading-7 text-foreground/65">
        I use AI tooling to speed up research, debugging, documentation, and implementation support while keeping engineering decisions grounded in product requirements and verified code.
      </p>

      <motion.div
        className="flex flex-wrap gap-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {aiTools.map((tool) => (
          <motion.div
            key={tool}
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -2 }}
            className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground/82 transition-all"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span>{tool}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
