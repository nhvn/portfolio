// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.js';
import Home from './HomePage.js'; 
import About from './AboutPage.js'; 
import Projects from './ProjectsPage.js';
import ProjPage from './ProjPage';
import Footer from './Footer.js'; 
import { ThemeProvider, theme, GlobalStyle } from './ThemeProvider';

const projects = [
  { 
    id: 'project1', 
    title: 'Project 1', 
    description: 'Description for Project 1',
    technologies: ['React', 'JavaScript', 'CSS'],
    image: '/path/to/project1/image',
    codeLink: 'https://github.com/username/project1',
    liveLink: 'https://www.project1.com'
  },
  { 
    id: 'project2', 
    title: 'Project 2', 
    description: 'Description for Project 2',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    image: '/path/to/project2/image',
    codeLink: 'https://github.com/username/project2',
    liveLink: 'https://www.project2.com'
  },
  // More projects...
];


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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<React.Fragment><ProjPage projects={projects} /></React.Fragment>} />
        </Routes>
        <hr className="footer-divider" />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
