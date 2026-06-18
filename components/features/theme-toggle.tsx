'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  // Get initial theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    
    let initialTheme: 'light' | 'dark' = 'light'
    
    if (savedTheme) {
      initialTheme = savedTheme
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      initialTheme = 'dark'
    }
    
    setTheme(initialTheme)
    applyTheme(initialTheme)
    setMounted(true)
  }, [])

  const applyTheme = (newTheme: 'light' | 'dark') => {
    const html = document.documentElement
    
    if (newTheme === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
    
    localStorage.setItem('theme', newTheme)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    applyTheme(newTheme)
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-8 h-8 sm:w-10 sm:h-10" disabled>
        <Sun className="w-4 h-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="w-8 h-8 sm:w-10 sm:h-10 hover:bg-primary/10 transition-colors"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="w-4 h-4 text-foreground" />
      ) : (
        <Sun className="w-4 h-4 text-foreground" />
      )}
    </Button>
  )
}
