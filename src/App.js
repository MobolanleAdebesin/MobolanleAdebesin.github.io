import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import Projects from "./components/Projects.js";
import Resume from "./components/Resume.js";
import Contact from "./components/Contact.js";
import About from "./components/About.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: "fa fa-bars",
      navbar: "navbar"
    };
  }

  render() {
    return (
      <Router>
        <nav className="navbar">
          <Link className="App-link" to="/">
            About
          </Link>
          <Link className="App-link" to="/Projects">
            Projects
          </Link>
          <Link className="App-link" to="/Resume">
            Resume
          </Link>
          <Link className="App-link" to="/Contact">
            Contact
          </Link>
        </nav>
        <Route path="/" exact component={About}></Route>
        <Route path="/Projects" exact component={Projects}></Route>
        <Route path="/Resume" exact component={Resume}></Route>
        <Route path="/Contact" exact component={Contact}></Route>

        <footer className="App-footer">
          <a
            className="About-icon fa fa-medium"
            href="https://medium.com/@bolaadebesin"
            target="_blank"
            rel="noopener"
          ></a>
          <a
            className="About-icon fa fa-github-square"
            target="_blank"
            href="https://github.com/MobolanleAdebesin"
            rel="noopener"
          ></a>
          <a
            className="About-icon fa fa-linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/mobolanle-adebesin/"
            rel="noopener"
          ></a>
        </footer>
      </Router>
    );
  }
}

export default App;
