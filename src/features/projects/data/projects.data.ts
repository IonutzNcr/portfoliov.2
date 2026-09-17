import type { ProjectsSectionData } from '../types/project.types'
import type { PortfolioLanguage } from '../../../types/i18n'

export const PROJECTS_SECTION_CONTENT: Record<PortfolioLanguage, ProjectsSectionData> = {
  fr: {
    kicker: 'Portfolio',
    title: 'Projets Sélectionnés',
    repositoryLabel: 'Dépôt',
    description:
      'Au cours de mes années à l’École 42, j’ai eu l’occasion de réaliser de nombreux projets, aussi bien en autonomie qu’en équipe, sur des technologies et des problématiques variées.',
    items: [
      {
        title: 'ft_irc - Serveur IRC',
        stack: 'C++98 - Sockets TCP - I/O multiplexing',
        summary:
          'Développement d’un serveur Internet Relay Chat complet et robuste conforme aux RFC 1459 et 2812. Gestion asynchrone non-bloquante multi-clients, salons, modes utilisateurs/canaux et authentification.',
        repositoryUrl: 'https://github.com/IonutzNcr/ircserv',
      },
      {
        title: 'Minishell - Interpréteur UNIX',
        stack: 'Langage C - POSIX',
        summary:
          'Clone robuste de Bash en C pur avec analyse lexicale, redirections, pipes multi-niveaux, signaux POSIX et implémentation de built-ins natifs.',
        repositoryUrl: 'https://github.com/IonutzNcr/Minishell',
      },
      {
        title: 'ft_transcendence - Web Temps Réel',
        stack: 'NextJS - React - Docker',
        summary:
          'Plateforme de jeu multijoueur en ligne avec authentification, classement, gestion des amis et chat temps réel.',
        repositoryUrl: 'https://github.com/IonutzNcr/-Transcendence-',
      },
      {
        title: 'cub3D - Moteur de Raycasting',
        stack: 'C - MiniLibX - Math 3D',
        summary:
          'Moteur de rendu 3D temps réel inspiré de Wolfenstein 3D avec algorithme DDA, mapping de textures et collisions.',
        repositoryUrl: 'https://github.com/IonutzNcr/cub3d',
      },
    ],
  },
  en: {
    kicker: 'Portfolio',
    title: 'Selected Projects',
    repositoryLabel: 'Repository',
    description:
      'During my years at 42 School, I delivered projects both solo and in teams, across varied technologies and technical challenges.',
    items: [
      {
        title: 'ft_irc - IRC Server',
        stack: 'C++98 - TCP Sockets - I/O multiplexing',
        summary:
          'Built a complete and robust Internet Relay Chat server aligned with RFC 1459 and 2812. Implemented non-blocking asynchronous multi-client handling, channels, user/channel modes, and authentication.',
        repositoryUrl: 'https://github.com/IonutzNcr/ircserv',
      },
      {
        title: 'Minishell - UNIX Interpreter',
        stack: 'C Language - POSIX',
        summary:
          'Robust Bash clone in pure C with lexical parsing, redirections, multi-level pipes, POSIX signal handling, and native built-ins.',
        repositoryUrl: 'https://github.com/IonutzNcr/Minishell',
      },
      {
        title: 'ft_transcendence - Real-Time Web App',
        stack: 'NextJS - React - Docker',
        summary:
          'Online multiplayer platform with authentication, ranking, friends management, and real-time chat.',
        repositoryUrl: 'https://github.com/IonutzNcr/-Transcendence-',
      },
      {
        title: 'cub3D - Raycasting Engine',
        stack: 'C - MiniLibX - 3D Math',
        summary:
          'Real-time 3D renderer inspired by Wolfenstein 3D using DDA, texture mapping, and collision handling.',
        repositoryUrl: 'https://github.com/IonutzNcr/cub3d',
      },
    ],
  },
}
