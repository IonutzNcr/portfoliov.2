import type { FooterData } from '../../features/contact/types/contact.types'

type SiteFooterProps = {
  footer: FooterData
}

export function SiteFooter({ footer }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>{footer.copyright}</p>
        <nav aria-label="Footer links">
          {footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
