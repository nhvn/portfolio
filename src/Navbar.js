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

// Add this styled component
const Link = styled.a`
  color: ${(props) => props.theme.color};
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
          <ThemeProvider isDarkMode={isDarkMode}>
            <Link href="/">About</Link>
            <Link href="/">Projects</Link>
            <Link href="/">Resume</Link>
          </ThemeProvider>
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
                  marginLeft: '2em',
                }}
              >
                {/* Pass the color prop to the icon here */}
                {React.cloneElement(theme[isDarkMode ? 'dark' : 'light'].icon, { color: theme[isDarkMode ? 'dark' : 'light'].color })}
              </button>
            </div>
          </ThemeProvider>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
