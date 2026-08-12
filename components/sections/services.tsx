import Link from 'next/link'
import { ArrowRight, Rocket, Layers, BarChart3, Palette, Server, Puzzle, Handshake } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { Section, SectionHeading } from '@/components/sections/section-shell'
import { services, type Service } from '@/data/services'
import { whatsappUrl } from '@/lib/site'

const icons: Record<Service['icon'], typeof Rocket> = {
  rocket: Rocket,
  layers: Layers,
  chart: BarChart3,
  palette: Palette,
  server: Server,
  puzzle: Puzzle,
  handshake: Handshake,
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon]

  return (
    // Column span lives on the RevealItem wrapper, which is the actual grid child.
    <article className="glass-prism group flex h-full flex-col rounded-[2rem] p-8 transition-shadow duration-500 hover:shadow-[var(--shadow-lg)] sm:p-10">
      <div className="flex items-center gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 text-white shadow-[var(--shadow-glow)]">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <p className="eyebrow">{service.eyebrow}</p>
      </div>

      <h3 className="headline mt-7 text-[clamp(1.45rem,2.3vw,2rem)] text-ink">{service.title}</h3>

      <p className="mt-4 leading-relaxed text-ink-muted">{service.summary}</p>

      <div className="mt-8">
        <p className="eyebrow">{service.scopeLabel}</p>
        <ul className="mt-3.5 flex flex-wrap gap-2">
          {service.scope.map((item) => (
            <li
              key={item}
              className="rounded-full border border-border bg-paper px-3 py-1.5 text-xs text-ink-muted transition-colors group-hover:border-brand/25"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-7">
        <p className="eyebrow">{service.bestForLabel}</p>
        <p className="mt-3 text-sm text-ink">{service.bestFor.join(' · ')}</p>
      </div>

      {/* Push the CTA to the card floor so a row of cards stays aligned. */}
      <div className="mt-auto pt-9">
        <Link
          href={whatsappUrl(service.intent)}
          target="_blank"
          rel="noopener noreferrer"
          className="group/cta inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-brand"
        >
          {service.cta}
          <span className="grid h-8 w-8 place-items-center rounded-full border border-border transition-all duration-300 group-hover/cta:border-brand group-hover/cta:bg-brand group-hover/cta:text-white">
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>
      </div>
    </article>
  )
}

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        kicker="07 — How I can help"
        title="Bring the idea. I'll help"
        accent="build the product."
        lede="Every software project is different. Instead of forcing every requirement into the same package, I structure development around what the product actually needs."
      />

      <RevealGroup className="mt-16 grid gap-6 lg:mt-24 lg:grid-cols-6" stagger={0.07}>
        {services.map((service) => (
          <RevealItem
            key={service.id}
            // Deep-link target so the footer can point at one specific service.
            id={`service-${service.id}`}
            className={`scroll-mt-32 ${service.featured ? 'lg:col-span-3' : 'lg:col-span-2'}`}
          >
            <ServiceCard service={service} />
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal delay={0.1}>
        <p className="mt-12 text-center text-sm text-ink-muted">
          Not sure which one fits?{' '}
          <Link
            href={whatsappUrl("Hi Tauhid — I'm not sure which engagement fits. Can we talk?")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ink underline decoration-brand decoration-2 underline-offset-4 transition-colors hover:text-brand"
          >
            Send the requirement
          </Link>{' '}
          and we&apos;ll identify the smallest practical path forward.
        </p>
      </Reveal>
    </Section>
  )
}
