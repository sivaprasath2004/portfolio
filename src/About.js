import React from "react";
import "./About.css";
import frontendMentor from "./asset/Front-end-mentor.png";
const About = () => {
  return (
    <>
      <p id="About_knowmore">Get to know more</p>
      <h1>About Me</h1>
      <h1>Aspiring Full Stack Developer</h1>
      <div className="ABout_page_content">
        <p>
          Proficient in front-end development, I am deeply passionate about
          transitioning into a full-stack developer through self-learning. I am
          a self-taught learner dedicated to crafting user-friendly websites.
          With real-world full-stack development projects under my belt, I
          continuously enhance my skills through daily research and learning
          endeavors.
        </p>
        <div id="Details_column">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/5404/5404967.png"
              alt="graduate"
            />
            <h1>Education</h1>
            <p>BSc Computer Science</p>
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
              alt="github"
            />
            <h1>Github</h1>
            <p>50+ Repository</p>
          </div>
          <div>
            <img src={frontendMentor} alt="Front End Mentor" />
            <h1>Front End Mentor</h1>
            <p>500+ Points</p>
            <p>15+ solution</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
