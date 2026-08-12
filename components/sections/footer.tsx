import Link from 'next/link'
import { Github, Linkedin, Mail, MessageCircle, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'
import { siteConfig, contact, whatsappUrl } from '@/lib/site'

const groups = [
  {
    // Each one deep-links to its own card, not to the section as a whole.
    title: 'Services',
    links: [
      { label: 'MVP development', href: '#service-mvp' },
      { label: 'Production web apps', href: '#service-production-apps' },
      { label: 'Dashboards & internal tools', href: '#service-dashboards' },
      { label: 'Frontend development', href: '#service-frontend' },
      { label: 'Backend & APIs', href: '#service-backend' },
      { label: 'Existing product work', href: '#service-existing' },
      { label: 'Custom engagement', href: '#service-custom' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Selected work', href: '#work' },
      { label: 'What I build', href: '#build' },
      { label: 'The problem', href: '#problem' },
      { label: 'Why me', href: '#why' },
      { label: 'Process', href: '#process' },
      { label: 'Philosophy', href: '#philosophy' },
      { label: 'Experience', href: '#about' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Tech & capabilities', href: '#stack' },
      { label: 'Beyond the portfolio', href: '#beyond' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Start a project', href: '#contact' },
      { label: 'Download CV', href: siteConfig.cv },
      { label: 'GitHub', href: contact.github, external: true },
      { label: 'LinkedIn', href: contact.linkedin, external: true },
    ],
  },
] as const

const socials = [
  { icon: Github, label: 'GitHub', href: contact.github },
  { icon: Linkedin, label: 'LinkedIn', href: contact.linkedin },
  { icon: Mail, label: 'Email', href: `mailto:${contact.email}` },
  { icon: MessageCircle, label: 'WhatsApp', href: whatsappUrl() },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="grain relative isolate overflow-hidden border-t border-border bg-paper-sunken">
      {/* Atmospheric wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 -z-10 h-[36rem] w-[68rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl motion-safe:animate-drift"
        style={{
          background:
            'radial-gradient(circle, var(--brand) 0%, var(--brand-2) 45%, transparent 70%)',
        }}
      />

      <div className="mx-auto w-full max-w-[88rem] px-5 pb-12 pt-20 sm:px-8 sm:pt-24 lg:px-12">
        {/* --------------------------------------------- final conversion */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="headline text-[clamp(1.8rem,3.6vw,3rem)] text-ink">
                Founders bring the ambition.{' '}
                <em className="text-gradient font-normal italic">
                  I build the products that live up to it.
                </em>
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-xl leading-relaxed text-ink-muted">
                From first pixel to production deployment, I build digital products around real
                users, real workflows and real business requirements.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="glass-prism rounded-[1.75rem] p-7">
              <p className="eyebrow">Start here</p>
              <p className="mt-3 text-sm text-ink-muted">
                {siteConfig.responseTime}. Based in {siteConfig.location}.
              </p>

              <Link
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 flex items-center justify-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-brand"
              >
                <MessageCircle className="h-4 w-4" />
                Message on WhatsApp
              </Link>

              <Link
                href={`mailto:${contact.email}`}
                className="mt-3 flex items-center justify-center gap-2.5 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink/30"
              >
                <Mail className="h-4 w-4" />
                Email me
              </Link>
            </div>
          </Reveal>
        </div>

        {/* ------------------------------------------------- link groups */}
        <div className="mt-20 grid gap-10 border-t border-border pt-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="#home" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand via-brand-2 to-brand-3 text-xs font-bold text-white">
                TH
              </span>
              <span className="text-sm font-semibold tracking-tight text-ink">
                {siteConfig.name}
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
              {siteConfig.tagline}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-border text-ink-muted transition-colors hover:border-brand hover:text-brand"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {groups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="eyebrow">{group.title}</h2>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => {
                  const external = 'external' in link && link.external
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noopener noreferrer' : undefined}
                        className="group inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
                      >
                        {link.label}
                        {external && (
                          <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                        )}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          ))}
        </div>

        {/* --------------------------------------------- oversized wordmark */}
        {/* Scrolls right-to-left so the whole name is readable at any width
            instead of being clipped. Two copies + a -50% travel loop seamlessly. */}
        <div
          aria-hidden
          className="pause-on-hover mask-fade-x mt-20 select-none overflow-hidden [--marquee-duration:24s]"
        >
          <div className="animate-marquee flex w-max">
            {[0, 1].map((copy) => (
              <span
                key={copy}
                className="headline whitespace-nowrap pr-10 text-[clamp(3rem,13vw,11rem)] leading-none text-ink/[0.09]"
              >
                Tauhid Hasan Chowdhury
                <span className="text-brand/25"> — </span>
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-ink-muted sm:flex-row">
          <p>
            &copy; {year} {siteConfig.name}. Built for the web. Engineered for the real world.
          </p>
          <p>{siteConfig.location}</p>
        </div>
      </div>
    </footer>
  )
}
