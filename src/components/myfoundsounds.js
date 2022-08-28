import React from "react";
import myfoundsoundsimg from "../Images/smartmockups_l7dim0pu.png"

function myfoundsounds() {
  return (
    <div className="project-container">
      <div className="left-side">
        <img className="project-preview-img" src={myfoundsoundsimg}></img>
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
  )
}

export default myfoundsounds