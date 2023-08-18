import React from 'react';
import './home_about_me.css';

// import boyang2 from '../assets/boyang-2.png';
// import boyang5 from '../assets/boyang-5.png';
import boyang7 from '../assets/boyang-7.jpg';

function App() {
  return (
    <div id="home-aboout-me-container"> 
      <div id="top-bar"/> <br/>
      <div id="text-box">
        <h1>A Little About Me</h1>
        <p className="text">
          I am a Graduate student at the University of Southern California, pursing a M.S. degree in Computer Science. <br/><br/>

          From building a PC to software engineering, I love working with computers. This is mainly thanks to my parents, who are bachelors
          in computer science. Because of this, I was exposed to computers from an early age.
          As time went on, I started to get more curious and asked questions. Even though I usually did not fully understand their answers, 
          my parents' patience eventually helped me gain basic programming skills and furthered my interest in the field. <br/><br/>

          This past year, I interned at Synchrony Bank as an Android Engineer. During which I was able to gain hands on experience in developing
          solutions to address real world consumer needs. I learned a great deal not only in software development, but also teamworking and communication.
          Participating in an Agile development cycle helped me understand how to effectively communicate with my team members about progress, roadblocks, or
          provide feedback to topics. <br/><br/>

          When I'm not busy with school or work, I enjoy watching movies, jogging, drawing, worldbuilding, or just surf the internet for new and interesting stuff. 
          I also love finding new restaurants with delicious food, as well as discovering boba tea places.
          {/* I enjoy working with computers, from building a PC to software engineering.
          This is what sparked my interest in coding, to be able to tell these amazing machines what to do. <br/><br/>
          This past summer, I interned at Shoptaki as a web development and front-end engineer. I greatly enjoyed my time working on web applications, as well as 
          designing and implementing UI elements with React JS. <br/><br/>
          Combining my previous knowledge of HTML &amp; CSS with the new React skills I learned, I was able to put together this little website. <br/><br/>
          When I am not busy doing coursework or working on any side projects, I enjoy watching movies, jogging, or just surf 
          the internet for interesting stuff. I also love finding new restaurants with delicious food.<br/><br/> */}
          
        </p>
      </div>
      <br/><br/><br/><br/>
      <img id="boyang-2" src={boyang7} width="500px"/>
      <br/><br/>
      
    </div>
  );
}

export default App;
