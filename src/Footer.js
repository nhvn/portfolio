// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-section footer-section-1">
        <h3>Designed & developed</h3>
        <h3>by yours truly.</h3>
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
    </footer>
  );
}

export default Footer;
