import type { ExperienceItem, NavItem, ProjectItem } from '../types'

export const navItems: NavItem[] = [
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
]

export const socialLinks = [
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Email', href: 'mailto:tomasz@example.com' },
]

export const experiences: ExperienceItem[] = [
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

export const projects: ProjectItem[] = [
  {
    name: 'Fintrack Dashboard',
    type: 'SaaS platform',
    summary: 'Analytics-heavy dashboard with modular widgets and custom chart interactions.',
    githubUrl: 'https://github.com/your-user/fintrack-dashboard',
    technologies: ['React', 'TypeScript', 'Recharts'],
    imagePlaceholder: 'Project preview 01',
  },
  {
    name: 'Studio Portfolio',
    type: 'Marketing site',
    summary: 'High-conversion landing pages with motion-driven storytelling and lead capture.',
    githubUrl: 'https://github.com/your-user/studio-portfolio',
    technologies: ['Next.js', 'Tailwind', 'Framer Motion'],
    imagePlaceholder: 'Project preview 02',
  },
  {
    name: 'DevFlow Workspace',
    type: 'Productivity app',
    summary: 'Collaborative project board with realtime activity feed and task automation UX.',
    githubUrl: 'https://github.com/your-user/devflow-workspace',
    technologies: ['React', 'Node.js', 'Socket.IO'],
    imagePlaceholder: 'Project preview 03',
  },
]
