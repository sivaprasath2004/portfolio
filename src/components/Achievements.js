import React, { useState } from "react";
import Batch1 from "../asset/Batch1.png";
import Batch2 from "../asset/Batch2.png";
import Batch3 from "../asset/Batch3.png";

const Achievements = ({ darkMode }) => {
  const [tab, setTab] = useState("github");

  return (
    <div style={{ paddingTop: "0.5rem" }}>
      <h2 className="ach-title" style={{ marginTop: "3.5rem" }}>
        Achievements
      </h2>
      <p className="ach-sub">A summary of my open-source and frontend work</p>

      <div className="ach-nav">
        <button
          className={`ach-nav-btn ${tab === "github" ? "active" : ""}`}
          onClick={() => setTab("github")}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
            alt="github"
          />
          GitHub
        </button>
        <button
          className={`ach-nav-btn ${tab === "fem" ? "active" : ""}`}
          onClick={() => setTab("fem")}
        >
          Frontend Mentor
        </button>
      </div>

      {tab === "github" ? (
        <>
          <h3 className="ach-section-title">Projects 🔥</h3>
          <div className="ach-gh-list">
            {[
              "Total Projects: 50+",
              "MERN & Full Stack Projects: 5",
              "Android Projects: 2",
              "API Projects: 3",
              "Other Projects: 40+",
            ].map((item, i) => (
              <div className="ach-gh-item" key={i}>
                <div className="ach-gh-dot" />
                {item}
              </div>
            ))}
          </div>

          <a
            href="https://github.com/sivaprasath2004?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="ach-view-btn"
          >
            View Repositories ↗
          </a>

          <div className="ach-divider" />
          <h3 className="ach-section-title">💻 Tech Stack</h3>
          <div className="ach-tags">
            {[
              "HTML5", "CSS3", "JavaScript", "Tailwind",
              "React", "Node.js", "Express", "MongoDB",
              "npm", "Pug",
            ].map((t, i) => (
              <span className="ach-tag" key={i}>{t}</span>
            ))}
          </div>

          <div className="ach-divider" />
          <h3 className="ach-section-title">📊 GitHub Stats</h3>
          <img
            className="ach-github-img"
            src={`https://github-readme-stats.vercel.app/api/top-langs?username=sivaprasath2004&show_icons=true&locale=en&bg_color=${darkMode ? "0d1117" : "ffffff"}&text_color=${darkMode ? "ffffff" : "1a1a2e"}&layout=compact`}
            alt="Top Languages"
          />
          <img
            className="ach-github-img"
            src={`https://github-readme-stats.vercel.app/api?username=sivaprasath2004&show_icons=true&locale=en&bg_color=${darkMode ? "0d1117" : "ffffff"}&text_color=${darkMode ? "ffffff" : "1a1a2e"}`}
            alt="GitHub Stats"
          />
          <img
            className="ach-github-img"
            src={`https://github-readme-streak-stats.herokuapp.com/?user=sivaprasath2004&theme=${darkMode ? "dark" : "light"}&background=${darkMode ? "#0a0a0f" : "ffffff"}&date_format=M%20j%5B%2C%20Y%5D`}
            alt="GitHub Streak"
          />
        </>
      ) : (
        <>
          <h3 className="ach-section-title">Frontend Mentor</h3>
          <div className="ach-stats">
            <div className="ach-stat">
              <div className="ach-stat-val">2,520</div>
              <div className="ach-stat-key">Total Score</div>
            </div>
            <div className="ach-stat">
              <div className="ach-stat-val">16</div>
              <div className="ach-stat-key">Solutions</div>
            </div>
            <div className="ach-stat">
              <div className="ach-stat-val">157</div>
              <div className="ach-stat-key">Comments</div>
            </div>
            <div className="ach-stat">
              <div className="ach-stat-val">117</div>
              <div className="ach-stat-key">Helpful</div>
            </div>
          </div>

          <a
            href="https://www.frontendmentor.io/profile/sivaprasath2004"
            target="_blank"
            rel="noreferrer"
            className="ach-view-btn"
          >
            View Profile ↗
          </a>

          <div className="ach-divider" />
          <h3 className="ach-section-title">🏅 Badges Earned</h3>
          <div className="ach-batches">
            {[
              { img: Batch1, label: "Mentor of the Week — 3rd Place" },
              { img: Batch2, label: "Mentor of the Week — 2nd Place" },
              { img: Batch3, label: "Mentor of the Month — 3rd Place" },
            ].map((b, i) => (
              <div className="ach-batch" key={i}>
                <img src={b.img} alt={b.label} />
                <span className="ach-batch-name">{b.label}</span>
              </div>
            ))}
          </div>

          <div className="ach-divider" />
          <h3 className="ach-section-title">📈 Solution Quality</h3>
          <div className="ach-tags">
            {[
              "Designing ✓",
              "Responsive ✓",
              "Performance ✓",
              "Best Practices ✓",
              "SEO ✓",
            ].map((t, i) => (
              <span
                className="ach-tag"
                key={i}
                style={{ color: "var(--accent3)", borderColor: "var(--accent3)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Achievements;
