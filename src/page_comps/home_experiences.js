import React from 'react';
import './home_experiences.css';
function App() {
  return (
    <div id="home-experiences-container">
      <div id="top-bar"/> <br/>
      <h1 className="experiences-header1">Education</h1>

      <div className="experience-container">
        <h2 className="experience-title">B.S. Materials Science and Engineering with Materials Computation and Theory Focus, and Minor in Computer Science</h2>
        <h2 className="experience-time">2019-2023</h2>
        {/* <p className="experience-list experience-bold">Minor: Computer Science</p> */}
        <p className="experience-list experience-bold" >University of Illinois at Urbana-Champaign</p>
        <p className="experience-list">Courses Taken: Intro to Computer Science,&nbsp;&nbsp; Discrete Structures,&nbsp;&nbsp; Data Structures,&nbsp;&nbsp; 
        Database Systems,&nbsp;&nbsp; Matrix Theory,&nbsp;&nbsp; Differential Equations,&nbsp;&nbsp; Statistics and Probability</p>
      </div>

      <h1 className="experiences-header1">My Experiences</h1>

      <div className="experience-container">
        <h2 className="experience-title">Front-End/Software Engineer Internship at Shoptaki (HTML, CSS, React.js)</h2>
        <h2 className="experience-time">June-August 2021</h2>
        <p className="experience-list">• Worked on web applications, designed User Interface, implemented web pages with HTML and React JS.</p>
        <p className="experience-list">• Collaborated with team members to create new components and pages for websites.</p>
        <p className="experience-list">• Designed and Implemented a functioning Donation Page.</p>
        {/* <p className="experience-list">• Page Demo: <a href="https://www.artstation.com/artwork/9mYyZy" className="links">https://www.artstation.com/artwork/9mYyZy</a></p> */}
      </div>

      <h1 className="experiences-header1">My Projects</h1>

      <div className="experience-container">
        <h2 className="experience-title">US Senate Record Analysis (JavaScript, React.js, MySQL, Node.js, GCP)</h2>
        <h2 className="experience-time">February-May 2022</h2>
        <p className="experience-list">• As team manager, designed the database model, its ER diagram, and coordinated the team’s efforts.</p>
        <p className="experience-list">• Developed the frontend with react, which can request data from the backend using HTML requests for display.</p>
        <p className="experience-list">• Set up and maintained the MySQL instance on GCP, as well as routing on the backend Node.js server.</p>
        <p className="experience-list">• Project Repository: <a href="https://github.com/ZebraSeller/us-senate-record-analysis-project" className="links">https://github.com/ZebraSeller/us-senate-record-analysis-project</a></p>
      </div>
      <div className="experience-container">
        <h2 className="experience-title">YouTube Cards Colorizer (JavaScript)</h2>
        <h2 className="experience-time">January 2022</h2>
        <p className="experience-list">• Created a Chrome extension that highlights YouTube videos based on criteria set by the user.</p>
        <p className="experience-list">• Utilized JavaScript’s ability to manipulate DOMs to modify the HTML of the loaded web page.</p>
        <p className="experience-list">• Developed the functionality for users to customize criteria used to flag videos via a pop-up window.</p>
      </div>
      <div className="experience-container">
        <h2 className="experience-title">Personal Portfolio Website Project 2.0 (HTML, CSS, React.js)</h2>
        <h2 className="experience-time">September-November 2021</h2>
        <p className="experience-list">• Created a personal demo portfolio/info website that act as an interactive resume.</p>
        <p className="experience-list">• Used HTML, CSS, JavaScript, and React to create web application and visual elements that improve user interaction.</p>
        <p className="experience-list">• The React App was deployed to and hosted on Github Pages.</p>
        <p className="experience-list">• WIP 2.0 website URL: <a href="https://zebraseller.github.io/boyang-portfolio-2/" className="links">https://zebraseller.github.io/boyang-portfolio-2/</a></p>
        <p className="experience-list">• Discontinued old website (1.0) URL: <a href="https://zebraseller.github.io/Boyang-Portfolio-Site-Project/" className="links">https://zebraseller.github.io/Boyang-Portfolio-Site-Project/</a></p>
      </div>
      <div className="experience-container">
        <h2 className="experience-title">Unity Games Development (Unity, C#)</h2>
        <h2 className="experience-time">2020-2021</h2>
        <p className="experience-list">• Created several mini games using C# and Unity Engine.</p>
        <p className="experience-list">• Created most of the 3D and visual assets using Photoshop and 3DS Max.</p>
        <p className="experience-list">• Demo of Humvee Simulator: <a href="https://www.artstation.com/artwork/ZGqlN1" className="links">https://www.artstation.com/artwork/ZGqlN1</a></p>
        <p className="experience-list">• Asset created for Saturn Rocket Project: <a href="https://www.artstation.com/artwork/28WExg" className="links">https://www.artstation.com/artwork/28WExg</a></p>
      </div>
      <div className="experience-container">
        <h2 className="experience-title">UIUC CS Department Course Rating App Project (Java)</h2>
        <h2 className="experience-time">November 2020</h2>
        <p className="experience-list">• Developed a functioning android app with Java, based on a given framework.</p>
        <p className="experience-list">• Created the UI and core mechanics to retrieve and display data.</p>
        <p className="experience-list">• Read and write data with a local JSON database.</p>
      </div>
      <div className="experience-container">
        <h2 className="experience-title">3D Modeling &amp; Texturing</h2>
        <h2 className="experience-time">2017-2021</h2>
        <p className="experience-list">• Created 3D models and respective UV mapped textures</p>
        <p className="experience-list">• Modelled organic and non-organic objects, terrains, etc.</p>
        <p className="experience-list">• ArtStation Album of 3D Modeling Portfolio: <a href="https://zebraseller.artstation.com/albums/2056553" className="links">https://zebraseller.artstation.com/albums/2056553</a></p>
      </div>
      <div className="experience-container">
        <h2 className="experience-title">First Tech Challenge (FTC) Robotics Competition</h2>
        <h2 className="experience-time">2017-2019</h2>
        <p className="experience-list">• Designed and built mechanisms for the robot, and programmed the robot's behaviors during autonomous control using Java.</p>
        <p className="experience-list">• Aided in Outreaching by using photoshop to design posters and logos for the team.</p>
        <p className="experience-list">• Team ranked top 3 in regional competition and advanced to FTC World Championships.</p>
      </div>

      <h1 className="experiences-header1">Awards and Honors</h1>
      <div className="award-container">
        <h2 className="experience-title">Robert E. and Karen Martin Luetje Scholarship (UIUC)</h2>
        <h2 className="experience-time">April 2022</h2>
      </div>
      <div className="award-container">
        <h2 className="experience-title">Dean's List of the Grainger College of Engineering (UIUC)</h2>
        <h2 className="experience-time">Spring 2020 – Fall 2021</h2>
      </div>
      <div className="award-container">
        <h2 className="experience-title">AP Scholar with Distinction</h2>
        <h2 className="experience-time">July 2019</h2>
      </div>
      <div className="award-container">
        <h2 className="experience-title">President's Volunteer Service Gold Award</h2>
        <h2 className="experience-time">2016</h2>
      </div>
    </div>
  );
}

export default App;