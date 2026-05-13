import { useEffect, useRef } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { skills } from '../../data/portfolio';
import styles from './Skills.module.css';

function SkillBar({ name, level }) {
  const barRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.setProperty('--fill', `${level}%`);
          el.classList.add(styles.barAnimate);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [level]);

  return (
    <div className={styles.skillRow}>
      <span className={styles.skillName}>{name}</span>
      <div className={styles.barTrack} ref={barRef}>
        <div className={styles.barFill} />
      </div>
      <span className={styles.skillLevel}>{level}</span>
    </div>
  );
}

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
        <h2 className="section-title reveal">
          Compétences
        </h2>

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
                {group.items.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
