import React from 'react';

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block text-blue-500"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
