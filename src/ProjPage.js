import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {projects} from './project';

function ProjPage() {
  const { projectId } = useParams();
  const project = projects.find((project) => project.id === projectId);

  if (!project) {
    return <div id='noProj'>404 Error - Project Not Found</div>;
  }

    return (
      <div>
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
        {/* BOTTOM PORTION */}
        <div className="proj-content-container">
          {(project.prob || project.sol) && (
            <>
              <div className='prob'>
                <h2>Problem</h2>
                <div className='descr'>
                  <p>{project.prob}</p>
                </div>
              </div>
              <div className='prob'>
                <h2>Solution</h2>
                <div className='descr'>
                  <p>{project.sol}</p>
                </div>
              </div>
            </>
          )}
          {/* <div className="divider"></div> */}
          <div className="projPics-container contri">
              <h2>Contribution</h2>
              <div className="op-margin">
                {project.contribution.split('\n').map((line, index) => (
                  <li key={index}>{line.trim()}</li>
                ))}
              </div>
            </div>
          {project.sketch && (
            <div className="projPics-container box-hover">
              <h2>Sketches</h2>
              <p>{project.sketch}</p>
              <div className="projPics">
                {/* temporarily not using alt='' */}
                <img className="botImg" src={project.sketchImage1} alt=''/>
                <img className="botImg" src={project.sketchImage2} alt=''/>
                {/* <img className="botImg" src={project.sketchImage3} alt=''/> */}
              </div>
            </div>
          )}
          {project.sketch && project.method && (
            <>
              {/* <div className="divider"></div> */}
              <div className="projPics-container box-hover">
                <h2>Methodology</h2>
                <p>{project.method}</p>
              </div>
            </>
          )}
          {project.sketch && project.method && project.results && (
            <>
              {/* <div className="divider"></div> */}
              <div className="projPics-container box-hover">
                <h2>Results</h2>
                <p>{project.results}</p>
                <div className="projPics">
                  <img className="botImg" src={project.resultsImage1} alt=''/>
                  <img className="botImg" src={project.resultsImage2} alt=''/>
                  {/* <img className="botImg" src={project.resultsImage3} alt=''/> */}
                </div>
              </div>
            </>
          )}
          {project.sketch && project.method && project.results && project.finalThoughts && (
            <>
              {/* <div className="divider"></div> */}
              <div className='final box-hover'>
                <h2>Final Thoughts</h2>
                <p>{project.finalThoughts}</p>
              </div>
            </>
          )}
          {(!project.sketch || !project.method || !project.results || !project.finalThoughts) && (
            <div className="flex">
              <div className='tuned'>
                {/* <h2>Upcoming</h2> */}
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
