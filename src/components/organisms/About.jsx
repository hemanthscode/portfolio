import React, { memo } from 'react';
import LazyImage from '../atoms/LazyImage';
import { skills } from '../../data';
import { containerPadding, typography } from '../../constants/theme';
import profile from '../../assets/Profile.jpg';

/**
 * About section for portfolio
 * @returns {JSX.Element}
 */
const About = () => (
  <section
    id="about"
    className={`flex w-full ${containerPadding} min-h-screen items-center justify-center py-12`}
    aria-labelledby="about-heading"
  >
    <div className="flex flex-col w-full max-w-4xl text-center gap-8">
      <h2 id="about-heading" className={typography.heading.h2}>
        About Me
      </h2>
      <div className="flex flex-col items-center gap-6">
        <LazyImage
          src={profile}
          alt="Portrait of Hemanth, Web Developer"
          className="w-48 h-48 rounded-full object-cover shadow-md"
        />
        <div className="flex flex-col gap-5">
          <p className={`${typography.body.base} max-w-3xl mx-auto text-gray-500`}>
            I&apos;m a Full Stack Web Developer and Python enthusiast who thrives at the intersection of design and engineering.
            My focus is on building fast, scalable, and accessible web applications using modern tools like React, Node.js,
            and Tailwind CSS. I believe in writing clean code, shipping meaningful features, and continuously evolving through each iteration.
          </p>
          <div className="flex flex-col gap-2">
            <h3 className={`${typography.heading.h3} text-gray-800`}>Core Skills</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default memo(About);