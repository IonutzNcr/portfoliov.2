import { render, screen } from '@testing-library/react'
import { STACK_SECTION_CONTENT } from '../data/stack.data'
import { StackSection } from './StackSection'

describe('StackSection', () => {
  it('renders title and all technologies', () => {
    render(<StackSection section={STACK_SECTION_CONTENT.fr} />)

    expect(screen.getByRole('heading', { name: /Stack & Technologies/i })).toBeInTheDocument()
    expect(screen.getByText(/Compétences articulées/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /C logo/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Docker logo/i })).toBeInTheDocument()
    expect(screen.getByText(/^C\+\+$/i)).toBeInTheDocument()
    expect(screen.getByText(/^Docker$/i)).toBeInTheDocument()
    expect(screen.getByText(/^Linux$/i)).toBeInTheDocument()
  })
})
