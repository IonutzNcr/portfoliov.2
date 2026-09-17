import { useState } from 'react'
import type { NavigationLink, SocialLink } from '../../features/profile/types/profile.types'
import type { PortfolioLanguage } from '../../types/i18n'

type SiteHeaderProps = {
  name: string
  school: string
  initials: string
  navLinks: NavigationLink[]
  socialLinks: SocialLink[]
  contactHref: string
  contactLabel: string
  language: PortfolioLanguage
  languageLabel: string
  onLanguageChange: (value: PortfolioLanguage) => void
}

export function SiteHeader({
  name,
  school,
  initials,
  navLinks,
  socialLinks,
  contactHref,
  contactLabel,
  language,
  languageLabel,
  onLanguageChange,
}: SiteHeaderProps) {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)

  const selectLanguage = (value: PortfolioLanguage) => {
    onLanguageChange(value)
    setIsLanguageMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#profil">
          <span className="site-header__initials">{initials}</span>
          <span className="site-header__identity">
            <span className="site-header__name">{name}</span>
            <span className="site-header__school">{school}</span>
          </span>
        </a>

        <nav className="site-header__nav" aria-label="Primary">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <div className="language-switcher">
            <button
              type="button"
              className="language-switcher__trigger"
              aria-haspopup="listbox"
              aria-expanded={isLanguageMenuOpen}
              aria-label="Language selector"
              onClick={() => setIsLanguageMenuOpen((current) => !current)}
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                language
              </span>
              <span>{languageLabel}</span>
            </button>

            {isLanguageMenuOpen ? (
              <div className="language-switcher__menu" role="listbox" aria-label="Language selector options">
                <button
                  type="button"
                  role="option"
                  aria-selected={language === 'fr'}
                  onClick={() => selectLanguage('fr')}
                >
                  Français
                </button>
                <button
                  type="button"
                  role="option"
                  aria-selected={language === 'en'}
                  onClick={() => selectLanguage('en')}
                >
                  English
                </button>
              </div>
            ) : null}
          </div>

          {socialLinks.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined" aria-hidden="true">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
          <a className="site-header__contact" href={contactHref}>
            {contactLabel}
          </a>
        </div>
      </div>
    </header>
  )
}
