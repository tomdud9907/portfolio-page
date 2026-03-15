import { useEffect, useState, type ReactNode } from 'react'
import { navItems } from '../data/content'

type SiteShellProps = {
  children: ReactNode
  isDarkMode: boolean
  onToggleTheme: () => void
  pathname: string
  onNavigate: (to: string) => void
}

export function SiteShell({ children, isDarkMode, onToggleTheme, pathname, onNavigate }: SiteShellProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showGoTop, setShowGoTop] = useState(false)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const onScroll = () => setShowGoTop(window.scrollY > 280)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isMobileMenuOpen])

  const handleNavigate = (to: string) => {
    onNavigate(to)
    setIsMobileMenuOpen(false)
  }

  return (
    <main className={`landing ${isDarkMode ? '' : 'theme-light'} min-h-screen overflow-hidden px-5 pb-20 pt-8 sm:px-10`}>
      <div className="aurora aurora-one" aria-hidden="true" />
      <div className="aurora aurora-two" aria-hidden="true" />

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => handleNavigate('/')}
          className="brand-font bg-transparent p-0 text-[color:var(--text-main)]"
          aria-label="Tomasz Duda home"
        >
          <span className="inline-flex items-center rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1.5 text-2xl font-bold tracking-[0.12em] shadow-[0_0_20px_rgba(56,189,248,0.15)] sm:text-[1.9rem]">
            TD
          </span>
        </button>

        <nav className="nav-shell hidden md:block" aria-label="Main navigation">
          <ul className="nav-font flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.11em] text-[color:var(--text-muted)] sm:gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => handleNavigate(item.href)}
                    className={`bg-transparent p-0 transition hover:text-[color:var(--text-main)] ${isActive ? 'text-[color:var(--text-main)]' : ''}`}
                  >
                    {item.label}
                  </button>
                </li>
              )
            })}
            <li>
              <button
                type="button"
                className="theme-toggle"
                onClick={onToggleTheme}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? '\u2600' : '\u263D'}
              </button>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="theme-toggle rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1.5 text-xs uppercase tracking-[0.08em] text-[color:var(--text-main)]"
            onClick={onToggleTheme}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? 'Light' : 'Dark'}
          </button>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--text-main)]"
            aria-label="Open menu"
          >
            <span className="relative block h-4 w-5">
              <span className="absolute left-0 top-0 h-0.5 w-5 bg-current" />
              <span className="absolute left-0 top-[7px] h-0.5 w-5 bg-current" />
              <span className="absolute left-0 top-[14px] h-0.5 w-5 bg-current" />
            </span>
          </button>
        </div>
      </header>

      {children}

      <footer className="mx-auto mt-16 flex w-full max-w-6xl items-center justify-center border-t border-[color:var(--border)]/70 pt-6 text-xs text-[color:var(--text-muted)] sm:text-sm">
        <p>&copy; {currentYear} Tomasz Duda</p>
      </footer>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-5 right-5 z-40 inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--text-main)] shadow-[0_8px_30px_rgba(2,6,23,0.4)] transition md:hidden ${
          showGoTop ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
        aria-label="Go to top"
      >
        Go to top
      </button>

      {isMobileMenuOpen ? (
        <div
          className={`fixed inset-0 z-50 flex flex-col px-5 pb-8 pt-8 backdrop-blur-md md:hidden ${
            isDarkMode ? 'bg-slate-950/86' : 'bg-slate-100/92'
          }`}
        >
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
            <span className="brand-font inline-flex items-center rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1.5 text-2xl font-bold tracking-[0.12em] shadow-[0_0_20px_rgba(56,189,248,0.15)]">
              TD
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="theme-toggle rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1.5 text-xs uppercase tracking-[0.08em] text-[color:var(--text-main)]"
                onClick={onToggleTheme}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? 'Light' : 'Dark'}
              </button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-xl text-[color:var(--text-main)]"
                aria-label="Close menu"
              >
                X
              </button>
            </div>
          </div>

          <nav className="mx-auto mt-16 flex w-full max-w-6xl flex-1 items-center" aria-label="Mobile navigation">
            <ul className="nav-font w-full space-y-6 text-center text-4xl font-bold uppercase tracking-[0.1em] text-[color:var(--text-main)]">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => handleNavigate(item.href)}
                      className={`w-full bg-transparent px-4 py-2 transition hover:text-[color:var(--accent)] ${
                        isActive ? 'text-[color:var(--accent)]' : ''
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      ) : null}
    </main>
  )
}
