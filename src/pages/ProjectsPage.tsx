import { projects } from '../data/content'

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M12 2a10 10 0 0 0-3.162 19.488c.5.092.684-.217.684-.481 0-.238-.009-.868-.014-1.704-2.782.605-3.369-1.341-3.369-1.341-.455-1.155-1.111-1.462-1.111-1.462-.909-.62.069-.608.069-.608 1.004.07 1.532 1.031 1.532 1.031.893 1.53 2.341 1.088 2.91.832.091-.647.35-1.089.636-1.339-2.22-.253-4.555-1.11-4.555-4.943 0-1.092.39-1.985 1.03-2.684-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.58 9.58 0 0 1 12 6.844c.85.004 1.705.115 2.505.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.699 1.028 1.592 1.028 2.684 0 3.842-2.339 4.687-4.566 4.935.359.309.679.92.679 1.855 0 1.338-.012 2.419-.012 2.748 0 .267.18.578.688.48A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

export function ProjectsPage() {
  return (
    <section className="mx-auto mt-16 w-full max-w-6xl">
      <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[color:var(--accent)]">Projects</p>
      <h1 className="text-4xl font-bold sm:text-5xl">Project archive</h1>
      <p className="mt-4 max-w-3xl text-[color:var(--text-muted)]">
        Placeholder cards inspired by your reference layout. You can later replace image areas, repository links and tags
        with real content.
      </p>

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
                  <h2 className="mt-1 text-xl font-semibold">{project.name}</h2>
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
  )
}
