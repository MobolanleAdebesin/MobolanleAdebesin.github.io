import React, { Component } from "react";
import "./Resume.css";
import myResume from "./images/Resume.png";
class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        {/* <h2 className="Resume-name">Resume</h2> */}
        <img className="Resume-image" src={myResume} alt="" />
      </div>
    );
  }
}
export default Resume;
