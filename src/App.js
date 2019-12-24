import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import myResume from "./myResume.pdf";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: "App-navigation",
      style: {
        left: "-50%",
        transition: "left 1s"
      },
      isMenuOpen: false,
      active: ""
    };
  }
  toggleSlidingMenu = () => {
    this.state.style.left === "-50%"
      ? this.setState({
          style: { ...this.state.style, left: "0px" },
          isMenuOpen: true
        })
      : this.setState({
          style: { ...this.state.style, left: "-50%" },
          isMenuOpen: false
        });
  };
  closeMenu = e => {
    e.persist();
    if (
      e.target.className !== "App-slide-navigation" &&
      e.target.className !== "App-slide-menu" &&
      e.target.className !== "App-unordered-list" &&
      e.target.className !== "App-navigation-link"
    ) {
      if (this.state.isMenuOpen) {
        this.toggleSlidingMenu();
      }
    }
  };
  changeActive = e => {
    e.persist();
    console.log(e.target.text);
    this.setState({ active: e.target.text });
  };
  render() {
    return (
      <Router>
        <div className="App-container" onClick={this.closeMenu}>
          <nav className="App-navigation">
            <ul className="App-unordered-list">
              <li>
                <Link
                  to="/"
                  className="App-navigation-link"
                  onClick={this.changeActive}
                  style={
                    this.state.active === "Home"
                      ? { color: "tomato", fontFamily: "Pacifico" }
                      : { color: "black" }
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="App-navigation-link"
                  to="/Projects"
                  onClick={this.changeActive}
                  style={
                    this.state.active === "Projects"
                      ? { color: "tomato", fontFamily: "Pacifico" }
                      : { color: "black" }
                  }
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="App-navigation-link"
                  to="/Contact"
                  onClick={this.changeActive}
                  style={
                    this.state.active === "Contact"
                      ? { color: "tomato", fontFamily: "Pacifico" }
                      : { color: "black" }
                  }
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  className="App-navigation-link"
                  href={myResume}
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="App-bars-container">
            <i
              className="fa fa-bars App-bars"
              onClick={this.toggleSlidingMenu}
            ></i>
          </div>
          <div className="App-slide-menu" style={this.state.style}>
            <nav className="App-slide-navigation">
              <Link
                to="/"
                className="App-navigation-link"
                onClick={this.changeActive}
                style={
                  this.state.active === "Home"
                    ? { color: "tomato", fontFamily: "Pacifico" }
                    : { color: "black" }
                }
              >
                Home
              </Link>
              <div>
                <ul className="App-unordered-list">
                  <li>
                    <Link
                      className="App-navigation-link"
                      to="/Projects"
                      onClick={this.changeActive}
                      style={
                        this.state.active === "Projects"
                          ? { color: "tomato", fontFamily: "Pacifico" }
                          : { color: "black" }
                      }
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="App-navigation-link"
                      to="/Contact"
                      onClick={this.changeActive}
                      style={
                        this.state.active === "Contact"
                          ? { color: "tomato", fontFamily: "Pacifico" }
                          : { color: "black" }
                      }
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <a
                      href={myResume}
                      target="__blank"
                      rel="noopener noreferrer"
                      className="App-navigation-link"
                    >
                      Resume
                    </a>
                  </li>
                  <div className="App-icon-container">
                    <li>
                      <a
                        href="https://github.com/MobolanleAdebesin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fa fa-github-square fa-2x"
                        id="github"
                      >
                        <span className="App-transparent-text">Github</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/mobolanle-adebesin/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fa fa-linkedin fa-2x"
                        id="linkedin"
                      >
                        <span className="App-transparent-text">LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://medium.com/@bolaadebesin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fa fa-medium fa-2x"
                        id="medium"
                      >
                        <span className="App-transparent-text">Medium</span>
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </nav>
          </div>
          <Route path="/" exact component={About}></Route>
          <Route path="/Projects" exact component={Projects}></Route>
          <Route path="/Contact" exact component={Contact}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
