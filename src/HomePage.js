import React from 'react';
import Projects from './Projects';

const HomePage = () => {
  return (
    <div className="home fade">
      <div className='intro1'>
        <object type="image/svg+xml" data="img/intro.svg">Your browser does not support SVG</object>
        <div className='intro-text'>
          <h1><span className='highlight1-1'>Hey there!</span> <span className='highlight1-2'>I'm Alan.</span></h1>
          <h1><span className='highlight1-2'>Software Engineer</span></h1>
          <h1><span className='highlight1-2'>Based in Los Angeles.</span></h1>
        </div>
      </div>
      <div className="divider"></div>
      <Projects />
    </div>
  );
};

export default HomePage;
