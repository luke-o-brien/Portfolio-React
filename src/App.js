import React from "react";
import TFLProject from "./components/tflapp.js";
import VenuesArtistsProject from "./components/VenuesArtists.js";
import MyFoundSounds from "./components/myfoundsounds.js";
import Fishwatch from "./components/fishwatch.js";
import Pacman from "./components/pacman.js";
import eb from "./Images/ellis-brigham_mountain_sports (1).png"
import GA from "./Images/generalassembly-open-graph.webp"
import luke from "./Images/P1000496 (1).jpeg"
// image imports
// import lukeimage from "./Images/P1000496.jpeg"
import BookingProject from "./components/bookingproject.js";

function App() {
  
  const [projecttype, setprojecttype] = React.useState("current")


  function toggleclick(e){
    console.log(e.target.value)
    setprojecttype(e.target.value)
    console.log(projecttype)
  }

  return ( 
    <div>
      {/* N A V B A R */}
      <nav>
        <ul>
          <li className="push-left"><a href="#">{"Luke O'Brien"}</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      {/* H E R O   S E C T I O N */}
      <header className="header">
        <div className="title-container">
          <h1>{"Luke O'Brien"}</h1>
          <h4>Software Engineering Portfolio </h4>
          <div className="logo-container">
            <a className="link-icon" href="https://github.com/luke-o-brien"  rel="noreferrer" target="_blank"><i className="fa-brands fa-github fa-2x links"></i></a>
            <a className="link-icon" href="https://www.linkedin.com/in/l-obrien/"  rel="noreferrer"target="_blank"><i className="fa-brands fa-linkedin fa-2x links"></i></a>
          </div>
        </div>
      </header>
      {/* A B O U T   M E */}
      <section className="about" id="about">
        <div className="about-me-container">
          <div className="blurb">
            <h3>Hi,</h3>
            <h3>{"I'm Luke"}</h3>
            <p className="bio">{` When looking for a change in careers, I identified the aspects of my previous roles 
            which I enjoyed most and this was problem solving.This coupled with my interest in languages led me to try coding. 
            I quickly found that I loved creating things and solving problems using code. I enrolled in General Assembly’s 
            Software Engineering Immersive course to deepen my understanding and develop my skills. During this course I learnt
            the fundamentals of programming and had the opportunity to apply my knowledge through undertaking four projects using 
            a range of technologies to create front-end and full-stack web applications. Having completed the course I am now looking for my first role in the industry to allow me 
            to apply and build on what I have already learnt.`}</p>
          </div>
          <div className="image">
            <img className="luke-photo" src={luke}></img>
          </div>
        </div>
        <h5 className="skilltitle">Technical skills</h5>
        <div className="skills">
          <div className="icon-container"><i className="devicon-html5-plain colored bigicon"></i><p>HTML</p></div>
          <div className="icon-container"><i className="devicon-css3-plain colored bigicon"></i><p>CSS</p></div>
          <div className="icon-container"><i className="devicon-javascript-plain colored bigicon"></i><p>JavaScript</p></div>
          <div className="icon-container"><i className="devicon-react-original colored bigicon"></i><p>React</p></div>
          <div className="icon-container"><i className="devicon-nodejs-plain colored bigicon"></i><p>Node JS</p></div>
          <div className="icon-container"><i className="devicon-mongodb-plain colored bigicon"></i><p>Mongo Db</p></div>
          <div className="icon-container"><i className="devicon-express-original colored bigicon"></i><p>Express</p></div>
          <div className="icon-container"><i className="devicon-flask-original colored bigicon"></i><p>Flask</p></div>
          <div className="icon-container"><i className="devicon-python-plain colored bigicon"></i><p>Python</p></div>
          <div className="icon-container"><i className="devicon-jira-plain colored bigicon"></i><p>Jira</p></div>
          <div className="icon-container"><i className="devicon-sass-original colored bigicon"></i><p>Sass</p></div>
          <div className="icon-container"><i className="devicon-git-plain colored bigicon"></i><p>Git</p></div>
        </div>
        <h5 className="skilltitle">Soft skills</h5>
        <p className="individualskills">communication, problem solving, adaptability, time management, self motivated </p>
        <h5 className="skilltitle">Languages Spoken</h5>
        <p  className="individualskills">Russian (intermediate)</p>
      </section>
      <section className="portfolio" id="portfolio">
        {/* P O R T F O L I O */}
        <h2>Projects</h2>
        <div className="portfolio-container">
          <div className="toggle-buttons">
            <button  onClick={toggleclick} value="current" className={ projecttype === "current" ? "active" : "toggle-button"}>{"What I'm working on"}</button>
            <button  onClick={toggleclick} value="generalassembly" className={ projecttype === "generalassembly" ? "active" : "toggle-button"}>General Assembly Projects</button>
            <button  onClick={toggleclick} value="past" className={ projecttype === "past" ? "active" : "toggle-button"}>Past Projects</button>
          </div>
          { projecttype === "" ? <h3>Click above to view projects</h3> : <>
            { 
              projecttype === "current" ?
                <BookingProject />  : null
            }
            { 
              projecttype === "generalassembly" ? <>
                <VenuesArtistsProject />
                <MyFoundSounds />
                <Fishwatch />
                <Pacman />
                
              </> : null 
            }
            {
              projecttype === "past" ? <>
                <TFLProject />
              </> : null }  
          </> 
          }
          <a href="#portfolio" className="totop">Top of section<i className="fa-solid fa-angle-up"></i></a>
        </div>
      
      </section>
      
      <section className="experience" id="experience">
        <h2 >Experience</h2>
        <div className="exp-container">
          <div className="project-container">
            <div className="right-side">
              <h5>General Assembly</h5>
              <p className="jobtitle">Software Engineering Immersive</p>
              <p><b>March 2022 - August 2022</b></p>
              <p>A 6 month part time course, which covered the fundamentals of programming as well as teaching practical programming skills 
                relating to both front end and back end development. This course gave me the opportunity to apply what I had learnt during the
                4 projects. During these projects I was able to use a number of languages and frameworks to create full stack applications. 
                Along with applying these skills during the group projects I was able to experience pair and group programming as well as 
                learn about Agile development and was able to use project management tools such as JIRA to help manage workflow as well as daily stand ups.
              </p>
            </div>
            <div className="left-side">
              <img className="exp-preview-img" src={GA}></img>
            </div>
          </div>
          <div className="project-container">
            <div className="right-side">
              <h5>Self Employed</h5>
              <p className="jobtitle">Online teacher of English as a second language</p>
              <p><b>Febuary 2017 - Present</b></p>
              <p>Responsible for planning and delivering lessons to a range of students of different ages, background language levels and
              geographical locations. Experience tailoring lessons to suit individual students abilities, goals and learning abilities. Creating
              learning resources such as worksheets, presentations, lesson summaries and interactive quizzes and videos. I have also gained
              experience in advertising my services, acquiring new clients along with administration such as scheduling invoicing and
              responding to client queries.

              </p>
            </div>
            <div className="left-side">
              <img className="exp-preview-img"></img>
            </div>
          </div>
          <div className="project-container">
            <div className="right-side">
              <h5>Ellis Brigham Moutain Sports</h5>
              <p className="jobtitle">Sales Assistant and Ice Climbing Instructor</p>
              <p><b>Febuary 2019 - September 2021</b></p>
              <p>In this role I gave advice to customers who were looking for walking boots, rucksacks and other pieces of outdoor equipment as well as helping fit these to the customer.
             I was also responsible for managing the click and collect system on weekends; this involved ordering items from the warehouse and other stores, receiving and processing requests from other stores and the mail order department,
             keeping customer order records updated in excel and responding to customers queries regarding their orders. In addition to these roles I also worked as a Ice climbing
             Instructor at the {"store's"} climbing wall. Providing instruction and health and safety provision for clients.
              </p>
            </div>
            <div className="left-side">
              <img className="exp-preview-img" src={eb}></img>
            </div>
          </div>
        </div>
      </section>
      <footer id="contact">
        <h2 className="h2-white">Contact</h2>
        <p className="email">lukeobrien02@gmail.com</p>
        <div className="linksconta">
          <a className="link-icon-footer" href="https://github.com/luke-o-brien" rel="noreferrer" target="_blank"><i className="fa-brands fa-github fa-2x links"></i></a>
          <a className="link-icon-footer" href="https://www.linkedin.com/in/l-obrien/"  rel="noreferrer" target="_blank"><i className="fa-brands fa-linkedin fa-2x links"></i></a>
        </div>
      </footer>
    </div>
  )
} 

export default App
