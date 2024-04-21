import React, { useState } from "react";
import data from "./data";

const Project = () => {
  const [checker, setchecker] = useState({
    project1: 0,
    project2: 0,
    project3: 0,
    project4: 0,
    project5: 0,
    project6: 0,
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
                  key={`project2_image${index}`}
                  src={item.url}
                  alt={item.alt}
                  onClick={() =>
                    setchecker((pre) => ({ ...pre, project1: index }))
                  }
                />
              ))}
            </div>
          </div>
          <h1> Zodia</h1>
          <p>
            Empowering users to <span>connect, chat, and communicate </span>with
            like-minded individuals effortlessly on Zodia's interactive{" "}
            <span>web platform.</span>
          </p>
          <h2>Technologies:</h2>
          <ul id="project_languages">
            <p>
              <li>React Js</li>
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
            <a href="https://github.com/sivaprasath2004/social-media-application">
              <button className="btn downloadbtn">Github</button>
            </a>
            <a href="https://zodia.vercel.app/">
              <button className="btn contactbtn">Live Demo</button>
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
                  key={`project2_image${index}`}
                  src={item.url}
                  alt={item.alt}
                  onClick={() =>
                    setchecker((pre) => ({ ...pre, project2: index }))
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
          <h2>Technologies:</h2>
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
                  key={`project2_image${index}`}
                  src={item.url}
                  alt={item.alt}
                  onClick={() =>
                    setchecker((pre) => ({ ...pre, project3: index }))
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
          <h2>Technologies:</h2>
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
        <div className="project4" id="PROJECT">
          <div id="images">
            <img
              id="img"
              src={data.project4[checker.project4].url}
              alt={data.project4[checker.project4].alt}
            />
            <div className="image">
              {data.project4.map((item, index) => (
                <img
                  className={checker.project4 === index ? "select" : ""}
                  key={`project2_image${index}`}
                  src={item.url}
                  alt={item.alt}
                  onClick={() =>
                    setchecker((pre) => ({ ...pre, project4: index }))
                  }
                />
              ))}
            </div>
          </div>
          <h1> Tic Tac Toe</h1>
          <p>
            Introducing the ultimate online Tic Tac Toe experience!{" "}
            <span>Play live matches</span> with friends and engage in{" "}
            <span>real-time chat</span> on our interactive{" "}
            <span>web platform.</span>
          </p>
          <h2>Technologies:</h2>
          <ul id="project_languages">
            <p>
              <li>Pug</li>
            </p>
            <p>
              <li>Java Script</li>
            </p>
            <p>
              <li>Node JS</li>
            </p>
            <p>
              <li>Express Js</li>
            </p>
          </ul>
          <div id="project_buttons">
            <a href="https://github.com/sivaprasath2004/Tic-Tac-Toe">
              <button className="btn downloadbtn">Github</button>
            </a>
            <a href="https://tic-tac-toe-7bj5.onrender.com">
              <button className="btn contactbtn">Live Demo</button>
            </a>
          </div>
        </div>
        <div className="project5" id="PROJECT">
          <div id="images">
            <img
              id="img"
              src={data.project5[checker.project5].url}
              alt={data.project5[checker.project5].alt}
            />
            <div className="image">
              {data.project5.map((item, index) => (
                <img
                  className={checker.project5 === index ? "select" : ""}
                  key={`project2_image${index}`}
                  src={item.url}
                  alt={item.alt}
                  onClick={() =>
                    setchecker((pre) => ({ ...pre, project5: index }))
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
          <h2>Technologies:</h2>
          <ul id="project_languages">
            <p>
              <li>React Native</li>
            </p>
            <p>
              <li>CSS</li>
            </p>
            <p>
              <li>Java Script</li>
            </p>
          </ul>
          <div id="project_buttons">
            <a href="https://github.com/sivaprasath2004/shopping-application">
              <button className="btn downloadbtn">Github</button>
            </a>
          </div>
        </div>
        <div className="project6" id="PROJECT">
          <div id="images">
            <img
              id="img"
              src={data.project6[checker.project6].url}
              alt={data.project6[checker.project6].alt}
            />
            <div className="image">
              {data.project6.map((item, index) => (
                <img
                  className={checker.project6 === index ? "select" : ""}
                  key={`project2_image${index}`}
                  src={item.url}
                  alt={item.alt}
                  onClick={() =>
                    setchecker((pre) => ({ ...pre, project6: index }))
                  }
                />
              ))}
            </div>
          </div>
          <h1> News Application</h1>
          <p>
            Experience the <span>latest headlines</span> at your fingertips with
            our comprehensive news application. Stay informed with daily updates
            covering <span>country-specific</span> news and a{" "}
            <span>wide range of categories</span> to suit your interests.
          </p>
          <h2>Technologies:</h2>
          <ul id="project_languages">
            <p>
              <li>React Js</li>
            </p>
            <p>
              <li>CSS</li>
            </p>
          </ul>
          <div id="project_buttons">
            <a href="https://github.com/sivaprasath2004/News-application">
              <button className="btn downloadbtn">Github</button>
            </a>
            <a href="https://main--delightful-treacle-903788.netlify.app/">
              <button className="btn contactbtn">Live Demo</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
