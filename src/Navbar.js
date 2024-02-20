import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { ThemeProvider, theme } from './ThemeProvider';

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.linkColor};
`;

const StyledLink2 = styled(NavLink)`
  color: ${(props) => props.theme.linkColor};
  &.active {
    color: #6a9b8f; 
  }
`;

const DropdownMenu = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  min-width: 160px;
  padding: 12px 16px;
  z-index: 1;
  border-radius: 0 0 20px 20px;
  left: 50%;
  transform: translateX(-50%);
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className='nav-container'>
        <a className='logo-left' href="/">
          <div>
            <img src="/img/logo.png" alt="Custom logo" className="custom-logo" />
          </div>
        </a>
        <div>
          </div>
        <div className="links">
          <ThemeProvider isDarkMode={isDarkMode}>
            <ul>
              <li><StyledLink2 to="/about">About</StyledLink2></li>
              <li><StyledLink2 to="/projects">Projects</StyledLink2></li>
              <li>
                <DropdownContainer ref={dropdownRef}>
                  <StyledLink onClick={toggleDropdown}>Resume</StyledLink>
                  <DropdownMenu isOpen={isOpen}>
                    <a className="dropdown-item" href="/Resume.pdf" target="_blank">Resume.pdf</a>
                    <a className="dropdown-item" href="mailto:alannhan443@gmail.com?subject=Resume Update Request">Update Request</a>
                  </DropdownMenu>
                </DropdownContainer>
              </li>
              <button
                className="theme-toggle-button"
                onClick={toggleDarkMode}
              >
                {React.cloneElement(theme[isDarkMode ? 'dark' : 'light'].icon, { color: theme[isDarkMode ? 'dark' : 'light'].color })}
              </button>
            </ul>
          </ThemeProvider>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
