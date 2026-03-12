import { experiences, projects, socialLinks } from '../data/content'

type HomePageProps = {
  openItem: number | null
  setOpenItem: (value: number | null) => void
}

export function HomePage({ openItem, setOpenItem }: HomePageProps) {
  return (
    <>
      <section className="mx-auto mt-16 w-full max-w-6xl">
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[color:var(--accent)]">Front-end Developer</p>
        <h1 className="max-w-[13ch] text-4xl leading-[1.08] font-bold sm:text-6xl">
          Hi, I&apos;m <span className="animated-name brand-font align-baseline">Tomasz Duda</span>
        </h1>
        <p className="mt-5 max-w-2xl text-[color:var(--text-muted)] sm:text-lg">
          I build modern, smooth, and interactive web experiences with React and TypeScript.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a className="rounded-full bg-linear-to-r from-sky-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-slate-50" href="/projects">
            View projects
          </a>
          <a className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-3 text-sm font-semibold" href="/about">
            Let&apos;s talk
          </a>
        </div>

        <ul className="mt-9 flex flex-wrap gap-4 text-[color:var(--text-muted)]" aria-label="Social media links">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="border-b border-transparent transition hover:border-current">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section id="experience" className="mx-auto mt-20 w-full max-w-6xl">
        <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[color:var(--accent)]">Experience</p>
        <h2 className="text-3xl font-bold sm:text-4xl">Selected timeline</h2>

        <div className="experience-list mt-6">
          {experiences.slice(0, 2).map((item, index) => {
            const isOpen = openItem === index
            const sideClass = index % 2 === 0 ? 'md:justify-self-start experience-left' : 'md:justify-self-end experience-right'

            return (
              <article
                className={`experience-card ${sideClass} relative w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] md:w-[calc(50%-1.4rem)]`}
                key={`${item.role}-${item.company}`}
              >
                <button
                  type="button"
                  className="flex w-full cursor-pointer justify-between gap-4 bg-transparent px-4 py-4 text-left"
                  onClick={() => setOpenItem(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--accent)]">{item.period}</p>
                    <h3 className="my-1 text-xl font-semibold text-[color:var(--accent)]">{item.role}</h3>
                    <p className="text-[color:var(--text-muted)]">{item.company}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[color:var(--text-main)]/78">{item.summary}</p>
                  </div>
                  <span className={`text-lg text-[color:var(--accent)] transition ${isOpen ? 'rotate-180' : ''}`}>⌃</span>
                </button>
                <div
                  className={`overflow-hidden border-t transition-all duration-300 ${
                    isOpen ? 'max-h-[28rem] border-[color:var(--border)]' : 'max-h-0 border-transparent'
                  }`}
                >
                  <div className="space-y-4 px-4 pb-4 pt-3">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.11em] text-[color:var(--text-muted)]">Key impact</p>
                      <ul className="list-disc space-y-1.5 pl-5 text-[color:var(--text-main)]/90 marker:text-[color:var(--accent)]">
                        {item.keyImpact.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.11em] text-[color:var(--text-muted)]">Technologies</p>
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
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section id="projects" className="mx-auto mt-16 w-full max-w-6xl">
        <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[color:var(--accent)]">Projects</p>
        <h2 className="text-3xl font-bold sm:text-4xl">Featured placeholders</h2>

        <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
              <p className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--accent)]">{project.type}</p>
              <h3 className="mt-2 text-xl font-semibold">{project.name}</h3>
              <p className="mt-1 text-[color:var(--text-muted)]">{project.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
