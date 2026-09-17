import type {
  NavigationLink,
  ProfileHeroData,
  SocialLink,
  SoftSkillCard,
} from '../types/profile.types'
import type { PortfolioLanguage } from '../../../types/i18n'

type ProfileContent = {
  navLinks: NavigationLink[]
  hero: ProfileHeroData
  softSkills: SoftSkillCard[]
  skipToContentLabel: string
  contactButtonLabel: string
}

export const HEADER_SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/IonutzNcr', icon: 'terminal' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ionut-nicoara/', icon: 'share' },
]

export const PROFILE_CONTENT: Record<PortfolioLanguage, ProfileContent> = {
  fr: {
    skipToContentLabel: 'Aller au contenu principal',
    contactButtonLabel: 'Me contacter',
    navLinks: [
      { label: 'Profil', href: '#profil' },
      { label: 'Compétences', href: '#competences' },
      { label: 'Projets', href: '#projets' },
      { label: 'Contact', href: '#contact' },
    ],
    hero: {
      initials: 'IN',
      name: 'Ionut Nicoara',
      school: 'École 42 Paris',
      availability: 'Étudiant 42 Paris · Disponible stage fin d’études',
      role: 'Développeur polyvalent',
      summary:
        'Formé à l’exigence méthodique de l’École 42 : autonomie, peer learning et attention particulière portée à la qualité et à la fiabilité du code. Développeur polyvalent, à l’aise aussi bien avec des langages bas niveau comme le C et le C++ qu’avec des technologies haut niveau telles que TypeScript/JavaScript, PHP et Python.',
      profileImageSrc: '/profile-headshot.jpg',
      profileImageAlt: 'Ionut Nicoara - Développeur École 42',
      primaryAction: { label: 'Discuter d’une opportunité', href: '#contact' },
      secondaryAction: {
        label: 'Télécharger CV (PDF)',
        href: '/ionutn_cv_fr.pdf',
        downloadName: 'ionut-nicoara-cv-fr.pdf',
      },
    },
    softSkills: [
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
    ],
  },
  en: {
    skipToContentLabel: 'Skip to main content',
    contactButtonLabel: 'Contact me',
    navLinks: [
      { label: 'Profile', href: '#profil' },
      { label: 'Skills', href: '#competences' },
      { label: 'Projects', href: '#projets' },
      { label: 'Contact', href: '#contact' },
    ],
    hero: {
      initials: 'IN',
      name: 'Ionut Nicoara',
      school: '42 Paris School',
      availability: '42 Paris student · Available for end-of-studies internship',
      role: 'Versatile developer',
      summary:
        'Trained with the methodological discipline of 42 School: autonomy, peer learning, and a strong focus on code quality and reliability. I am comfortable with both low-level languages such as C and C++, and high-level technologies such as TypeScript/JavaScript, PHP, and Python.',
      profileImageSrc: '/profile-headshot.jpg',
      profileImageAlt: 'Ionut Nicoara - 42 School developer',
      primaryAction: { label: 'Discuss an opportunity', href: '#contact' },
      secondaryAction: {
        label: 'Download resume (PDF)',
        href: '/ionutn_cv_en.pdf',
        downloadName: 'ionut-nicoara-cv-en.pdf',
      },
    },
    softSkills: [
      {
        title: 'Perseverance',
        category: 'Soft Skill · Resilience',
        icon: 'psychology',
        description:
          'Always follows through on the most demanding projects. When facing complex bugs, technical dead ends, or dense architectures, I investigate methodically until complete resolution without compromising quality.',
      },
      {
        title: 'Curiosity',
        category: 'Soft Skill · Exploration',
        icon: 'explore',
        description:
          'Constantly learning and exploring. Passionate about understanding systems under the hood (OS, protocols, low-level internals) while actively adopting modern tools and paradigms.',
      },
      {
        title: 'Communication',
        category: 'Soft Skill · Clarity & Impact',
        icon: 'forum',
        description:
          'Frames problems clearly before coding. Able to explain advanced technical concepts during peer reviews, adapt communication to stakeholders, and foster constructive team discussions.',
      },
      {
        title: 'Autonomy',
        category: 'Soft Skill · 42 Methodology',
        icon: 'terminal',
        description:
          'Autonomous and rigorous learning approach. Built through RFC reading, official documentation, and source code exploration, with rapid skill growth across new ecosystems.',
      },
    ],
  },
}

export const DEFAULT_LANGUAGE: PortfolioLanguage = 'fr'
