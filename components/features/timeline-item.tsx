'use client'

import { motion } from 'framer-motion'

interface TimelineItemProps {
  title: string
  subtitle: string
  company: string
  date: string
  description: string
  achievements?: string[]
  isCurrent?: boolean
}

export function TimelineItem({
  title,
  subtitle,
  company,
  date,
  description,
  achievements,
  isCurrent,
}: TimelineItemProps) {
  // Generate company initials
  const initials = company
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  const colors = [
    'from-primary to-accent',
    'from-accent to-primary',
    'from-purple-500 to-pink-500',
    'from-green-500 to-emerald-500',
  ]

  const colorIndex = company.charCodeAt(0) % colors.length
  const gradientClass = colors[colorIndex]

  return (
    <motion.div
      className="relative pl-16 pb-12"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Timeline Line */}
      <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

      {/* Timeline Dot with Avatar */}
      <motion.div
        className="absolute left-0 top-0 w-14 h-14 rounded-full border-4 border-background shadow-lg"
        whileHover={{ scale: 1.1 }}
      >
        <div className={`w-full h-full rounded-full bg-gradient-to-br ${gradientClass} flex items-center justify-center text-white font-bold text-sm`}>
          {initials}
        </div>
      </motion.div>

      {/* Current Role Indicator */}
      {isCurrent && (
        <motion.div
          className="absolute -left-1 -top-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-background"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      {/* Content Card */}
      <motion.div className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground">{title}</h3>
            <p className="text-sm text-foreground/70">{subtitle}</p>
          </div>
          <div className="flex items-center gap-2">
            {isCurrent && (
              <span className="inline-block px-2.5 py-1 bg-green-500/20 text-green-600 dark:text-green-400 text-xs font-bold rounded-full border border-green-500/50">
                Current
              </span>
            )}
            <span className="text-sm font-medium text-primary whitespace-nowrap">{date}</span>
          </div>
        </div>

        <p className="text-sm text-foreground/70 mb-3">{description}</p>

        {achievements && achievements.length > 0 && (
          <ul className="space-y-2">
            {achievements.slice(0, 3).map((achievement, index) => (
              <li key={index} className="text-xs text-foreground/60 flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </motion.div>
  )
}
