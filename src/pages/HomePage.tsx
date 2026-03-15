import { experiences, projects, socialLinks } from '../data/content'

type HomePageProps = {
  openItem: number | null
  setOpenItem: (value: number | null) => void
  onNavigate: (to: string) => void
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M12 2a10 10 0 0 0-3.162 19.488c.5.092.684-.217.684-.481 0-.238-.009-.868-.014-1.704-2.782.605-3.369-1.341-3.369-1.341-.455-1.155-1.111-1.462-1.111-1.462-.909-.62.069-.608.069-.608 1.004.07 1.532 1.031 1.532 1.031.893 1.53 2.341 1.088 2.91.832.091-.647.35-1.089.636-1.339-2.22-.253-4.555-1.11-4.555-4.943 0-1.092.39-1.985 1.03-2.684-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.58 9.58 0 0 1 12 6.844c.85.004 1.705.115 2.505.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.699 1.028 1.592 1.028 2.684 0 3.842-2.339 4.687-4.566 4.935.359.309.679.92.679 1.855 0 1.338-.012 2.419-.012 2.748 0 .267.18.578.688.48A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

export function HomePage({ openItem, setOpenItem, onNavigate }: HomePageProps) {
  return (
    <>
      <section className="mx-auto mt-16 w-full max-w-6xl">
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[color:var(--accent)]">Front-end Developer</p>
        <h1 className="max-w-[13ch] text-4xl leading-[1.08] font-bold sm:text-6xl">
          Hi, I&apos;m <span className="animated-name brand-font align-baseline">Tomasz Duda</span>
        </h1>
        <p className="mt-5 max-w-2xl text-[color:var(--text-muted)] sm:text-lg">
          Software engineer focused on React and TypeScript, experienced in building and scaling large customer-facing platforms such as Sky Mobile.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={() => onNavigate('/projects')}
            className="w-full rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-3 text-sm font-semibold sm:w-auto"
          >
            View my projects
          </button>
          <a
            href="mailto:tomdud9907@gmail.com"
            onClick={(event) => {
              event.preventDefault()
              window.open('mailto:tomdud9907@gmail.com', '_self')
            }}
            className="w-full rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-3 text-center text-sm font-semibold sm:w-auto"
          >
            Let&apos;s talk
          </a>
          <a
            href="https://tomaszduda.vercel.app/Tomasz%20Duda_CV_Final.pdf"
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-full bg-linear-to-r from-sky-500 to-indigo-500 px-5 py-3 text-center text-sm font-semibold text-slate-50 sm:w-auto"
          >
            View my CV
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
                  <span
                    className={`inline-flex text-[color:var(--accent)] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 20 20" className="h-5 w-5 fill-current">
                      <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.13l3.71-3.9a.75.75 0 1 1 1.08 1.04l-4.25 4.46a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z" />
                    </svg>
                  </span>
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
        <div className="mt-8">
          <button
            type="button"
            onClick={() => onNavigate('/experience')}
            className="rounded-full bg-linear-to-r from-sky-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-slate-50"
          >
            See full timeline
          </button>
        </div>
      </section>

      <section id="projects" className="mx-auto mt-16 w-full max-w-6xl">
        <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[color:var(--accent)]">Projects</p>
        <h2 className="text-3xl font-bold sm:text-4xl">Featured placeholders</h2>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]"
            >
              <div className="relative h-44 border-b border-[color:var(--border)] bg-black/20">
                {project.imageUrl ? (
                  <>
                    <img src={project.imageUrl} alt={`${project.name} preview`} className="h-full w-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/20 to-transparent" />
                  </>
                ) : (
                  <div className="flex h-full items-center justify-center text-sm uppercase tracking-[0.12em] text-[color:var(--text-muted)]">
                    {project.imagePlaceholder}
                  </div>
                )}
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--accent)]">{project.type}</p>
                    <h3 className="mt-1 text-xl font-semibold">{project.name}</h3>
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.name} repository`}
                    className="rounded-full border border-[color:var(--border)] p-2 text-[color:var(--text-muted)] transition hover:text-[color:var(--text-main)]"
                  >
                    <GithubIcon />
                  </a>
                </div>

                <p className="mt-3 text-[color:var(--text-muted)]">{project.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-2.5 py-1 text-xs text-[color:var(--text-main)]/85"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
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
            href="https://github.com/tomdud9907"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--text-main)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.84a9.3 9.3 0 0 1 2.5.35c1.9-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.64 1.03 2.76 0 3.95-2.35 4.82-4.58 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/tomasz-duda-a27754256/"
            target="_blank"
            rel="noreferrer"
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
