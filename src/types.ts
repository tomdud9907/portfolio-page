export type NavItem = {
  label: string
  href: string
}

export type ExperienceItem = {
  role: string
  company: string
  period: string
  summary: string
  details: string
  technologies: string[]
}

export type ProjectItem = {
  name: string
  type: string
  summary: string
  githubUrl: string
  technologies: string[]
  imagePlaceholder: string
}
