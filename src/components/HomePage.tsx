import styles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.name}>Michael Lah</h1>
          <p className={styles.title}>FullStack Software Engineer</p>
          <p className={styles.tagline}>
            Building scalable web applications with Ruby on Rails and React. Currently at AllTrails,
            exploring DevOps and cloud infrastructure.
          </p>

          <div className={styles.cta}>
            <a href="mailto:michaellahdev@gmail.com" className={styles.primaryButton}>
              Get in Touch
            </a>
            <a href="#experience" className={styles.secondaryButton}>
              View Experience
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.aboutContent}>
          <p>
            Hi! I'm a fullstack software engineer currently working at AllTrails in San Francisco.
            I specialize in building scalable web applications with Ruby on Rails and React, with
            experience in API optimization, CMS development, and mentoring engineers.
          </p>
          <p>
            Outside of work, I'm passionate about photography, hiking, biking, and golf. This site
            is also a learning project where I'm exploring DevOps practices including Docker,
            Kubernetes, Terraform, and AWS infrastructure.
          </p>
        </div>
      </section>

      {/* Skills Highlights */}
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
            <p>Docker, CI/CD, Datadog APM, Agile</p>
          </div>
          <div className={styles.skillCard}>
            <h3>Cloud & Infrastructure</h3>
            <p>AWS, Kubernetes (learning)</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={styles.experience} id="experience">
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineHeader}>
              <h3>FullStack Software Engineer</h3>
              <span className={styles.company}>AllTrails</span>
              <span className={styles.date}>February 2023 - Present</span>
              <span className={styles.location}>San Francisco, CA</span>
            </div>
            <ul className={styles.achievements}>
              <li>
                Designed and implemented a headless WordPress-powered CMS, replacing manual processes
                with a scalable, feature-rich publishing workflow that supports rich media and SEO
              </li>
              <li>
                Enabled high-profile partnerships with T-Mobile, PetSmart, and Toyota through NBC Americas
                collaboration, expanding curated content capabilities and driving revenue
              </li>
              <li>
                Managed scalable email API for dynamic, high-volume personalized trail recommendations
                and monthly recap emails
              </li>
            </ul>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineHeader}>
              <h3>Senior Software Engineer, Platform</h3>
              <span className={styles.company}>Beam Benefits</span>
              <span className={styles.date}>July 2021 - January 2023</span>
              <span className={styles.location}>Columbus, OH</span>
            </div>
            <ul className={styles.achievements}>
              <li>Led project to optimize API, cutting p95 latency in half</li>
              <li>Upgraded core technologies including Ruby 3, Rails 7, and MySQL 8</li>
              <li>Worked on major refactors of core data model</li>
              <li>Hosted "Tech Stack Overview" sessions and conducted technical interviews</li>
            </ul>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineHeader}>
              <h3>Software Engineer</h3>
              <span className={styles.company}>Beam Benefits</span>
              <span className={styles.date}>May 2019 - July 2021</span>
              <span className={styles.location}>Columbus, OH</span>
            </div>
            <ul className={styles.achievements}>
              <li>Full-stack development using Ruby on Rails and React</li>
              <li>Conducted 17 technical interviews and reviewed 24 code challenge submissions</li>
              <li>Reduced Elasticsearch reindex time from 1.5 hours to 7 minutes</li>
            </ul>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineHeader}>
              <h3>Software Developer</h3>
              <span className={styles.company}>NetJets</span>
              <span className={styles.date}>July 2018 - May 2019</span>
              <span className={styles.location}>Columbus, OH</span>
            </div>
            <ul className={styles.achievements}>
              <li>
                Improved and expanded the "Owner Portal" mobile app, website, and backend
                with new features and enhancements
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Links Section */}
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
          <a
            href="mailto:michaellahdev@gmail.com"
            className={styles.socialLink}
          >
            Email
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className={styles.socialLink}
          >
            Resume
          </a>
        </div>
      </section>
    </div>
  );
};
