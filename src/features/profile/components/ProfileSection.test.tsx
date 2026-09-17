import { render, screen } from '@testing-library/react'
import { ProfileSection } from './ProfileSection'
import { PROFILE_HERO, SOFT_SKILLS } from '../data/profile.data'

describe('ProfileSection', () => {
  it('renders hero and soft skills cards', () => {
    render(<ProfileSection hero={PROFILE_HERO} skills={SOFT_SKILLS} />)

    expect(screen.getByRole('heading', { name: /Ionut Nicoara/i })).toBeInTheDocument()
    expect(screen.getByText(/^Développeur polyvalent$/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Développeur École 42/i })).toBeInTheDocument()
    expect(screen.getByText(/Persévérance/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^Autonomie$/i })).toBeInTheDocument()
  })
})
