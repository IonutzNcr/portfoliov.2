import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the exact stitch mockup iframe', () => {
    render(<App />)

    const iframe = screen.getByTitle(/stitch portfolio mockup/i)
    expect(iframe).toBeInTheDocument()
    expect(iframe).toHaveAttribute('src', '/stitch-mockup.html')
  })
})
