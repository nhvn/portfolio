import React, { useContext } from 'react'; // Import useContext
import { ProjectsContext } from './App.js'; // Import the context

const Projects = () => {
  const projects = useContext(ProjectsContext);

  return (
    <section className="projects">
      <h2 id="titles">Projects</h2>
      <div className="projects-contain">
        <div className="project-card-grid">
          {projects.map((project) => (
            <div className ="proj" id={project.id}>
              <a href={`/projects/${project.id}`}>
                <img src={process.env.PUBLIC_URL + project.image} alt={project.title} />
                <div className="card-overlay">
                  <div className="header">
                    <h2>{project.title}</h2>
                    <h4>{project.duration}</h4>
                    <p>{project.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Projects;
