import type { ContactSectionData, FooterData } from '../types/contact.types'
import type { PortfolioLanguage } from '../../../types/i18n'

export const CONTACT_SECTION_CONTENT: Record<PortfolioLanguage, ContactSectionData> = {
  fr: {
    kicker: 'Contact',
    title: 'Discutons de vos projets & opportunités',
    description:
      'Vous recherchez un développeur curieux, rigoureux et motivé pour contribuer à vos projets ? Échangeons !',
    details: [
      {
        icon: 'mail',
        label: 'ionunicoara96@gmail.com',
        href: 'mailto:ionunicoara96@gmail.com',
      },
      {
        icon: 'location_on',
        label: 'Paris, Île-de-France - Stage de 6 mois',
      },
      {
        icon: 'verified',
        label: 'Disponibilité immédiate - Réponse sous 24h',
      },
    ],
    form: {
      fullNameLabel: 'Nom et Prénom',
      emailLabel: 'Email professionnel',
      subjectLabel: 'Objet / Type d’opportunité',
      messageLabel: 'Message',
      messagePlaceholder: 'Présentez brièvement vos besoins ou votre environnement technique...',
      submitLabel: 'Envoyer le message',
      sendingLabel: 'Envoi en cours...',
      successMessage: 'Merci, votre message a bien été envoyé.',
      errorMessage: 'Impossible d\'envoyer le message pour le moment. Merci de réessayer.',
      configErrorMessage: 'Le formulaire de contact n\'est pas configuré correctement.',
      subjectOptions: [
        'Stage de Fin d’Études (6 mois)',
        'Premier Emploi CDI (Développeur C++ / Backend)',
        'Mission Freelance Technique',
        'Autre échange technique',
      ],
    },
  },
  en: {
    kicker: 'Contact',
    title: 'Let us discuss your projects & opportunities',
    description:
      'Looking for a curious, rigorous, and motivated developer to contribute to your projects? Let us connect.',
    details: [
      {
        icon: 'mail',
        label: 'ionunicoara96@gmail.com',
        href: 'mailto:ionunicoara96@gmail.com',
      },
      {
        icon: 'location_on',
        label: 'Paris, Île-de-France - 6-month internship',
      },
      {
        icon: 'verified',
        label: 'Immediate availability - Reply within 24h',
      },
    ],
    form: {
      fullNameLabel: 'Full name',
      emailLabel: 'Professional email',
      subjectLabel: 'Subject / Opportunity type',
      messageLabel: 'Message',
      messagePlaceholder: 'Briefly describe your needs or technical environment...',
      submitLabel: 'Send message',
      sendingLabel: 'Sending...',
      successMessage: 'Thank you, your message has been sent.',
      errorMessage: 'Unable to send your message right now. Please try again.',
      configErrorMessage: 'The contact form is not configured correctly.',
      subjectOptions: [
        'Final internship (6 months)',
        'First full-time role (C++ / Backend Developer)',
        'Technical freelance mission',
        'Other technical discussion',
      ],
    },
  },
}

export const FOOTER_CONTENT: Record<PortfolioLanguage, FooterData> = {
  fr: {
    copyright: '© 2026. Ionut Nicoara',
    navAriaLabel: 'Liens de pied de page',
    links: [
      { label: 'GitHub', href: 'https://github.com/IonutzNcr' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ionut-nicoara/' },
      { label: 'Haut de page', href: '#profil' },
    ],
  },
  en: {
    copyright: '© 2026. Ionut Nicoara',
    navAriaLabel: 'Footer links',
    links: [
      { label: 'GitHub', href: 'https://github.com/IonutzNcr' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ionut-nicoara/' },
      { label: 'Back to top', href: '#profil' },
    ],
  },
}
