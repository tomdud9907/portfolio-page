export function AboutPage() {
  const highlights = [
    '8+ years of frontend and product collaboration experience',
    'Strong focus on UX details and animation polish',
    'Comfortable with React, TypeScript, and scalable UI systems',
  ]

  return (
    <section className="mx-auto mt-16 w-full max-w-6xl">
      <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[color:var(--accent)]">About</p>
      <h1 className="text-4xl font-bold sm:text-5xl">About Tomasz Duda</h1>
      <p className="mt-4 max-w-3xl text-[color:var(--text-muted)]">
        Placeholder about page — ideal place for full bio, work philosophy, stack preferences and fun facts.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <article key={item} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
            <h2 className="text-lg font-semibold">Highlight</h2>
            <p className="mt-2 text-[color:var(--text-muted)]">{item}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
