'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * Driven by a motion value rather than React state, so scrolling never triggers
 * a re-render.
 */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[55] h-[2px] origin-left bg-gradient-to-r from-brand via-brand-2 to-brand-3"
    />
  )
}
