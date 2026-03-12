import { experiences } from '../data/content'

const extraPlaceholders = [
  {
    role: 'UI Engineer',
    company: 'Northbound Studio',
    period: '2018 — 2019',
    summary: 'Built reusable UI patterns for editorial and e-commerce interfaces.',
    details:
      'Designed modular UI building blocks and improved consistency across landing pages with reusable components and shared tokens.',
    technologies: ['Vue', 'Sass', 'Storybook'],
  },
  {
    role: 'Web Developer Intern',
    company: 'Bright Path Agency',
    period: '2017 — 2018',
    summary: 'Supported frontend implementation for client campaigns and microsites.',
    details:
      'Worked on responsive templates, optimization tasks, and animation polish under senior team guidance.',
    technologies: ['JavaScript', 'Bootstrap', 'Gulp'],
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
              <div className="px-4 py-4">
                <p className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--accent)]">{item.period}</p>
                <h2 className="my-1 text-xl font-semibold">{item.role}</h2>
                <p className="text-[color:var(--text-muted)]">{item.company}</p>
                <p className="mt-2 text-[color:var(--text-muted)]">{item.summary}</p>
                <p className="mt-2 text-sm text-[color:var(--text-main)]/85">{item.details}</p>

                <div className="mt-3">
                  <span className="mb-2 block text-[10px] uppercase tracking-[0.12em] text-[color:var(--text-muted)]">
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
