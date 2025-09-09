import React, { memo } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Button from "./Button";
import Icon from "./Icon";

const Card = ({ project, index }) => {
  const statusColors = {
    Completed: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20",
    "In Progress": "bg-amber-500/10 text-amber-400 border-amber-500/20 hover:bg-amber-500/20"
  };

  // Truncate functions for uniform content display
  const truncateTitle = (text) => text.length > 30 ? `${text.substring(0, 27)}...` : text;
  const truncateDescription = (text) => text.length > 120 ? `${text.substring(0, 117)}...` : text;

  // Responsive animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { 
        delay: index * 0.1, 
        duration: 0.5, 
        type: "spring", 
        stiffness: 100 
      }
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 12px 24px rgba(59, 130, 246, 0.15)",
      borderColor: "rgba(59, 130, 246, 0.4)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={window.matchMedia("(prefers-reduced-motion: reduce)").matches ? {} : "hover"}
      className="group w-full max-w-[22rem] sm:max-w-[20rem] md:max-w-[18rem] lg:max-w-[20rem] xl:max-w-[22rem] h-[24rem] sm:h-[26rem] mx-auto overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-950/90 border border-gray-800/40 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40"
    >
      <div className="p-5 sm:p-6 flex flex-col h-full gap-4">
        {/* Header: Icon and Status */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-blue-500/30 transition-all duration-300">
              <Icon name="Code2" size={20} className="text-white" />
            </div>
          </div>
          <span className={`px-2.5 py-1 text-[0.65rem] sm:text-xs font-semibold rounded-full border ${statusColors[project.status]} backdrop-blur-sm group-hover:shadow-sm transition-all duration-300`}>
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-100 leading-tight group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:text-transparent transition-all duration-300">
          {truncateTitle(project.title)}
        </h3>

        {/* Description */}
        <div className="flex-1">
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-4 sm:line-clamp-5 group-hover:text-gray-200 transition-colors duration-300">
            {truncateDescription(project.description)}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 overflow-x-auto scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-600 pb-1">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-[0.65rem] sm:text-xs font-medium rounded-full bg-gray-800/60 text-gray-200 border border-gray-700/40 group-hover:bg-blue-600/20 group-hover:text-blue-300 group-hover:border-blue-500/40 transition-all duration-300 whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-1 text-[0.65rem] sm:text-xs text-gray-400 font-medium">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Footer: Info and Buttons */}
        <div className="mt-auto border-t border-gray-800/50 pt-3">
          <div className="flex items-center justify-between text-[0.65rem] sm:text-xs text-gray-400 mb-2.5 sm:mb-3">
            <span className="flex items-center gap-1">
              <Icon name="Calendar" size={10} className="sm:w-3 sm:h-3" />
              {project.year}
            </span>
            <span className="flex items-center gap-1">
              <Icon name="Folder" size={10} className="sm:w-3 sm:h-3" />
              {project.category}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
            <Button
              variant="ghost"
              to={`/work/${project.slug}`}
              icon="Eye"
              size="sm"
              className="text-[0.65rem] sm:text-xs h-8 sm:h-9 justify-center font-medium group-hover:bg-blue-600/10 hover:!text-blue-400 transition-colors duration-300"
            >
              Details
            </Button>
            {project.liveLink && (
              <Button
                variant="ghost"
                href={project.liveLink}
                icon="ExternalLink"
                size="sm"
                className="text-[0.65rem] sm:text-xs h-8 sm:h-9 justify-center font-medium group-hover:bg-purple-600/10 hover:!text-purple-400 transition-colors duration-300"
              >
                Live
              </Button>
            )}
            <Button
              variant="ghost"
              href={project.codeLink}
              icon="Github"
              size="sm"
              className="text-[0.65rem] sm:text-xs h-8 sm:h-9 justify-center font-medium group-hover:bg-green-600/10 hover:!text-green-400 transition-colors duration-300"
            >
              Code
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

Card.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    status: PropTypes.string.isRequired,
    liveLink: PropTypes.string,
    codeLink: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number
};

export default memo(Card);