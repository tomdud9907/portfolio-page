import { experiences } from '../data/content'

const extraPlaceholders = [
  {
    role: 'Recruitment Consultant',
    company: '24/7 Recruitment',
    period: '2016 — 2018',
    summary: 'Managed sourcing, placements and client relations, regularly hitting hiring goals.',
    keyImpact: [
      'Sourced, screened, and placed candidates to meet client needs while building strong professional relationships and achieving placement targets.',
    ],
    technologies: ['Excel', 'PowerBI', 'Universe'],
  },
]

const fullTimeline = [...experiences, ...extraPlaceholders]

export function ExperiencePage() {
  return (
    <section className="mx-auto mt-16 w-full max-w-6xl">
      <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[color:var(--accent)]">Experience</p>
      <h1 className="text-4xl font-bold sm:text-5xl">Full experience timeline</h1>
      <p className="mt-4 max-w-3xl text-[color:var(--text-muted)]">
        Placeholder timeline styled like homepage, extended with more roles so you can later replace content with real
        milestones and achievements.
      </p>

      <div className="experience-list mt-8">
        {fullTimeline.map((item, index) => {
          const sideClass = index % 2 === 0 ? 'md:justify-self-start experience-left' : 'md:justify-self-end experience-right'

          return (
            <article
              key={`${item.role}-${item.company}`}
              className={`experience-card ${sideClass} relative w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] md:w-[calc(50%-1.4rem)]`}
            >
              <div className="space-y-4 px-4 py-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--accent)]">{item.period}</p>
                  <h2 className="my-1 text-xl font-semibold text-[color:var(--accent)]">{item.role}</h2>
                  <p className="text-[color:var(--text-muted)]">{item.company}</p>
                  <p className="mt-2 text-[color:var(--text-muted)]">{item.summary}</p>
                </div>

                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.11em] text-[color:var(--text-muted)]">Key impact</p>
                  <ul className="list-disc space-y-1.5 pl-5 text-[color:var(--text-main)]/90 marker:text-[color:var(--accent)]">
                    {item.keyImpact.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.11em] text-[color:var(--text-muted)]">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-2.5 py-1 text-xs text-[color:var(--text-main)]/85"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
