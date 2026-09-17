export type StackTechnology = {
  name: string
  badge: string
  iconSvg?: string
}

export type StackSectionData = {
  kicker: string
  title: string
  description: string
  technologies: StackTechnology[]
}
