import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { Section } from '@/components/sections/section-shell'
import { principles } from '@/data/process'

export function Philosophy() {
  return (
    <Section id="philosophy">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className="eyebrow">10 — Development philosophy</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="headline mt-5 text-[clamp(2.1rem,4.6vw,3.9rem)] text-ink">
              Good code matters.{' '}
              <em className="text-gradient font-normal italic">Good products matter more.</em>
            </h2>
          </Reveal>
        </div>

        <RevealGroup className="flex flex-col" stagger={0.08}>
          {principles.map((principle) => (
            <RevealItem key={principle.index}>
              <article className="group grid gap-4 border-t border-border py-9 transition-colors last:border-b hover:border-brand/30 sm:grid-cols-[4rem_1fr] sm:gap-8">
                <span className="font-display text-3xl text-ink-muted/35 transition-colors group-hover:text-brand/60">
                  {principle.index}
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-ink">
                    {principle.title}
                  </h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">{principle.body}</p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  )
}
