import { ExperienceCard } from './ExperienceCard';
import styles from './Experience.module.scss';

export const Experience = () => {
  return (
    <section className={styles.experience} id="experience">
      <h2 className={styles.sectionTitle}>Experience</h2>
      <div className={styles.timeline}>
        <ExperienceCard
          title="FullStack Software Engineer"
          company="AllTrails"
          date="February 2023 - Present"
          location="San Francisco, CA"
        >
          <li>
            Designed and implemented a headless WordPress-powered CMS, replacing
            manual processes with a scalable, feature-rich publishing workflow
            that supports rich media and SEO
          </li>
          <li>
            Enabled high-profile partnerships with T-Mobile, PetSmart, and
            Toyota through NBC Americas collaboration, expanding curated content
            capabilities and driving revenue
          </li>
          <li>
            Managed scalable email API for dynamic, high-volume personalized
            trail recommendations and monthly recap emails
          </li>
        </ExperienceCard>

        <ExperienceCard
          title="Senior Software Engineer, Platform"
          company="Beam Benefits"
          date="July 2021 - January 2023"
          location="Columbus, OH"
        >
          <li>Led project to optimize API, cutting p95 latency in half</li>
          <li>
            Upgraded core technologies including Ruby 3, Rails 7, and MySQL 8
          </li>
          <li>Worked on major refactors of core data model</li>
          <li>
            Hosted "Tech Stack Overview" sessions and conducted technical
            interviews
          </li>
        </ExperienceCard>

        <ExperienceCard
          title="Software Engineer"
          company="Beam Benefits"
          date="May 2019 - July 2021"
          location="Columbus, OH"
        >
          <li>Full-stack development using Ruby on Rails and React</li>
          <li>
            Conducted 17 technical interviews and reviewed 24 code challenge
            submissions
          </li>
          <li>
            Reduced Elasticsearch reindex time from 1.5 hours to 7 minutes
          </li>
        </ExperienceCard>

        <ExperienceCard
          title="Software Developer"
          company="NetJets"
          date="July 2018 - May 2019"
          location="Columbus, OH"
        >
          <li>
            Improved and expanded the "Owner Portal" mobile app, website, and
            backend with new features and enhancements
          </li>
        </ExperienceCard>
      </div>
    </section>
  );
};
