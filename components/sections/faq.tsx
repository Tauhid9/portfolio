'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Section, SectionHeading } from '@/components/sections/section-shell'
import { RevealGroup, RevealItem } from '@/components/motion/reveal'
import { faqs } from '@/data/faq'

const EASE = [0.16, 1, 0.3, 1] as const

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Section id="faq">
      <SectionHeading
        kicker="13 — Frequently asked questions"
        title="Before we build, you probably"
        accent="have questions."
      />

      <RevealGroup className="mt-14 lg:mt-20" stagger={0.04}>
        {faqs.map((faq, index) => {
          const isOpen = open === index
          const panelId = `faq-panel-${index}`
          const buttonId = `faq-button-${index}`

          return (
            <RevealItem key={faq.question}>
              <div className="border-t border-border last:border-b">
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="group flex w-full items-start gap-5 py-7 text-left"
                  >
                    <span className="mt-1 font-mono text-xs text-ink-muted/60">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="flex-1 text-lg font-medium text-ink transition-colors group-hover:text-brand sm:text-xl">
                      {faq.question}
                    </span>

                    <span
                      aria-hidden
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border transition-all duration-300 group-hover:border-brand ${
                        isOpen ? 'rotate-45 border-brand bg-brand text-white' : 'text-ink-muted'
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-10 pr-4 sm:pl-14">
                        <p className="max-w-3xl leading-relaxed text-ink-muted">{faq.answer}</p>

                        {faq.points && (
                          <ul className="mt-5 flex flex-wrap gap-2">
                            {faq.points.map((point) => (
                              <li
                                key={point}
                                className="rounded-full border border-border bg-paper px-3 py-1.5 text-xs text-ink-muted"
                              >
                                {point}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </RevealItem>
          )
        })}
      </RevealGroup>
    </Section>
  )
}
