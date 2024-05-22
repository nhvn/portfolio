import React from 'react';
import Projects from './Projects';
import Sidebar from './Sidebar';

const ProjectsPage = () => {
    return (
      <div className="projects-box fade">
        <Sidebar />
          <div className="flex">
            <div className="left">
              <section className="title">
                <div className="description">
                  <h4 className="small-paragraph">
                    CHECK OUT
                  </h4>
                  <h1>My work.</h1>
                  <div className="description descr-contain">
                    <div className="text-contain">
                      <p>As a <span className="highlight">full-stack software engineer</span>, I seamlessly blend design and development, prioritizing a shared understanding between both worlds. Meticulous in my approach, I am committed to realizing precise design visions, making me a versatile professional adept at bridging the gap between design and implementation.</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="right">
              <div className="contact">
                <div className="project-contain">
                <h2>Technologies</h2>
                  <h4>HTML, CSS, SASS, JavaScript, React, TypeScript, UX/UI Design, Node.js, Python, Java, C++, Git, Figma</h4>
                  <h4>MongoDB, PostgreSQL</h4>
                  <h4>Firebase, AWS</h4>
                </div>
              </div>
            </div>
        </div>
        <div className="divider"></div>
        <Projects />
      </div>
    )
};

export default ProjectsPage;
