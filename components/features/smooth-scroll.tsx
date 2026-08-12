'use client'

import { useEffect } from 'react'
import {
  easeOutCubic,
  getScrollDuration,
  getScrollTargetY,
} from '@/lib/smooth-scroll'

const SCROLL_KEYS = new Set([
  'ArrowDown',
  'ArrowUp',
  'End',
  'Home',
  'PageDown',
  'PageUp',
  ' ',
  'Spacebar',
])

function clickedAnchor(event: MouseEvent) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return null
  }

  const eventTarget = event.target
  const element =
    eventTarget instanceof Element
      ? eventTarget
      : eventTarget instanceof Node
        ? eventTarget.parentElement
        : null

  return element?.closest<HTMLAnchorElement>('a[href]') ?? null
}

/**
 * Progressive enhancement for same-page links. Native anchors remain the
 * fallback; JavaScript only replaces their scrolling animation.
 */
export function SmoothScroll() {
  useEffect(() => {
    let animationFrame: number | undefined

    const cancelAnimation = () => {
      if (animationFrame === undefined) return
      cancelAnimationFrame(animationFrame)
      animationFrame = undefined
    }

    const handleClick = (event: MouseEvent) => {
      const anchor = clickedAnchor(event)
      if (
        !anchor ||
        anchor.dataset.scroll === 'instant' ||
        anchor.hasAttribute('download') ||
        (anchor.target && anchor.target !== '_self')
      ) {
        return
      }

      const href = anchor.getAttribute('href')
      if (!href?.startsWith('#') || href.length === 1) return

      let targetId: string
      try {
        targetId = decodeURIComponent(href.slice(1))
      } catch {
        return
      }

      const target = document.getElementById(targetId)
      if (!target) return

      event.preventDefault()
      cancelAnimation()

      const scrollPaddingTop =
        Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0
      const startY = window.scrollY
      const targetY = getScrollTargetY({
        currentY: startY,
        targetTop: target.getBoundingClientRect().top,
        scrollPaddingTop,
        viewportHeight: window.innerHeight,
        documentHeight: document.documentElement.scrollHeight,
      })
      const distance = targetY - startY

      if (window.location.hash !== href) {
        window.history.pushState(null, '', href)
      }

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reducedMotion || Math.abs(distance) < 1) {
        window.scrollTo(0, targetY)
        return
      }

      const duration = getScrollDuration(distance)
      const startedAt = performance.now()

      const animate = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1)
        window.scrollTo(0, startY + distance * easeOutCubic(progress))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
          return
        }

        animationFrame = undefined
        window.scrollTo(0, targetY)
      }

      animationFrame = requestAnimationFrame(animate)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (SCROLL_KEYS.has(event.key)) cancelAnimation()
    }

    document.addEventListener('click', handleClick)
    window.addEventListener('wheel', cancelAnimation, { passive: true })
    window.addEventListener('touchstart', cancelAnimation, { passive: true })
    window.addEventListener('pointerdown', cancelAnimation, { passive: true })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      cancelAnimation()
      document.removeEventListener('click', handleClick)
      window.removeEventListener('wheel', cancelAnimation)
      window.removeEventListener('touchstart', cancelAnimation)
      window.removeEventListener('pointerdown', cancelAnimation)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return null
}
