import React, { Component } from "react";
import "./About.css";
import profile from "../profile.png";
class About extends Component {
  render() {
    return (
      <main className="About-body">
        <div className="name-container">
          <h2 className="About-name">Bola Adebesin</h2>
        </div>
        <div className="test">
          <img className="About-profile" src={profile} alt="profile" />
          <div className="About-intro">
            <h6 className="About-title">Full Stack Developer | Scientist</h6>
            <p className="About-description">
              While my approach to programming is
              <strong> [analytical]</strong> and
              <strong> [methodical] </strong>, my passion for technology and
              discovery drives me to relentlessly pursue
              <strong> [creative] </strong> solutions to complex problems.
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default About;
