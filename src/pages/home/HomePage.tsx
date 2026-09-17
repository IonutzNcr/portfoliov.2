import { ContactSection } from '../../features/contact/components/ContactSection'
import { CONTACT_SECTION, FOOTER_DATA } from '../../features/contact/data/contact.data'
import { ProfileSection } from '../../features/profile/components/ProfileSection'
import {
  HEADER_NAV_LINKS,
  HEADER_SOCIAL_LINKS,
  PROFILE_HERO,
  SOFT_SKILLS,
} from '../../features/profile/data/profile.data'
import { ProjectsSection } from '../../features/projects/components/ProjectsSection'
import { PROJECTS_SECTION } from '../../features/projects/data/projects.data'
import { StackSection } from '../../features/stack/components/StackSection'
import { STACK_SECTION } from '../../features/stack/data/stack.data'
import { SiteFooter } from '../../shared/layout/SiteFooter'
import { SiteHeader } from '../../shared/layout/SiteHeader'
import './HomePage.css'

function HomePage() {
  return (
    <div className="home-page" data-testid="home-page">
      <a className="skip-link" href="#main-content">
        Aller au contenu principal
      </a>

      <SiteHeader
        name={PROFILE_HERO.name}
        school={PROFILE_HERO.school}
        initials={PROFILE_HERO.initials}
        navLinks={HEADER_NAV_LINKS}
        socialLinks={HEADER_SOCIAL_LINKS}
        contactHref={PROFILE_HERO.primaryAction.href}
      />

      <main id="main-content">
        <ProfileSection hero={PROFILE_HERO} skills={SOFT_SKILLS} />
        <StackSection section={STACK_SECTION} />
        <ProjectsSection section={PROJECTS_SECTION} />
        <ContactSection section={CONTACT_SECTION} />
      </main>

      <SiteFooter footer={FOOTER_DATA} />
    </div>
  )
}

export default HomePage