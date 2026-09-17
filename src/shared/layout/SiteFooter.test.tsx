import { render, screen } from '@testing-library/react'
import { FOOTER_DATA } from '../../features/contact/data/contact.data'
import { SiteFooter } from './SiteFooter'

describe('SiteFooter', () => {
  it('renders copyright and footer links', () => {
    render(<SiteFooter footer={FOOTER_DATA} />)

    expect(screen.getByText(/2026\. Ionut Nicoara/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /GitHub/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Haut de page/i })).toBeInTheDocument()
  })
})
