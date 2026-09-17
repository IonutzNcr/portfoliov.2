import { render, screen, within } from '@testing-library/react'
import HomePage from './HomePage'

describe('HomePage', () => {
  it('renders all sections, key navigation links and contact form fields', () => {
    render(<HomePage />)

    expect(screen.getByRole('link', { name: /Aller au contenu principal/i })).toHaveAttribute(
      'href',
      '#main-content',
    )
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content')

    expect(screen.getByRole('heading', { name: /Ionut Nicoara/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Stack & Technologies/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Projets Selectionnes/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Discutons de vos projets/i })).toBeInTheDocument()

    const primaryNav = screen.getByRole('navigation', { name: /Primary/i })
    expect(within(primaryNav).getByRole('link', { name: /Profil/i })).toHaveAttribute('href', '#profil')
    expect(within(primaryNav).getByRole('link', { name: /Competences/i })).toHaveAttribute(
      'href',
      '#competences',
    )
    expect(within(primaryNav).getByRole('link', { name: /Projets/i })).toHaveAttribute('href', '#projets')
    expect(within(primaryNav).getByRole('link', { name: /^Contact$/i })).toHaveAttribute(
      'href',
      '#contact',
    )

    expect(screen.getByLabelText(/Nom et Prenom/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email professionnel/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Objet \/ Type d opportunite/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Envoyer le message/i })).toBeInTheDocument()
  })
})
