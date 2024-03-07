import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.js';
import Home from './HomePage.js'; 
import About from './AboutPage.js'; 
import Projects from './ProjectsPage.js';
import { projects } from './ProjPage';
import ProjPage from './ProjPage';
import Footer from './Footer.js'; 
import { ThemeProvider, theme, GlobalStyle } from './ThemeProvider';

export const ProjectsContext = createContext();

const ProjectsWrapper = (props) => <Projects {...props} />;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('isDarkMode');
    return savedMode === 'true' ? true : false;
  });

  useEffect(() => {
    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
      <GlobalStyle />
      <Router>
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        {/* <p className="construction">Note: Currently under construction 🚧</p> */}
        <ProjectsContext.Provider value={projects}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectsWrapper />} />
            <Route path="/projects/:projectId" element={<ProjPage />} />
          </Routes>
        </ProjectsContext.Provider>
        {/* <div className="footer-divider"></div> */}
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

