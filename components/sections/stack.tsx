import { Sparkles, Check } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { Section, SectionHeading } from '@/components/sections/section-shell'
import {
  capabilityGroups,
  aiTools,
  aiAssistedAreas,
  aiJudgementChecks,
} from '@/data/capabilities'

export function Stack() {
  return (
    <Section id="stack" tone="sunken">
      <SectionHeading
        kicker="08 — Tech & capabilities"
        title="Modern technology, chosen"
        accent="for the product."
        lede="Technology should never be selected just because it's trending. The stack has to fit the product, the workflow, the team, and where the application needs to go next."
      />

      <RevealGroup className="mt-16 grid gap-6 lg:mt-24 lg:grid-cols-2" stagger={0.08}>
        {capabilityGroups.map((group) => (
          <RevealItem key={group.id}>
            <article className="glass-prism h-full rounded-[2rem] p-8 sm:p-10">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-ink-muted/60">{group.index}</span>
                <h3 className="text-lg font-semibold tracking-tight text-ink">{group.title}</h3>
              </div>

              <p className="mt-3 font-display text-xl text-ink-muted">{group.headline}</p>

              <dl className="mt-8 space-y-4">
                {group.primary.map((item) => (
                  <div key={item.name} className="flex flex-col gap-1 border-b border-border pb-4 last:border-0 sm:flex-row sm:items-baseline sm:gap-5">
                    <dt className="w-44 shrink-0 text-sm font-semibold text-ink">{item.name}</dt>
                    <dd className="text-sm text-ink-muted">{item.note}</dd>
                  </div>
                ))}
              </dl>

              <ul className="mt-7 flex flex-wrap gap-2">
                {group.supporting.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-paper px-3 py-1.5 text-xs text-ink-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>

      {/* ------------------------------------------- AI-assisted engineering */}
      <div className="mt-24 lg:mt-36">
        <Reveal>
          <div className="glass-prism relative overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-2/20 blur-3xl motion-safe:animate-drift"
            />

            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-2 to-brand-3 text-white shadow-[var(--shadow-glow)]">
                <Sparkles className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <p className="eyebrow">09 — Modern development workflow</p>
            </div>

            <h3 className="headline mt-7 max-w-3xl text-[clamp(1.9rem,3.8vw,3.2rem)] text-ink">
              AI helps me move faster. It{' '}
              <em className="text-gradient font-normal italic">doesn&apos;t make the decisions.</em>
            </h3>

            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="eyebrow">Where it helps</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {aiAssistedAreas.map((area) => (
                    <li
                      key={area}
                      className="rounded-full border border-border bg-paper px-3 py-1.5 text-xs text-ink-muted"
                    >
                      {area}
                    </li>
                  ))}
                </ul>

                <p className="eyebrow mt-9">Tools</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {aiTools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full bg-ink px-3.5 py-1.5 text-xs font-medium text-paper"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-lg leading-relaxed text-ink">
                  Generating code faster isn&apos;t the goal. Shipping better software faster is.
                </p>
                <p className="mt-4 leading-relaxed text-ink-muted">
                  AI can propose an implementation. Engineering judgement still has to decide whether
                  that implementation:
                </p>

                <ul className="mt-6 space-y-2.5">
                  {aiJudgementChecks.map((check) => (
                    <li key={check} className="flex items-start gap-3 text-sm text-ink-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-3" strokeWidth={2.5} />
                      {check}
                    </li>
                  ))}
                </ul>

                <p className="mt-8 font-display text-xl text-ink">
                  AI accelerates the workflow. Product thinking still drives it.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
