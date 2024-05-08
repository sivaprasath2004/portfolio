import React from "react";
import Its_me from "./asset/ItsMe.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div id="profile_image">
        <img src={Its_me} alt="sivaprasath2004" />
      </div>
      <div id="profile_detail">
        <div className="details">
          <h1>Hello I`m</h1>
          <h2>Sivaprasath</h2>
          <h3>Frontend Developer</h3>
          <div className="profile_buttons">
          <Link href="/asset/Resume.pdf" target="_blank" download className="btn downloadbtn">Download CV</Link>
          <a href="./asset/Resume.pdf" target="_blank" className="btn contactbtn">View Resume</a>

          </div>
          <div className="profile_buttons">
            <a href="https://www.linkedin.com/in/sivaprasath2004/">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png"
                alt="linkdin"
              />
            </a>
            <a href="https://github.com/sivaprasath2004">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
                alt="github"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
