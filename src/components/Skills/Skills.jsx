import { useMemo } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { skills, experiences, projects } from '../../data/portfolio';
import styles from './Skills.module.css';

function EmptyState() {
  return (
    <div className={styles.empty}>
      <span className={styles.emptyIcon}>✦</span>
      <p>Ajoute tes compétences dans <code>src/data/portfolio.js</code></p>
    </div>
  );
}

function getSkillFrequency() {
  const frequency = {};

  experiences.forEach(exp => {
    exp.tags?.forEach(tag => {
      frequency[tag] = (frequency[tag] || 0) + 1;
    });
  });

  projects.forEach(proj => {
    proj.stack?.forEach(tech => {
      frequency[tech] = (frequency[tech] || 0) + 1;
    });
  });

  return frequency;
}

function getFrequencyClass(skillName, frequency) {
  const count = frequency[skillName] || 0;
  if (count >= 3) return styles.tagHigh;
  if (count >= 2) return styles.tagMedium;
  return styles.tagLow;
}

function sortByFrequency(items, frequency) {
  return [...items].sort((a, b) => (frequency[b] || 0) - (frequency[a] || 0));
}

export default function Skills() {
  const ref = useReveal();
  const frequency = useMemo(() => getSkillFrequency(), []);

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
                  {sortByFrequency(group.items, frequency).map((s) => (
                    <span
                      key={s}
                      className={`${styles.tag} ${getFrequencyClass(s, frequency)}`}
                      title={`Mentionné ${frequency[s] || 0} fois`}
                    >
                      {s}
                    </span>
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