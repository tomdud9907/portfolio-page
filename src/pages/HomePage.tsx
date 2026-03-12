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

      <section id="contact" className="mx-auto mt-20 w-full max-w-6xl">
        <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[color:var(--accent)]">Contact</p>
        <h2 className="text-3xl font-bold sm:text-4xl">Get In Touch</h2>
        <p className="mt-4 max-w-3xl text-[color:var(--text-muted)] sm:text-lg">
          I&apos;m always open to new opportunities and collaborations. Whether you have a question or just want to
          say hi, I&apos;ll try my best to get back to you!
        </p>

        <div className="mt-6 flex items-center gap-4">
          <a
            href="#"
            aria-label="GitHub profile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--text-main)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.84a9.3 9.3 0 0 1 2.5.35c1.9-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.64 1.03 2.76 0 3.95-2.35 4.82-4.58 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="LinkedIn profile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--text-main)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-9.5 14H7V10h2.5v7Zm-1.25-8.03a1.45 1.45 0 1 1 0-2.9 1.45 1.45 0 0 1 0 2.9ZM17 17h-2.5v-3.5c0-.96-.04-2.2-1.34-2.2-1.34 0-1.54 1.05-1.54 2.13V17H9.12V10h2.4v.96h.04c.33-.64 1.15-1.32 2.38-1.32 2.54 0 3.01 1.7 3.01 3.91V17Z" />
            </svg>
          </a>
        </div>

        <a
          href="mailto:tomdud9907@gmail.com"
          className="mt-6 inline-flex rounded-full bg-linear-to-r from-sky-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-slate-50"
        >
          Say Hi
        </a>
      </section>

    </>
  )
}
