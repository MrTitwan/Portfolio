import styles from './Navbar.module.css';
import { identity } from '../../data/portfolio';

const NAV_LINKS = [
  { label: 'Expériences', href: '#experiences' },
  { label: 'Projets',     href: '#projets' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Contact',     href: '#contact' },
];

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>
        {identity.name
          ? identity.name.split(' ').map((w) => w[0]).join('')
          : '— —'}
      </span>

      <ul className={styles.links}>
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a className={styles.link} href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
