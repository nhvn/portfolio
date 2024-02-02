import Navbar from './Navbar.js';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, theme, GlobalStyle } from './ThemeProvider';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
      <GlobalStyle />
      <Router>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <div className="home fade">
            <div className="flex">
              <div className="left">
                <section class="title">
                  <div class="description">
                    <p class="small-paragraph">
                      HELLO THERE!
                    </p>
                    <h1>
                      I'm Alan.
                    </h1>
                    <div class="divider"></div>
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
                    <h2>Let's chat!</h2>
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
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
