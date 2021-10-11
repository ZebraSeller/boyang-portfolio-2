import React from 'react';
import logo from '../logo.svg';
import './home.css';

import Nav_Bar from '../general_comps/nav_bar';

function App() {
  return (
    <div className="home-container">
      <h1>Boyang's Site 2.0</h1>
      <img src = {logo} width = "250px"/>
      <div className="place-holder">
        
      </div>
      <h1>Bottom Text</h1>
    </div>
  );
}

export default App;
