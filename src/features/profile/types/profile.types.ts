export type NavigationLink = {
  label: string
  href: string
  downloadName?: string
}

export type SocialLink = {
  label: string
  href: string
  icon: 'terminal' | 'share'
}

export type ProfileHeroData = {
  initials: string
  name: string
  school: string
  availability: string
  role: string
  summary: string
  profileImageSrc: string
  profileImageAlt: string
  primaryAction: NavigationLink
  secondaryAction: NavigationLink
}

export type SoftSkillCard = {
  title: string
  category: string
  icon: 'psychology' | 'explore' | 'forum' | 'terminal'
  description: string
}
