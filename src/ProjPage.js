import React from 'react';
import { useParams } from 'react-router-dom';

function ProjPage({ projects }) {
    const { projectId } = useParams();
    const project = projects.find((project) => project.id === projectId);
  
    return (
      <div>
        <div className="projects-box fade">
          <div className="flex">
            <div className="left">
              <section className="title">
                <div className="description">
                  <p className="small-paragraph">{project.role}</p>
                  <h1>{project.title}</h1>
                  <div className="description descr-contain">
                    <div className="text-contain">
                      <p>{project.description}</p>
                      <p>Technologies used: {project.technologies.join(', ')}</p>
                      <div className="link-container"><a href={project.codeLink} target="_blank" rel="noopener noreferrer">View Code</a></div>
                      <div className="link-container"><a href={project.liveLink} target="_blank" rel="noopener noreferrer">View Live Project</a></div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="right">
              <div className="contact">
                <div className="proj-contain">
                <img src={project.image} alt={project.title} />
                </div>
              </div>
            </div>
        </div>
        <div className="divider"></div>
      </div>
    </div>
    );
  }
  

export default ProjPage;
