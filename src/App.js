import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
const App = () => {
  return (
    <main>
      <nav>
        <h1>Sivaprasath</h1>
        <div id="nav">
          <a href="#about">About</a>
          <a href="#skill">Skill</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
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
      <section id="contact">
        <Contact />
      </section>
      <footer>
        <div id="nav">
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
  );
};

export default App;
