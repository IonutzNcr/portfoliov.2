import type { Project } from '../types/common'

export const projects: Project[] = [
  {
    id: 1,
    title: 'ft_irc — Serveur IRC',
    summary: 'Développement d\'un serveur IRC robuste conforme aux RFC 1459/2812 avec gestion non-bloquante multi-clients, salons, modes utilisateurs/canaux et authentification.',
    stack: ['Langage C', 'POSIX', 'RFC 2812'],
    link: 'https://github.com/',
  },
  {
    id: 2,
    title: 'Minishell — Interpréteur UNIX',
    summary: 'Clone de Bash en C pur avec parsing des quotes, AST, redirections, pipes multi-niveaux, gestion des signaux POSIX et implémentation de built-ins natifs.',
    stack: ['C', 'UNIX', 'AST'],
    link: 'https://github.com/',
  },
  {
    id: 3,
    title: 'ft_transcendence — Web Temps Réel',
    summary: 'Plateforme multijoueur full-stack avec WebSockets, architecture NestJS, persistance PostgreSQL, OAuth 42 + 2FA et communication temps réel chiffrée.',
    stack: ['NestJS', 'WebSockets', 'Docker'],
    link: 'https://github.com/',
  },
  {
    id: 4,
    title: 'cub3D — Moteur de Raycasting',
    summary: 'Moteur 3D temps réel inspiré de Wolfenstein 3D: algorithme DDA, textures orientées, collisions et rendu stable à 60 FPS constants.',
    stack: ['C', 'MiniLibX', 'Math 3D'],
    link: 'https://github.com/',
  },
]
