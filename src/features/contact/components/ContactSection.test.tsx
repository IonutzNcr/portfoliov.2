import { render, screen } from '@testing-library/react'
import { CONTACT_SECTION } from '../data/contact.data'
import { ContactSection } from './ContactSection'

describe('ContactSection', () => {
  it('renders contact details and form fields', () => {
    render(<ContactSection section={CONTACT_SECTION} />)

    expect(screen.getByRole('heading', { name: /Discutons de vos projets/i })).toBeInTheDocument()
    expect(screen.getByText(/ionunicoara96@gmail.com/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Nom et Prenom/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email professionnel/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Envoyer le message/i })).toBeInTheDocument()
  })
})
