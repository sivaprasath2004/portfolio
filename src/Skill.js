import React from "react";
import data from "./data";
const Skill = () => {
  return (
    <>
      <p>Expore My</p>
      <h1>Skills</h1>
      <div className="skill">
        <div id="Frontend">
          <div className="heading">
            <h1>Frontend Development</h1>
          </div>
          <div id="content">
            {data.frontend.map((item, index) => (
              <article key={`items${index}`}>
                {item.name === "null" ? (
                  <></>
                ) : (
                  <>
                    <img
                      key={`image${index}`}
                      src="https://cdn-icons-png.flaticon.com/128/9599/9599152.png"
                      alt="check"
                    />
                    <div>
                      <h2 key={`name${index}`}>{item.name}</h2>
                      <p>{item.exp}</p>
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
        <div id="backend">
          <div className="heading">
            <h1>Backend Development</h1>
          </div>
          <div id="content">
            {data.backend.map((item, index) => (
              <article key={`items${index}`}>
                <img
                  key={`image${index}`}
                  src="https://cdn-icons-png.flaticon.com/128/9599/9599152.png"
                  alt="check"
                />
                <div>
                  <h2 key={`name${index}`}>{item.name}</h2>
                  <p>{item.exp}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
