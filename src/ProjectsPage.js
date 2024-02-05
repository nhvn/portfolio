import React from 'react';
import Projects from './Projects';

const ProjectsPage = () => {
    return (
        <div className="projects-box fade">
            <div className="flex">
              <div className="left">
                <section class="title">
                  <div class="description">
                    <p class="small-paragraph">
                      CHECK OUT
                    </p>
                    <h1>My work.</h1>
                    {/* <div class="divider"></div> */}
                    <div class="description descr-contain">
                      <div class="text-contain">
                        <p>
                        As a <span class="highlight2">software engineer</span>, I seamlessly blend design and development, prioritizing a shared understanding between both worlds. My quick learning and creative problem-solving skills allow me to integrate a designer's perspective into development effortlessly. Meticulous in my approach, I am committed to realizing precise design visions, making me a versatile professional adept at bridging the gap between design and implementation.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="right">
                <div class="contact">
                  <div class="project-contain">
                  <h2>Technologies</h2>
                    <p>- HTML, CSS, SASS, JavaScript, React, TypeScript, UX/UI Design, Node.js, Python, Java, C++, Git</p>
                    <p>- MongoDB, PostgreSQL</p>
                    <p>- Firebase, Amazon Web Services (AWS)</p>
                  </div>
                </div>
              </div>
          </div>
          <div class="divider"></div>
          <Projects />
        </div>
    )
};

export default ProjectsPage;
