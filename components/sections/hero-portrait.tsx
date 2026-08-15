'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { PortraitOrb } from '@/components/webgl/portrait-orb'
import { siteConfig, heroStack } from '@/lib/site'

/** Ring start angle, so no chip sits dead-centre over the face. */
const ANGLE_OFFSET = -32

/**
 * Hero focal point: the transparent cutout standing inside the WebGL halo,
 * with the core stack orbiting around it. The photo itself is never clipped —
 * no circle, no frame — only lit from behind.
 */
export function HeroPortrait() {
  const reduced = useReducedMotion()

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[16.5rem] sm:max-w-[21rem] lg:max-w-[27rem]">
      {/* WebGL halo, sized past the figure so particles orbit outside it */}
      <PortraitOrb className="absolute inset-0 h-full w-full" />

      {/* Ground glow the figure stands on */}
      <div
        aria-hidden
        className="absolute bottom-[3%] left-1/2 h-[12%] w-[64%] -translate-x-1/2 rounded-[100%] bg-brand/25 blur-2xl dark:bg-brand/30"
      />

      {/* The cutout — transparent, unmasked. Its box is taller than the halo on
          purpose, so object-contain sizes the figure by width and it stands
          well above and below the ring. */}
      <motion.div
        className="absolute inset-x-[-12%] bottom-[-26%] top-[-24%]"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      >
        <Image
          src={siteConfig.heroImage}
          alt={`${siteConfig.name}, ${siteConfig.role}`}
          fill
          sizes="(max-width: 640px) 19rem, (max-width: 1024px) 24rem, 31rem"
          className="fade-bottom object-contain object-bottom mix-blend-multiply drop-shadow-[0_24px_44px_rgba(11,11,15,0.16)] dark:mix-blend-normal dark:drop-shadow-[0_24px_44px_rgba(0,0,0,0.55)]"
          priority
        />
      </motion.div>

      {/* Availability badge */}
      <motion.div
        className="glass-prism absolute bottom-[12%] right-[-4%] z-10 flex items-center gap-2 rounded-full py-1.5 pl-2 pr-3.5 shadow-[var(--shadow-md)] sm:right-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-brand-3 opacity-70 motion-safe:animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-3" />
        </span>
        <span className="text-[0.7rem] font-medium text-ink">Open to work</span>
      </motion.div>

      {/* Orbiting stack labels */}
      <motion.div
        // Ring centre sits low, around chest height, so no chip ever tracks
        // across the face on its way round.
        className="pointer-events-none absolute inset-x-0 bottom-[-22%] top-[22%] z-10 [--orbit-duration:30s] [--orbit-r:6.5rem] sm:[--orbit-r:8.5rem] lg:[--orbit-r:11rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <div className={reduced ? 'h-full w-full' : 'h-full w-full animate-orbit'}>
          {heroStack.map((tech, index) => {
            const angle = ANGLE_OFFSET + (360 / heroStack.length) * index
            return (
              // Each level is a zero-size centring grid, so the chip stays
              // pinned to its orbit point while the transforms compose.
              <div
                key={tech}
                className="absolute left-1/2 top-1/2 grid h-0 w-0 place-items-center"
                style={{ transform: `rotate(${angle}deg) translateY(calc(var(--orbit-r) * -1))` }}
              >
                <div
                  className={`grid h-0 w-0 place-items-center ${reduced ? '' : 'animate-orbit-counter'}`}
                >
                  <div
                    className="grid h-0 w-0 place-items-center"
                    style={{ transform: `rotate(${-angle}deg)` }}
                  >
                    <span className="glass-prism whitespace-nowrap rounded-full px-3 py-1.5 text-[0.65rem] font-semibold tracking-tight shadow-[0_0_24px_-8px_var(--brand)] sm:px-3.5 sm:text-[0.7rem]">
                      <span className="text-gradient">{tech}</span>
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
