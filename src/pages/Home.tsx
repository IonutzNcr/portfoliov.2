const navItems = [
  { label: 'Profil', href: '#profil' },
  { label: 'Projets', href: '#projets' },
  { label: 'Contact', href: '#contact' },
]

const softSkills = [
  {
    label: 'Soft Skill · Résilience',
    title: 'Persévérance',
    icon: 'psychology',
    description:
      'Va toujours au bout des projets les plus ardus. Face aux bugs complexes, aux impasses techniques ou aux architectures denses, capacité éprouvée à investiguer méthodiquement jusqu’à la résolution complète sans compromis sur la qualité.',
  },
  {
    label: 'Soft Skill · Veille & Exploration',
    title: 'Curiosité',
    icon: 'explore',
    description:
      'Toujours en quête d\'apprentissage et de nouveautés. Passionné par la compréhension intime des mécanismes sous le capot (OS, protocoles, bas-niveau) tout en explorant activement les nouveaux paradigmes et outils modernes.',
  },
  {
    label: 'Soft Skill · Impact & Clarté',
    title: 'Communication',
    icon: 'forum',
    description:
      'Formule et pose les bonnes problématiques avant de coder. Capacité à expliciter clairement des concepts techniques ardus lors des peer-reviews, à vulgariser pour les parties prenantes et à favoriser un dialogue constructif en équipe.',
  },
  {
    label: 'Soft Skill · Méthodologie 42',
    title: 'Autonomie',
    icon: 'terminal',
    description:
      'Recherche autonome et rigoureuse. Forgé à l\'apprentissage autodidacte par la lecture de RFC, documentation officielle et code source, capable de monter en compétence rapidement sur n\'importe quel écosystème en totale indépendance.',
  },
]

const projects = [
  {
    stack: 'C++98 • Sockets TCP • I/O multiplexing',
    score: '125 / 100',
    title: 'ft_irc — Serveur IRC',
    summary:
      'Développement d\'un serveur Internet Relay Chat complet et robuste conforme aux RFC 1459 et 2812. Gestion asynchrone non-bloquante multi-clients (poll/epoll), salons de discussion, modes utilisateurs/canaux, authentification et transferts de données sans fuite mémoire.',
    footer: 'RFC 2812 • Gestion multi-clients • 0 fuite mémoire',
  },
  {
    stack: 'Langage C • POSIX',
    score: '125 / 100',
    title: 'Minishell — Interpréteur UNIX',
    summary:
      'Clone robuste de Bash en C pur. Analyse lexicale avec gestion précise des quotes, construction d\'arbre syntaxique (AST), redirection de flux, pipes multi-niveaux, signaux POSIX et implémentation des built-ins natifs.',
    footer: 'Norme v4 • 0 fuite mémoire',
  },
  {
    stack: 'NestJS • React • Docker',
    score: '100 / 100',
    title: 'ft_transcendence — Web Temps Réel',
    summary:
      'Plateforme full-stack multijoueur de Pong 3D en WebSockets. Architecture microservices NestJS, persistance PostgreSQL, authentification 42 OAuth avec 2FA (TOTP), salon de discussion chiffré et matchmaking Elo.',
    footer: 'Three.js • WebSockets • Docker',
  },
  {
    stack: 'C • MiniLibX • Math 3D',
    score: '115 / 100',
    title: 'cub3D — Moteur de Raycasting',
    summary:
      'Moteur de rendu 3D temps réel inspiré de Wolfenstein 3D. Calculs géométriques et trigonométriques purs via l\'algorithme DDA, mapping de textures orientées, détection de collisions et 60 FPS constants.',
    footer: 'DDA Algorithm • 60 FPS',
  },
]

