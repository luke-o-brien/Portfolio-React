import React from "react";
import codeimage from "../Images/smartmockups_l7dxjdef.png"

function BookingProject() {
  return ( <>
    <div className="project-container-current">
      <div className="left-side">
        <img className="project-preview-img" src={codeimage}></img>
      </div>
      <div className="right-side">
        <h5>Booking App (In Development)</h5>
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
        <p><b>Current stage:</b> planning and Whiteboarding</p>

        <p>This project will be a Full stack web app built using the MERN stack. I intend this application to be a booking system which
          will allow users to search for event tickets and purchase them. The project will include a search engine, booking form, demo payment system 
          and a fully built user account interface which allows users to view and manage purchases as well as alter account details. 
        </p>
        <div className="link-buttons-container">
          <button className="portfolio-link"><a href="https://github.com/luke-o-brien/Booking-app" rel="noreferrer" target="_blank">Github Repository</a></button>
        </div>
      </div>
    </div>
    {/* <div className="project-updates">
      <h5>Project Updates</h5>
      <div className="update container">
        <p>28th August 2022</p>
      </div>
    </div> */}
  </>
  )
}

export default BookingProject