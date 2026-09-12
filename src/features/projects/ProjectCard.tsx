import type { Project } from '../../types/common'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__meta">
        <span className="project-card__eyebrow">Case study</span>
        <h3>{project.title}</h3>
      </div>
      <p>{project.summary}</p>
      <ul className="project-card__stack" aria-label={`${project.title} stack`}>
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a href={project.link}>View project</a>
    </article>
  )
}
