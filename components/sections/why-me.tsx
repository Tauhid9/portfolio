import { Zap, Brain, BarChart3, ShieldCheck } from 'lucide-react'
import { RevealGroup, RevealItem } from '@/components/motion/reveal'
import { Section, SectionHeading } from '@/components/sections/section-shell'
import { pillars, type Pillar } from '@/data/pillars'

const icons: Record<Pillar['icon'], typeof Zap> = {
  bolt: Zap,
  brain: Brain,
  chart: BarChart3,
  shield: ShieldCheck,
}

export function WhyMe() {
  return (
    <Section id="why" tone="sunken">
      <SectionHeading
        kicker="04 — Product-minded engineering"
        title="Full-stack development for products built"
        accent="to perform."
        lede="I work at the intersection of product thinking, frontend clarity and reliable backend execution. The goal is software that's understandable for users, practical for businesses, and maintainable for whoever keeps developing it."
      />

      <RevealGroup className="mt-16 grid gap-6 lg:mt-24 lg:grid-cols-2" stagger={0.1}>
        {pillars.map((pillar) => {
          const Icon = icons[pillar.icon]
          return (
            <RevealItem key={pillar.id}>
              <article className="glass-prism group h-full rounded-[2rem] p-8 transition-shadow duration-500 hover:shadow-[var(--shadow-lg)] sm:p-10">
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 text-white shadow-[var(--shadow-glow)]">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <p className="eyebrow">{pillar.label}</p>
                </div>

                <h3 className="headline mt-7 text-[clamp(1.5rem,2.4vw,2.1rem)] text-ink">
                  {pillar.title}
                </h3>

                <p className="mt-4 leading-relaxed text-ink-muted">{pillar.body}</p>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {pillar.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-full border border-border bg-paper px-3.5 py-1.5 text-xs font-medium text-ink-muted transition-colors group-hover:border-brand/25 group-hover:text-ink"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </RevealItem>
          )
        })}
      </RevealGroup>
    </Section>
  )
}
