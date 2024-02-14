import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const projects = [
  { 
    id: 'taskmaster', 
    title: 'Task Master', 
    role: 'FULL-STACK DEVELOPER',
    description: 'To-Do List App app allows users to create, edit, and delete tasks with due dates and priorities, as well as mark tasks as complete or incomplete. Users can register, log in, and log out, and their tasks are stored securely in a PostgreSQL database.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'HTML', 'CSS'],
    image: '/img/todo.png',
    contribution: 'I built a secure PostgreSQL database from scratch and developed a robust API using Node.js and Express. I also created an intuitive user interface using React, integrating it with the back-end for seamless functionality.',
    team: 'Myself and two other software engineers.',
    problem: 'Users needed a way to manage tasks efficiently, with the ability to create, edit, delete, and mark tasks with due dates and priorities.',
    solution: 'We developed a To-Do List App that allows users to perform all these actions. The app also provides secure user registration, login, and logout features, with tasks stored securely in a PostgreSQL database.',
    sketchImage: '/img/comingSoon.png',
    sketch: 'In the initial design phase, I focused on creating intuitive and user-friendly interfaces. I sketched various layouts, considering factors like usability and aesthetic appeal. The goal was to create a design that would provide a seamless user experience while maintaining a clean and modern look.',
    methodImage: '/img/comingSoon.png',
    method: 'My approach was iterative and user-centric. I started with low-fidelity wireframes, gradually refining them based on user feedback and usability testing. I also considered the latest design trends and best practices, ensuring the design was both contemporary and intuitive.',
    resultsImage: '/img/comingSoon.png',
    results: 'The final design effectively balanced functionality and aesthetics. It provided users with a clear and easy-to-navigate interface, improving task management efficiency. The design was well-received by users, demonstrating the effectiveness of the user-centric design approach.',
    finalThoughts: 'This project reinforced the importance of user-centric design and iterative development. It was a rewarding experience that highlighted the impact of good design on user experience. I look forward to applying these insights to future projects. 😊',
    codeLink: 'https://github.com/nhvn/to-do-list',
    liveLink: ''
  },
  { 
    id: 'pumpkin', 
    title: 'Pumpkin Lostte', 
    role: 'GAME DEVELOPER',
    description: 'This game takes inspiration from the classic game Flappy Bird, where the main objective is to dodge barriers and travel as far as possible. However, our game adds a twist - there is an actual destination to reach. You play as Jerry, on a mission to save his beloved pumpkin lost in the shadows. Your job is to navigate through the barriers with skill and precision to rescue the pumpkin. But beware, danger lurks behind you. This game was born out of a love for the simplicity and nostalgia of classic games.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
    image: '/img/pumpkin.png',
    contribution: 'I designed game elements from scratch, built the game using HTML, CSS, and JavaScript, and handled deployment through Firebase.',
    team: 'Myself.',
    problem: 'The challenge was to create a browser game that was both engaging and challenging, drawing inspiration from the classic ‘Flappy Bird’ game, but with a unique twist and a Halloween theme.',
    solution: 'I developed ‘Pumpkin Lostte’, where players navigate through barriers to rescue a lost pumpkin, adding an actual destination to reach, unlike the endless gameplay of ‘Flappy Bird’. The game was optimized for Windows and deployed online for easy access.',
    sketchImage: '/img/comingSoon.png',
    sketch: 'The game design started with a series of sketches, focusing on creating an engaging and visually appealing interface. The sketches included various game elements like the character, barriers, and the lost pumpkin, all designed with a Halloween theme.',
    methodImage: '/img/comingSoon.png',
    method: 'The development process was iterative, starting with a basic game loop and gradually adding features like barrier navigation, scoring, and game over conditions. User feedback was incorporated at each stage to enhance the gameplay experience.',
    resultsImage: '/img/comingSoon.png',
    results: 'The final game provides a challenging yet enjoyable gaming experience. The unique twist of having an actual destination adds a new dimension to the gameplay, making it stand out from similar games. The Halloween-themed design was well-received by players, adding to the game’s appeal.',
    finalThoughts: 'This project is my first milestone project from my bootcamp program, and I am proud of what I have accomplished so far. This is a JavaScript browser game built with HTML and CSS. I created this project around Halloween, so I decided to make it Halloween-themed. I designed some elements of the game from scratch, like the black barriers that players should avoid touching, or they lose. The game has room for improvement, but considering my knowledge at the time, I think it is awesome. Please feel free to try it out if you dare. It is a challenging game, so do not hesitate to give it multiple attempts.',
    codeLink: 'https://github.com/nhvn/first-browser-game',
    liveLink: 'https://pumpkin-lost-te.web.app/'
  },
  { 
    id: 'oldPortfolio', 
    title: 'Old Portfolio', 
    role: 'WEB DEVELOPER',
    description: 'In construction, come back soon!',
    technologies: ['', '', ''],
    image: '/img/oldportfolio.png',
    contribution: '-',
    team: '-',
    problem: '-',
    solution: '-',
    sketchImage: '/img/comingSoon.png',
    sketch: 'In construction, come back soon!',
    methodImage: '/img/comingSoon.png',
    method: 'In construction, come back soon!',
    resultsImage: '/img/comingSoon.png',
    results: 'In construction, come back soon!',
    finalThoughts: 'In construction, come back soon!',
    codeLink: 'https://github.com/nhvn/nhvn.github.io',
    liveLink: 'https://nhvn.github.io/'
  },
  { 
    id: 'smartLights', 
    title: 'Smart Lighting Control System', 
    role: 'IoT Developer',
    description: 'In construction, come back soon!',
    technologies: ['', '', ''],
    image: '/img/comingSoon.png',
    contribution: '-',
    team: '-',
    problem: '-',
    solution: '-',
    sketchImage: '/img/comingSoon.png',
    sketch: 'In construction, come back soon!',
    methodImage: '/img/comingSoon.png',
    method: 'In construction, come back soon!',
    resultsImage: '/img/comingSoon.png',
    results: 'In construction, come back soon!',
    finalThoughts: 'In construction, come back soon!',
    codeLink: '',
    liveLink: ''
  },
];

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
                <div className="description">
                  <p className="small-paragraph">{project.role}</p>
                  <h1>{project.title}</h1>
                  <div className="description descr-contain">
                    <div className="text-contain">
                      <p>{project.description}</p>
                      {project.technologies.filter(Boolean).length > 0 && (
                        <p>Tools: {project.technologies.join(', ')}</p>
                      )}
                      {project.codeLink && 
                      <div className="link-container">
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">View Code</a>
                      </div>
                      }
                      {project.liveLink && 
                        <div className="link-container">
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">View Live Project</a>
                        </div>
                      }
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
        {/* MIDDLE PORTION */}
        <div classname="overview">
          <div className='flex2'>
            <div className='overview-parts'>
              <h2>Contribution</h2>
              <p>{project.contribution}</p>
            </div>
            <div className='overview-parts'>
              <h2>Team</h2>
              <p>{project.team}</p>
            </div>
            <div className='overview-parts'>
              <h2>Problem</h2>
              <p>{project.problem}</p>
            </div>
            <div className='overview-parts'>
              <h2>Solution</h2>
              <p>{project.solution}</p>
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
              <h2>Sketches</h2>
              <p>{project.sketch}</p>
            </div>
          </div>
          <div className="flex">
            <div className="right-proj"> {/* SWAPPED */}
              <h2>Methodology</h2>
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
              <h2>Results</h2>
              <p>{project.results}</p>
            </div>
          </div>
          <div className="flex">
            <div className='right-proj finalThoughts'>
              <div className='final'>
                <h2>Final Thoughts</h2>
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
