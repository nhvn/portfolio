import Navbar from './Navbar.js';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

const Logo = styled.img`
  max-width: 100%; 
`;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Wrapper>
      <h1>Hello there!</h1>
      {/* Other components */}
    </Wrapper>
    </div>
    
  );
}

export default App;
