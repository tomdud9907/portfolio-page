import { useState } from 'react'
import { SiteShell } from './components/SiteShell'
import { usePathname } from './lib/router'
import { AboutPage } from './pages/AboutPage'
import { ExperiencePage } from './pages/ExperiencePage'
import { HomePage } from './pages/HomePage'
import { ProjectsPage } from './pages/ProjectsPage'

export default function App() {
  const [openItem, setOpenItem] = useState<number | null>(0)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const { pathname, navigate } = usePathname()

  const page =
    pathname === '/experience' ? (
      <ExperiencePage />
    ) : pathname === '/projects' ? (
      <ProjectsPage />
    ) : pathname === '/about' ? (
      <AboutPage />
    ) : (
      <HomePage openItem={openItem} setOpenItem={setOpenItem} />
    )

  return (
    <SiteShell
      isDarkMode={isDarkMode}
      onToggleTheme={() => setIsDarkMode((prev) => !prev)}
      pathname={pathname}
      onNavigate={navigate}
    >
      {page}
    </SiteShell>
  )
}
