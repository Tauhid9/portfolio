'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export function ScrollToTop() {
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollY, 'change', (current) => {
    setVisible(current > 900)
  })

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#home"
          aria-label="Back to top"
          // Sits above the WhatsApp bubble rather than beside it.
          className="glass-strong fixed bottom-24 right-5 z-40 grid h-11 w-11 place-items-center rounded-full text-ink shadow-[var(--shadow-md)] transition-colors hover:text-brand sm:bottom-28 sm:right-8"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.25 }}
        >
          <ArrowUp className="h-4 w-4" />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
