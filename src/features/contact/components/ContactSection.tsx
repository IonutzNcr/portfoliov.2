import type { ContactSectionData } from '../types/contact.types'

type ContactSectionProps = {
  section: ContactSectionData
}

export function ContactSection({ section }: ContactSectionProps) {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-section__container">
        <div className="contact-section__copy">
          <p className="section-kicker">{section.kicker}</p>
          <h2>{section.title}</h2>
          <p>{section.description}</p>

          <ul>
            {section.details.map((detail) => (
              <li key={detail.label}>
                <span className="contact-icon" aria-hidden="true">
                  <span className="material-symbols-outlined">{detail.icon}</span>
                </span>
                {detail.href ? <a href={detail.href}>{detail.label}</a> : <span>{detail.label}</span>}
              </li>
            ))}
          </ul>
        </div>

        <div className="contact-section__form-wrap">
          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <div className="contact-form__grid">
              <label>
                <span>Nom et Prénom</span>
                <input type="text" placeholder="ex. Alan Turing" required />
              </label>
              <label>
                <span>Email professionnel</span>
                <input type="email" placeholder="alexandre@entreprise.fr" required />
              </label>
            </div>

            <label>
              <span>Objet / Type d’opportunité</span>
              <select>
                <option>Stage de Fin d’Études (6 mois)</option>
                <option>Premier Emploi CDI (Développeur C++ / Backend)</option>
                <option>Mission Freelance Technique</option>
                <option>Autre échange technique</option>
              </select>
            </label>

            <label>
              <span>Message</span>
              <textarea
                rows={4}
                placeholder="Présentez brièvement vos besoins ou votre environnement technique..."
                required
              />
            </label>

            <button type="submit">
              <span>Envoyer le message</span>
              <span className="material-symbols-outlined" aria-hidden="true">
                send
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
