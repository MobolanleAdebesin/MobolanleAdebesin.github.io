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
        left: "-160px",
        transition: "left 1s"
      }
    };
  }

  hideNavbar = () => {
    this.state.nav === "App-navigation"
      ? this.setState({ nav: "hidden" })
      : this.setState({ nav: "App-navigation" });
    this.hideSlidingMenu();
  };
  hideSlidingMenu = () => {
    this.state.style.left === "-160px"
      ? this.setState({ style: { ...this.state.style, left: "0px" } })
      : this.setState({ style: { ...this.state.style, left: "-160px" } });
  };

  render() {
    return (
      <Router>
        <div className="App-container">
          <nav className="hidden">
            <Link to="/" className="App-home-link">
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
            <i className="fa fa-bars App-bars" onClick={this.hideNavbar}></i>
          </div>
          <div
            className="App-slide-menu"
            id="menu"
            ref={this.myMenu}
            onClick={this.getWidth}
            style={this.state.style}
          >
            <nav className="App-slide-navigation">
              <Link to="/" className="App-home-link">
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
