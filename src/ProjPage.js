import React from 'react';
import { useParams } from 'react-router-dom';

export const projects = [
  { 
    id: 'taskmaster', 
    title: 'Task Master', 
    role: 'FULL-STACK DEVELOPER',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technologies: ['React', 'JavaScript', 'CSS'],
    image: '/img/todo.png',
    sketchImage: '/img/comingSoon.png',
    sketch: 'sketch description',
    methodImage: '/img/comingSoon.png',
    method: 'method description',
    resultsImage: '/img/comingSoon.png',
    results: 'results description',
    finalThoughts: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    codeLink: 'https://github.com/nhvn/to-do-list',
    liveLink: ''
  },
  { 
    id: 'pumpkin', 
    title: 'Pumpkin Latte', 
    role: 'GAME DEVELOPER',
    description: 'Description...',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    image: '/img/comingSoon.png',
    sketchImage: '/img/comingSoon.png',
    sketch: 'sketch description',
    methodImage: '/img/comingSoon.png',
    method: 'method description',
    resultsImage: '/img/comingSoon.png',
    results: 'results description',
    finalThoughts: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    codeLink: 'https://github.com/nhvn/first-browser-game',
    liveLink: 'https://pumpkin-lost-te.web.app/'
  },
  { 
    id: 'comingSoon', 
    title: '', 
    role: '',
    description: 'Description...',
    technologies: ['', '', ''],
    image: '/img/comingSoon.png',
    sketchImage: '/img/comingSoon.png',
    sketch: 'sketch description',
    methodImage: '/img/comingSoon.png',
    method: 'method description',
    resultsImage: '/img/comingSoon.png',
    results: 'results description',
    finalThoughts: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    codeLink: '',
    liveLink: ''
  },
  { 
    id: 'comingSoon', 
    title: '', 
    role: '',
    description: 'Description...',
    technologies: ['', '', ''],
    image: '/img/comingSoon.png',
    sketchImage: '/img/comingSoon.png',
    sketch: 'sketch description',
    methodImage: '/img/comingSoon.png',
    method: 'method description',
    resultsImage: '/img/comingSoon.png',
    results: 'results description',
    finalThoughts: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    codeLink: '',
    liveLink: ''
  },
];

function ProjPage() {
  const { projectId } = useParams();
  const project = projects.find((project) => project.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

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
        {/* BOTTOM PORTION */}
        <div className="proj-content-container">
          <div className="flex">
            <div className="left-proj">
              <img src={project.sketchImage} alt={project.title} />
            </div>
            <div className='right-proj'>
              <h2>Sketches.</h2>
              <p>{project.sketch}</p>
            </div>
          </div>
          <div className="flex">
            <div className="right-proj"> {/* SWAPPED */}
              <h2>Methodology.</h2>
              <p>{project.method}</p>
            </div>
            <div className='left-proj'> {/* SWAPPED */}
              <img src={project.methodImage} alt={project.title} />
            </div>
          </div>
          <div className="flex">
            <div className="left-proj">
              <img src={project.resultsImage} alt={project.title} />
            </div>
            <div className='right-proj'>
              <h2>Results.</h2>
              <p>{project.results}</p>
            </div>
          </div>
          <div className="flex">
            <div className='right-proj finalThoughts'>
              <div className='final'>
                <h2>Final Thoughts.</h2>
                <p>{project.finalThoughts}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
  

export default ProjPage;
