import { render, screen } from '@testing-library/react'
import { ProfileSection } from './ProfileSection'
import { PROFILE_CONTENT } from '../data/profile.data'

describe('ProfileSection', () => {
  it('renders hero and soft skills cards', () => {
    const content = PROFILE_CONTENT.fr
    render(<ProfileSection hero={content.hero} skills={content.softSkills} />)

    expect(screen.getByRole('heading', { name: /Ionut Nicoara/i })).toBeInTheDocument()
    expect(screen.getByText(/^Développeur web et logiciel$/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Développeur École 42/i })).toBeInTheDocument()
    expect(screen.getByText(/Persévérance/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^Autonomie$/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Télécharger CV \(PDF\)/i })).toHaveAttribute(
      'href',
      '/ionutn_cv_fr.pdf',
    )
    expect(screen.getByRole('link', { name: /Télécharger CV \(PDF\)/i })).toHaveAttribute(
      'download',
      'ionut-nicoara-cv-fr.pdf',
    )
  })
})
