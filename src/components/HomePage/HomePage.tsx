import { Hero } from '../Hero/Hero';
import { AboutMe } from '../AboutMe/AboutMe';
import { Skills } from '../Skills/Skills';
import { Experience } from '../Experience/Experience';
import { Footer } from '../Footer/Footer';
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
