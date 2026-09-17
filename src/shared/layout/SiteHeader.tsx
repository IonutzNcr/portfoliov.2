import type { NavigationLink, SocialLink } from '../../features/profile/types/profile.types'

type SiteHeaderProps = {
  name: string
  school: string
  initials: string
  navLinks: NavigationLink[]
  socialLinks: SocialLink[]
  contactHref: string
}

export function SiteHeader({
  name,
  school,
  initials,
  navLinks,
  socialLinks,
  contactHref,
}: SiteHeaderProps) {
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
          {socialLinks.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined" aria-hidden="true">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
          <a className="site-header__contact" href={contactHref}>
            Me contacter
          </a>
        </div>
      </div>
    </header>
  )
}
