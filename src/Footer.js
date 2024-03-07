import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-section footer-section-1">
        <div className="yoursTruly">
          <h3>
            Conceptualized in <span className='highlight3'>Figma</span> and deployed with <span className='highlight3'>Vercel</span> by yours truly. 
            Built with <span className="highlight3">React</span> and <span className="highlight3">Styled Components</span>. 
          </h3>
        </div>
      </div>
      <div className="dividerHr"/>
      <div className="footer-section footer-section-2">
        <h3>CONTACT</h3>
        <ul>
          <li><a href="https://www.linkedin.com/in/alannhans" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/nhvn" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="mailto: alannhan443@gmail.com" target="_blank" rel="noreferrer">Email</a></li>
        </ul>
      </div>
      <div className="dividerHr"/>
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
