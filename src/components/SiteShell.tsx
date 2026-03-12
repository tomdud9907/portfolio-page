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
    <main className={`landing ${isDarkMode ? '' : 'theme-light'} min-h-screen overflow-hidden px-5 pb-20 pt-8 sm:px-10`}>
      <div className="aurora aurora-one" aria-hidden="true" />
      <div className="aurora aurora-two" aria-hidden="true" />

      <header className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={() => onNavigate('/')}
          className="brand-font bg-transparent p-0 text-xl font-bold tracking-wide text-[color:var(--text-main)]"
          aria-label="Tomasz Duda home"
        >
          Tomasz Duda
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
    </main>
  )
}
