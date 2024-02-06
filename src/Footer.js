// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-section footer-section-1">
        <div className="yoursTruly">
          <h3>
            Conceptualized and coded by yours truly. Built with <span className="highlight3">React</span> and <span className="highlight3">Styled Components</span>. 
            Navigation powered by <span className="highlight3">React Router</span>. 
          </h3>
        </div>
      </div>
      <hr />
      <div className="footer-section footer-section-2">
        <h3>REACH OUT</h3>
        <ul>
          <li><a href="https://www.linkedin.com/in/alannhans" target="_blank">LinkedIn</a></li>
          <li><a href="https://github.com/nhvn" target="_blank">GitHub</a></li>
          <li><a href="mailto: alannhan443@gmail.com" target="_blank">Email</a></li>
        </ul>
      </div>
      <hr />
      <div className="footer-section footer-section-3">
        <h3>QUICK FIND</h3>
        <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
        </ul>
      </div>
      {/* <hr /> */}
    </footer>
  );
}

export default Footer;
