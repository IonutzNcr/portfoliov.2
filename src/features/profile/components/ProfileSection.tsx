import type { ProfileHeroData, SoftSkillCard } from '../types/profile.types'

type ProfileSectionProps = {
  hero: ProfileHeroData
  skills: SoftSkillCard[]
}

export function ProfileSection({ hero, skills }: ProfileSectionProps) {
  return (
    <section className="profile-section" id="profil">
      <div className="profile-section__glow" aria-hidden="true" />
      <div className="profile-section__container">
        <div className="profile-section__hero">
          <div className="profile-section__image-wrap">
            <div className="profile-section__image-frame">
              <img src={hero.profileImageSrc} alt={hero.profileImageAlt} />
            </div>
            <div className="profile-section__image-corner" aria-hidden="true" />
          </div>

          <div className="profile-section__copy">
            <p className="profile-section__availability">{hero.availability}</p>
            <h1>{hero.name}</h1>
            <p className="profile-section__role">{hero.role}</p>
            <p className="profile-section__summary">{hero.summary}</p>
            <div className="profile-section__cta">
              <a className="profile-section__cta--primary" href={hero.primaryAction.href}>
                {hero.primaryAction.label}
              </a>
              <a className="profile-section__cta--secondary" href={hero.secondaryAction.href}>
                {hero.secondaryAction.label}
              </a>
            </div>
          </div>
        </div>

        <div className="profile-section__skills" aria-label="Soft skills">
          {skills.map((skill) => (
            <article key={skill.title} className="soft-skill-card">
              <div className="soft-skill-card__top">
                <span>{skill.category}</span>
                <span className="material-symbols-outlined" aria-hidden="true">
                  {skill.icon}
                </span>
              </div>
              <h2>{skill.title}</h2>
              <p>{skill.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
