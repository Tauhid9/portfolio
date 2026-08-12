import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { Section } from '@/components/sections/section-shell'
import { offerings } from '@/data/offerings'

/**
 * Sticky storytelling: the framing column pins while the offerings scroll past
 * it, so the "what" stays anchored to the "why" the whole way down.
 */
export function WhatIBuild() {
  return (
    <Section id="build">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className="eyebrow">05 — What I build</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="headline mt-5 text-[clamp(2.1rem,4.6vw,3.9rem)] text-ink">
              Digital products made for{' '}
              <em className="text-gradient font-normal italic">the real world.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
              I specialise in full-stack applications where technology has to support an actual
              product, business process or operational workflow.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="flex flex-col" stagger={0.06}>
          {offerings.map((offering) => (
            <RevealItem key={offering.id}>
              <article className="group border-t border-border py-9 transition-colors last:border-b hover:border-brand/30">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-ink-muted/60">{offering.index}</span>
                  <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {offering.title}
                  </h3>
                </div>

                <p className="mt-3 pl-10 font-display text-lg text-ink-muted sm:text-xl">
                  {offering.headline}
                </p>

                <p className="mt-4 max-w-2xl pl-10 leading-relaxed text-ink-muted">
                  {offering.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2 pl-10">
                  {offering.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-full border border-border px-3 py-1.5 text-xs text-ink-muted transition-colors group-hover:border-brand/25 group-hover:text-ink"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  )
}
