// Navbar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider, theme } from './ThemeProvider';

const Wrapper = styled.div`
  align-items: center;
  justify-content: center;
  height: 20vh;
`;

const Logo = styled.img`
  max-width: 10%;
`;

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Wrapper>
      <nav className="navbar">
        <a href="/" className="logo">
          <Logo src="/img/logo.png" alt="Custom logo" />
        </a>
        <div className="links">
          <a href="/">About</a>
          <a href="/">Projects</a>
          <a href="/">Resume</a>
        </div>
        <div>
          <ThemeProvider isDarkMode={isDarkMode}>
            <div>
              <button
                onClick={toggleDarkMode}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '24px',
                  marginLeft: '20px',
                }}
              >
                {theme[isDarkMode ? 'dark' : 'light'].icon}
              </button>
            </div>
          </ThemeProvider>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
