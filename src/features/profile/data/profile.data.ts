import type {
  NavigationLink,
  ProfileHeroData,
  SocialLink,
  SoftSkillCard,
} from '../types/profile.types'

export const HEADER_NAV_LINKS: NavigationLink[] = [
  { label: 'Profil', href: '#profil' },
  { label: 'Competences', href: '#competences' },
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
  school: 'Ecole 42 Paris',
  availability: "Etudiant 42 Paris · Disponible stage fin d'etudes",
  role: 'Developpeur polyvalent',
  summary:
    'Forme a l exigence methodique de l Ecole 42: autonomie, peer learning et attention particuliere portee a la qualite et a la fiabilite du code. Developpeur polyvalent, a l aise aussi bien avec des langages bas niveau comme le C et le C++ qu avec des technologies haut niveau telles que TypeScript/JavaScript, PHP et Python.',
  profileImageSrc: '/profile-headshot.jpg',
  profileImageAlt: 'Alexandre Laurent - Developpeur Ecole 42',
  primaryAction: { label: "Discuter d'une opportunite", href: '#contact' },
  secondaryAction: { label: 'Telecharger CV (PDF)', href: '#contact' },
}

export const SOFT_SKILLS: SoftSkillCard[] = [
  {
    title: 'Perseverance',
    category: 'Soft Skill · Resilience',
    icon: 'psychology',
    description:
      'Va toujours au bout des projets les plus ardus. Face aux bugs complexes, aux impasses techniques ou aux architectures denses, capacite eprouvee a investiguer methodiquement jusqu a la resolution complete sans compromis sur la qualite.',
  },
  {
    title: 'Curiosite',
    category: 'Soft Skill · Veille & Exploration',
    icon: 'explore',
    description:
      "Toujours en quete d apprentissage et de nouveautes. Passionne par la comprehension intime des mecanismes sous le capot (OS, protocoles, bas-niveau) tout en explorant activement les nouveaux paradigmes et outils modernes.",
  },
  {
    title: 'Communication',
    category: 'Soft Skill · Impact & Clarte',
    icon: 'forum',
    description:
      'Formule et pose les bonnes problematiques avant de coder. Capacite a expliciter clairement des concepts techniques ardus lors des peer-reviews, a vulgariser pour les parties prenantes et a favoriser un dialogue constructif en equipe.',
  },
  {
    title: 'Autonomie',
    category: 'Soft Skill · Methodologie 42',
    icon: 'terminal',
    description:
      "Recherche autonome et rigoureuse. Forge a l apprentissage autodidacte par la lecture de RFC, documentation officielle et code source, capable de monter en competence rapidement sur n importe quel ecosysteme en totale independance.",
  },
]
