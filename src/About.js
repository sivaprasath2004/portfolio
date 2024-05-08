import React from "react";
import "./About.css";
import frontendMentor from "./asset/Front-end-mentor.png";
import Its_me from "./asset/ItsMe.png";
const About = () => {
  return (
    <>
      <p id="About_knowmore">Get to know more</p>
      <h1>About Me</h1>
      <h1 style={{ textAlign: "center" }}>Aspiring Full Stack Developer</h1>
      <div className="ABout_page_content">
        <div id="About_page_Profile">
          <div id="MY_PROFILE">
            <div id="About_page_image_container">
              <img src={Its_me} alt="profile" />
            </div>
          </div>
          <div id="About_Contents">
          <p>
          Proficient in front-end development, I am deeply passionate about transitioning into a full-stack developer through self-learning. I am a self-taught learner dedicated to crafting user-friendly websites. With real-world full-stack development projects under my belt, I continuously enhance my skills through daily research and learning endeavors. In my frontend development experience, I strive to achieve  <a href="https://www.frontendmentor.io/profile/sivaprasath2004">frontend mentor</a> solutions and attain 2 weekly and 1 monthly batches.
          </p>
          <div className="profile_buttons">
          <a href="https://github.com/sivaprasath2004">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
                alt="github"
              />
              <p>Github</p>
            </a>
            <a href="https://www.frontendmentor.io/profile/sivaprasath2004">
              <img id="frontend_mentor"
                src={frontendMentor}
                alt="frontend mentor"
              />
              <p>Frontend Mentor</p>
            </a>
          </div>
          </div>
        </div>
        <div id="Details_column">
          <div className="container_detailing">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5404/5404967.png"
              alt="graduate"
            />
            <h1>Education</h1>
            <p style={{ marginTop: "6.2rem",fontSize:'1.35rem' }}>BSc Computer Science</p>
          </div>
          <div className="container_detailing">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
              alt="github"
            />
            <h1>Github</h1>
            <p id="special_element">
              50<span>+</span>
              <span>Repository</span>
            </p>
          </div>
          <div className="container_detailing" id="front_end_mentor">
            <img
              src={frontendMentor}
              alt="Front End Mentor"
              id="sharping_image"
            />
            <h1>Front End Mentor</h1>
            <p id="special_element">
              2500<span>+</span>
              <span>Points</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
