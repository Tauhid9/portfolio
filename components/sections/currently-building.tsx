import { Globe, Workflow, LayoutDashboard, Layers } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'

const clients = [
  'Loosely Coupled Technologies',
  'THCNext IT Solution',
  'Suzuki Bangladesh',
  'Dristy Unnayan Sangstha',
  'A. M. & Associates',
  'EZAssist',
]

/** Gradients step through the brand triad across the row, so the four cards
 *  read as one sweep rather than four unrelated badges. */
const buckets = [
  {
    title: 'Production web apps',
    note: 'Built for real users.',
    icon: Globe,
    gradient: 'from-brand to-brand-2',
  },
  {
    title: 'Operational platforms',
    note: 'Built around real workflows.',
    icon: Workflow,
    gradient: 'from-brand-2 to-brand-3',
  },
  {
    title: 'Dashboards & data',
    note: 'Built for better decisions.',
    icon: LayoutDashboard,
    gradient: 'from-brand-3 to-brand',
  },
  {
    title: 'Full-stack systems',
    note: 'Built from UI to deployment.',
    icon: Layers,
    gradient: 'from-brand via-brand-2 to-brand-3',
  },
]

export function CurrentlyBuilding() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-paper-sunken py-16 sm:py-20">
      {/* Client marquee */}
      <div className="pause-on-hover mask-fade-x relative flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-14 pr-14">
          {[...clients, ...clients].map((client, index) => (
            <span
              key={`${client}-${index}`}
              className="whitespace-nowrap font-display text-2xl text-ink-muted/60 sm:text-3xl"
              aria-hidden={index >= clients.length}
            >
              {client}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 w-full max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p className="eyebrow">Currently building</p>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-4 max-w-2xl text-lg text-ink sm:text-xl">
            Digital products for businesses that need more than a beautiful interface.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-px overflow-hidden rounded-[1.75rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {buckets.map(({ title, note, icon: Icon, gradient }) => (
            <RevealItem
              key={title}
              className="group bg-paper p-7 transition-colors hover:bg-paper-raised"
            >
              <span
                className={`grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-[var(--shadow-glow)] transition-transform duration-500 group-hover:scale-105`}
              >
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-base font-semibold tracking-tight text-ink">{title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{note}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
