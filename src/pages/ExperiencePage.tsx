import { experiences } from '../data/content'

export function ExperiencePage() {
  return (
    <section className="mx-auto mt-16 w-full max-w-6xl">
      <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[color:var(--accent)]">Experience</p>
      <h1 className="text-4xl font-bold sm:text-5xl">Full experience timeline</h1>
      <p className="mt-4 max-w-3xl text-[color:var(--text-muted)]">
        Placeholder page for full career timeline. In the next step we can attach real company details, achievements,
        metrics and external references.
      </p>

      <div className="mt-8 grid gap-4">
        {experiences.map((item) => (
          <article key={`${item.role}-${item.company}`} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
            <p className="text-xs uppercase tracking-[0.12em] text-[color:var(--accent)]">{item.period}</p>
            <h2 className="mt-1 text-2xl font-semibold">{item.role}</h2>
            <p className="text-[color:var(--text-muted)]">{item.company}</p>
            <p className="mt-3 text-[color:var(--text-muted)]">{item.details}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
