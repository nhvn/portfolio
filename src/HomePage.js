import React from 'react';
import Projects from './Projects';

const HomePage = () => {
  return (
    <div className="home fade">
      <div className="flex">
        <div className="left">
          <section className="title">
            <div className="description">
              <p className="small-paragraph">
                HELLO THERE,
              </p>
              <h1>I'm Alan.</h1>
              <div className="description descr-contain">
                <div className="text-contain">
                  <p>I am a dedicated <span className="highlight">full-stack software engineer</span> who's skilled in frontend and backend technologies. My work revolves around creating impactful software solutions, with a keen focus on user experience.</p>
                  <p>Currently, I'm expanding my knowledge in the fields of Machine Learning and Artificial Intelligence, while actively seeking new opportunities to apply and grow my skillset.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="right">
          <div className="contact">
            <div className="contact-contain">
              <h2>Let's chat</h2>
              <div className="contact-list">
                <a href="https://www.linkedin.com/in/alannhans" target="_blank" rel="noopener noreferrer">
                  <img src="/img/linkedin.png" alt="Logo for LinkedIn" />
                </a>
                <a href="https://github.com/nhvn" target="_blank" rel="noopener noreferrer">
                  <img src="/img/github.png" alt="Logo for Github" />
                </a>
                <a href="mailto: alannhan443@gmail.com" rel="noopener noreferrer">
                  <img src="/img/email.png" alt="Logo for email" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <Projects />
    </div>
  );
};

export default HomePage;
