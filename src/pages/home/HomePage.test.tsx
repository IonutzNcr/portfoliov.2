import { fireEvent, render, screen, within } from '@testing-library/react'
import HomePage from './HomePage'

describe('HomePage', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.lang = 'en'
  })

  it('renders all sections, key navigation links and contact form fields', () => {
    render(<HomePage />)

    expect(screen.getByRole('link', { name: /Aller au contenu principal/i })).toHaveAttribute(
      'href',
      '#main-content',
    )
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content')

    expect(screen.getByRole('heading', { name: /Ionut Nicoara/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Stack & Technologies/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Projets Sélectionnés/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Discutons de vos projets/i })).toBeInTheDocument()

    const primaryNav = screen.getByRole('navigation', { name: /Primary/i })
    expect(within(primaryNav).getByRole('link', { name: /Profil/i })).toHaveAttribute('href', '#profil')
    expect(within(primaryNav).getByRole('link', { name: /Compétences/i })).toHaveAttribute(
      'href',
      '#competences',
    )
    expect(within(primaryNav).getByRole('link', { name: /Projets/i })).toHaveAttribute('href', '#projets')
    expect(within(primaryNav).getByRole('link', { name: /^Contact$/i })).toHaveAttribute(
      'href',
      '#contact',
    )

    expect(screen.getByLabelText(/Nom et Prénom/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email professionnel/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Objet \/ Type d’opportunité/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Envoyer le message/i })).toBeInTheDocument()
  })

  it('switches portfolio content language from French to English', () => {
    render(<HomePage />)

    fireEvent.click(screen.getByRole('button', { name: /Language selector/i }))
    fireEvent.click(screen.getByRole('option', { name: /English/i }))

    expect(screen.getByRole('link', { name: /Skip to main content/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Selected Projects/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Send message/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact me/i })).toBeInTheDocument()
    expect(window.localStorage.getItem('portfolio.language')).toBe('en')
    expect(document.documentElement.lang).toBe('en')
  })

  it('restores persisted language from localStorage on first render', () => {
    window.localStorage.setItem('portfolio.language', 'en')

    render(<HomePage />)

    expect(screen.getByRole('link', { name: /Skip to main content/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Selected Projects/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Send message/i })).toBeInTheDocument()
  })
})
