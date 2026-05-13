import { identity } from '../../data/portfolio';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>
        © {year} {identity.name || '— —'} — Tous droits réservés
      </span>
      <a href="#hero" className={styles.back}>↑ Retour en haut</a>
    </footer>
  );
}
