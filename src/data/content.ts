import type { ExperienceItem, NavItem, ProjectItem } from '../types'

export const navItems: NavItem[] = [
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
]

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/tomdud9907' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tomasz-duda-a27754256/' },
  { label: 'Email', href: 'mailto:tomdud9907@gmail.com' },
]

export const experiences: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    company: 'Sky',
    period: '05.2023 — 01.2026',
    summary: 'Full-stack development for large-scale Sky Mobile applications and legacy API refactoring.',
    keyImpact: [
      'Led delivery of customer-facing features in high-traffic Sky Mobile journeys across the UK and Ireland market.',
      'Contributed to the launch of Sky Mobile Ireland, collaborating with product, design and platform teams to deliver new functionality and ensure platform readiness for a new market.',
      'Improved platform stability and maintainability by addressing technical debt, enhancing component reusability and participating in architecture and code review discussions across the Sky digital ecosystem.',
    ],
    technologies: ['React', 'TypeScript', 'JavaScript', 'GraphQL', 'Sky Mobile Systems', 'CI/CD'],
  },
  {
    role: 'Junior Software Developer',
    company: 'Northcoders',
    period: '10.2022 — 04.2023',
    summary: 'Early career role focusing on React.js, Node.js and JavaScript development.',
    keyImpact: [
      'Built full-stack applications using Node.js, PostgreSQL and React, implementing REST APIs, database queries and responsive front-end interfaces.',
      'Developed a production-style news platform with pagination, sorting and API integration, mirroring real-world application architecture.',
      'Worked in an Agile team environment using Git workflows, pull requests, code reviews and pair programming to deliver iterative product features.',
    ],
    technologies: ['Node.js', 'React', 'PostgreSQL', 'REST APIs', 'Git'],
  },
  {
    role: 'Director',
    company: 'TG-Scents',
    period: '2017 — 2022',
    summary: 'Ran an eBay shop, sourcing from China and managing listings and sales.',
    keyImpact: [
      'Founded and operated an online eBay business by overseeing product sourcing, creating and optimising listings, managing order fulfilment, and delivering end-to-end customer support to drive sales performance and customer satisfaction.',
    ],
    technologies: ['eBay', 'Product Sourcing', 'E-commerce', 'Customer Support'],
  },
  {
    role: 'Recruitment Consultant',
    company: '24/7 Recruitment',
    period: '2016 — 2017',
    summary: 'Managed sourcing, placements and client relations, regularly hitting hiring goals.',
    keyImpact: [
      'Sourced, screened, and placed candidates to meet client needs while building strong professional relationships and achieving placement targets.',
    ],
    technologies: ['Recruitment', 'Candidate Screening', 'Client Relations', 'Placements'],
  },
]

export const projects: ProjectItem[] = [
  {
    name: 'Portfolio Page',
    type: 'Personal website',
    summary:
      'I created this portfolio page using AI tools end-to-end to experiment with the newest technologies and speed up delivery from idea to implementation.',
    githubUrl: 'https://github.com/tomdud9907/portfolio-page',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'AI Tools'],
    imagePlaceholder: 'AI project preview',
    imageUrl:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Supermaaart',
    type: 'Bootcamp final group project',
    summary:
      'A mobile shopping app we built at the end of bootcamp to compare prices for the same products across different supermarkets using external APIs.',
    githubUrl: 'https://github.com/tomdud9907/supermaaart-fe',
    technologies: ['React', 'Node.js', 'MongoDB', 'REST API'],
    imagePlaceholder: 'Shopping app preview',
    imageUrl:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
  },
]
