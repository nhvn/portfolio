import React from 'react';

const HomePage = () => {
    return (
        <div className="home fade">
            <div className="flex">
              <div className="left">
                <section class="title">
                  <div class="description">
                    <p class="small-paragraph">
                      HELLO THERE!
                    </p>
                    <h1>
                    I'm <span class="bold-text">Alan</span>.
                    </h1>
                    {/* <div class="divider"></div> */}
                    <div class="description descr-contain">
                      <div class="text-contain">
                        <p>I am a dedicated <span class="highlight">full-stack software engineer</span> who's skilled in frontend and backend technologies. My work revolves around creating impactful software solutions, with a keen focus on user experience.</p>
                        <p>Currently, I'm expanding my knowledge in the fields of Machine Learning and Artificial Intelligence, while actively seeking new opportunities to apply and grow my skillset.</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="right">
                <div class="contact">
                  <div class="contact-contain">
                    <h2 id="chat">Let's chat</h2>
                    <div class="contact-list">
                    <a href="https://www.linkedin.com/in/alannhans" target="_blank">
                      <img src="/img/linkedin.png" alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/nhvn" target="_blank">
                      <img src="/img/github.png" alt="GitHub" />
                    </a>
                    <a href="mailto: alannhan443@gmail.com" target="_blank">
                      <img src="/img/email.png" alt="Email" />
                    </a>
                  </div>
                  </div>
                </div>
              </div>
          </div>
          <div class="divider"></div>
          <section class="projects">
            <h2 id="projects">Projects</h2>
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
                          Description for Task Master...
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
                          <h4>
                            Pumpkin
                          </h4>
                          <p>
                            Description for Task Master...
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
                        <h4>
                          Coming Soon
                        </h4>
                        <p>
                          Description for Coming Soon...
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
                        <h4>
                          Sample
                        </h4>
                        <p>
                          Description for Sample...
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
    )
};

export default HomePage;
