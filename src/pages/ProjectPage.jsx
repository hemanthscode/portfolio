import React, { memo } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/atoms/Button";
import Icon from "../components/atoms/Icon";
import { projects } from "../data/index";

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="py-20 lg:py-32 bg-gray-950 min-h-screen text-center">
        <Icon name="AlertTriangle" size={64} className="text-gray-400 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-100 mb-4">Project Not Found</h1>
        <p className="text-lg text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
        <Button variant="primary" to="/work" icon="ArrowLeft">Back to Work</Button>
      </div>
    );
  }

  return (
    <div className="py-20 lg:py-32 bg-gray-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button variant="ghost" to="/work" icon="ArrowLeft" className="mb-8">
          Back to Work
        </Button>

        <div className="mb-12 mobile-center">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">{project.title}</h1>
          <p className="text-lg text-gray-300 mb-8">{project.description}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {project.liveLink && (
              <Button variant="primary" href={project.liveLink} icon="ExternalLink" size="lg">
                View Live
              </Button>
            )}
            <Button variant="secondary" href={project.codeLink} icon="Github" size="lg">
              View Code
            </Button>
          </div>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-100 mb-8">Project Details</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span key={tech} className="px-3 py-2 bg-gray-800 text-gray-300 text-sm rounded-lg border border-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-4">Project Info</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Status:</span>
                  <span className="text-gray-200">{project.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Year:</span>
                  <span className="text-gray-200">{project.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Category:</span>
                  <span className="text-gray-200">{project.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProjectPage);