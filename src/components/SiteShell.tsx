import type { ReactNode } from 'react'
import { navItems } from '../data/content'

type SiteShellProps = {
  children: ReactNode
  isDarkMode: boolean
  onToggleTheme: () => void
  pathname: string
  onNavigate: (to: string) => void
}

export function SiteShell({ children, isDarkMode, onToggleTheme, pathname, onNavigate }: SiteShellProps) {
  return (
    <main id="top" className={`landing ${isDarkMode ? '' : 'theme-light'} min-h-screen overflow-hidden px-5 pb-24 pt-8 sm:px-10`}>
      <div className="aurora aurora-one" aria-hidden="true" />
      <div className="aurora aurora-two" aria-hidden="true" />

      <header className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={() => onNavigate('/')}
          className="brand-font bg-transparent p-0 text-[color:var(--text-main)]"
          aria-label="Tomasz Duda home"
        >
          <span className="inline-flex items-center rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1.5 text-2xl font-bold tracking-[0.12em] shadow-[0_0_20px_rgba(56,189,248,0.15)] sm:text-[1.9rem]">
            TD
          </span>
        </button>

        <nav className="nav-shell" aria-label="Main navigation">
          <ul className="nav-font flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.11em] text-[color:var(--text-muted)] sm:gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.href)}
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
                {isDarkMode ? '☀' : '☾'}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {children}

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--text-main)] shadow-[0_8px_24px_rgba(2,6,23,0.32)] md:hidden"
        aria-label="Back to top"
      >
        Back to top ↑
      </button>
    </main>
  )
}
