import React from 'react';

import "./page_not_found.css";

function App() {
  return(
    <div id="page-not-found-container">
      <div id="place-holder" style={{height:"10vh"}}/>
      <h1 className="not-found-header1">404</h1>
      <div id="place-holder" style={{height:"10vh"}}/>
      <h1 className="not-found-header1">OOPS! This Page does not exist, or is lost to the void!</h1>
      <div id="place-holder" style={{height:"15vh"}}/>
      <h1 className="not-found-header1">↓↓↓ But you can still reach out to me! ↓↓↓</h1>
      <div id="place-holder" style={{height:"5vh"}}/>
    </div>
  );
}

export default App;