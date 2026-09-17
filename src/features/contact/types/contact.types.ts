export type ContactInfo = {
  icon: 'mail' | 'location_on' | 'verified'
  label: string
  href?: string
}

export type ContactSectionData = {
  kicker: string
  title: string
  description: string
  details: ContactInfo[]
}

export type FooterData = {
  copyright: string
  links: Array<{
    label: string
    href: string
  }>
}
