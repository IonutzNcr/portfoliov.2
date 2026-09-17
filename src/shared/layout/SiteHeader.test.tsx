import { render, screen } from '@testing-library/react'
import { SiteHeader } from './SiteHeader'
import { HEADER_NAV_LINKS, HEADER_SOCIAL_LINKS, PROFILE_HERO } from '../../features/profile/data/profile.data'

describe('SiteHeader', () => {
  it('renders identity, navigation, and contact action', () => {
    render(
      <SiteHeader
        name={PROFILE_HERO.name}
        school={PROFILE_HERO.school}
        initials={PROFILE_HERO.initials}
        navLinks={HEADER_NAV_LINKS}
        socialLinks={HEADER_SOCIAL_LINKS}
        contactHref="#contact"
      />,
    )

    expect(screen.getByText(/Ionut Nicoara/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Profil/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Compétences/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Me contacter/i })).toBeInTheDocument()
  })
})
