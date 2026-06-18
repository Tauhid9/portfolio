import { educationData } from '@/data/education'

export function Education() {
  const degrees = educationData.filter((e) => e.type === 'degree')
  const certifications = educationData.filter((e) => e.type === 'certification')
  const courses = educationData.filter((e) => e.type === 'course')

  return (
    <section id="education" className="py-20 px-4 bg-accent/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Education & Certifications</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Academic background and professional certifications
          </p>
        </div>

        {/* Education Items */}
        {degrees.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Degrees</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {degrees.map((edu) => (
                <div key={edu.id} className="p-6 rounded-lg bg-card border border-border hover:border-blue-500/50 transition-colors">
                  <h4 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">{edu.institution}</p>
                  <p className="text-sm text-foreground/70 mb-2">{edu.field}</p>
                  <p className="text-xs text-foreground/60 mb-3">
                    {edu.startDate} - {edu.endDate}
                  </p>
                  {edu.details && <p className="text-sm text-foreground/60">{edu.details}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((edu) => (
                <div key={edu.id} className="p-6 rounded-lg bg-card border border-border hover:border-cyan-500/50 transition-colors">
                  <h4 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h4>
                  <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium mb-2">{edu.institution}</p>
                  <p className="text-sm text-foreground/70 mb-2">{edu.field}</p>
                  <p className="text-xs text-foreground/60">
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Courses */}
        {courses.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Courses & Training</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((edu) => (
                <div key={edu.id} className="p-6 rounded-lg bg-card border border-border hover:border-blue-500/50 transition-colors">
                  <h4 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h4>
                  <p className="text-sm text-foreground/70 font-medium mb-2">{edu.institution}</p>
                  <p className="text-sm text-foreground/70 mb-2">{edu.field}</p>
                  <p className="text-xs text-foreground/60 mb-3">
                    {edu.startDate} - {edu.endDate}
                  </p>
                  {edu.details && <p className="text-sm text-foreground/60">{edu.details}</p>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
