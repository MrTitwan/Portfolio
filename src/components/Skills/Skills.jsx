import { useReveal } from '../../hooks/useReveal';
import { skills } from '../../data/portfolio';
import styles from './Skills.module.css';

function EmptyState() {
  return (
    <div className={styles.empty}>
      <span className={styles.emptyIcon}>✦</span>
      <p>Ajoute tes compétences dans <code>src/data/portfolio.js</code></p>
    </div>
  );
}

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="competences" ref={ref}>
      <div className="section">
        <p className="section-label reveal">03 — Outils</p>
        <h2 className="section-title reveal">Compétences</h2>

        {skills.length === 0 ? (
          <EmptyState />
        ) : (
          <div className={styles.grid}>
            {skills.map((group, i) => (
              <div
                key={i}
                className={`${styles.group} reveal`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <h3 className={styles.groupTitle}>{group.category}</h3>
                <div className={styles.tags}>
                  {group.items.map((s) => (
                    <span key={s} className={styles.tag}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}