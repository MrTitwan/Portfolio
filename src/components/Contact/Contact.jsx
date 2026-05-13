import { useState } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { identity } from '../../data/portfolio';
import styles from './Contact.module.css';

const LINKS = [
  { label: 'Email',    icon: '✉',  key: 'email',    prefix: 'mailto:' },
  { label: 'LinkedIn', icon: 'in', key: 'linkedin',  prefix: '' },
  { label: 'GitHub',   icon: '</>', key: 'github',   prefix: '' },
];

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // Construit un mailto: simple — remplace par une vraie API si besoin
  const handleSubmit = () => {
    if (!identity.email || !form.message) return;
    const subject = `Portfolio — Message de ${form.name}`;
    const body    = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.open(`mailto:${identity.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" ref={ref}>
      <div className="section">
        <p className="section-label reveal">04 — Contact</p>
        <h2 className="section-title reveal">
          On se <em>parle ?</em>
        </h2>

        <div className={styles.layout}>
          {/* Left: links */}
          <div className={styles.left}>
            <p className={`${styles.intro} reveal`}>
              {identity.tagline
                ? 'Disponible pour des missions, postes ou collaborations. Je réponds en général sous 24h.'
                : 'Modifie le champ tagline dans src/data/portfolio.js'}
            </p>

            <div className={`${styles.links} reveal`}>
              {LINKS.map(({ label, icon, key, prefix }) => {
                const val = identity[key];
                return val ? (
                  <a
                    key={key}
                    href={`${prefix}${val}`}
                    target={key !== 'email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <span className={styles.linkIcon}>{icon}</span>
                    <div className={styles.linkText}>
                      <span className={styles.linkLabel}>{label}</span>
                      <span className={styles.linkVal}>{val}</span>
                    </div>
                    <span className={styles.linkArrow}>↗</span>
                  </a>
                ) : (
                  <div key={key} className={`${styles.link} ${styles.linkDisabled}`}>
                    <span className={styles.linkIcon}>{icon}</span>
                    <div className={styles.linkText}>
                      <span className={styles.linkLabel}>{label}</span>
                      <span className={styles.linkVal}>— à remplir —</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: form */}
          <div className={`${styles.form} reveal`}>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Nom</label>
              <input
                className={styles.input}
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jean Dupont"
              />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Email</label>
              <input
                className={styles.input}
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jean@entreprise.com"
              />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Message</label>
              <textarea
                className={styles.textarea}
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Bonjour, j'aurais une mission…"
              />
            </div>
            <button
              className={styles.submit}
              onClick={handleSubmit}
              disabled={sent}
            >
              {sent ? 'Envoyé ✓' : 'Envoyer →'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
