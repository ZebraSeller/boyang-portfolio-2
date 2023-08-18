import React from 'react';
import './home_experiences.css';
function App() {
  return (
    <div id="home-experiences-container">
      <div id="top-bar"/> <br/>
      <h1 className="experiences-header1">Education</h1>

      <div className="experience-container">
        <h2 className="experience-title">M.S. Computer Science</h2>
        <h2 className="experience-time">2023-2025</h2>
        {/* <p className="experience-list experience-bold">Minor: Computer Science</p> */}
        <p className="experience-list experience-bold" >University of Southern California (USC)</p>
        <p className="experience-list"> Overall GPA: N/A</p>
        <p className="experience-list">
          
        </p>
      </div>
      
      <div className="experience-container">
        <h2 className="experience-title">B.S. Materials Science and Engineering with Computation Focus, and Minor in Computer Science</h2>
        <h2 className="experience-time">2019-2023</h2>
        {/* <p className="experience-list experience-bold">Minor: Computer Science</p> */}
        <p className="experience-list experience-bold" >University of Illinois at Urbana-Champaign (UIUC)</p>
        <p className="experience-list"> Overall GPA: 3.81</p>
        <p className="experience-list">
          Courses Taken: Intro to Computer Science,&nbsp;&nbsp; Discrete Structures,&nbsp;&nbsp; Data Structures,&nbsp;&nbsp; 
          Database Systems,&nbsp;&nbsp; Game Development,&nbsp;&nbsp; Art of Web Programming,&nbsp;&nbsp; Matrix Theory,&nbsp;&nbsp; Differential Equations,&nbsp;&nbsp; 
          Statistics and Probability,&nbsp;&nbsp; Atomic Scale Simulations
        </p>
      </div>

      <h1 className="experiences-header1">My Experiences</h1>

      <div className="experience-container">
        <h2 className="experience-title">Front-End Developer at I Fly Young CCE (HTML, CSS, React.js)</h2>
        <h2 className="experience-time">May 2022 - Now</h2>
        <h3 className="experience-title">I Fly Young</h3>
        <p className="experience-list">• Maintained and updated a portion of the official website for the organization using react.</p>
        <p className="experience-list">• Improved formatting and styling of the organization's website.</p>
      </div>

      <div className="experience-container">
        <h2 className="experience-title">Android Engineer Intern (Kotlin, Java)</h2>
        <h2 className="experience-time">May 2022 - May 2023</h2>
        <h3 className="experience-title">Synchrony • Internship</h3>
        <p className="experience-list">• Worked on an Android application for processing payments, addressed bugs and implemented new features.</p>
        <p className="experience-list">• Participated in an Agile development cycle, and actively collaborated with team members to complete tasks on time.</p>
        <p className="experience-list">• Tested application for bugs, then documented and reported findings on the application behaviors.</p>
        <p className="experience-list">• Implemented new UI and fragments for the app with asynchronous operations.</p>
      </div>

      <div className="experience-container">
        <h2 className="experience-title">Front-End/Software Engineer (HTML, CSS, React.js)</h2>
        <h2 className="experience-time">June-August 2021</h2>
        <h3 className="experience-title">Shoptaki • Internship</h3>
        <p className="experience-list">• Worked on web applications, designed User Interface, implemented web pages with HTML and React JS.</p>
        <p className="experience-list">• Collaborated with team members to create new components and pages for websites.</p>
        <p className="experience-list">• Designed and Implemented a functioning Donation Page that accepts payments.</p>
        {/* <p className="experience-list">• Page Demo: <a href="https://www.artstation.com/artwork/9mYyZy" className="links">https://www.artstation.com/artwork/9mYyZy</a></p> */}
      </div>

      <h1 className="experiences-header1">My Projects</h1>

      <div className="experience-container">
        <h2 className="experience-title">Illinois Grades Vis (JavaScript, React.js, Node.js, mongoDB)</h2>
        <h2 className="experience-time">November-December 2022</h2>
        <h3 className="experience-title experience-bold">UIUC • Course Project</h3>
        <p className="experience-list">• Worked with a team to create a full stack web application that visualizes grades data for UIUC courses.</p>
        <p className="experience-list">• Created the frontend app with react, and implemented interactive visualizations such as charts and tables.</p>
        <p className="experience-list">• Collaborated with teammates to setup routing and querying data for user search functions.</p>
        <p className="experience-list">• Project Demo: <a href="https://youtu.be/edx1rBKdx_s" className="links">https://youtu.be/edx1rBKdx_s</a></p>
      </div>
      <div className="experience-container">
        <h2 className="experience-title">US Senate Record Analysis (JavaScript, React.js, MySQL, Node.js, GCP)</h2>
        <h2 className="experience-time">February-May 2022</h2>
        <h3 className="experience-title experience-bold">UIUC • Course Project</h3>
        <p className="experience-list">• As team manager, designed the database model, its ER diagram, and coordinated the team’s efforts.</p>
        <p className="experience-list">• Developed the frontend with react, which can request data from the backend using HTML requests for display.</p>
        <p className="experience-list">• Set up and maintained the MySQL instance on GCP, as well as routing on the backend Node.js server.</p>
        <p className="experience-list">• Project Repository: <a href="https://github.com/ZebraSeller/us-senate-record-analysis-project" className="links">https://github.com/ZebraSeller/us-senate-record-analysis-project</a></p>
      </div>
      <div className="experience-container">
        <h2 className="experience-title">YouTube Cards Colorizer (JavaScript)</h2>
        <h2 className="experience-time">January 2022</h2>
        <h3 className="experience-title experience-bold">N/A • Personal Project</h3>
        <p className="experience-list">• Created a Chrome extension that highlights YouTube videos based on criteria set by the user.</p>
        <p className="experience-list">• Utilized JavaScript’s ability to manipulate DOMs to modify the HTML of the loaded web page.</p>
        <p className="experience-list">• Developed the functionality for users to customize criteria used to flag videos via a pop-up window.</p>
      </div>
      <div className="experience-container">
        <h2 className="experience-title">Personal Portfolio Website Project 2.0 (HTML, CSS, React.js)</h2>
        <h2 className="experience-time">September 2021-Present</h2>
        <h3 className="experience-title experience-bold">N/A • Personal Project</h3>
        <p className="experience-list">• Created a personal demo portfolio/info website that act as an interactive resume.</p>
        <p className="experience-list">• Used HTML, CSS, JavaScript, and React to create web application and visual elements that improve user interaction.</p>
        <p className="experience-list">• The React App was deployed to and hosted on Github Pages, and is being regularly updated and maintained.</p>
        <p className="experience-list">• WIP 2.0 website URL: <a href="https://zebraseller.github.io/boyang-portfolio-2/" className="links">https://zebraseller.github.io/boyang-portfolio-2/</a></p>
        <p className="experience-list">• Discontinued old website (1.0) URL: <a href="https://zebraseller.github.io/Boyang-Portfolio-Site-Project/" className="links">https://zebraseller.github.io/Boyang-Portfolio-Site-Project/</a></p>
      </div>
      <div className="experience-container">
        <h2 className="experience-title">Unity Games Development (Unity, C#)</h2>
        <h2 className="experience-time">2020-2021</h2>
        <h3 className="experience-title experience-bold">N/A • Personal Project</h3>
        <p className="experience-list">• Created several mini games using C# and Unity Engine.</p>
        <p className="experience-list">• Created most of the 3D and visual assets using Photoshop and 3DS Max.</p>
        <p className="experience-list">• Demo of Humvee Simulator: <a href="https://www.artstation.com/artwork/ZGqlN1" className="links">https://www.artstation.com/artwork/ZGqlN1</a></p>
        <p className="experience-list">• Asset created for Saturn Rocket Project: <a href="https://www.artstation.com/artwork/28WExg" className="links">https://www.artstation.com/artwork/28WExg</a></p>
      </div>
      <div className="experience-container">
        <h2 className="experience-title">UIUC CS Department Course Rating App Project (Java)</h2>
        <h2 className="experience-time">November 2020</h2>
        <h3 className="experience-title experience-bold">UIUC • Course Project</h3>
        <p className="experience-list">• Developed a functioning android app with Java, based on a given framework.</p>
        <p className="experience-list">• Created the UI and core mechanics to retrieve and display data.</p>
        <p className="experience-list">• Read and write data with a local JSON database.</p>
      </div>
      <div className="experience-container">
        <h2 className="experience-title">3D Modeling &amp; Texturing</h2>
        <h2 className="experience-time">2017-2022</h2>
        <h3 className="experience-title experience-bold">N/A • Personal Project</h3>
        <p className="experience-list">• Created 3D models and respective UV mapped textures</p>
        <p className="experience-list">• Modelled organic and non-organic objects, terrains, etc.</p>
        <p className="experience-list">• ArtStation Album of 3D Modeling Portfolio: <a href="https://zebraseller.artstation.com/albums/2056553" className="links">https://zebraseller.artstation.com/albums/2056553</a></p>
      </div>
      <div className="experience-container">
        <h2 className="experience-title">First Tech Challenge (FTC) Robotics Competition</h2>
        <h2 className="experience-time">2017-2019</h2>
        <h3 className="experience-title experience-bold">Highschool • Extracurricular Activity</h3>
        <p className="experience-list">• Designed and built mechanisms for the robot, and programmed the robot's behaviors during autonomous control using Java.</p>
        <p className="experience-list">• Aided in Outreaching by using photoshop to design posters and logos for the team.</p>
        <p className="experience-list">• Team ranked top 3 in regional competition and advanced to FTC World Championships.</p>
      </div>

      <h1 className="experiences-header1">Awards and Honors</h1>
      <div className="award-container">
        <h2 className="experience-title">Robert E. and Karen Martin Luetje Scholar (UIUC)</h2>
        <h2 className="experience-time">April 2022</h2>
        <h3 className="experience-title">UIUC • Scholarship</h3>
        <p className="experience-list">• This scholarship is awarded by the Material Science and Engineering Department in honor of outstanding academic performance.</p>
      </div>
      <div className="award-container">
        <h2 className="experience-title">Dean's List of the Grainger College of Engineering (UIUC)</h2>
        <h2 className="experience-time">2020–2023</h2>
        <h3 className="experience-title">UIUC • Award</h3>
        <p className="experience-list">• The names of undergraduates who have achieved a grade point average in the top 20 percent of their college class for a given semester will be included on a list prepared for the dean of the college.</p>

      </div>
      <div className="award-container">
        <h2 className="experience-title">AP Scholar with Distinction</h2>
        <h2 className="experience-time">July 2019</h2>
        <h3 className="experience-title">The College Board • Award</h3>
        <p className="experience-list">• Granted to students who receive an average score of at least 3.5 on all AP Exams taken, and scores of 3 or higher on five or more of these exams.</p>
      </div>
      <div className="award-container">
        <h2 className="experience-title">President's Volunteer Service Gold Award</h2>
        <h2 className="experience-time">2016</h2>
        <h3 className="experience-title">The White House • Award</h3>
        <p className="experience-list">• This award is received for completing more than 250 hours of volunteer service as a young adult (16-25).</p>
      </div>
    </div>
  );
}

export default App;