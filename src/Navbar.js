// Navbar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
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
const StyledLink = styled(Link)`
  color: ${(props) => props.theme.color};
`;

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <Wrapper>
      <nav className="navbar">
        <a href="/" className="logo">
          <Logo src="/img/logo.png" alt="Custom logo" />
        </a>
        <div className="links">
          <ThemeProvider isDarkMode={isDarkMode}>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/projects">Projects</StyledLink>
            <StyledLink to="/">Resume</StyledLink>
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
