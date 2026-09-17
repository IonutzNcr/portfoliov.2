import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders home page fully with migrated sections', () => {
    render(<App />)

    expect(screen.getByTestId('home-page')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Ionut Nicoara/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Stack & Technologies/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Projets Sélectionnés/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Discutons de vos projets/i })).toBeInTheDocument()
  })
})
