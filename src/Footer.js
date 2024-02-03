// Footer.js
import React from 'react';

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
          <li><a href="https://www.linkedin.com/in/alan-nhan">LinkedIn</a></li>
          <li><a href="https://github.com/alan-nhan">GitHub</a></li>
          <li><a href="mailto:alan.nhan@example.com">Email</a></li>
        </ul>
      </div>
      <hr /> {/* Add this line */}
      <div class="footer-section">
        <h3>Quick Find</h3>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
