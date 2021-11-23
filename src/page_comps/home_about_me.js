import React from 'react';
import './home_about_me.css';

import boyang2 from '../assets/boyang-2.png';

function App() {
  return (
    <div id="home-aboout-me-container"> 
      <div id="top-bar"/> <br/>
      <div id="text-box">
        <h1>A Little About Me</h1>
        <p className="text">
          I am a Junior at the University of Illinois at Urbana-Champaign, majoring in Materials Science &amp; Engineering, as well as Minoring
          in Computer Science. <br/><br/>
          I enjoy working with computers, and I think they are one of the best things to ever be available to the public. This is what sparked my 
          interest in coding, to be able to tell these amazing machines what to do. <br/><br/>
          This past summer, I intered at Shoptaki as a front-end and UI engineer. I greatly enjoyed my time working on websites, as well as 
          designing and implementing UI elements with React JS. <br/><br/>
          Combining my previous knowledge of HTML &amp; CSS with the new React skills I learned, I was able to put together this little website. <br/><br/>
          When I am not busy doing coursework or working on any side projects, I enjoy watching movies, jogging, or just surf 
          the internet for interesting stuff. I also love finding new restaurants with delicious food.<br/><br/>
          <b>Don't forget to check out my experiences and skills down below!</b>
        </p>
      </div>
      <br/><br/><br/><br/>
      <img id="boyang-2" src={boyang2} width="500px"/>
      <br/><br/>
      
    </div>
  );
}

export default App;
