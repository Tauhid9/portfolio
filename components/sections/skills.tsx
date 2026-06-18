'use client'

import { motion } from 'framer-motion'
import { skillsData } from '@/data/skills'
import { AIToolsBanner } from '@/components/features/ai-tools-banner'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
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

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50 dark:bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto">
            Technologies and tools I&apos;m proficient with
          </p>
        </motion.div>

        {/* AI Tools Banner */}
        <AIToolsBanner />

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.filter(cat => cat.category !== "AI & Code Assistants").map((category) => (
            <motion.div key={category.category} variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{category.category}</h3>
                <div className="h-1 w-16 bg-primary rounded-full" />
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-full font-medium text-sm bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 cursor-default"
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { value: '15+', label: 'Technologies' },
            { value: '100%', label: 'Quality Focus' },
            { value: '4+', label: 'Years Exp.' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 sm:p-8 rounded-xl bg-card border border-border hover:border-primary/50 text-center group transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">{stat.value}</p>
              <p className="text-sm sm:text-base text-foreground/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
