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

export default function App() {
  return (
    <main className="landing">
      <div className="aurora aurora--one" aria-hidden="true" />
      <div className="aurora aurora--two" aria-hidden="true" />

      <header className="topbar">
        <a href="#" className="brand" aria-label="Tomasz Duda home">
          TD
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
    </main>
  )
}
