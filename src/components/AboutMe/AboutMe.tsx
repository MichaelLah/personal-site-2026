import styles from './AboutMe.module.css';

export const AboutMe = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.sectionTitle}>About Me</h2>
      <div className={styles.aboutContent}>
        <p>
          Hi! I'm a fullstack software engineer currently working at AllTrails
          in San Francisco. I specialize in building scalable web applications
          with Ruby on Rails and React, with experience in API optimization, CMS
          development, and mentoring engineers.
        </p>
        <p>
          Outside of work, I'm passionate about photography, hiking, biking, and
          golf. This site is also a learning project where I'm exploring DevOps
          practices including Docker, Kubernetes, Terraform, and AWS
          infrastructure.
        </p>
      </div>
    </section>
  );
};
