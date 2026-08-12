import type { ReactNode } from 'react'
import { Reveal } from '@/components/motion/reveal'

/** Standard section frame: consistent rhythm, width and horizontal padding. */
export function Section({
  id,
  children,
  className = '',
  tone = 'paper',
}: {
  id?: string
  children: ReactNode
  className?: string
  tone?: 'paper' | 'sunken'
}) {
  return (
    <section
      id={id}
      className={`relative px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40 ${
        tone === 'sunken' ? 'bg-paper-sunken' : ''
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-[88rem]">{children}</div>
    </section>
  )
}

/**
 * Section header. `kicker` is the small numbered label, `title` the editorial
 * display line, `lede` the supporting paragraph.
 */
export function SectionHeading({
  kicker,
  title,
  accent,
  lede,
  align = 'left',
  className = '',
}: {
  kicker: string
  title: string
  /** Trailing phrase rendered in serif italic gradient. */
  accent?: string
  lede?: string
  align?: 'left' | 'center'
  className?: string
}) {
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      <Reveal>
        <p className="eyebrow">{kicker}</p>
      </Reveal>

      <Reveal delay={0.06}>
        <h2 className="headline mt-5 text-[clamp(2.1rem,4.6vw,3.9rem)] text-ink">
          {title}
          {accent && (
            <>
              {' '}
              <em className="text-gradient font-normal italic">{accent}</em>
            </>
          )}
        </h2>
      </Reveal>

      {lede && (
        <Reveal delay={0.12}>
          <p
            className={`mt-6 text-lg leading-relaxed text-ink-muted ${centered ? 'mx-auto' : ''}`}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  )
}

/** Hairline rule used to separate blocks inside a section. */
export function Rule({ className = '' }: { className?: string }) {
  return <div aria-hidden className={`rule ${className}`} />
}
