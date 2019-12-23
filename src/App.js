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
    this.myMenu = React.createRef();
    this.state = {
      nav: "App-navigation",
      style: {
        left: "-50%",
        transition: "left 1s"
      },
      isMenuOpen: false
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
    let menu = document.getElementById("menu");
    let slidingNav = document.getElementById("slidingNav");
    let slidingList = document.getElementById("slidingList");
    console.log(e.target.className);
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

  render() {
    return (
      <Router>
        <div className="App-container" onClick={this.closeMenu}>
          <nav className="hidden">
            <Link to="/" className="App-navigation-link">
              Home
            </Link>
            <div>
              <ul className="App-unordered-list">
                <li>
                  <Link className="App-navigation-link" to="/Projects">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link className="App-navigation-link" to="/Contact">
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
            </div>
          </nav>
          <div className="App-bars-container">
            <i
              className="fa fa-bars App-bars"
              onClick={this.toggleSlidingMenu}
            ></i>
          </div>
          <div
            className="App-slide-menu"
            id="menu"
            ref={this.myMenu}
            onClick={this.getWidth}
            style={this.state.style}
          >
            <nav className="App-slide-navigation" id="slidingNav">
              <Link to="/" className="App-navigation-link">
                Home
              </Link>
              <div>
                <ul className="App-unordered-list" id="slidingList">
                  <li>
                    <Link className="App-navigation-link" to="/Projects">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link className="App-navigation-link" to="/Contact">
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
