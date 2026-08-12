import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { Section } from '@/components/sections/section-shell'
import { Magnetic } from '@/components/motion/magnetic'
import { whatsappUrl } from '@/lib/site'

const hidden = [
  'Internal applications',
  'Admin systems',
  'Business workflows',
  'Product modules',
  'Backend services',
  'Data pipelines',
  'Operational platforms',
  'Confidential client systems',
]

export function Beyond() {
  return (
    <Section id="beyond" tone="sunken">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">06 — Beyond the portfolio</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="headline mt-5 text-[clamp(2.1rem,4.6vw,3.9rem)] text-ink">
              My most valuable work{' '}
              <em className="text-gradient font-normal italic">isn&apos;t always public.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
              Not every meaningful engineering project makes a clean case study. Some of the most
              interesting work happens where nobody outside the business ever sees it.
            </p>
          </Reveal>
        </div>

        <div>
          <RevealGroup className="grid grid-cols-1 gap-px overflow-hidden rounded-[1.75rem] border border-border bg-border sm:grid-cols-2">
            {hidden.map((item) => (
              <RevealItem key={item} className="bg-paper px-6 py-5">
                <span className="text-sm font-medium text-ink">{item}</span>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1}>
            <p className="mt-8 leading-relaxed text-ink-muted">
              These projects often involve the hardest engineering decisions, because they have to
              work around existing users, systems, business rules and data. If you&apos;re evaluating
              me for something similar, I can walk through the relevant experience, the
              implementation decisions and the technical approach.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-8">
              <Magnetic>
                <Link
                  href={whatsappUrl("Hi Tauhid — I'd like to discuss a project similar to your confidential work.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-brand"
                >
                  Let&apos;s discuss your project
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
