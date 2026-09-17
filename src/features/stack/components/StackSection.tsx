import type { StackSectionData } from '../types/stack.types'

type StackSectionProps = {
  section: StackSectionData
}

export function StackSection({ section }: StackSectionProps) {
  return (
    <section className="stack-section" id="competences">
      <div className="stack-section__container">
        <div className="stack-section__heading">
          <p className="section-kicker">{section.kicker}</p>
          <h2>{section.title}</h2>
          <p>{section.description}</p>
        </div>

        <div className="stack-section__grid" aria-label="Stack and technologies">
          {section.technologies.map((technology) => (
            <article key={technology.name} className="stack-card">
              {technology.iconSvg ? (
                <span
                  className="stack-card__icon"
                  role="img"
                  aria-label={`${technology.name} logo`}
                  dangerouslySetInnerHTML={{ __html: technology.iconSvg }}
                />
              ) : (
                <span className="stack-card__badge" aria-hidden="true">
                  {technology.badge}
                </span>
              )}
              <span className="stack-card__name">{technology.name}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
