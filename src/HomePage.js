import React from 'react';
import Projects from './Projects';

const HomePage = () => {
  return (
    <div className="home fade">
      <div className='introCover'>
        <object type="image/svg+xml" data="img/IntroNOW.svg">Your browser does not support SVG</object>
        <div className='intro-text'>
          <h1><span className='highlightIntro'>Hey there!</span> <span className='highlight1-2'>I'm Alan.</span></h1>
          <h1><span className='highlightIntro2'>Software Engineer</span></h1>
          <h1><span className='highlightIntro2'>based in Los Angeles.</span></h1>
        </div>
      </div>
      <div className="divider"></div>
      <Projects />
    </div>
  );
};

export default HomePage;
