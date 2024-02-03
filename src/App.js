import Navbar from './Navbar.js';
import Home from './HomePage.js'; // Make sure the component is exported from HomePage.js
import About from './AboutPage.js'; // Make sure the component is exported from AboutPage.js
import Projects from './ProjectsPage.js'; // Make sure the component is exported from ProjectsPage.js
import Footer from './Footer.js'; // Make sure the Footer component is exported from Footer.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes from react-router-dom
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <hr className="footer-divider" />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
