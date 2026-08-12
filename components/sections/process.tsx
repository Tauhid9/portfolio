import { ArrowRight } from 'lucide-react'
import { Section, SectionHeading } from '@/components/sections/section-shell'
import { processSteps } from '@/data/process'

/**
 * Sticky card stack. Each step is a direct child of one tall container, so it
 * pins at its own offset and the following step scrolls up and covers it —
 * one step on screen at a time, with the earlier ones stacked behind.
 *
 * Cards must be opaque (not glass) or the stack shows through itself.
 */
export function Process() {
  return (
    <Section id="process" tone="sunken">
      <SectionHeading
        kicker="11 — My process"
        title="From ambition to"
        accent="working software."
        lede="A structured process reduces misunderstandings, unnecessary development and expensive rework — which is usually where budgets actually go."
      />

      <div className="relative mt-16 lg:mt-24">
        {processSteps.map((step, index) => (
          <div
            key={step.id}
            className="sticky"
            style={{
              // Each card pins slightly lower than the last, leaving a visible
              // stacked edge instead of a single card swapping in place.
              top: `calc(6.5rem + ${index * 0.55}rem)`,
              // Later cards paint above earlier ones as they scroll over.
              zIndex: index + 1,
            }}
          >
            <article className="mb-6 overflow-hidden rounded-[2rem] border border-border bg-paper-raised shadow-[var(--shadow-md)]">
              <div className="grid gap-6 p-8 sm:p-10 lg:grid-cols-[7rem_1fr_1fr] lg:gap-12 lg:p-12">
                {/* Step marker */}
                <div className="flex items-baseline gap-4 lg:block">
                  <span className="font-display text-4xl text-brand/70 lg:text-6xl">
                    {step.index}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-ink lg:mt-4 lg:text-base">
                    {step.title}
                  </h3>
                </div>

                {/* Narrative */}
                <div>
                  <p className="font-display text-xl text-ink lg:text-2xl">{step.headline}</p>
                  <p className="mt-4 leading-relaxed text-ink-muted">{step.body}</p>

                  <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-sm font-medium text-brand">
                    <ArrowRight className="h-3.5 w-3.5" />
                    {step.output}
                  </p>
                </div>

                {/* Concrete items */}
                <ul className="flex flex-wrap content-start gap-2">
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-paper px-3 py-1.5 text-xs text-ink-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Progress rail across the bottom of each card */}
              <div
                aria-hidden
                className="h-1 bg-gradient-to-r from-brand via-brand-2 to-brand-3"
                style={{ width: `${((index + 1) / processSteps.length) * 100}%` }}
              />
            </article>
          </div>
        ))}
      </div>
    </Section>
  )
}
