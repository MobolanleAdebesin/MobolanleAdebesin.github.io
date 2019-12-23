import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <h2> Keep in Touch</h2>
        <blockquote>
          The most important things in life are the connections you make with
          others. <cite> ~ Tom Ford</cite>
        </blockquote>

        <p className="Contact-email">bolaadebesin@gmail.com</p>
        <a
          href="mailto:bolaadebesin@gmail.com"
          title="click to email me"
          rel="noopener noreferrer"
          className="Contact-icon-link"
        >
          <span>
            <i className="fa fa-envelope"></i>
          </span>
        </a>
        <p className="Contact-phone">Phone: 240-605-8753</p>
        {/* <p className="Contact-paragraph">
          Click the icon below to send me a message. I will respond as soon as
          possible.
        </p> */}
      </div>
    );
  }
}

export default Contact;
