import React, { memo } from "react";
import LazyImage from "../atoms/LazyImage";
import { skills } from "../../data";
import { theme } from "../../constants/theme";
import profile from "../../assets/Profile.jpg";

/**
 * About section for portfolio.
 * @returns {JSX.Element}
 * @example
 * <About />
 */
const About = () => (
  <section
    id="about"
    className={`w-full ${theme.spacing.container} ${theme.spacing.section} min-h-screen flex items-center justify-center ${theme.colors.background}`}
    aria-labelledby="about-heading"
    role="region"
  >
    <div
      className={`max-w-4xl mx-auto flex flex-col ${theme.spacing.gap.lg} text-center`}
    >
      <h2 id="about-heading" className={`${theme.typography.heading.h2}`}>
        About Me
      </h2>
      <div className={`flex flex-col items-center ${theme.spacing.gap.md}`}>
        <LazyImage
          src={profile}
          alt="Portrait of Hemanth, Web Developer"
          className={`${theme.sizes.profileImage} ${theme.borderRadius.full} aspect-square object-cover ${theme.shadow.default}`}
        />
        <div className={`flex flex-col ${theme.spacing.gap.md}`}>
          <p
            className={`${theme.typography.body.base} max-w-3xl mx-auto ${theme.colors.text.secondary}`}
          >
            I&apos;m a Full Stack Web Developer and Python enthusiast who
            thrives at the intersection of design and engineering. My focus is
            on building fast, scalable, and accessible web applications using
            modern tools like React, Node.js, and Tailwind CSS. I believe in
            writing clean code, shipping meaningful features, and continuously
            evolving through each iteration.
          </p>
          <div className={`flex flex-col ${theme.spacing.gap.sm}`}>
            <h3 className={`${theme.typography.heading.h3}`}>Core Skills</h3>
            <ul
              className={`flex flex-wrap justify-center ${theme.spacing.gap.sm}`}
            >
              {skills.map((skill) => (
                <li
                  key={skill}
                  className={`px-4 py-2 ${theme.borderRadius.default} ${theme.colors.skillBackground} ${theme.typography.body.sm} ${theme.colors.text.secondary} ${theme.transition.default} ${theme.shadow.default}`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default memo(About);