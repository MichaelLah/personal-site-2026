import styles from './Skills.module.css';

export const Skills = () => {
  return (
    <section className={styles.skills}>
      <h2 className={styles.sectionTitle}>Key Skills</h2>
      <div className={styles.skillsGrid}>
        <div className={styles.skillCard}>
          <h3>Backend</h3>
          <p>Ruby on Rails, SQL, WordPress</p>
        </div>
        <div className={styles.skillCard}>
          <h3>Frontend</h3>
          <p>React, TypeScript, HTML/CSS/Sass</p>
        </div>
        <div className={styles.skillCard}>
          <h3>DevOps & Tools</h3>
          <p>Docker, CI/CD, Datadog APM</p>
        </div>
        <div className={styles.skillCard}>
          <h3>Cloud & Infrastructure</h3>
          <p>AWS, Kubernetes</p>
        </div>
      </div>
    </section>
  );
};
