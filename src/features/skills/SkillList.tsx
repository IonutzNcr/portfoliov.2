import type { Skill } from '../../types/common'

type SkillListProps = {
  skills: Skill[]
}

export function SkillList({ skills }: SkillListProps) {
  return (
    <div className="skills-grid" aria-label="Skills">
      {skills.map((skill) => (
        <div key={skill.name} className="skill-item">
          <span>{skill.name}</span>
          <small>{skill.level}</small>
        </div>
      ))}
    </div>
  )
}
