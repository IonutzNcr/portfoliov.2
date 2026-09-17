import { useEffect, useMemo, useState } from 'react'
import { ContactSection } from '../../features/contact/components/ContactSection'
import { CONTACT_SECTION_CONTENT, FOOTER_CONTENT } from '../../features/contact/data/contact.data'
import { ProfileSection } from '../../features/profile/components/ProfileSection'
import { DEFAULT_LANGUAGE, HEADER_SOCIAL_LINKS, PROFILE_CONTENT } from '../../features/profile/data/profile.data'
import { ProjectsSection } from '../../features/projects/components/ProjectsSection'
import { PROJECTS_SECTION_CONTENT } from '../../features/projects/data/projects.data'
import { StackSection } from '../../features/stack/components/StackSection'
import { STACK_SECTION_CONTENT } from '../../features/stack/data/stack.data'
import { SiteFooter } from '../../shared/layout/SiteFooter'
import { SiteHeader } from '../../shared/layout/SiteHeader'
import type { PortfolioLanguage } from '../../types/i18n'
import './HomePage.css'

const LANGUAGE_STORAGE_KEY = 'portfolio.language'

function isPortfolioLanguage(value: string): value is PortfolioLanguage {
  return value === 'fr' || value === 'en'
}

function getInitialLanguage(): PortfolioLanguage {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE
  }

  const persisted = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
  return persisted && isPortfolioLanguage(persisted) ? persisted : DEFAULT_LANGUAGE
}

function HomePage() {
  const [language, setLanguage] = useState<PortfolioLanguage>(getInitialLanguage)

  const profileContent = PROFILE_CONTENT[language]
  const stackContent = STACK_SECTION_CONTENT[language]
  const projectsContent = PROJECTS_SECTION_CONTENT[language]
  const contactContent = CONTACT_SECTION_CONTENT[language]
  const footerContent = FOOTER_CONTENT[language]

  const languageLabel = useMemo(() => (language === 'fr' ? 'Français' : 'English'), [language])

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  return (
    <div className="home-page" data-testid="home-page">
      <a className="skip-link" href="#main-content">
        {profileContent.skipToContentLabel}
      </a>

      <SiteHeader
        name={profileContent.hero.name}
        school={profileContent.hero.school}
        initials={profileContent.hero.initials}
        navLinks={profileContent.navLinks}
        socialLinks={HEADER_SOCIAL_LINKS}
        contactHref={profileContent.hero.primaryAction.href}
        contactLabel={profileContent.contactButtonLabel}
        language={language}
        languageLabel={languageLabel}
        onLanguageChange={setLanguage}
      />

      <main id="main-content">
        <ProfileSection hero={profileContent.hero} skills={profileContent.softSkills} />
        <StackSection section={stackContent} />
        <ProjectsSection section={projectsContent} />
        <ContactSection section={contactContent} />
      </main>

      <SiteFooter footer={footerContent} />
    </div>
  )
}

export default HomePage