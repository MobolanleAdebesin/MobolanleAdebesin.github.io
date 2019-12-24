import React, { Component } from "react";
import "./About.css";
import profile from "../profile.png";
class About extends Component {
  render() {
    return (
      <main className="About-main-container">
        <h2 className="About-name">Bola Adebesin</h2>
        <div className="About-profile-title-description">
          <div className="About-profile-title">
            <img className="About-profile" src={profile} alt="profile" />
            <h5 className="About-title">Software Engineer</h5>
          </div>
          <div className="About-description-container">
            <p className="About-description">
              While my approach to programming is
              <strong> [analytical]</strong> and
              <strong> [methodical] </strong>, my passion for technology and
              discovery drives me to relentlessly pursue
              <strong> [creative] </strong> solutions to complex problems.
            </p>
          </div>
        </div>

        <div className="About-links">
          <a
            href="https://github.com/MobolanleAdebesin"
            target="_blank"
            rel="noopener noreferrer"
            id="github"
          >
            <i className="fa fa-github-square fa-3x"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/mobolanle-adebesin/"
            target="_blank"
            rel="noopener noreferrer"
            id="linkedin"
          >
            <i className="fa fa-linkedin fa-3x"></i>
          </a>

          <a
            href="https://medium.com/@bolaadebesin"
            target="_blank"
            rel="noopener noreferrer"
            id="medium"
          >
            <i className="fa fa-medium fa-3x"></i>
          </a>
        </div>
      </main>
    );
  }
}

export default About;
