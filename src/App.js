import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
const App = () => {
  return (
    <main>
      <nav>
        <h1>Sivaprasath</h1>
        <div id="nav">
          <a href="#about">About</a>
          <a href="#skill">Skill</a>
          <a href="#project">Project</a>
          <a href="#contect">Contact</a>
        </div>
      </nav>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skill">
        <Skill />
      </section>
      <section id="project">
        <Project />
      </section>
    </main>
  );
};

export default App;
