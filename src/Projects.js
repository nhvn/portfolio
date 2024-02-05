import React from 'react';

const Projects = () => {
  return (
    <section class="projects">
    <h2 id="titles">Projects</h2>
    <div class="projects-contain">
      <div class="project-card-grid">
        <div class ="proj" id="taskmaster">
          <a href="../projects/taskmaster">
          <img src={process.env.PUBLIC_URL + '/img/todo.png'} alt="Todo Image" />
            <div class="card-overlay">
              <div class="header">
                <h4>
                  Task Master
                </h4>
                <p>
                  Description...
                </p>
              </div>
            </div>
          </a>
        </div>
        <div class ="proj" id="pumpkin">
          <a href="/projects/pumpkin">
          <img src={process.env.PUBLIC_URL + '/img/pumpkin.png'} alt="Todo Image" />
              <div class="card-overlay">
                <div class="header">
                  <h4>Pumpkin</h4>
                  <p>
                    Description...
                  </p>
                </div>
              </div>
            </a>
        </div>
        <div class ="proj" id="oldportfolio">
        <a href="/projects/oldportfolio">
        <img src={process.env.PUBLIC_URL + '/img/comingSoon.png'} alt="Todo Image" />
            <div class="card-overlay">
              <div class="header">
                <h4>Smart Lighting Control System</h4>
                <p>
                  Description...
                </p>
              </div>
            </div>
          </a>
        </div>
        <div class ="proj" id="sample">
        <a href="/projects/sample">
        <img src={process.env.PUBLIC_URL + '/img/comingSoon.png'} alt="Todo Image" />
            <div class="card-overlay">
              <div class="header">
                <h4>Old Portfolio</h4>
                <p>
                  Description...
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Projects;