function Home() {
  return (
    <div className="mockup-page">
      <header className="mockup-header">
        <div className="mockup-header__inner">
          <a className="brand" href="#profil">
            <div className="brand-mark">AL</div>
            <div className="brand-copy">
              <span className="brand-copy__name">Alexandre Laurent</span>
              <span className="brand-copy__meta">École 42 Paris</span>
            </div>
          </a>

          <nav className="main-nav" aria-label="Navigation principale">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="contact-cta" href="#contact">
              Me contacter
            </a>
          </div>
        </div>
      </header>

      <main className="mockup-main">
        <section className="profil" id="profil">
          <div className="profil__glow" aria-hidden="true" />

          <div className="profil__container">
            <div className="profil__hero">
              <div className="profil-image-wrap">
                <div className="profil-image-frame">
                  <img
                    src="https://lh3.googleusercontent.com/aida/AEtjO1UJMFHJlwj6xxzf5MFKMKjI5IKZG3g869C7EsvMnJqGxqygqKYRgFLPCZYw1Qxo4o2rkjtaPYz3HQvTUHdxijCCdr5WAfUwcf_WLXt619dG4n4I8lmuxi7qmv2jVdrN2Bq0a8cgD02C1m9DtAnRXTpd8ihc_cuAZ1a9gf4zI2yqcw1V67r2d1fb7UmxV8kHJhPH5RLaSOEJO7JJQwe3qQfpG6RVcXSj3qoXUwo-Nu3GGihucGqqOaWQbJ0"
                    alt="Alexandre Laurent - Développeur École 42"
                  />
                </div>
                <div className="profil-image-corner" aria-hidden="true" />
              </div>

              <div className="profil-copy">
                <div className="status-pill">
                  <span className="status-dot" />
                  <span>Étudiant 42 Paris · Disponible stage fin d&apos;études / CDI</span>
                </div>

                <div>
                  <h1>Alexandre Laurent</h1>
                  <p className="headline">Développeur C/C++ & Systèmes Distribués</p>
                </div>

                <p className="lead">
                  Formé à l&apos;exigence méthodique de l&apos;École 42 (autonomie
                  intégrale, peer-learning, zéro fuite mémoire tolérée). Spécialisé
                  en architecture logicielle bas-niveau, multiplexage I/O non-bloquant
                  et services backend haute performance.
                </p>

                <div className="hero-actions">
                  <a className="primary-btn" href="#contact">
                    Discuter d&apos;une opportunité
                  </a>
                  <a className="secondary-btn" href="#contact">
                    Télécharger CV (PDF)
                  </a>
                </div>
              </div>
            </div>

            <div className="soft-grid" id="skills" aria-label="Soft skills">
              {softSkills.map((skill) => (
                <article key={skill.title} className="soft-card">
                  <div className="soft-card__top">
                    <span>{skill.label}</span>
                    <span className="material-symbols-outlined" aria-hidden="true">
                      {skill.icon}
                    </span>
                  </div>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects" id="projets">
          <div className="projects__container">
            <div className="projects-heading">
              <div className="section-kicker">Portfolio</div>
              <h2>Projets Sélectionnés</h2>
              <p>
                Sélection de réalisations exigeantes conçues sans framework magique:
                du serveur HTTP non-bloquant au shell UNIX interactif.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <article key={project.title} className="project-card">
                  <div className="project-card__body">
                    <div className="project-card__meta">
                      <span className="stack-pill">{project.stack}</span>
                      <span className="score-pill">{project.score}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                  </div>

                  <div className="project-card__footer">
                    <span>{project.footer}</span>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      Dépôt
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact__container">
            <div className="contact-copy">
              <div className="section-kicker">Contact</div>
              <h2>Discutons de vos projets & opportunités</h2>
              <p>
                À la recherche d&apos;un developpeur capable de d&apos;elever votre
                entreprise au niveau superieur? Envoyez-moi un message direct.
              </p>

              <ul>
                <li>alexandre.laurent@student.42.fr</li>
                <li>Paris, Île-de-France · Full Remote possible</li>
                <li>Disponibilité immédiate · Réponse sous 24h</li>
              </ul>
            </div>

            <div className="contact-form-wrap">
              <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
                <div className="field-grid">
                  <label>
                    <span>Nom & Prénom</span>
                    <input type="text" placeholder="ex. Alan Turing" required />
                  </label>

                  <label>
                    <span>Email professionnel</span>
                    <input
                      type="email"
                      placeholder="alexandre@entreprise.fr"
                      required
                    />
                  </label>
                </div>

                <label>
                  <span>Objet / Type d&apos;opportunité</span>
                  <select>
                    <option>Stage de Fin d&apos;Études (6 mois)</option>
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

                <button type="submit">Envoyer le message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <div>© 2025 Alexandre Laurent. Rigueur 42 & UNIX.</div>
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="#profil">Haut de page ↑</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
