import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const projects = [
  { 
    id: 'beFit', 
    title: 'BeFit v2',
    ongoing: true,
    app: 'Mobile & Web Application',  
    role: 'APP & WEB DEVELOPER',
    description: "BeFit v2 is your ultimate fitness companion, offering a seamless way to monitor your gym progress, diet, and workouts. Whether you're new to fitness or a seasoned enthusiast, BeFit v2 empowers you to achieve your wellness goals with ease and precision.",
    technologies: ['Next.js', 'Shadcn UI', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Stripe'],
    image: '/img/beFit.png',
    contribution: 'Enabled users to input dates for varied weight measurements, enhancing tracking versatility \n Fixed various bugs including the inability to delete weights \n Currently, transforming this into a mobile application',
    team: 'Two other software engineers',
    duration: 'Feb 2024 - Present',
    outcome: '',
    prob: '',
    sol: '',
    sketchImage1: '/img/fitSketch.png',
    sketchImage2: '',
    sketchImage3: '',
    sketch: 'For the website, I meticulously examined the layout and envisioned its adaptation for a seamless mobile app experience, basing my insights on the sketches I developed. My goal is to ensure consistency between the web and mobile platforms, making navigation effortless and ensuring all features are readily accessible. This approach is particularly crucial for our fitness application, where user engagement and accessibility are paramount.',
    methodImage: '/img/fitMockup.png',
    method: 'This represents the envisioned design direction for my app. Currently, I am actively developing it using Swift and Xcode to ensure an exceptional user experience. While these designs may evolve, they serve as the foundation for further prototyping. Additionally, we are exploring the integration of these designs with the Apple Watch to expand accessibility and functionality.',
    resultsImage1: '',
    resultsImage2: '',
    resultsImage3: '',
    results: '',
    finalThoughts: "",
    codeLink: 'https://github.com/nhvn/BeFit-v2',
    liveLink: ''
  },
  { 
    id: 'taskmaster', 
    title: 'Task Master', 
    ongoing: true,
    app: 'Web Application',
    role: 'FULL-STACK DEVELOPER',
    description: 'To-Do List App app allows users to create, edit, and delete tasks with due dates and priorities, as well as mark tasks as complete or incomplete. Users can register, log in, and log out, and their tasks are stored securely in a PostgreSQL database.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'HTML', 'CSS'],
    image: '/img/todo.png',
    contribution: 'Built a secure PostgreSQL database from scratch and developed a robust API using Node.js and Express \n Created an intuitive user interface using React, integrating it with the back-end for seamless functionality',
    team: 'Two other software engineers',
    duration: 'Apr 2023 - Jun 2023',
    outcome: 'We developed a To-Do List App that allows users to perform all these actions. The app also provides secure user registration, login, and logout features, with tasks stored securely in a PostgreSQL database.',
    prob: '',
    sol: '',
    sketchImage1: '/img/todoSketch.png',
    sketchImage2: '',
    sketchImage3: '',
    sketch: 'In the initial design phase, I focused on creating intuitive and user-friendly interfaces. I sketched various layouts, considering factors like usability and aesthetic appeal. The goal was to create a design that would provide a seamless user experience while maintaining a clean and modern look.',
    methodImage: '/img/comingSoon.png',
    method: 'My approach was iterative and user-centric. I started with low-fidelity wireframes, gradually refining them based on user feedback and usability testing. I also considered the latest design trends and best practices, ensuring the design was both contemporary and intuitive.',
    resultsImage1: '',
    resultsImage2: '',
    resultsImage3: '',
    results: 'The final design effectively balanced functionality and aesthetics. It provided users with a clear and easy-to-navigate interface, improving task management efficiency. The design was well-received by users, demonstrating the effectiveness of the user-centric design approach.',
    finalThoughts: '',
    codeLink: 'https://github.com/nhvn/to-do-list',
    liveLink: ''
  },
  { 
    id: 'oldPortfolio', 
    title: 'Old Portfolio',
    ongoing: false, 
    app: 'Web Application',
    role: 'WEB DEVELOPER',
    description: 'A comprehensive showcase of my skills, experiences, and projects. This simple website was designed to be responsive and user-friendly, providing visitors with easy access to my work and contact information.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/img/oldportfolio.png',
    contribution: 'Designed and developed the entire website from scratch \n Implemented responsive design principles to ensure a seamless experience across different devices \n Integrated a contact form for easy communication',
    team: '',
    duration: 'Apr 2023 - Jun 2023',
    outcome: 'Successfully created a personal portfolio website that effectively showcases my skills, experiences, and projects. The website has helped in networking and opened up new opportunities.',
    prob: '',
    sol: '',
    sketchImage1: '/img/portfolioSketch.png',
    sketchImage2: '',
    sketchImage3: '',
    sketch: 'The project sketches visually represent the structure of the website, including the layout of the introduction, about, project, and contact sections. They also highlight the design elements of the navigation and footer. In addition, they depict how responsive design has been implemented to ensure a seamless user experience across different devices. Each sketch offers a clear depiction of the main components and their interplay, which enhances the understanding of the website’s design and functionality.',
    methodImage: '/img/methodOldportfolio.png',
    method: 'The project started with a design phase where the layout of the website was planned. The development phase involved coding the website using HTML, CSS, JavaScript, and Bootstrap. A contact form was integrated for easy communication. Responsive design principles were implemented to ensure the website looks good on all devices.',
    resultsImage1: '/img/portfolioResult.png',
    resultsImage2: '/img/portfolioResult2.png',
    resultsImage3: '',
    results: 'The portfolio website project yielded positive results. The website effectively showcases my skills, experiences, and projects, providing visitors with a comprehensive view of my capabilities. The responsive design ensures a seamless experience across different devices.',
    finalThoughts: 'This is my first personal portfolio that I have ever made, after completing my program. It not only allowed me to showcase my skills and experiences but also gave me a platform to share my work with others. The project was a great opportunity to apply my full stack development skills in a real-world scenario.',
    codeLink: 'https://github.com/nhvn/nhvn.github.io',
    liveLink: 'https://nhvn.github.io/'
  },
  { 
    id: 'smartLights', 
    title: 'Smart Lighting Control System',
    ongoing: false,
    app: 'Physical + Digital Integration Product',  
    role: 'IoT Developer',
    description: "An automation solution for precise control of lights. This system enables control of up to 50 lights across 10 rooms with customizable schedules.",
    technologies: ['Python', 'Flask', 'Raspberry Pi'],
    image: '/img/smartLight.png',
    contribution: 'Engineered lighting automation solution using Python \n Utilized Raspberry Pi to interact with physical GPIO pins \n Used multithreading and Flask web framework to enable parallel control of lights \n Created web UI with Jinja templates for user management and scheduling',
    team: 'Two other software engineers and an electric engineer',
    duration: 'Feb 2023 - Mar 2023',
    outcome: 'Developed a Smart Lighting Control System that allows precise control of lights. The system also provides customizable schedules for each light.',
    prob: '',
    sol: '',
    sketchImage1: '/img/lightSketch.png',
    sketchImage2: '',
    sketchImage3: '',
    sketch: 'These sketches illustrate the overall system design, the setup of the Raspberry Pi and its GPIO pin configuration, the process of controlling the lights, the setup of the Flask web server, the design of the user interface, the implementation of scheduling, and the use of multithreading for parallel light control. Each sketch focuses on a key aspect of the project, providing a clear visual representation of the main components and their interactions, making the project’s workings easier to understand.',
    methodImage: '/img/raspPi.png',
    method: 'In this project, we started with a high-level system design that included the Raspberry Pi, the lights, and the user interface. We set up the Raspberry Pi with the necessary software and used its GPIO pins to control the lights. The lights were controlled using signals from the Raspberry Pi. We then set up a Flask web server to handle requests and control the lights. The user interface was designed with main screens for light control and scheduling. Scheduling was implemented to allow users to set schedules for controlling the lights. We used multithreading to enable parallel control of lights, with each thread controlling a different light. Throughout the project, we used Python, Flask, and the Raspberry Pi’s GPIO pins. We also faced and overcame various challenges, demonstrating our problem-solving skills and technical expertise.',
    resultsImage1: '/img/lightResult2.png',
    resultsImage2: '/img/lightResult.png',
    resultsImage3: '',
    results: 'The Smart Lighting Control System project yielded impressive results. The system successfully enabled precise control of up to 50 lights across 10 rooms, with customizable schedules for each light. The use of Python, Flask, and Raspberry Pi’s GPIO pins allowed for efficient and effective control of the lighting system. The implementation of multithreading ensured parallel control of lights, enhancing the system’s performance. The user-friendly interface facilitated easy management and scheduling of lights. Overall, the project demonstrated the potential of IoT in improving home automation and energy efficiency.',
    finalThoughts: "This project was a fascinating journey into the world of IoT and automation. It underscored the transformative potential of technology in everyday life. The ability to control lighting across multiple rooms with customizable schedules not only enhanced convenience but also promoted energy efficiency. The project was a testament to the power of Python and Flask in creating robust and scalable solutions. It was a rewarding experience that highlighted the synergy between software and hardware in creating impactful solutions. I look forward to leveraging these insights in future IoT projects.",
    codeLink: '',
    liveLink: ''
  },
  { 
    id: 'pumpkin', 
    title: 'Pumpkin Lostte Game',
    ongoing: false,
    app: 'Web Application',  
    role: 'GAME DEVELOPER',
    description: 'This game is a twist on Flappy Bird, where players guide Jerry to rescue his lost pumpkin by skillfully dodging obstacles. It is a nostalgic journey with a meaningful objective, born from a love for classic games. Currently playable on Windows.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
    image: '/img/pumpkin.png',
    contribution: 'Designed captivating game elements from scratch, ensuring a visually appealing and engaging user experience \n Developed the game using a combination of HTML, CSS, and JavaScript, implementing intricate game mechanics and interactions \n Managed the deployment process through Firebase, ensuring seamless integration and optimal performance across platforms',
    team: '',
    duration: 'Oct 2022 - Feb 2023',
    outcome: 'I developed ‘Pumpkin Lostte’, where players navigate through barriers to rescue a lost pumpkin, adding an actual destination to reach, unlike the endless gameplay of ‘Flappy Bird’.',
    prob: '',
    sol: '',
    sketchImage1: '/img/pumpkinSketch.png',
    sketchImage2: '/img/pumpkinSketch2.png',
    sketchImage3: '',
    sketch: 'The game design process was centered around crafting an immersive gameplay experience. The focus was on the game mechanics, where the player would have to navigate through a series of hurdles. The player character was constantly pursued, adding a layer of thrill and urgency to the game. This chase element was integral to the gameplay, challenging the player’s skills and decision-making in real-time. The design sketches reflected these mechanics, illustrating the dynamic and interactive nature of the game.',
    method: 'The development process was iterative, beginning with a basic game loop and progressively incorporating features such as barrier navigation and game over conditions. A significant focus was placed on the individual designs of the game elements. The character “Jerry”, the “Pumpkin”, the “Chaser”, and the “Black Barriers” were all meticulously designed to enhance the gameplay experience. The designs for the “Chaser” and “Black Barriers” were particularly detailed, crafted carefully on my notes app. User feedback was integrated at each stage, further refining the game and enriching the player’s experience.',
    resultsImage1: '/img/pumpkinResult.png',
    resultsImage2: '/img/pumpkinResult2.png',
    resultsImage3: '',
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
            <div className="projPics-container">
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
              <div className="projPics-container">
                <h2>Methodology</h2>
                <p>{project.method}</p>
              </div>
            </>
          )}
          {project.sketch && project.method && project.results && (
            <>
              {/* <div className="divider"></div> */}
              <div className="projPics-container">
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
              <div className='final'>
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
