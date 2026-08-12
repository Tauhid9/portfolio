import { Trophy, GraduationCap } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { Section, SectionHeading } from '@/components/sections/section-shell'
import { experienceData } from '@/data/experience'
import { educationData } from '@/data/education'

const degrees = educationData.filter((entry) => entry.type === 'degree')
const contests = educationData.filter((entry) => entry.achievements?.length)

const learningAreas = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'FastAPI',
  'Databases',
  'API architecture',
  'Cloud deployment',
  'UI implementation',
  'Performance',
  'AI-assisted engineering',
]

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        kicker="12 — Where I've been building"
        title="Professional work. Client work."
        accent="Product work."
        lede="Three tracks running in parallel: production engineering inside a software company, client delivery through my own studio, and independent work that keeps the fundamentals sharp."
      />

      {/* ------------------------------------------------------- experience */}
      <RevealGroup className="mt-16 lg:mt-24" stagger={0.08}>
        {experienceData.map((role) => (
          <RevealItem key={role.id}>
            <article className="group grid gap-6 border-t border-border py-10 last:border-b lg:grid-cols-[1fr_1.6fr] lg:gap-16 lg:py-14">
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-ink">{role.company}</h3>
                <p className="mt-2 text-sm font-medium text-brand">{role.position}</p>
                <p className="mt-3 font-mono text-xs text-ink-muted">
                  {role.startDate} — {role.endDate ?? 'Present'}
                </p>
              </div>

              <div>
                <p className="leading-relaxed text-ink-muted">{role.description}</p>

                <ul className="mt-6 space-y-3">
                  {role.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3.5 text-sm text-ink-muted">
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand transition-transform duration-300 group-hover:scale-150"
                      />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>

      {/* ---------------------------------------- education & achievements */}
      <div className="mt-24 grid gap-6 lg:mt-36 lg:grid-cols-2">
        <Reveal direction="left">
          <div className="glass-prism h-full rounded-[2rem] p-8 sm:p-10">
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 text-white shadow-[var(--shadow-glow)]">
                <GraduationCap className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <p className="eyebrow">Education</p>
            </div>

            <h3 className="headline mt-7 text-[clamp(1.45rem,2.3vw,2rem)] text-ink">
              Where the foundation started
            </h3>

            <ul className="mt-8 space-y-6">
              {degrees.map((entry) => (
                <li key={entry.id} className="border-b border-border pb-6 last:border-0 last:pb-0">
                  <p className="text-sm font-semibold text-ink">{entry.degree}</p>
                  <p className="mt-1 text-sm text-ink-muted">{entry.institution}</p>
                  <p className="mt-2 font-mono text-xs text-ink-muted/70">
                    {entry.startDate} — {entry.endDate}
                  </p>
                  {entry.details && (
                    <p className="mt-2 text-xs text-ink-muted">{entry.details}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.08}>
          <div className="glass-prism flex h-full flex-col rounded-[2rem] p-8 sm:p-10">
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-2 to-brand-3 text-white shadow-[var(--shadow-glow)]">
                <Trophy className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <p className="eyebrow">Competitive programming</p>
            </div>

            <h3 className="headline mt-7 text-[clamp(1.45rem,2.3vw,2rem)] text-ink">
              Before building products, I learned to solve problems
            </h3>

            <ul className="mt-8 space-y-4">
              {contests.flatMap((entry) =>
                (entry.achievements ?? []).map((achievement) => (
                  <li
                    key={achievement}
                    className="rounded-2xl border border-border bg-paper px-5 py-4 text-sm text-ink"
                  >
                    {achievement}
                  </li>
                )),
              )}
            </ul>

            <div className="mt-auto pt-8">
              <p className="eyebrow">Continuous learning · 2020 — present</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {learningAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-border px-3 py-1.5 text-xs text-ink-muted"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
