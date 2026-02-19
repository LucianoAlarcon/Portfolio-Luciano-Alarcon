export interface TechItem {
  name: string
  years: string
  level: number
}

export interface TechCategory {
  label: string
  items: TechItem[]
}

export interface Project {
  num: string
  title: string
  description: string
  tags: string[]
  href?: string
}

export interface ContactLink {
  icon: string
  label: string
  value: string
  href: string
  external?: boolean
}
