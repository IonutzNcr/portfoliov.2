import type { ProjectsSectionData } from '../types/project.types'

export const PROJECTS_SECTION: ProjectsSectionData = {
  kicker: 'Portfolio',
  title: 'Projets Selectionnes',
  description:
    'Au cours de mes annees a l Ecole 42, j ai eu l occasion de realiser de nombreux projets, aussi bien en autonomie qu en equipe, sur des technologies et des problematiques variees.',
  items: [
    {
      title: 'ft_irc - Serveur IRC',
      stack: 'C++98 - Sockets TCP - I/O multiplexing',
      summary:
        'Developpement d un serveur Internet Relay Chat complet et robuste conforme aux RFC 1459 et 2812. Gestion asynchrone non-bloquante multi-clients, salons, modes utilisateurs/canaux et authentification.',
      repositoryUrl: 'https://github.com',
    },
    {
      title: 'Minishell - Interpreteur UNIX',
      stack: 'Langage C - POSIX',
      summary:
        'Clone robuste de Bash en C pur avec analyse lexicale, redirections, pipes multi-niveaux, signaux POSIX et implementation de built-ins natifs.',
      repositoryUrl: 'https://github.com',
    },
    {
      title: 'ft_transcendence - Web Temps Reel',
      stack: 'NextJS - React - Docker',
      summary:
        'Plateforme de jeu multijoueur en ligne avec authentification, classement, gestion des amis et chat temps reel.',
      repositoryUrl: 'https://github.com',
    },
    {
      title: 'cub3D - Moteur de Raycasting',
      stack: 'C - MiniLibX - Math 3D',
      summary:
        'Moteur de rendu 3D temps reel inspire de Wolfenstein 3D avec algorithme DDA, mapping de textures et collisions.',
      repositoryUrl: 'https://github.com',
    },
  ],
}
