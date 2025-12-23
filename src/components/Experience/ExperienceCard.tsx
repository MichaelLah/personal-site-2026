import { type ReactNode } from 'react';
import styles from './ExperienceCard.module.css';

export interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  location: string;
  children: ReactNode;
}

export const ExperienceCard = ({
  title,
  company,
  date,
  location,
  children,
}: ExperienceCardProps) => {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineHeader}>
        <h3>{title}</h3>
        <span className={styles.company}>{company}</span>
        <span className={styles.date}>{date}</span>
        <span className={styles.location}>{location}</span>
      </div>
      <ul className={styles.achievements}>{children}</ul>
    </div>
  );
};
