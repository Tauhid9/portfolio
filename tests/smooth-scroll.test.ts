import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  easeOutCubic,
  getScrollDuration,
  getScrollTargetY,
} from '../lib/smooth-scroll'

describe('easeOutCubic', () => {
  it('starts at zero, slows toward the end, and finishes at one', () => {
    assert.equal(easeOutCubic(0), 0)
    assert.equal(easeOutCubic(0.5), 0.875)
    assert.equal(easeOutCubic(1), 1)
  })

  it('clamps progress outside the animation range', () => {
    assert.equal(easeOutCubic(-1), 0)
    assert.equal(easeOutCubic(2), 1)
  })
})

describe('getScrollDuration', () => {
  it('uses a responsive duration between 450 and 750 milliseconds', () => {
    assert.equal(getScrollDuration(100), 450)
    assert.equal(getScrollDuration(1_000), 600)
    assert.equal(getScrollDuration(2_000), 750)
  })

  it('treats upward and downward travel equally', () => {
    assert.equal(getScrollDuration(-1_000), 600)
  })
})

describe('getScrollTargetY', () => {
  it('subtracts the sticky-header clearance from the target position', () => {
    assert.equal(
      getScrollTargetY({
        currentY: 500,
        targetTop: 300,
        scrollPaddingTop: 104,
        viewportHeight: 800,
        documentHeight: 3_000,
      }),
      696,
    )
  })

  it('keeps the destination inside the document scroll range', () => {
    assert.equal(
      getScrollTargetY({
        currentY: 20,
        targetTop: -200,
        scrollPaddingTop: 104,
        viewportHeight: 800,
        documentHeight: 3_000,
      }),
      0,
    )

    assert.equal(
      getScrollTargetY({
        currentY: 2_300,
        targetTop: 200,
        scrollPaddingTop: 104,
        viewportHeight: 800,
        documentHeight: 3_000,
      }),
      2_200,
    )
  })
})
