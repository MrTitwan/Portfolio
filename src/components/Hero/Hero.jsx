import { useReveal } from '../../hooks/useReveal';
import { identity } from '../../data/portfolio';
import styles from './Hero.module.css';

export default function Hero() {
  const ref = useReveal(0.05);

  return (
    <section className={styles.hero} ref={ref}>
      {/* Decorative blobs */}
      <div className={`blob ${styles.blob1}`} />
      <div className={`blob ${styles.blob2}`} />

      <div className={styles.inner}>
        <div className={`${styles.pill} reveal`}>
          {/*<span className={styles.pillDot} />
          <span>{identity.location || 'Localisation'}</span>
          <span className={styles.pillSep}>·</span>*/}
          <span>{identity.role || 'Votre titre'}</span>
        </div>

        <h1 className={`${styles.heading} reveal`}>
          {identity.name
            ? identity.name.split(' ').map((word, i) => (
                <span key={i} className={i % 2 === 1 ? styles.headingItalic : ''}>
                  {word}{' '}
                </span>
              ))
            : <><span>Votre</span> <span className={styles.headingItalic}>nom</span></>
          }
        </h1>

        <p className={`${styles.tagline} reveal`}>
          {identity.tagline || 'Votre phrase d\'accroche — modifiable dans src/data/portfolio.js'}
        </p>

        <div className={`${styles.actions} reveal`}>
          <a href="#projets" className={styles.btnPrimary}>
            Voir mes projets
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </a>
          <a href="#contact" className={styles.btnGhost}>Me contacter</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`${styles.scroll} reveal`}>
        <div className={styles.scrollLine} />
        <span className={styles.scrollLabel}>scroll</span>
      </div>
    </section>
  );
}
