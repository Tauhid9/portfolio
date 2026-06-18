'use client'

import { motion } from 'framer-motion'

const aiTools = [
  { name: 'ChatGPT', icon: '🤖' },
  { name: 'Claude', icon: '🧠' },
  { name: 'Gemini', icon: '✨' },
  { name: 'Codex', icon: '⚡' },
  { name: 'V0', icon: '🎨' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function AIToolsBanner() {
  return (
    <motion.div
      className="mb-16 p-8 rounded-xl border border-primary/30 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-center text-xl font-bold text-foreground mb-6">AI Tools I Leverage</h3>
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {aiTools.map((tool) => (
          <motion.div
            key={tool.name}
            variants={itemVariants}
            whileHover={{ scale: 1.1, y: -2 }}
            className="px-4 py-2 rounded-full border border-primary/50 bg-primary/10 hover:bg-primary/20 transition-all cursor-default"
          >
            <span className="text-lg mr-2">{tool.icon}</span>
            <span className="font-medium text-sm text-primary">{tool.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
