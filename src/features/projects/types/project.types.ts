export type ProjectItem = {
  title: string
  stack: string
  summary: string
  repositoryUrl: string
}

export type ProjectsSectionData = {
  kicker: string
  title: string
  description: string
  items: ProjectItem[]
}
