import Navbar from './Navbar.js';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider, theme, GlobalStyle } from './ThemeProvider';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

const Logo = styled.img`
  max-width: 100%; 
`;

// Add this styled component
const Title = styled.h1`
  color: ${(props) => props.theme.color};
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
      <GlobalStyle />
      <div className="App">
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <Wrapper>
          <h2>Hello there!</h2>
        </Wrapper>
      </div>
    </ThemeProvider>
  );
}

export default App;
