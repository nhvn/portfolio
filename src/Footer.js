// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div class="footer-section">
        <h3>Designed + Developed by Alan Nhan</h3>
      </div>
      <hr /> {/* Add this line */}
      <div class="footer-section">
        <h3>Reach Out</h3>
        <ul>
          <li><a href="https://www.linkedin.com/in/alannhans" target="_blank">LinkedIn</a></li>
          <li><a href="https://github.com/nhvn" target="_blank">GitHub</a></li>
          <li><a href="mailto: alannhan443@gmail.com" target="_blank">Email</a></li>
        </ul>
      </div>
      <hr /> {/* Add this line */}
      <div class="footer-section">
        <h3>Quick Find</h3>
        <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li>Resume</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
