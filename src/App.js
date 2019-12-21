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
      nav: "App-navigation"
    };
  }

  hideNavbar = () => {
    this.state.nav === "App-navigation"
      ? this.setState({ nav: "hidden" })
      : this.setState({ nav: "App-navigation" });
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
              <ul>
                <li className="App-navigation-link">
                  <Link to="/Projects">Projects</Link>
                </li>
                <li className="App-navigation-link">
                  <Link to="/Contact">Contact</Link>
                </li>
                <li className="App-navigation-link">
                  <a href={myResume} target="__blank" rel="noopener noreferrer">
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="App-bars-container">
            <i className="fa fa-bars App-bars" onClick={this.hideNavbar}></i>
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
