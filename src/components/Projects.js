import React, { Component } from "react";
import "./Projects.css";
import Trivia from "./images/Trivia.png";
import Bookpals from "./images/Books.png";
import Tinder from "./images/Tinder.png";
class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <div className="Project-container">
          <img className="Project-image" src={Bookpals} alt="" />
          <p className="Project-description">
            The purpose of this project was to build a single page application
            with full CRUD functionality using a REST API built from scratch
            within one week. Users can add, update, delete, and view their
            favorite books. Built with MongoDB, Mongoose, Express, React, Node.
            js
          </p>
          <div className="Project-link-container">
            <a
              className="Project-icon fa fa-github-square"
              href="https://github.com/MobolanleAdebesin/bookpals-front-end"
              rel="noopener"
              target="_blank"
            >
              Frontend Repo
            </a>
            <a
              className="Project-icon fa fa-github-square"
              href="https://github.com/MobolanleAdebesin/bookpals-back-end"
              rel="noopener"
              target="_blank"
            >
              Backend Repo
            </a>
            <a
              className="Project-icon fa fa-link"
              href="https://stupefied-knuth-a58fed.netlify.com/"
              rel="noopener"
              target="_blank"
            >
              Deployed Site
            </a>
          </div>
        </div>
        <div className="Project-container">
          <img className="Project-image" src={Trivia} alt="" />
          <p className="Project-description">
            The purpose of this project was to build and deploy an interactive
            online game. I used object-oriented programming and Document Object
            Model to create a minimum viable product in four days. Built using
            HTML, CSS, and JavaScript.
          </p>
          <div className="Project-icon Project-link-container">
            <a
              className="Project-icon fa fa-github-square"
              href="https://github.com/MobolanleAdebesin/trivia-game"
              rel="noopener"
              target="_blank"
            >
              Repo
            </a>
            <a
              className="Project-icon fa fa-link"
              href="https://mobolanleadebesin.github.io/trivia-game/"
              rel="noopener"
              target="_blank"
            >
              Deployed Site
            </a>
          </div>
        </div>
        <div className="Project-container">
          <img className="Project-image" src={Tinder} alt="" />
          <p className="Project-description">
            This project focuses on recreating a popular dating app website
            homepage using the fundamentals of HTML and CSS. The life cycle of
            this project began with the development of a wireframe based on the
            layout of the original site, it demonstrates my ability to design a
            mobile-first responsive webpage from start to finish.
          </p>
          <div className="Project-link-container">
            <a
              className=" Project-icon fa fa-github-square"
              href="https://github.com/MobolanleAdebesin/MobolanleAdebesin.github.io"
              rel="noopener"
              target="_blank"
            >
              Repo
            </a>
            <a
              className="Project-icon fa fa-link"
              href="https://mobolanleadebesin.github.io/"
              rel="noopener"
              target="_blank"
            >
              Deployed Site
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
