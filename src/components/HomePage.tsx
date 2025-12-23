import { Hero } from './Hero';
import { AboutMe } from './AboutMe';
import { Skills } from './Skills';
import { Experience } from './Experience';
import { Footer } from './Footer';
import styles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
};
