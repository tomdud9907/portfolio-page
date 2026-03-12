import { projects } from '../data/content'

export function ProjectsPage() {
  return (
    <section className="mx-auto mt-16 w-full max-w-6xl">
      <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[color:var(--accent)]">Projects</p>
      <h1 className="text-4xl font-bold sm:text-5xl">Project archive</h1>
      <p className="mt-4 max-w-3xl text-[color:var(--text-muted)]">
        Placeholder page for detailed project studies, screenshots, live links and technical breakdowns.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article key={project.name} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
            <p className="text-xs uppercase tracking-[0.12em] text-[color:var(--accent)]">{project.type}</p>
            <h2 className="mt-1 text-2xl font-semibold">{project.name}</h2>
            <p className="mt-3 text-[color:var(--text-muted)]">{project.summary}</p>
            <button type="button" className="mt-4 text-sm font-semibold text-[color:var(--accent)]">
              Open case study →
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
