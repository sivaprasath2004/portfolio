import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
import ParticlesComponent from "./particle/particleComponent";
import Page from "./Acheive/Page";
const App = () => {
  const [checker, setChecker] = useState({ menu: true, mode: false,acheive:false });
  function handleModes() {
    setChecker((pre) => ({ ...pre, mode: !checker.mode }));
    document.body.classList.toggle("Modes");
  }
  function handleAcheive(){
    setChecker((pre) => ({ ...pre, acheive: !checker.acheive }))
    console.log("click")
  }
  return (
    <>
    <main className={checker.acheive?"acheive":""}>
      <nav>
        <h1>
          S<span>ivaprasath</span>
        </h1>
        <div className={checker.menu ? "nav deactivate" : "nav"}>
          <a href="#about">About</a>
          <a href="#skill">Skill</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
        </div>
        <div
          className={!checker.mode ? "mode darkMode" : "mode lightMode"}
          onClick={() => handleModes()}
        ></div>
        <div
          className={!checker.menu ? "MENU DEACTIVATE" : "MENU"}
          onClick={() => setChecker((pre) => ({ ...pre, menu: !checker.menu }))}
        ></div>
      </nav>
      <div className={checker.acheive?"hambar active":"hambar"}>
      <div id="menu"  onClick={() => handleAcheive()}>
       <span className="menu" ></span>
      </div>
      </div>
      <section id="Acheivement">
      <Page mode={checker.mode} />
      </section>
    <ParticlesComponent mode={checker.mode} />
      <section id="home">
        <Home />
      </section>
      <section id="about" style={{background:checker.mode?"black":"white"}}>
        <About />
      </section>
      <section id="skill">
        <Skill />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <footer>
        <div className="nav">
          <a href="#about">About</a>
          <a href="#skill">Skill</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
        </div>
        <p style={{ textAlign: "center", padding: 10 }}>
          copyright © 2024
          <a href="https://github.com/sivaprasath2004"> sivaprasath2004</a>
        </p>
      </footer>
    </main>
    </>
  );
};

export default App;
