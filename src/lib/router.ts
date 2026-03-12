import { useEffect, useState } from 'react'

export function usePathname() {
  const [pathname, setPathname] = useState(() => window.location.pathname || '/')

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname || '/')
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = (to: string) => {
    if (to === pathname) return
    window.history.pushState({}, '', to)
    setPathname(to)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return { pathname, navigate }
}
