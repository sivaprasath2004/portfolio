import React, { useState } from "react";
import data from "./data";

const Project = () => {
  const [checker, setchecker] = useState({
    project1: 0,
    project2: 0,
    project3: 0,
  });
  return (
    <>
      <p>Expore My</p>
      <h1>Projects</h1>
      <div className="project">
        <div className="project1" id="PROJECT">
          <div id="images">
            <img
              id="img"
              src={data.project1[checker.project1].url}
              alt={data.project1[checker.project1].alt}
            />
            <div className="image">
              {data.project1.map((item, index) => (
                <img
                  className={checker.project1 === index ? "select" : ""}
                  key={`project1_image${index}`}
                  src={item.url}
                  alt={item.alt}
                  onClick={() =>
                    setchecker((pre) => ({ ...pre, project1: index }))
                  }
                />
              ))}
            </div>
          </div>
          <h1> Announcement Announcer</h1>
          <p>
            Innovative information sharing <span>Android application.</span>
            Delivering updates and announcements directly to your email address.
          </p>
          <h2>Language:</h2>
          <ul id="project_languages">
            <p>
              <li>React Native</li>
            </p>
            <p>
              <li>Node JS</li>
            </p>
            <p>
              <li>Express Js</li>
            </p>
            <p>
              <li>Mongodb</li>
            </p>
          </ul>
          <div id="project_buttons">
            <a href="https://github.com/sivaprasath2004/announcement-annocer-application-">
              <button className="btn downloadbtn">Github</button>
            </a>
          </div>
        </div>
        <div className="project2" id="PROJECT">
          <div id="images">
            <img
              id="img"
              src={data.project2[checker.project2].url}
              alt={data.project2[checker.project2].alt}
            />
            <div className="image">
              {data.project2.map((item, index) => (
                <img
                  className={checker.project2 === index ? "select" : ""}
                  key={`project1_image${index}`}
                  src={item.url}
                  alt={item.alt}
                  onClick={() =>
                    setchecker((pre) => ({ ...pre, project2: index }))
                  }
                />
              ))}
            </div>
          </div>
          <h1> E-commerse Site</h1>
          <p>
            Crafting an e-commerce platform with effortless{" "}
            <span>Add to Cart</span> integration and simplified{" "}
            <span>test purchasing</span> for optimal user experience.
          </p>
          <h2>Language:</h2>
          <ul id="project_languages">
            <p>
              <li>React JS</li>
            </p>
            <p>
              <li>Node JS</li>
            </p>
            <p>
              <li>Express Js</li>
            </p>
            <p>
              <li>Mongodb</li>
            </p>
          </ul>
          <div id="project_buttons">
            <a href="https://github.com/sivaprasath2004/shopping-application">
              <button className="btn downloadbtn">Github</button>
            </a>
            <a href="https://shopping-application-iota.vercel.app/">
              <button className="btn contactbtn">Live Demo</button>
            </a>
          </div>
        </div>
        <div className="project3" id="PROJECT">
          <div id="images">
            <img
              id="img"
              src={data.project3[checker.project3].url}
              alt={data.project3[checker.project3].alt}
            />
            <div className="image">
              {data.project3.map((item, index) => (
                <img
                  className={checker.project3 === index ? "select" : ""}
                  key={`project1_image${index}`}
                  src={item.url}
                  alt={item.alt}
                  onClick={() =>
                    setchecker((pre) => ({ ...pre, project3: index }))
                  }
                />
              ))}
            </div>
          </div>
          <h1>Code Craft</h1>
          <p>
            Unleash your creativity by <span>generating QR codes </span>and
            exploring the art of scanning them, adding a touch of modern
            technology in the <span>Android application.</span>
          </p>
          <h2>Language:</h2>
          <ul id="project_languages">
            <p>
              <li>Java Script</li>
            </p>
            <p>
              <li>React Native</li>
            </p>
          </ul>
          <div id="project_buttons">
            <a href="https://github.com/sivaprasath2004/shopping-application">
              <button className="btn downloadbtn">Github</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
