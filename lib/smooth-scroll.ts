const MIN_SCROLL_DURATION_MS = 450
const MAX_SCROLL_DURATION_MS = 750

function finiteOr(value: number, fallback = 0) {
  return Number.isFinite(value) ? value : fallback
}

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value))
}

/** Cubic ease-out: fast initial travel with a soft, controlled landing. */
export function easeOutCubic(progress: number) {
  const clampedProgress = clamp(finiteOr(progress), 0, 1)
  return 1 - (1 - clampedProgress) ** 3
}

/**
 * Keeps short jumps responsive while giving long section jumps enough time to
 * read naturally. The curve reaches its 750 ms cap at 1,600 pixels.
 */
export function getScrollDuration(distance: number) {
  const duration = 350 + Math.abs(finiteOr(distance)) * 0.25
  return clamp(duration, MIN_SCROLL_DURATION_MS, MAX_SCROLL_DURATION_MS)
}

export interface ScrollTargetInput {
  /** Current document scroll position in pixels. */
  currentY: number
  /** Target's viewport-relative top position in pixels. */
  targetTop: number
  /** Sticky-header clearance read from the document scroll-padding. */
  scrollPaddingTop: number
  viewportHeight: number
  documentHeight: number
}

/** Resolve a padded target position without allowing document overscroll. */
export function getScrollTargetY({
  currentY,
  targetTop,
  scrollPaddingTop,
  viewportHeight,
  documentHeight,
}: ScrollTargetInput) {
  const maximumScrollY = Math.max(
    0,
    finiteOr(documentHeight) - Math.max(0, finiteOr(viewportHeight)),
  )
  const destination =
    finiteOr(currentY) + finiteOr(targetTop) - Math.max(0, finiteOr(scrollPaddingTop))

  return clamp(destination, 0, maximumScrollY)
}
