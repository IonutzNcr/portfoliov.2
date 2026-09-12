import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the portfolio hero and main sections', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /alexandre laurent/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /projets sélectionnés/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /discutons de vos projets/i })).toBeInTheDocument()
  })
})
