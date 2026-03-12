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
    role: 'Software Engineer',
    company: 'Sky',
    period: '2021 — now',
    summary:
      'Built and maintained customer-facing features for the Sky Mobile web platform (sky.com) used by customers across the UK and Ireland, working within a large-scale React and TypeScript codebase.',
    keyImpact: [
      'Built and maintained customer-facing features for the Sky Mobile web platform (sky.com) used by customers across the UK and Ireland, working within a large-scale React and TypeScript codebase.',
      'Contributed to the launch of Sky Mobile Ireland, collaborating with product, design and platform teams to deliver new functionality and ensure platform readiness for a new market.',
      'Improved platform stability and maintainability by addressing technical debt, enhancing component reusability and participating in architecture and code review discussions across the Sky digital ecosystem.',
    ],
    technologies: ['React', 'TypeScript', 'JavaScript', 'GraphQL', 'Sky Mobile Systems', 'CI/CD'],
  },
  {
    role: 'Junior Software Developer',
    company: 'Northcoders',
    period: '2020 — 2021',
    summary:
      'Built full-stack applications using Node.js, PostgreSQL and React, implementing REST APIs, database queries and responsive front-end interfaces.',
    keyImpact: [
      'Built full-stack applications using Node.js, PostgreSQL and React, implementing REST APIs, database queries and responsive front-end interfaces.',
      'Developed a production-style news platform with pagination, sorting and API integration, mirroring real-world application architecture.',
      'Worked in an Agile team environment using Git workflows, pull requests, code reviews and pair programming to deliver iterative product features.',
    ],
    technologies: ['Node.js', 'React', 'PostgreSQL', 'REST APIs', 'Git'],
  },
  {
    role: 'Junior Web Developer',
    company: 'Pixel Forge',
    period: '2019 — 2021',
    summary: 'Created landing pages and interactive sections for client websites.',
    keyImpact: [
      'Built marketing landing pages and reusable content sections for multiple client projects.',
      'Improved accessibility and semantic structure across existing pages.',
      'Added subtle animations and UI polish to increase engagement and perceived quality.',
    ],
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
