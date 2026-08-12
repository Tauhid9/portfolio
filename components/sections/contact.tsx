'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, Loader2, Check, AlertCircle } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { Magnetic } from '@/components/motion/magnetic'
import { AuroraField } from '@/components/webgl/aurora-field'
import { contact, siteConfig, whatsappUrl } from '@/lib/site'

const availableFor = [
  'MVP development',
  'SaaS products',
  'Full-stack development',
  'Business applications',
  'Dashboards',
  'Internal tools',
  'Customer portals',
  'Existing product development',
]

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: contact.phoneDisplay,
    href: whatsappUrl(),
    external: true,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: contact.phoneDisplay,
    href: `tel:${contact.phone}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: siteConfig.location,
  },
]

const fields = [
  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
  { id: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com' },
  { id: 'subject', label: 'Subject', type: 'text', placeholder: "What's this about?" },
] as const

type Status = 'idle' | 'loading' | 'success' | 'error'

const emptyForm = { name: '', email: '', subject: '', message: '' }

export function Contact() {
  const [formData, setFormData] = useState(emptyForm)
  const [status, setStatus] = useState<Status>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setStatusMessage("Message sent. I'll reply within 24 hours — check your inbox for a confirmation.")
        setFormData(emptyForm)
      } else {
        setStatus('error')
        setStatusMessage(data.error || 'Failed to send. Please try again, or reach me on WhatsApp.')
      }
    } catch {
      setStatus('error')
      setStatusMessage('Something went wrong. Please try WhatsApp or email me directly.')
    }
  }

  const inputClass =
    'w-full rounded-2xl border border-border bg-paper px-5 py-3.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted/50 focus:border-brand'

  return (
    <section
      id="contact"
      className="grain relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
    >
      <AuroraField className="absolute inset-0 -z-20 h-full w-full" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-paper to-transparent" />

      <div className="mx-auto w-full max-w-[88rem]">
        {/* ------------------------------------------------------ final CTA */}
        <div className="max-w-4xl">
          <Reveal>
            <p className="eyebrow">14 — Have a product worth building?</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="headline mt-5 text-[clamp(2.4rem,6vw,5rem)] text-ink">
              Don&apos;t just launch it.{' '}
              <em className="text-gradient font-normal italic">Build it to perform.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted">
              Maybe you&apos;re starting with an idea. Maybe you already have the designs. Maybe your
              current application isn&apos;t working the way you need — or you&apos;ve outgrown
              spreadsheets and manual workflows and need something purpose-built. Wherever
              you&apos;re starting, let&apos;s turn it into working software.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Magnetic>
                <Link
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-ink px-7 py-4 text-sm font-medium text-paper shadow-[var(--shadow-md)] transition-shadow duration-300 hover:shadow-[var(--shadow-glow)] sm:w-auto"
                >
                  <span className="absolute inset-0 -z-10 bg-gradient-to-r from-brand via-brand-2 to-brand-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <MessageCircle className="h-4 w-4" />
                  Start a project on WhatsApp
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href="#contact-form"
                  className="glass-prism group inline-flex w-full items-center justify-center gap-2.5 rounded-full px-7 py-4 text-sm font-medium text-ink transition-colors duration-300 hover:bg-[var(--glass-bg-strong)] sm:w-auto"
                >
                  Send a message
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>

        {/* --------------------------------------------- channels + the form */}
        <div className="mt-20 grid gap-10 lg:mt-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <div className="glass-prism inline-flex items-center gap-2.5 rounded-full py-2 pl-3 pr-4">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand-3 opacity-70 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-3" />
                </span>
                <span className="eyebrow !text-ink">{siteConfig.availability}</span>
              </div>
            </Reveal>

            <RevealGroup className="mt-10 grid gap-px overflow-hidden rounded-[1.75rem] border border-border bg-border sm:grid-cols-2">
              {channels.map((channel) => {
                const Icon = channel.icon
                const body = (
                  <>
                    <Icon className="h-4 w-4 text-brand" strokeWidth={1.75} />
                    <span className="mt-4 block text-xs font-medium uppercase tracking-wider text-ink-muted">
                      {channel.label}
                    </span>
                    <span className="mt-1.5 block break-words text-sm font-medium text-ink">
                      {channel.value}
                    </span>
                  </>
                )

                return (
                  <RevealItem key={channel.label} className="bg-paper">
                    {channel.href ? (
                      <Link
                        href={channel.href}
                        target={channel.external ? '_blank' : undefined}
                        rel={channel.external ? 'noopener noreferrer' : undefined}
                        className="block h-full p-6 transition-colors hover:bg-paper-raised"
                      >
                        {body}
                      </Link>
                    ) : (
                      <div className="h-full p-6">{body}</div>
                    )}
                  </RevealItem>
                )
              })}
            </RevealGroup>

            <Reveal delay={0.1}>
              <div className="mt-10">
                <p className="eyebrow">Available for</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {availableFor.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-paper px-3.5 py-1.5 text-xs text-ink-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal direction="right" delay={0.08}>
            <div id="contact-form" className="glass-prism rounded-[2rem] p-8 sm:p-10">
              <p className="eyebrow">{siteConfig.responseTime}</p>
              <h3 className="headline mt-4 text-[clamp(1.6rem,2.6vw,2.2rem)] text-ink">
                Tell me what you&apos;re building
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                You don&apos;t need a perfect brief — what it is, who uses it, and what problem it
                solves is enough to start.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {fields.map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-muted"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      value={formData[field.id]}
                      onChange={handleChange}
                      required
                      placeholder={field.placeholder}
                      className={inputClass}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-muted"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="What are you building, who will use it, and what should it solve?"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {(status === 'success' || status === 'error') && (
                  <motion.p
                    role="status"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-2.5 rounded-2xl border px-5 py-4 text-sm ${
                      status === 'success'
                        ? 'border-brand-3/30 bg-brand-3/10 text-ink'
                        : 'border-destructive/30 bg-destructive/10 text-ink'
                    }`}
                  >
                    {status === 'success' ? (
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-3" strokeWidth={2.5} />
                    ) : (
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    )}
                    {statusMessage}
                  </motion.p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="group relative mt-2 inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-ink px-7 py-4 text-sm font-medium text-paper transition-shadow duration-300 hover:shadow-[var(--shadow-glow)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span className="absolute inset-0 -z-10 bg-gradient-to-r from-brand via-brand-2 to-brand-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
