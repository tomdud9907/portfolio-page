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
  },
  {
    role: 'Front-end Developer',
    company: 'Blue Orbit',
    period: '2021 — 2023',
    summary: 'Delivered responsive product pages and dashboard modules in React + TypeScript.',
    details:
      'Implemented modular component structure, collaborated closely with design, and reduced CSS bundle size by introducing scoped styling conventions.',
  },
  {
    role: 'Junior Web Developer',
    company: 'Pixel Forge',
    period: '2019 — 2021',
    summary: 'Created landing pages and interactive sections for client websites.',
    details:
      'Focused on clean semantic HTML, animation polish, and accessibility fixes that improved Lighthouse and usability scores.',
  },
]

export default function App() {
  const [openItem, setOpenItem] = useState<number | null>(0)

  return (
    <main className="landing">
      <div className="aurora aurora--one" aria-hidden="true" />
      <div className="aurora aurora--two" aria-hidden="true" />

      <header className="topbar">
        <a href="#" className="brand" aria-label="Tomasz Duda home">
          Tomasz Duda
        </a>

        <nav className="nav-shell" aria-label="Main navigation">
          <ul className="menu">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section className="hero">
        <p className="eyebrow">Front-end Developer</p>
        <h1>
          Hi, I&apos;m <span className="animated-name">Tomasz Duda</span>
        </h1>
        <p className="description">
          I build modern, smooth, and interactive web experiences with React and TypeScript.
        </p>

        <div className="actions">
          <a className="btn btn-primary" href="#projects">
            View projects
          </a>
          <a className="btn btn-ghost" href="#about">
            Let&apos;s talk
          </a>
        </div>

        <ul className="socials" aria-label="Social media links">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </section>

      <section id="experience" className="experience-section">
        <div className="experience-header">
          <p className="eyebrow">Experience</p>
          <h2>Selected timeline</h2>
        </div>

        <div className="experience-list">
          {experiences.map((item, index) => {
            const isOpen = openItem === index

            return (
              <article className={`experience-card ${isOpen ? 'is-open' : ''}`} key={`${item.role}-${item.company}`}>
                <button
                  type="button"
                  className="experience-toggle"
                  onClick={() => setOpenItem(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <div>
                    <p className="experience-period">{item.period}</p>
                    <h3>{item.role}</h3>
                    <p className="experience-company">{item.company}</p>
                    <p className="experience-summary">{item.summary}</p>
                  </div>
                  <span className="experience-arrow" aria-hidden="true">
                    ↓
                  </span>
                </button>

                <div className="experience-details" aria-hidden={!isOpen}>
                  <p>{item.details}</p>
                </div>
              </article>
            )
          })}
        </div>

        <a className="timeline-cta" href="#">
          See full timeline
        </a>
      </section>
    </main>
  )
}
