import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <section className={styles.links}>
      <h2 className={styles.sectionTitle}>Connect With Me</h2>
      <div className={styles.socialLinks}>
        <a
          href="https://linkedin.com/in/michaellah"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          LinkedIn
        </a>
        <a href="mailto:michaellahdev@gmail.com" className={styles.socialLink}>
          Email
        </a>
        <a
          href="/MichaelLahResume.pdf"
          target="_blank"
          className={styles.socialLink}
        >
          Resume
        </a>
      </div>
    </section>
  );
};
