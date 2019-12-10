import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="container">
        {/* <h2 className="Contact-name">Contact Details</h2> */}

        <h6>
          The most important things in life are the connections you make with
          others ~ Tom Ford.
        </h6>
        <p>Email: bolaadebesin@gmail.com</p>
        <p>Phone: 240-605-8753</p>
        <p>
          Click the icon below to send me a message. I will respond as soon as
          possible.
        </p>
        <a
          href="mailto:bolaadebesin@gmail.com"
          title="click to email me"
          rel="noopener"
        >
          <div className="section-icon">
            <span>
              <i className="fa fa-envelope"></i>
            </span>
          </div>
        </a>
      </div>
    );
  }
}

export default Contact;
