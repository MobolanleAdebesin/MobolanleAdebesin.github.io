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
      icon: "fa fa-bars",
      navbar: "navbar",
      menu: "hidden"
    };
  }
  slide = () => {
    if (this.state.menu == "hidden") {
      this.setState({ menu: "App-menu" });
    } else if (this.state.menu == "App-menu") {
      this.setState({ menu: "hidden" });
    }
  };

  render() {
    return (
      <Router>
        <div className={this.state.menu}></div>
        <div className="App-container">
          <div className="App-hamburger">
            <i class="fa fa-bars" onClick={this.slide}></i>
          </div>

          <nav className="navbar navbar-expand-lg navbar-light nav-background">
            <Link to="/" className="navbar-brand text-white">
              Home
            </Link>
            <div className="nav-container">
              <ul className="navbar-nav link-container">
                <Link to="/Projects" className="nav-item nav-link text-white">
                  Projects
                </Link>
                <Link to="/Contact" className="nav-item nav-link text-white">
                  Contacts
                </Link>
                <a
                  className="nav-item nav-link text-white"
                  href={myResume}
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </ul>
              <div className="icon-container">
                <a
                  className="About-icon fa fa-medium"
                  href="https://medium.com/@bolaadebesin"
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <a
                  className="About-icon fa fa-github-square"
                  target="_blank"
                  href="https://github.com/MobolanleAdebesin"
                  rel="noopener noreferrer"
                />
                <a
                  className="About-icon fa fa-linkedin"
                  target="_blank"
                  href="https://www.linkedin.com/in/mobolanle-adebesin/"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
          </nav>
          <Route path="/" exact component={About}></Route>
          <Route path="/Projects" exact component={Projects}></Route>
          <Route path="/Contact" exact component={Contact}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
