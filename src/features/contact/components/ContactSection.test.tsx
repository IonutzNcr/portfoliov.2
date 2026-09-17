import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { init, sendForm } from '@emailjs/browser'
import { CONTACT_SECTION_CONTENT } from '../data/contact.data'
import { ContactSection } from './ContactSection'

vi.mock('@emailjs/browser', () => ({
  init: vi.fn(),
  sendForm: vi.fn(),
}))

describe('ContactSection', () => {
  beforeEach(() => {
    vi.stubEnv('VITE_EMAILJS_PUBLIC_KEY', 'AvMQiUBKf-TLhSN1h')
    vi.stubEnv('VITE_EMAILJS_SERVICE_ID', 'service_ny95gyf')
    vi.stubEnv('VITE_EMAILJS_TEMPLATE_ID', 'template_cjz3pis')
    vi.mocked(init).mockImplementation(() => undefined)
    vi.mocked(sendForm).mockResolvedValue({ status: 200, text: 'OK' })
  })

  afterEach(() => {
    vi.unstubAllEnvs()
    vi.clearAllMocks()
  })

  it('renders contact details and form fields', () => {
    render(<ContactSection section={CONTACT_SECTION_CONTENT.fr} />)

    expect(screen.getByRole('heading', { name: /Discutons de vos projets/i })).toBeInTheDocument()
    expect(screen.getByText(/ionunicoara96@gmail.com/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Nom et Prénom/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email professionnel/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Envoyer le message/i })).toBeInTheDocument()
  })

  it('sends the contact form with EmailJS config from env', async () => {
    render(<ContactSection section={CONTACT_SECTION_CONTENT.fr} />)

    expect(init).toHaveBeenCalledWith({ publicKey: 'AvMQiUBKf-TLhSN1h' })

    fireEvent.change(screen.getByLabelText(/Nom et Prénom/i), {
      target: { value: 'Alan Turing' },
    })
    fireEvent.change(screen.getByLabelText(/Email professionnel/i), {
      target: { value: 'alan@example.com' },
    })
    fireEvent.change(screen.getByLabelText(/Message/i), {
      target: { value: 'Bonjour, discutons de votre projet.' },
    })

    fireEvent.click(screen.getByRole('button', { name: /Envoyer le message/i }))

    await waitFor(() => {
      expect(sendForm).toHaveBeenCalledTimes(1)
    })

    const submittedForm = screen.getByRole('button', { name: /Envoyer le message/i }).closest('form')
    expect(submittedForm).not.toBeNull()

    expect(sendForm).toHaveBeenCalledWith(
      'service_ny95gyf',
      'template_cjz3pis',
      submittedForm,
    )

    expect(screen.getByText(/Merci, votre message a bien été envoyé/i)).toBeInTheDocument()
  })
})
