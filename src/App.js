import React from "react";

function App() {
  

  return ( 
    <div>
      <nav>
        <ul>
          <li className="push-left"><a href="#">Luke O'Brien</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
        </ul>
      </nav>
      <header className="header">
        <div className="title-container">
          <h1>Luke O'Brien</h1>
          <h4>Software Engineering Portfolio </h4>
          <div className="logo-container">
            <a className="link-icon" href="https://github.com/luke-o-brien" target="_blank"><i className="fa-brands fa-github fa-2x links"></i></a>
            <a className="link-icon" href="https://www.linkedin.com/in/l-obrien/" target="_blank"><i className="fa-brands fa-linkedin fa-2x links"></i></a>
          </div>
        </div>
      </header>
      <section className="about" id="about">
        <div className="about-me-container">
          <div className="image">
            <img className="luke-photo" src="images/P1000496 (1).jpeg"></img>
          </div>
          <div className="blurb">
            <h3>Hi,</h3>
            <h3>I'm Luke</h3>
            <p className="bio">When looking for a change in career I identified the aspect of my previous roles which I enjoyed most 
            and this was problem solving. This coupled with my interest in languages led me to try coding. I quickly found that I 
            loved creating things and solving problems using code. I enrolled In General Assembly's Software Engineering Immersive 
            course to deepen my understanding and develop my skills. I am now looking for my first role in the industry to allow me 
            to apply and build on what I have already learnt.</p>
          </div>
        </div>
      </section>
      <section className="skill-section" id="skills">
        <h2>Skills</h2>
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
        </div>
      </section>
      <section className="portfolio" id="portfolio">
        <h2>Portfolio</h2>
        <div className="portfolio-container">
          <h5>Currently working on</h5>
          <div className="project-container">
            <div className="left-side">
              <img className="project-preview-img" src="images/smartmockups_l7diceae.png"></img>
            </div>
            <div className="right-side">
              <h5>London Transport Site </h5>
              <div className="technologies-used">
                <i className="devicon-html5-plain colored smallicon"></i>
                <i className="devicon-css3-plain colored smallicon"></i>
                <i className="devicon-javascript-plain colored smallicon"></i>
                <i className="devicon-react-original colored smallicon"></i>
              </div>
              <p>A mobile-first multipage React app which utilises the TFL Unified API and allows users to view service updates, 
            search for live departures and plan journeys. The app was built as a personal side project to help 
            improve my react and front-end development skills. This is version one, and I am currently working on adding extra features
            such as advanced journey search, google maps integration and user accounts to provide a more personalised experience.</p>
              <div className="link-buttons-container">
                <button className="portfolio-link"><a href="https://london-transport.netlify.app/" target="_blank">Live site</a></button>
                <button className="portfolio-link"><a href="https://github.com/luke-o-brien/Transport-for-London-App" target="_blank">Github Respository</a></button>
              </div>
            </div>
          </div>
          <h5>Software Engineering Immersive course Projects</h5>
          <div className="project-container">
            <div className="left-side">
              <img className="project-preview-img" src="images/smartmockups_l7dij97u.png"></img>
            </div>
            <div className="right-side">
              <h5>Venues and Artists app </h5>
              <div className="technologies-used">
                <i className="devicon-html5-plain colored smallicon"></i>
                <i className="devicon-css3-plain colored smallicon"></i>
                <i className="devicon-javascript-plain colored smallicon"></i>
                <i className="devicon-react-original colored smallicon"></i>
                <i className="devicon-tailwindcss-plain colored smallicon"></i>
                <i className="devicon-python-plain colored smallicon"></i>
                <i className="devicon-postgresql-plain colored smallicon"></i>
                <i className="devicon-flask-original colored smallicon"></i>
                <i className="devicon-jira-plain-wordmark colored smallicon"></i>
              </div>
              <p>For this two week pair project we created a full stack web application which allowed both music venues and artists to view the details of the 
          other in order to find acts to perform or venues which were looking for new talent. The back-end of the project was built using Python and Flask 
          and the front-end using react with the styling being done in tailwind CSS with some plain css. As well as the listings of artists we also created a 
          multipage sign in form following the typeform format using conditional rendering. 
              </p>
              <div className="link-buttons-container">
                <button className="portfolio-link"><a id="mfs-modal" target="_blank">Live site</a></button>
                <button className="portfolio-link"><a href="https://github.com/luke-o-brien/Transport-for-London-App" target="_blank">Github Respository</a></button>
              </div>
            </div>
          </div>
          <div className="project-container">
            <div className="left-side">
              <img className="project-preview-img" src="images/smartmockups_l7dim0pu.png"></img>
            </div>
            <div className="right-side">
              <h5>MyFoundSounds MERN Project</h5>
              <div className="technologies-used">
                <i className="devicon-html5-plain colored smallicon"></i>
                <i className="devicon-css3-plain colored smallicon"></i>
                <i className="devicon-javascript-plain colored smallicon"></i>
                <i className="devicon-react-original colored smallicon"></i>
                <i className="devicon-nodejs-plain colored smallicon"></i>
                <i className="devicon-mongodb-plain colored smallicon"></i>
                <i className="devicon-express-original colored smallicon"></i>
                <i className="devicon-sass-original colored smallicon"></i>
                <i className="devicon-jira-plain-wordmark colored smallicon"></i>
              </div>
              <p>For this group project, we built a full-stack react web app, which was a social media site based around audio. The site allows users to upload sounds from 
          their devices and search for and listen to other users' sounds. For this project, we created our back-end API using Mongo Db and Express along with utilising the Cloudinary API for audio file storage. 
          To aid the development of the project, our group utilised Jira and scrum working to plan the project, assign tasks and track progress through the two one-week sprints.</p>
              <div className="link-buttons-container">
                <button className="portfolio-link"><a id="mfs-modal" target="_blank">Live site</a></button>
                <button className="portfolio-link"><a href="https://github.com/luke-o-brien/Transport-for-London-App" target="_blank">Github Respository</a></button>
              </div>
            </div>
          </div>
          <div className="project-container">
            <div className="left-side">
              <img className="project-preview-img" src="images/smartmockups_l7dhwbjm.png"></img>
            </div>
            <div className="right-side">
              <h5>Fishwatch API Site</h5>
              <div className="technologies-used">
                <i className="devicon-javascript-plain colored smallicon"></i>
                <i className="devicon-react-original colored smallicon"></i>
                <i className="devicon-css3-plain colored smallicon"></i>
                <i className="devicon-html5-plain colored smallicon"></i>
                <i className="devicon-bulma-plain colored smallicon"></i>
              </div>
              <p>A multipage front-end React web app which utilises the Fishwatch and Edamam API. This site takes information from the Fishwatch API 
            and displays information about different species; it also uses the Edamam API to show recipes for more sustainable fish choices. This was a pair project 
            my work focused on the fish of the day component, which displayed a different fish to the user each day, making use of local storage. I also created the page which utilised the 
            Edamam API  </p>
              <div className="link-buttons-container">
                <button className="portfolio-link"><a href="https://myfoundsounds.netlify.app/" target="_blank">Live site</a></button>
                <button className="portfolio-link"><a href="https://github.com/luke-o-brien/Project-3-MERN-Backend" target="_blank">Github Respository</a></button>
              </div>
            </div>
          </div>
          <div className="project-container">
            <div className="left-side">
              <img className="project-preview-img" src="images/smartmockups_l7dhz28w.png"></img>
            </div>
            <div className="right-side">
              <h5>Pacman Game</h5>
              <div className="technologies-used">
                <i className="devicon-html5-plain colored smallicon"></i>
                <i className="devicon-css3-plain colored smallicon"></i>
                <i className="devicon-javascript-plain colored smallicon"></i>
              </div>
              <p>My first sizable coding project. Built using HTML, CSS and JavaScript, this is a grid-based Pacman game which allows users to control Pacman 
            using keyboard inputs to collect pellets and capture ghosts when they are vulnerable. The game includes a leaderboard created using local storage as 
            well as a theme and map size selector, which is chosen by the user before the game begins.</p>
              <div className="link-buttons-container">
                <button className="portfolio-link"><a href="https://venuesandartists.netlify.app/" target="_blank">Live site</a></button>
                <button className="portfolio-link"><a href="https://github.com/luke-o-brien/Project-4-Backend" target="_blank">Github Respository</a></button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <a className="link-icon-footer" href="https://github.com/luke-o-brien" target="_blank"><i className="fa-brands fa-github fa-2x links"></i></a>
        <a className="link-icon-footer" href="https://www.linkedin.com/in/l-obrien/" target="_blank"><i className="fa-brands fa-linkedin fa-2x links"></i></a>
        <p>lukeobrien02@gmail.com</p>
      </footer>
    </div>
  )
} 

export default App
