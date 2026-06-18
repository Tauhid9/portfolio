'use client'

import { experienceData } from '@/data/experience'

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">Experience</h2>

        <div className="space-y-12">
          {experienceData.map((exp) => {
            const isCurrent = exp.endDate === 'Present' || !exp.endDate
            return (
              <div key={exp.id} className="pb-12 border-b border-border/30 last:border-b-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                    <p className="text-foreground/70">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {isCurrent && (
                      <span className="px-2 py-1 text-xs font-medium bg-green-500/20 text-green-700 dark:text-green-400 border border-green-500/30 rounded">
                        Current
                      </span>
                    )}
                    <span className="text-sm font-medium text-foreground/60 whitespace-nowrap">
                      {exp.startDate} – {exp.endDate || 'Present'}
                    </span>
                  </div>
                </div>

                <p className="text-base text-foreground/70 mb-3">{exp.description}</p>

                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="space-y-1 mt-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-foreground/60 flex gap-2">
                        <span className="text-foreground/40">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
