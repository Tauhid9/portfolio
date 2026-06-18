'use client'

import { useEffect, useState } from 'react'

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollTop = window.scrollY
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transition-all duration-300 z-50"
      style={{ width: `${scrollProgress}%` }}
    />
  )
}
