'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ElementType, ReactNode } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none: { x: 0, y: 0 },
}

interface RevealProps {
  children: ReactNode
  className?: string
  /** Slide direction the element travels *from*. Defaults to a down-to-up rise. */
  direction?: Direction
  delay?: number
  duration?: number
  as?: ElementType
  /** Re-animate every time the element re-enters the viewport. */
  repeat?: boolean
}

/**
 * Scroll-triggered entrance. Under `prefers-reduced-motion` it degrades to a
 * plain opacity fade with no travel.
 */
export function Reveal({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  as = 'div',
  repeat = false,
}: RevealProps) {
  const reduced = useReducedMotion()
  const { x, y } = reduced ? offsets.none : offsets[direction]
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: !repeat, margin: '-12% 0px -12% 0px' }}
      transition={{ duration: reduced ? 0.3 : duration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  )
}

/** Parent that staggers direct `RevealItem` children as the group scrolls in. */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  stagger?: number
  delay?: number
  as?: ElementType
}) {
  const reduced = useReducedMotion()
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div

  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduced ? 0 : stagger,
        delayChildren: delay,
      },
    },
  }

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
    >
      {children}
    </MotionTag>
  )
}

export function RevealItem({
  children,
  className,
  direction = 'up',
  as = 'div',
  id,
}: {
  children: ReactNode
  className?: string
  direction?: Direction
  as?: ElementType
  /** Set when the item needs to be an anchor target. */
  id?: string
}) {
  const reduced = useReducedMotion()
  const { x, y } = reduced ? offsets.none : offsets[direction]
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div

  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: reduced ? 0.3 : 0.8, ease: EASE },
    },
  }

  return (
    <MotionTag id={id} className={className} variants={variants}>
      {children}
    </MotionTag>
  )
}

/**
 * Word-by-word display reveal for editorial headlines. Words wrap normally
 * because each span is inline-block inside regular text flow.
 */
export function RevealWords({
  text,
  className,
  delay = 0,
  stagger = 0.045,
}: {
  text: string
  className?: string
  delay?: number
  stagger?: number
}) {
  const reduced = useReducedMotion()
  const words = text.split(' ')

  if (reduced) {
    return (
      <motion.span
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay }}
      >
        {text}
      </motion.span>
    )
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px' }}
      variants={{ visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '110%', opacity: 0 },
              visible: { y: '0%', opacity: 1, transition: { duration: 0.9, ease: EASE } },
            }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}
