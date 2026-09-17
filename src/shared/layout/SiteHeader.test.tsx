import { render, screen } from '@testing-library/react'
import { SiteHeader } from './SiteHeader'
import { HEADER_SOCIAL_LINKS, PROFILE_CONTENT } from '../../features/profile/data/profile.data'

describe('SiteHeader', () => {
  it('renders identity, navigation, and contact action', () => {
    const profile = PROFILE_CONTENT.fr

    render(
      <SiteHeader
        name={profile.hero.name}
        school={profile.hero.school}
        initials={profile.hero.initials}
        navLinks={profile.navLinks}
        socialLinks={HEADER_SOCIAL_LINKS}
        contactHref="#contact"
        contactLabel={profile.contactButtonLabel}
        language="fr"
        languageLabel="Français"
        onLanguageChange={() => {}}
      />,
    )

    expect(screen.getByText(/Ionut Nicoara/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Profil/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Compétences/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Me contacter/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Language selector/i })).toBeInTheDocument()
  })
})
