import React from 'react';
import { useParams } from 'react-router-dom';

function ProjPage({ projects }) {
    const { projectId } = useParams();
    const project = projects.find((project) => project.id === projectId);
  
    return (
      <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <img src={project.image} alt={project.title} />
        <p>Technologies used: {project.technologies.join(', ')}</p>
        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">View Code</a>
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">View Live Project</a>
      </div>
    );
  }
  

export default ProjPage;
