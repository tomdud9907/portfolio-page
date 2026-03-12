import { useState } from 'react'

const navItems = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
]

const socialLinks = [
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Email', href: 'mailto:tomasz@example.com' },
]

const experiences = [
  {
    role: 'Senior Front-end Developer',
    company: 'Nova Labs',
    period: '2023 — now',
    summary: 'Leading UI architecture and mentoring front-end team for product platform.',
    details:
      'Built design-system foundations, improved app performance, and introduced reusable animation patterns across key customer flows.',
    technologies: ['React', 'TypeScript', 'Framer Motion'],
  },
  {
    role: 'Front-end Developer',
    company: 'Blue Orbit',
    period: '2021 — 2023',
    summary: 'Delivered responsive product pages and dashboard modules in React + TypeScript.',
    details:
      'Implemented modular component structure, collaborated closely with design, and reduced CSS bundle size by introducing scoped styling conventions.',
    technologies: ['Next.js', 'Tailwind', 'Chart.js'],
  },
  {
    role: 'Junior Web Developer',
    company: 'Pixel Forge',
    period: '2019 — 2021',
    summary: 'Created landing pages and interactive sections for client websites.',
    details:
      'Focused on clean semantic HTML, animation polish, and accessibility fixes that improved Lighthouse and usability scores.',
    technologies: ['JavaScript', 'SCSS', 'GSAP'],
  },
]

const projects = [
  {
    name: 'Fintrack Dashboard',
    type: 'SaaS platform',
    summary: 'Analytics-heavy dashboard with modular widgets and custom chart interactions.',
  },
  {
    name: 'Studio Portfolio',
    type: 'Marketing site',
    summary: 'High-conversion landing pages with motion-driven storytelling and lead capture.',
  },
  {
    name: 'DevFlow Workspace',
    type: 'Productivity app',
    summary: 'Collaborative project board with realtime activity feed and task automation UX.',
  },
]

export default function App() {
  const [openItem, setOpenItem] = useState<number | null>(0)
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <main className={`landing ${isDarkMode ? '' : 'theme-light'} min-h-screen overflow-hidden px-5 pb-20 pt-8 sm:px-10`}>
      <div className="aurora aurora-one" aria-hidden="true" />
      <div className="aurora aurora-two" aria-hidden="true" />

      <header className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <a href="#" className="brand-font text-xl font-bold tracking-wide text-[color:var(--text-main)]" aria-label="Tomasz Duda home">
          Tomasz Duda
        </a>

        <nav className="nav-shell" aria-label="Main navigation">
          <ul className="nav-font flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.11em] text-[color:var(--text-muted)] sm:gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="transition hover:text-[color:var(--text-main)]">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="theme-toggle"
                onClick={() => setIsDarkMode((prev) => !prev)}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? '☀' : '☾'}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <section className="mx-auto mt-16 w-full max-w-6xl">
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[color:var(--accent)]">Front-end Developer</p>
        <h1 className="max-w-[13ch] text-4xl leading-[1.08] font-bold sm:text-6xl">
          Hi, I&apos;m <span className="animated-name brand-font align-baseline">Tomasz Duda</span>
        </h1>
        <p className="mt-5 max-w-2xl text-[color:var(--text-muted)] sm:text-lg">
          I build modern, smooth, and interactive web experiences with React and TypeScript.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a className="rounded-full bg-linear-to-r from-sky-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-slate-50" href="#projects">
            View projects
          </a>
          <a
            className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-3 text-sm font-semibold"
            href="#about"
          >
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
          {experiences.map((item, index) => {
            const isOpen = openItem === index
            const sideClass = index % 2 === 0 ? 'md:justify-self-start experience-left' : 'md:justify-self-end experience-right'

            return (
              <article
                className={`experience-card ${sideClass} ${isOpen ? 'is-open' : ''} relative w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] md:w-[calc(50%-1.4rem)]`}
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
                    <h3 className="my-1 text-xl font-semibold">{item.role}</h3>
                    <p className="text-[color:var(--text-muted)]">{item.company}</p>
                    <p className="mt-1 text-[color:var(--text-muted)]">{item.summary}</p>
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
                  <span className={`text-lg text-[color:var(--accent)] transition ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                    ↓
                  </span>
                </button>

                <div className={`overflow-hidden border-t transition-all ${isOpen ? 'max-h-36 border-[color:var(--border)]' : 'max-h-0 border-transparent'}`}>
                  <p className="px-4 pb-4 pt-3 text-[color:var(--text-main)]/85">{item.details}</p>
                </div>
              </article>
            )
          })}
        </div>

        <a
          className="mt-5 inline-flex rounded-full border border-[color:var(--accent)]/45 bg-[color:var(--accent)]/15 px-4 py-2 text-sm text-[color:var(--accent)]"
          href="#"
        >
          See full timeline
        </a>
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
              <a href="#" className="mt-4 inline-block text-[color:var(--accent)]/90">
                Preview details →
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
