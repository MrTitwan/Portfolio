import { useReveal } from '../../hooks/useReveal';
import { projects } from '../../data/portfolio';
import styles from './Projects.module.css';

function EmptyState() {
  return (
    <div className={styles.empty}>
      <span className={styles.emptyIcon}>✦</span>
      <p>Ajoute tes projets dans <code>src/data/portfolio.js</code></p>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article
      className={`${styles.card} reveal`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={styles.cardInner}>
        <div className={styles.meta}>
          <span className={styles.type}>{project.type}</span>
          {project.wip && <span className={styles.wip}>En cours</span>}
        </div>

        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.desc}</p>

        <div className={styles.stack}>
          {project.stack.map((t) => (
            <span key={t} className={styles.stackTag}>{t}</span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <span>Voir le projet</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.3"/>
            </svg>
          </a>
        )}
      </div>

      {/* Decorative index */}
      <span className={styles.index} aria-hidden>0{index + 1}</span>
    </article>
  );
}

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projets" ref={ref}>
      <div className="section">
        <p className="section-label reveal">02 — Réalisations</p>
        <h2 className="section-title reveal">
          Projets <em>sélectionnés</em>
        </h2>

        {projects.length === 0 ? (
          <EmptyState />
        ) : (
          <div className={styles.grid}>
            {projects.map((p, i) => (
              <ProjectCard key={i} project={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
