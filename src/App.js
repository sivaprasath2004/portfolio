import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
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
    </main>
  );
};

export default App;
