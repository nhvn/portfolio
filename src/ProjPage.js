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
    duration: 'Apr 2023 - Present',
    outcome: 'We developed a To-Do List App that allows users to perform all these actions. The app also provides secure user registration, login, and logout features, with tasks stored securely in a PostgreSQL database.',
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
    id: 'oldPortfolio', 
    title: 'Old Portfolio', 
    role: 'WEB DEVELOPER',
    description: 'In construction, come back soon!',
    technologies: ['', '', ''],
    image: '/img/oldportfolio.png',
    contribution: '-',
    team: 'Myself.',
    duration: 'Apr 2023 - Jun 2023',
    outcome: '-',
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
    description: "An automation solution for precise control of lights. This system enables control of up to 50 lights across 10 rooms with customizable schedules.",
    technologies: ['Python', 'Flask', 'Raspberry Pi'],
    image: '/img/smartLight.png',
    contribution: 'Engineered lighting automation solution using Python and Raspberry Pi to interact with physical GPIO pins. Used multithreading and Flask web framework to enable parallel control of lights. Created web UI with Jinja templates for user management and scheduling.',
    team: 'Myself, another software engineer, and an electronics engineer.',
    duration: 'Feb 2023 - Mar 2023',
    outcome: 'Developed a Smart Lighting Control System that allows precise control of lights. The system also provides customizable schedules for each light.',
    sketchImage: '/img/lightSketch.png',
    sketch: 'These sketches illustrate the overall system design, the setup of the Raspberry Pi and its GPIO pin configuration, the process of controlling the lights, the setup of the Flask web server, the design of the user interface, the implementation of scheduling, and the use of multithreading for parallel light control. Each sketch focuses on a key aspect of the project, providing a clear visual representation of the main components and their interactions, making the project’s workings easier to understand.',
    methodImage: '/img/raspPi.png',
    method: 'In this project, we started with a high-level system design that included the Raspberry Pi, the lights, and the user interface. We set up the Raspberry Pi with the necessary software and used its GPIO pins to control the lights. The lights were controlled using signals from the Raspberry Pi. We then set up a Flask web server to handle requests and control the lights. The user interface was designed with main screens for light control and scheduling. Scheduling was implemented to allow users to set schedules for controlling the lights. We used multithreading to enable parallel control of lights, with each thread controlling a different light. Throughout the project, we used Python, Flask, and the Raspberry Pi’s GPIO pins. We also faced and overcame various challenges, demonstrating our problem-solving skills and technical expertise.',
    resultsImage: '/img/resultLight.png',
    results: 'The Smart Lighting Control System project yielded impressive results. The system successfully enabled precise control of up to 50 lights across 10 rooms, with customizable schedules for each light. The use of Python, Flask, and Raspberry Pi’s GPIO pins allowed for efficient and effective control of the lighting system. The implementation of multithreading ensured parallel control of lights, enhancing the system’s performance. The user-friendly interface facilitated easy management and scheduling of lights. Overall, the project demonstrated the potential of IoT in improving home automation and energy efficiency.',
    finalThoughts: "This project was a fascinating journey into the world of IoT and automation. It underscored the transformative potential of technology in everyday life. The ability to control lighting across multiple rooms with customizable schedules not only enhanced convenience but also promoted energy efficiency. The project was a testament to the power of Python and Flask in creating robust and scalable solutions. It was a rewarding experience that highlighted the synergy between software and hardware in creating impactful solutions. I look forward to leveraging these insights in future IoT projects.",
    codeLink: '',
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
    duration: 'Oct 2022 - Nov 2022',
    outcome: 'I developed ‘Pumpkin Lostte’, where players navigate through barriers to rescue a lost pumpkin, adding an actual destination to reach, unlike the endless gameplay of ‘Flappy Bird’. The game was optimized for Windows and deployed online for easy access.',
    sketchImage: '/img/pumpkinSketch.png',
    sketch: 'The game design process was centered around crafting an immersive gameplay experience. The focus was on the game mechanics, where the player would have to navigate through a series of hurdles. The player character was constantly pursued, adding a layer of thrill and urgency to the game. This chase element was integral to the gameplay, challenging the player’s skills and decision-making in real-time. The design sketches reflected these mechanics, illustrating the dynamic and interactive nature of the game.',
    methodImage: '/img/pumpkinMethod.png',
    method: 'The development process was iterative, beginning with a basic game loop and progressively incorporating features such as barrier navigation and game over conditions. A significant focus was placed on the individual designs of the game elements. The character “Jerry”, the “Pumpkin”, the “Chaser”, and the “Black Barriers” were all meticulously designed to enhance the gameplay experience. The designs for the “Chaser” and “Black Barriers” were particularly detailed, crafted carefully on my notes app. User feedback was integrated at each stage, further refining the game and enriching the player’s experience.',
    resultsImage: '/img/pumpkinResult.png',
    results: 'The final game provides a challenging yet enjoyable gaming experience. The unique twist of having an actual destination adds a new dimension to the gameplay, making it stand out from similar games. The Halloween-themed design was well-received by players, adding to the game’s appeal.',
    finalThoughts: 'This project is my first milestone project from my bootcamp program, and I am proud of what I have accomplished so far. This is a JavaScript browser game built with HTML and CSS. I created this project around Halloween, so I decided to make it Halloween-themed. I designed some elements of the game from scratch, like the black barriers that players should avoid touching, or they lose. The game has room for improvement, but considering my knowledge at the time, I think it is awesome. Please feel free to try it out if you dare. It is a challenging game, so do not hesitate to give it multiple attempts.',
    codeLink: 'https://github.com/nhvn/first-browser-game',
    liveLink: 'https://pumpkin-lost-te.web.app/'
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
              <h2>Duration</h2>
              <p>{project.duration}</p>
            </div>
            <div className='overview-parts'>
              <h2>Team</h2>
              <p>{project.team}</p>
            </div>
            <div className='overview-parts'>
              <h2>Contribution</h2>
              <p>{project.contribution}</p>
            </div>
            <div className='overview-parts'>
              <h2>Outcome</h2>
              <p>{project.outcome}</p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        {/* BOTTOM PORTION */}
        <div className="proj-content-container">
          <div className="flex">
            <div className="left-proj">
              <img className="botImg" src={project.sketchImage} alt={project.title} />
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
              <img className="botImg" src={project.methodImage} alt={project.title} />
            </div>
          </div>
          <div className="flex">
            <div className="left-proj">
              <img className="botImg" src={project.resultsImage} alt={project.title} />
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
