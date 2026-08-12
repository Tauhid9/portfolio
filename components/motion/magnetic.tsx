'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

/**
 * Pulls its child toward the cursor while hovered, then springs back on exit.
 * Pointer-coarse devices and reduced-motion users get a plain static wrapper.
 */
export function Magnetic({
  children,
  className,
  /** Fraction of the cursor offset the element travels. */
  strength = 0.35,
  /** Max travel in px on each axis. */
  clamp = 14,
}: {
  children: ReactNode
  className?: string
  strength?: number
  clamp?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduced = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 20, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 260, damping: 20, mass: 0.5 })

  if (reduced) {
    return <span className={className}>{children}</span>
  }

  const handleMove = (event: React.PointerEvent<HTMLSpanElement>) => {
    // Touch/pen input has no meaningful hover state to track.
    if (event.pointerType !== 'mouse' || !ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const dx = event.clientX - (rect.left + rect.width / 2)
    const dy = event.clientY - (rect.top + rect.height / 2)

    x.set(Math.max(-clamp, Math.min(clamp, dx * strength)))
    y.set(Math.max(-clamp, Math.min(clamp, dy * strength)))
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ x: springX, y: springY, display: 'inline-block' }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.span>
  )
}
