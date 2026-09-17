import { render, screen } from '@testing-library/react'
import { FOOTER_CONTENT } from '../../features/contact/data/contact.data'
import { SiteFooter } from './SiteFooter'

describe('SiteFooter', () => {
  it('renders copyright and footer links', () => {
    render(<SiteFooter footer={FOOTER_CONTENT.fr} />)

    expect(screen.getByText(/2026\. Ionut Nicoara/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /GitHub/i })).toHaveAttribute(
      'href',
      'https://github.com/IonutzNcr',
    )
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/ionut-nicoara/',
    )
    expect(screen.getByRole('link', { name: /Haut de page/i })).toBeInTheDocument()
  })
})
