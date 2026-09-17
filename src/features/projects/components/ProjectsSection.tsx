import type { ProjectsSectionData } from '../types/project.types'

type ProjectsSectionProps = {
  section: ProjectsSectionData
}

export function ProjectsSection({ section }: ProjectsSectionProps) {
  return (
    <section className="projects-section" id="projets">
      <div className="projects-section__container">
        <div className="projects-section__heading">
          <p className="section-kicker">{section.kicker}</p>
          <h2>{section.title}</h2>
          <p>{section.description}</p>
        </div>

        <div className="projects-section__grid">
          {section.items.map((item) => (
            <article key={item.title} className="project-card">
              <div>
                <p className="project-card__stack">{item.stack}</p>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
              <a href={item.repositoryUrl} target="_blank" rel="noopener noreferrer">
                Dépôt
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_outward
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
