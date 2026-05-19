import styles from './Banner.module.css';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <span className={styles.dot} />
      Site en cours de développement — certaines sections sont encore vides.
    </div>
  );
}