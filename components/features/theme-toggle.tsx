'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

type Theme = 'light' | 'dark'

/**
 * Light is the designed default, so we only read an explicit stored choice —
 * system dark preference alone does not flip the site.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    setTheme(stored === 'dark' ? 'dark' : 'light')
    setMounted(true)
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    localStorage.setItem('theme', next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      className="grid h-10 w-10 place-items-center overflow-hidden rounded-full text-ink transition-colors hover:bg-ink/[0.06] dark:hover:bg-white/10"
    >
      {/* Render a stable icon until hydrated so SSR and client markup agree. */}
      {!mounted ? (
        <Sun className="h-[1.05rem] w-[1.05rem] opacity-40" />
      ) : (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={{ y: 14, opacity: 0, rotate: -35 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -14, opacity: 0, rotate: 35 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="grid place-items-center"
          >
            {theme === 'light' ? (
              <Moon className="h-[1.05rem] w-[1.05rem]" />
            ) : (
              <Sun className="h-[1.05rem] w-[1.05rem]" />
            )}
          </motion.span>
        </AnimatePresence>
      )}
    </button>
  )
}
