import { render, screen } from '@testing-library/react'
import { PROJECTS_SECTION } from '../data/projects.data'
import { ProjectsSection } from './ProjectsSection'

describe('ProjectsSection', () => {
  it('renders projects heading and project cards', () => {
    render(<ProjectsSection section={PROJECTS_SECTION} />)

    expect(screen.getByRole('heading', { name: /Projets Selectionnes/i })).toBeInTheDocument()
    expect(screen.getByText(/ft_irc - Serveur IRC/i)).toBeInTheDocument()
    expect(screen.getByText(/Minishell - Interpreteur UNIX/i)).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Depot/i })).toHaveLength(4)
  })
})
