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
        <a href="#" className="brand">
          TD
        </a>
        <nav>
          <ul className="menu">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
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
          <a className="btn btn-ghost" href="#contact">
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
