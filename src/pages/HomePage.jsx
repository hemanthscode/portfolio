import React, { memo } from 'react';
import Hero from '../components/organisms/Hero';
import About from '../components/organisms/About';
import Work from '../components/organisms/Work';
import Contact from '../components/organisms/Contact';

/**
 * Home page combining Hero, About, Work, and Contact sections
 * @returns {JSX.Element}
 */
const HomePage = () => (
  <div className="flex flex-col w-full gap-12">
    <Hero />
    <About />
    <Work />
    <Contact />
  </div>
);

export default memo(HomePage);