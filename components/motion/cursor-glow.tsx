'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

/**
 * Soft brand-tinted light that trails the cursor. Purely decorative, so it is
 * skipped entirely on touch devices and under reduced-motion.
 */
export function CursorGlow() {
  const reduced = useReducedMotion()
  const [enabled, setEnabled] = useState(false)

  const x = useMotionValue(-500)
  const y = useMotionValue(-500)
  const sx = useSpring(x, { stiffness: 90, damping: 22, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 90, damping: 22, mass: 0.6 })

  useEffect(() => {
    if (reduced) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    setEnabled(true)

    const move = (event: PointerEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }

    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [reduced, x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.16] mix-blend-multiply blur-[90px] lg:block dark:opacity-[0.22] dark:mix-blend-screen"
      style={{
        x: sx,
        y: sy,
        background:
          'radial-gradient(circle, var(--brand) 0%, var(--brand-2) 45%, transparent 68%)',
      }}
    />
  )
}
