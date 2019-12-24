import React, { Component } from "react";
import "./Projects.css";
import projects from "../data/projects.js";

class Projects extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Projects">
        <h1>Projects </h1>
        {projects.map(project => (
          <div key={project.name} className="Projects-card">
            <img
              className="Project-image"
              src={project.image}
              alt="project-image"
            />
            <div className="Project-overlay"></div>
            <div className="Project-info-container">
              <h3 className="Project-name">{project.name}</h3>

              {project.link.Repo ? (
                <a
                  href={project.link.Repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Project-link"
                >
                  <i className="fa fa-github-square fa-2x Project-fa"></i>
                </a>
              ) : null}

              {project.link.Deployed ? (
                <a
                  href={project.link.Deployed}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Project-link"
                >
                  <i className="fa fa-link fa-2x Project-fa"></i>
                </a>
              ) : null}
              <p className="Project-info">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Projects;
