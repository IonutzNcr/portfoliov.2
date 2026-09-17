import type { ContactSectionData, FooterData } from '../types/contact.types'

export const CONTACT_SECTION: ContactSectionData = {
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
}

export const FOOTER_DATA: FooterData = {
  copyright: '© 2026. Ionut Nicoara',
  links: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Haut de page', href: '#profil' },
  ],
}
