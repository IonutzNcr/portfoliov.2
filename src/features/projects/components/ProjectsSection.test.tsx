import { render, screen } from '@testing-library/react'
import { PROJECTS_SECTION_CONTENT } from '../data/projects.data'
import { ProjectsSection } from './ProjectsSection'

describe('ProjectsSection', () => {
  it('renders projects heading and project cards', () => {
    render(<ProjectsSection section={PROJECTS_SECTION_CONTENT.fr} />)

    expect(screen.getByRole('heading', { name: /Projets Sélectionnés/i })).toBeInTheDocument()
    expect(screen.getByText(/ft_irc - Serveur IRC/i)).toBeInTheDocument()
    expect(screen.getByText(/Minishell - Interpréteur UNIX/i)).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Dépôt/i })).toHaveLength(4)
  })
})
