import type {
  NavigationLink,
  ProfileHeroData,
  SocialLink,
  SoftSkillCard,
} from '../types/profile.types'

export const HEADER_NAV_LINKS: NavigationLink[] = [
  { label: 'Profil', href: '#profil' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Projets', href: '#projets' },
  { label: 'Contact', href: '#contact' },
]

export const HEADER_SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com', icon: 'terminal' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'share' },
]

export const PROFILE_HERO: ProfileHeroData = {
  initials: 'IN',
  name: 'Ionut Nicoara',
  school: 'École 42 Paris',
  availability: 'Étudiant 42 Paris · Disponible stage fin d’études',
  role: 'Développeur polyvalent',
  summary:
    'Formé à l’exigence méthodique de l’École 42 : autonomie, peer learning et attention particulière portée à la qualité et à la fiabilité du code. Développeur polyvalent, à l’aise aussi bien avec des langages bas niveau comme le C et le C++ qu’avec des technologies haut niveau telles que TypeScript/JavaScript, PHP et Python.',
  profileImageSrc: '/profile-headshot.jpg',
  profileImageAlt: 'Alexandre Laurent - Développeur École 42',
  primaryAction: { label: 'Discuter d’une opportunité', href: '#contact' },
  secondaryAction: { label: 'Télécharger CV (PDF)', href: '#contact' },
}

export const SOFT_SKILLS: SoftSkillCard[] = [
  {
    title: 'Persévérance',
    category: 'Soft Skill · Résilience',
    icon: 'psychology',
    description:
      'Va toujours au bout des projets les plus ardus. Face aux bugs complexes, aux impasses techniques ou aux architectures denses, capacité éprouvée à investiguer méthodiquement jusqu’à la résolution complète sans compromis sur la qualité.',
  },
  {
    title: 'Curiosité',
    category: 'Soft Skill · Veille & Exploration',
    icon: 'explore',
    description:
      'Toujours en quête d’apprentissage et de nouveautés. Passionné par la compréhension intime des mécanismes sous le capot (OS, protocoles, bas-niveau) tout en explorant activement les nouveaux paradigmes et outils modernes.',
  },
  {
    title: 'Communication',
    category: 'Soft Skill · Impact & Clarté',
    icon: 'forum',
    description:
      'Formule et pose les bonnes problématiques avant de coder. Capacité à expliciter clairement des concepts techniques ardus lors des peer-reviews, à vulgariser pour les parties prenantes et à favoriser un dialogue constructif en équipe.',
  },
  {
    title: 'Autonomie',
    category: 'Soft Skill · Méthodologie 42',
    icon: 'terminal',
    description:
      'Recherche autonome et rigoureuse. Forgé à l’apprentissage autodidacte par la lecture de RFC, documentation officielle et code source, capable de monter en compétence rapidement sur n’importe quel écosystème en totale indépendance.',
  },
]
