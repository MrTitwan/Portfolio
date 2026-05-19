import { useReveal } from '../../hooks/useReveal';
import { experiences } from '../../data/portfolio';
import styles from './Experiences.module.css';

function EmptyState() {
  return (
    <div className={styles.empty}>
      <span className={styles.emptyIcon}>✦</span>
      <p>Cette section est vide pour le moment.</p>
    </div>
  );
}

export default function Experiences() {
  const ref = useReveal();

  return (
    <section id="experiences" ref={ref}>
      <div className="section">
        <p className="section-label reveal">01 — Parcours</p>
        <h2 className="section-title reveal">
          Expériences <em>professionnelles</em>
        </h2>

        {experiences.length === 0 ? (
          <EmptyState />
        ) : (
          <div className={styles.list}>
            {experiences.map((exp, i) => (
              <article
                key={i}
                className={`${styles.item} reveal`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <span className={styles.period}>{exp.period}</span>

                <div className={styles.body}>
                  <h3 className={styles.title}>{exp.title}</h3>
                  <p className={styles.company}>{exp.company}</p>
                  {exp.desc.length ===0 ? (
                    <EmptyState />
                  ) : (
                    <p className={styles.desc}>{exp.desc}</p>
                  )}
                </div>

                <div className={styles.tags}>
                  {exp.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
