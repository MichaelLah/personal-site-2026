import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.name}>Michael Lah</h1>
        <p className={styles.title}>FullStack Software Engineer</p>
        <p className={styles.tagline}>
          Building scalable web applications with Ruby on Rails and React.
          Currently at AllTrails, exploring DevOps and cloud infrastructure.
        </p>

        <div className={styles.cta}>
          <a
            href="mailto:michaellahdev@gmail.com"
            className={styles.primaryButton}
          >
            Get in Touch
          </a>
          <a href="#experience" className={styles.secondaryButton}>
            View Experience
          </a>
        </div>
      </div>
    </section>
  );
};
