import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Github } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { Section, SectionHeading } from '@/components/sections/section-shell'
import { projects, type Project } from '@/data/projects'

const featured = projects.filter((project) => project.featured)
const secondary = projects.filter((project) => !project.featured)

function ProjectLinks({ project }: { project: Project }) {
  if (!project.live && !project.github) return null

  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      {project.live && (
        <Link
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors duration-300 hover:bg-brand"
        >
          Explore project
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      )}
      {project.github && (
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink/30"
        >
          <Github className="h-4 w-4" />
          Source
        </Link>
      )}
    </div>
  )
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  // Alternate which side the screenshot lands on for editorial rhythm.
  const flipped = index % 2 === 1

  return (
    <article className="group grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal
        direction={flipped ? 'right' : 'left'}
        className={flipped ? 'lg:order-2' : 'lg:order-1'}
      >
        <div className="glass-prism relative aspect-[16/11] overflow-hidden rounded-[1.75rem] p-2 shadow-[var(--shadow-md)] transition-shadow duration-500 group-hover:shadow-[var(--shadow-lg)]">
          <div className="relative h-full w-full overflow-hidden rounded-[1.35rem] bg-paper-sunken">
            <Image
              src={project.image}
              alt={`${project.title} interface`}
              fill
              sizes="(max-width: 1024px) 100vw, 44rem"
              className="object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
            />
          </div>
        </div>
      </Reveal>

      <Reveal
        direction={flipped ? 'left' : 'right'}
        delay={0.08}
        className={flipped ? 'lg:order-1' : 'lg:order-2'}
      >
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-ink-muted/60">
              {String(index + 1).padStart(2, '0')}
            </span>
            {project.client && (
              <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-ink-muted">
                {project.client}
              </span>
            )}
            <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
              {project.category}
            </span>
          </div>

          <h3 className="headline mt-5 text-[clamp(1.7rem,3vw,2.6rem)] text-ink">{project.title}</h3>

          <p className="mt-5 leading-relaxed text-ink-muted">{project.longDescription}</p>

          {project.highlights && (
            <ul className="mt-7 space-y-2.5">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm text-ink-muted">
                  <span
                    aria-hidden
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          )}

          <ul className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-ink-muted"
              >
                {tech}
              </li>
            ))}
          </ul>

          {project.impact && (
            <p className="mt-6 border-l-2 border-brand/40 pl-4 text-sm italic text-ink-muted">
              {project.impact}
            </p>
          )}

          <ProjectLinks project={project} />
        </div>
      </Reveal>
    </article>
  )
}

export function Work() {
  return (
    <Section id="work">
      <SectionHeading
        kicker="03 — Selected work"
        title="Products built around"
        accent="real problems."
        lede="Platforms, portals, dashboards and operational systems delivered for businesses where the software has to work inside processes that already exist."
      />

      <div className="mt-16 flex flex-col gap-24 lg:mt-24 lg:gap-36">
        {featured.map((project, index) => (
          <FeaturedProject key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Secondary work */}
      <div className="mt-28 lg:mt-40">
        <Reveal>
          <p className="eyebrow">Also shipped</p>
        </Reveal>

        <RevealGroup className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {secondary.map((project) => (
            <RevealItem key={project.id}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-paper-raised transition-shadow duration-500 hover:shadow-[var(--shadow-md)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-paper-sunken">
                  <Image
                    src={project.image}
                    alt={`${project.title} interface`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 28rem"
                    className="object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <span className="text-xs font-medium text-brand">{project.category}</span>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                    {project.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-border px-2.5 py-1 text-[0.7rem] text-ink-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {(project.live || project.github) && (
                    <div className="mt-6 flex items-center gap-4 text-sm">
                      {project.live && (
                        <Link
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-medium text-ink transition-colors hover:text-brand"
                        >
                          Visit
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      )}
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-ink-muted transition-colors hover:text-ink"
                        >
                          <Github className="h-3.5 w-3.5" />
                          Source
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  )
}
