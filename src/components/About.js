import React, { Component } from "react";
import "./About.css";
import profile from "../profile.png";
class About extends Component {
  render() {
    return (
      <main className="About-main-container">
        <div className="About-name-container">
          <h2 className="About-name">Bola Adebesin</h2>
        </div>
        <img className="About-profile" src={profile} alt="profile" />

        <h5 className="About-title">Software Engineer</h5>
        <p className="About-description">
          While my approach to programming is
          <strong> [analytical]</strong> and
          <strong> [methodical] </strong>, my passion for technology and
          discovery drives me to relentlessly pursue
          <strong> [creative] </strong> solutions to complex problems.
        </p>
      </main>
    );
  }
}

export default About;
