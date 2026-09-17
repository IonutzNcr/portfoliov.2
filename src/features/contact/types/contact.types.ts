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
  form: {
    fullNameLabel: string
    emailLabel: string
    subjectLabel: string
    messageLabel: string
    messagePlaceholder: string
    submitLabel: string
    sendingLabel: string
    successMessage: string
    errorMessage: string
    configErrorMessage: string
    subjectOptions: string[]
  }
}

export type FooterData = {
  copyright: string
  navAriaLabel: string
  links: Array<{
    label: string
    href: string
  }>
}
