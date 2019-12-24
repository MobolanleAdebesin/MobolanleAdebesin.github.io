import React, { Component } from "react";
import "./Home.css";
import profile from "../profile.png";
class Home extends Component {
  render() {
    return (
      <main className="Home-main-container">
        <h2 className="Home-name">Bola Adebesin</h2>
        <div className="Home-profile-title-description">
          <div className="Home-profile-title">
            <img className="Home-profile" src={profile} alt="profile" />
            <h5 className="Home-title">Software Engineer</h5>
          </div>
          <div className="Home-description-container">
            <p className="Home-description">
              While my approach to programming is
              <strong> [analytical]</strong> and
              <strong> [methodical] </strong>, my passion for technology and
              discovery drives me to relentlessly pursue
              <strong> [creative] </strong> solutions to complex problems.
            </p>
          </div>
        </div>

        <div className="Home-links">
          <a
            href="https://github.com/MobolanleAdebesin"
            target="_blank"
            rel="noopener noreferrer"
            id="github"
          >
            <i className="fa fa-github-square fa-2x"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/mobolanle-adebesin/"
            target="_blank"
            rel="noopener noreferrer"
            id="linkedin"
          >
            <i className="fa fa-linkedin fa-2x"></i>
          </a>

          <a
            href="https://medium.com/@bolaadebesin"
            target="_blank"
            rel="noopener noreferrer"
            id="medium"
          >
            <i className="fa fa-medium fa-2x"></i>
          </a>
        </div>
      </main>
    );
  }
}

export default Home;
