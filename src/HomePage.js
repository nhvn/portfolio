import React from 'react';
import Projects from './Projects';

const HomePage = () => {
  return (
    <div className="home fade">
      <div className='intro1'>
        <object type="image/svg+xml" data="img/intro.svg">Your browser does not support SVG</object>
      </div>
      <div className="divider"></div>
      <Projects />
    </div>
  );
};

export default HomePage;
