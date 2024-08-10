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
    const sectionImages = Array.from({ length: 10 }, (_, i) => project[`sect${sectionNumber}img${i + 1}`]).filter(Boolean);
    const sectionLink = project[`sect${sectionNumber}link`];
    const sectionLinkText = project[`sect${sectionNumber}linkText`];
  
    const subsections = Array.from({ length: 10 }, (_, i) => {
      const subNumber = i + 1;
      const title = project[`sect${sectionNumber}sub${subNumber}`];
      const content = project[`sect${sectionNumber}sub${subNumber}content`];
      const images = Array.from({ length: 10 }, (_, j) => project[`sect${sectionNumber}sub${subNumber}img${j + 1}`]).filter(Boolean);
      const link = project[`sect${sectionNumber}sub${subNumber}link`];
      const linkText = project[`sect${sectionNumber}sub${subNumber}linkText`];
      
      return (title && (content || images.length > 0 || link)) ? { title, content, images, link, linkText } : null;
    }).filter(Boolean);
  
    if (!sectionTitle && !sectionContent && subsections.length === 0 && !sectionLink) return null;
  
    return (
      <div className="section-wrapper">
        {sectionTitle && (
          <div className="section-heading">
            <h2>{sectionTitle}</h2>
          </div>
        )}
        <div className="section-content">
          {sectionContent && <p>{sectionContent}</p>}
          {sectionImages.length > 0 && (
            <div className="projPics">
              {sectionImages.map((img, index) => (
                <img key={index} className="botImg" src={img} alt={`Section ${sectionNumber} image ${index + 1}`} />
              ))}
            </div>
          )}
          {sectionLink && (
            <div className="link-container">
              <a href={sectionLink} target="_blank" rel="noopener noreferrer" className="custom-link">
                {sectionLinkText || "View Link"}
              </a>
            </div>
          )}
          {subsections.map((subsection, index) => (
            <div key={index} className="subsection projPics">
              <h3>{subsection.title}</h3>
              {subsection.content && <p>{subsection.content}</p>}
              {subsection.images.length > 0 && (
                <div className="subsection-images">
                  {subsection.images.map((img, imgIndex) => (
                    <img key={imgIndex} className="botImg" src={img} alt={`Subsection ${index + 1} image ${imgIndex + 1}`} />
                  ))}
                </div>
              )}
              {subsection.link && (
                <div className="link-container">
                  <a href={subsection.link} target="_blank" rel="noopener noreferrer" className="custom-link">
                    {subsection.linkText || "View Link"}
                  </a>
                </div>
              )}
            </div>
          ))}
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
          {/* {(project.prob || project.sol) && (
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
          )} */}

          {/* Render customizable sections */}
          {Array.from({ length: 10 }, (_, i) => renderSection(i + 1))}

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