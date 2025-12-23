import styles from './ExperienceCard.module.css';

export interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  location: string;
  achievements: string[];
}

export const ExperienceCard = ({ title, company, date, location, achievements }: ExperienceCardProps) => {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineHeader}>
        <h3>{title}</h3>
        <span className={styles.company}>{company}</span>
        <span className={styles.date}>{date}</span>
        <span className={styles.location}>{location}</span>
      </div>
      <ul className={styles.achievements}>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};
