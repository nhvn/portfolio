// App.js
import Navbar from './Navbar.js';
import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, theme, GlobalStyle } from './ThemeProvider';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
      <GlobalStyle />
      <Router>
        <div className="App">
          <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
          <Routes>
            <Route path="/" element={
              <Wrapper>
                <h1>Hello there!</h1>
              </Wrapper>
            } />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
