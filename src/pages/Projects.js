import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {/* Add your projects here */}
        <ProjectCard
          title="Paradise - AI-powered E-waste Management"
          description="An AI-powered system to track and manage e-waste in Nairobi's informal sectors."
          link="https://github.com/yourgithublink"
        />
        <ProjectCard
          title="MHORE Hack - Content Monetization Platform"
          description="A decentralized platform for content creators with secure payment options."
          link="https://github.com/yourgithublink"
        />
        {/* Add more projects */}
      </div>
    </div>
  );
};

export default Projects;
