import React, { useState, useEffect } from 'react';
import Projects from './Projects';

const HomePage = () => {
  const [showPrompt, setShowPrompt] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      const transitionTimer = setTimeout(() => {
        setShowPrompt(false);
      }, 4000); // This should match the transition duration
      return () => clearTimeout(transitionTimer);
    }, 3000); // Change this to the number of seconds you want

    return () => clearTimeout(timer);
  }, []);

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
          {showPrompt && (
            <div
              onClick={() => {
                setIsFading(true);
                setTimeout(() => setShowPrompt(false), 1000);
              }}
              style={{
                position: 'absolute',
                fontSize: '18px',
                top: '10%',
                right: '10%',
                padding: '3em',
                borderRadius: '20px',
                backgroundColor: 'rgba(112, 128, 144, 0.90)',
                color: 'white',
                cursor: 'pointer',
                zIndex: 10,
                transition: 'opacity 4s ease-out',
                opacity: isFading ? 0 : 1,
              }}
            >
              My apologies, my portfolio is still under construction.
            </div>
          )}
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
