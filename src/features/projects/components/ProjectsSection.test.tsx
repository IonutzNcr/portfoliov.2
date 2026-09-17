import { render, screen } from '@testing-library/react'
import { PROJECTS_SECTION_CONTENT } from '../data/projects.data'
import { ProjectsSection } from './ProjectsSection'

describe('ProjectsSection', () => {
  it('renders projects heading and project cards', () => {
    render(<ProjectsSection section={PROJECTS_SECTION_CONTENT.fr} />)
    const repositoryLinks = screen.getAllByRole('link', { name: /Dépôt/i })

    expect(screen.getByRole('heading', { name: /Projets Sélectionnés/i })).toBeInTheDocument()
    expect(screen.getByText(/ft_irc - Serveur IRC/i)).toBeInTheDocument()
    expect(screen.getByText(/Minishell - Interpréteur UNIX/i)).toBeInTheDocument()
    expect(repositoryLinks).toHaveLength(4)
    expect(repositoryLinks[0]).toHaveAttribute('href', 'https://github.com/IonutzNcr/ircserv')
    expect(repositoryLinks[1]).toHaveAttribute('href', 'https://github.com/IonutzNcr/Minishell')
    expect(repositoryLinks[2]).toHaveAttribute('href', 'https://github.com/IonutzNcr/-Transcendence-')
    expect(repositoryLinks[3]).toHaveAttribute('href', 'https://github.com/IonutzNcr/cub3d')
  })
})
