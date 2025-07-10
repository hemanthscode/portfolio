// src/components/pages/HomePage.tsx
import { FC } from 'react';
import Hero from '@components/organisms/Hero';
import About from '@components/organisms/About';
import Work from '@components/organisms/Work';
import Contact from '@components/organisms/Contact';

/**
 * The home page combining hero, about, work, and contact sections.
 * @returns A styled home page.
 */
const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Contact />
    </>
  );
};

export default HomePage;