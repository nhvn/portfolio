import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {projects} from './project';
import Sidebar from './Sidebar';

function ProjPage() {
  const { projectId } = useParams();
  const project = projects.find((project) => project.id === projectId);

  if (!project) {
    return <div id='noProj'>404 Error - Project Not Found</div>;
  }

  // Helper function to render a section
  const renderSection = (sectionNumber) => {
    const sectionTitle = project[`sect${sectionNumber}`];
    const sectionContent = project[`sect${sectionNumber}content`];
    const sectionImages = [
      project[`sect${sectionNumber}img1`],
      project[`sect${sectionNumber}img2`],
      project[`sect${sectionNumber}img3`],
    ].filter(Boolean);

    if (!sectionTitle || !sectionContent) return null;

    return (
      <div className="section-wrapper">
      <div className="section-heading">
        <h2>{sectionTitle}</h2>
      </div>
      <div className="section-content">
        <p>{sectionContent}</p>
        {sectionImages.length > 0 && (
          <div className="projPics">
            {sectionImages.map((img, index) => (
              <img key={index} className="botImg" src={img} alt="" />
            ))}
          </div>
        )}
      </div>
    </div>
    );
  };

  return (
    <div>
      <Sidebar />
      {/* TOP SECTION */}
      <div className="projects-box fade">
        <Link to="/projects" className="back-button">←</Link>
        <div className="flex">
          <div className="left">
            <section className="title">
              {project.ongoing && <h4 className='construction'>Currently ongoing</h4>}
              <div className="description">
                <h4 className="small-paragraph">{project.app}</h4>
                <h1>{project.title}</h1>
                <div className="description descr-contain">
                  <div className="text-contain">
                    <p>{project.description}</p>
                    <h4 className="small-paragraph"><span className='highlight'>{project.role}</span></h4>
                    <p><span className='green'>Duration</span>: {project.duration}</p>
                    {project.team && (
                      <p><span className='green'>Team</span>: {project.team}</p>
                    )}
                    {project.technologies.filter(Boolean).length > 0 && (
                      <p><span className='green'>Tools</span>: {project.technologies.join(', ')}</p>
                    )}
                    {project.codeLink && 
                      <div className="link-container">
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">→ View Code</a>
                      </div>
                    }
                    {project.liveLink && 
                      <div className="link-container">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">→ View Live Project</a>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="right">
            <div className="proj-pic">
              <div>
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        
        <div className="proj-content-container">
          <div className="projPics-container contri">
              <h2>Contributions</h2>
              <div className="op-margin">
                {project.contribution.split('\n').map((line, index) => (
                  <li key={index}>{line.trim()}</li>
                ))}
              </div>
            </div>

          {/* MIDDLE SECTION */}
          {(project.prob || project.sol) && (
            <>
              <div className='section-wrapper'>
                <div className='section-heading'>
                  <h2>Problem</h2>
                </div>
                <div className='section-content'>
                  <p>{project.prob}</p>
                </div>
              </div>
              <div className='section-wrapper'>
                <div className='section-heading'>
                  <h2>Solution</h2>
                </div>
                <div className='section-content'>
                  <p>{project.sol}</p>
                </div>
              </div>
            </>
          )}

          {/* Render customizable sections */}
          {renderSection(1)}
          {project.sect1 && renderSection(2)}
          {project.sect1 && project.sect2 && renderSection(3)}
          {project.sect1 && project.sect2 && project.sect3 && renderSection(4)}
          {project.sect1 && project.sect2 && project.sect3 && project.sect4 && renderSection(5)}
          {project.sect1 && project.sect2 && project.sect3 && project.sect4 && project.sect5 && renderSection(6)}

          {project.finalThoughts ? (
            <div className="section-wrapper">
              <div className="section-heading">
                <h2>Final Thoughts</h2>
              </div>
              <div className="section-content">
                <p>{project.finalThoughts}</p>
              </div>
            </div>
          ) : (
            <div className="flex">
              <div className='tuned'>
                <p id='stay-tuned'>More exciting details are on the way. Stay tuned!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjPage;