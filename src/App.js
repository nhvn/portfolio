import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.js';
import Home from './HomePage.js'; 
import About from './AboutPage.js'; 
import Projects from './ProjectsPage.js';
import ProjPage from './ProjPage';
import Footer from './Footer.js'; 
import { ThemeProvider, theme, GlobalStyle } from './ThemeProvider';

export const ProjectsContext = createContext();

const projects = [
  { 
    id: 'taskmaster', 
    title: 'Task Master', 
    role: 'FULL-STACK DEVELOPER',
    description: 'Description for Task Master...',
    technologies: ['React', 'JavaScript', 'CSS'],
    image: '/img/todo.png',
    codeLink: 'https://github.com/nhvn/to-do-list',
    liveLink: ''
  },
  { 
    id: 'pumpkin', 
    title: 'Pumpkin Latte', 
    role: 'GAME DEVELOPER',
    description: 'Description...',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    image: '/img/pumpkin.png',
    codeLink: 'https://github.com/nhvn/first-browser-game',
    liveLink: 'https://pumpkin-lost-te.web.app/'
  },
  { 
    id: 'comingSoon', 
    title: '', 
    role: '',
    description: 'Description...',
    technologies: ['', '', ''],
    image: '/img/comingSoon.png',
    codeLink: '',
    liveLink: ''
  },
  { 
    id: 'comingSoon', 
    title: '', 
    role: '',
    description: 'Description...',
    technologies: ['', '', ''],
    image: '/img/comingSoon.png',
    codeLink: '',
    liveLink: ''
  },
];
const ProjectsWrapper = (props) => <Projects {...props} />;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Get the initial state from localStorage
    const savedMode = localStorage.getItem('isDarkMode');
    return savedMode === 'true' ? true : false; // Convert string to boolean
  });

  // Use useEffect to update localStorage whenever isDarkMode changes
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
        <ProjectsContext.Provider value={projects}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectsWrapper />} />
            <Route path="/projects/:projectId" element={<React.Fragment><ProjPage projects={projects} /></React.Fragment>} />
          </Routes>
        </ProjectsContext.Provider>
        <hr className="footer-divider" />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

