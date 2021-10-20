import React from 'react';
import './animated_bar_insertion_background.css';


function App(
  width="100vw",
  height="100vh"
) {
  let containerStyle = {
    width:{width},
    height:{height}
  };
  return (
    <div className="animated-bar-container">
      <p>animated bars background</p>
      <div className="animated-bar-1"/>
      <div className="animated-bar-1" id="animated-bar-2"/>
    </div>
  );
}

export default App;
