import { memo } from 'react';
import { Hero, About, Skills, Projects, Experience, Contact } from '@/components/sections';

/**
 * Home page - Main landing page with all sections
 * Combines all major sections into a single scrollable page
 */
const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
};

export default memo(HomePage);
