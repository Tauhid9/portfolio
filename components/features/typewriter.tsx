'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface TypewriterProps {
  words: string[]
  speed?: number
  delayBetweenWords?: number
}

export function Typewriter({ words, speed = 100, delayBetweenWords = 2000 }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting) {
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1))
        }, speed)
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, delayBetweenWords)
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, speed / 2)
      } else {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayedText, wordIndex, isDeleting, speed, delayBetweenWords, words])

  return (
    <span>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.7, repeat: Infinity }}
        className="text-primary"
      >
        |
      </motion.span>
    </span>
  )
}
