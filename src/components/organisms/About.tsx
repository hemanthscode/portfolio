import { FC } from "react";
import { motion, Variants, useReducedMotion } from "framer-motion";
import Icon from "@components/atoms/Icon";
import { useTheme } from "@contexts/ThemeContext";

/**
 * Supported skill icon names.
 */
type SkillIcon = "Code" | "FileCode" | "Brush" | "Server";

/**
 * Skill interface for About section.
 */
interface Skill {
  name: string;
  icon: SkillIcon;
}

/**
 * An about section displaying personal info and skills.
 * @returns A styled about section.
 */
const About: FC = () => {
  const { colors } = useTheme();
  const shouldReduceMotion = useReducedMotion();
  const skills: Skill[] = [
    { name: "React", icon: "Code" },
    { name: "TypeScript", icon: "FileCode" },
    { name: "Tailwind CSS", icon: "Brush" },
    { name: "Node.js", icon: "Server" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, ease: "easeOut" },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className={`py-20 bg-[${colors.background}]`}
      id="about"
      aria-labelledby="about-heading"
    >
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="about-heading"
          className={`text-4xl sm:text-5xl font-bold text-[${colors.text.primary}] mb-12 text-center tracking-tight`}
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={childVariants}>
            <motion.img
              src="/assets/profile.jpg"
              alt="Your Name's profile"
              className="w-full max-w-md mx-auto rounded-lg object-cover shadow-lg"
              onError={(e) => (e.currentTarget.src = "/assets/placeholder.jpg")}
              loading="lazy"
            />
          </motion.div>
          <motion.div className="space-y-6" variants={childVariants}>
            <p
              className={`text-lg sm:text-xl text-[${colors.text.secondary}] leading-relaxed`}
            >
              I'm a passionate web developer with expertise in building
              scalable, user-centric applications. Specializing in React,
              TypeScript, and modern frameworks, I create seamless digital
              experiences that blend functionality with elegant design.
            </p>
            <div className="space-y-4">
              <h3
                className={`text-2xl font-semibold text-[${colors.text.primary}]`}
              >
                My Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={`flex items-center gap-3 p-3 bg-[${colors.primary}/0.05] rounded-md`}
                    variants={childVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, ease: "easeOut" }}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                  >
                    <Icon
                      name={skill.icon}
                      className={`text-[${colors.primary}]`}
                      size="md"
                      aria-label={`${skill.name} icon`}
                    />
                    <span className={`text-[${colors.text.primary}] text-base`}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
