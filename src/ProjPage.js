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
  const renderSection = (sectionNumber) => {
    const sectionTitle = project[`sect${sectionNumber}`];
    const sectionContent = project[`sect${sectionNumber}content`];
    const sectionImages = [
      project[`sect${sectionNumber}img1`],
      project[`sect${sectionNumber}img2`],
      project[`sect${sectionNumber}img3`],
      project[`sect${sectionNumber}img4`],
      project[`sect${sectionNumber}img5`],
      project[`sect${sectionNumber}img6`],
    ].filter(Boolean);
  
    // Updated: Add subsections with images
    const subsections = [1, 2, 3].map(subNumber => {
      const title = project[`sect${sectionNumber}sub${subNumber}`];
      const content = project[`sect${sectionNumber}sub${subNumber}content`];
      const image = project[`sect${sectionNumber}sub${subNumber}img1`];
      
      // Only return the subsection if it has a title and either content or an image
      return (title && (content || image)) ? { title, content, image } : null;
    }).filter(Boolean);
  
    if (!sectionTitle || (!sectionContent && subsections.length === 0)) return null;
  
    return (
      <div className="section-wrapper">
        <div className="section-heading">
          <h2>{sectionTitle}</h2>
        </div>
        <div className="section-content">
          {sectionContent && <p>{sectionContent}</p>}
          {subsections.map((subsection, index) => (
            <div key={index} className="subsection">
              <h3>{subsection.title}</h3>
              {subsection.content && <p>{subsection.content}</p>}
              {subsection.image && (
                <div className="subsection-image">
                  <img src={subsection.image}className="botImg" alt={subsection.title} />
                </div>
              )}
            </div>
          ))}
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

          {!project.sect1 && (
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