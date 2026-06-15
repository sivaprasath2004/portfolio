import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [achieveOpen, setAchieveOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const main = document.getElementById("main-scroll");
      if (!main) return;
      setScrolled(main.scrollTop > 60);
      const sections = [
        "home",
        "about",
        "experience",
        "skill",
        "project",
        "contact",
      ];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    const main = document.getElementById("main-scroll");
    if (main) main.addEventListener("scroll", handleScroll);
    return () => main && main.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["about", "experience", "skill", "project", "contact"];

  return (
    <div className={`app-wrapper ${darkMode ? "dark" : "light"}`}>
      {/* Achievement Side Panel */}
      <div
        className={`achieve-overlay ${achieveOpen ? "open" : ""}`}
        onClick={() => setAchieveOpen(false)}
      />
      <aside className={`achieve-panel ${achieveOpen ? "open" : ""}`}>
        <button
          className="achieve-close"
          onClick={() => setAchieveOpen(false)}
        >
          ✕
        </button>
        <Achievements darkMode={darkMode} />
      </aside>

      {/* Floating Achievement Tab */}
      <button
        className={`achieve-tab ${achieveOpen ? "hidden" : ""}`}
        onClick={() => setAchieveOpen(true)}
      >
        <span className="achieve-tab-icon">🏆</span>
        <span className="achieve-tab-label">Achievements</span>
      </button>

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <a href="#home" className="nav-logo">
          S<span>ivaprasath</span>
        </a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`nav-link ${activeSection === link ? "active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>
        <div className="nav-controls">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <main id="main-scroll">
        <section id="home" className="section">
          <Home />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="experience" className="section">
          <Experience />
        </section>
        <section id="skill" className="section">
          <Skill />
        </section>
        <section id="project" className="section">
          <Project />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>

        <footer className="footer">
          <div className="footer-inner">
            <span className="footer-logo">
              S<span>ivaprasath</span>
            </span>
            <div className="footer-links">
              {navLinks.map((link) => (
                <a key={link} href={`#${link}`} className="footer-link">
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              ))}
            </div>
            <p className="footer-copy">
              © 2025 sivaprasath2004. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
