'use client'

import { motion } from 'framer-motion'
import { experienceData } from '@/data/experience'
import { TimelineItem } from '@/components/features/timeline-item'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
}

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Work Experience</h2>
          <p className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto">
            My professional journey and key milestones in the tech industry
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-2">
          {experienceData.map((exp, index) => {
            const isCurrent = exp.endDate === 'Present' || !exp.endDate
            return (
              <TimelineItem
                key={exp.id}
                title={exp.position}
                subtitle={exp.company}
                company={exp.company}
                date={`${exp.startDate} - ${exp.endDate || 'Present'}`}
                description={exp.description}
                achievements={exp.achievements}
                isCurrent={isCurrent}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
