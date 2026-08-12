import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { Section, SectionHeading } from '@/components/sections/section-shell'

const requirements = [
  { label: 'The interface', need: 'needs to feel clear.' },
  { label: 'The backend', need: 'needs to stay reliable.' },
  { label: 'The data', need: 'needs to be structured properly.' },
  { label: 'The workflow', need: 'needs to reflect how people actually work.' },
  { label: 'The product', need: 'needs to stay maintainable after launch.' },
]

export function Problem() {
  return (
    <Section id="problem">
      <SectionHeading
        kicker="02 — Shipping code isn't the goal"
        title="A product can launch and"
        accent="still fail."
        lede="A polished interface doesn't guarantee a good product. A technically impressive backend doesn't guarantee people can use it. And shipping more features doesn't automatically create something valuable."
      />

      <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal direction="left">
          <p className="font-display text-[clamp(1.6rem,2.6vw,2.3rem)] leading-tight text-ink">
            The products that succeed need all the pieces working together.
          </p>
        </Reveal>

        <RevealGroup className="flex flex-col">
          {requirements.map((item, index) => (
            <RevealItem
              key={item.label}
              className="group flex flex-wrap items-baseline gap-x-2 border-b border-border py-5 first:border-t"
            >
              <span className="font-mono text-xs text-ink-muted/60">0{index + 1}</span>
              <span className="ml-2 text-lg font-medium text-ink">{item.label}</span>
              <span className="text-lg text-ink-muted">{item.need}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      {/* That's where I come in */}
      <div className="mt-24 lg:mt-32">
        <Reveal>
          <div className="glass-prism relative overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl motion-safe:animate-drift"
            />
            <p className="eyebrow">That&apos;s where I come in</p>
            <h3 className="headline mt-5 max-w-2xl text-[clamp(1.9rem,3.8vw,3.2rem)] text-ink">
              I build products, <em className="text-gradient font-normal italic">not just features.</em>
            </h3>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted">
              I approach development from both sides — what the user needs, and what the system needs
              to make that possible. That means thinking beyond individual screens or isolated tickets
              and understanding how the complete product behaves.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
