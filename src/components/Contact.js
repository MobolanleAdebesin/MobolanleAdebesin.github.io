import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <h2 className="Contact-header"> Keep in Touch</h2>
        <blockquote className="Contact-quote">
          The most important things in life are the connections you make with
          others. <cite> ~ Tom Ford</cite>
        </blockquote>
        <h4 className="Contact-call-to-action">
          Please feel free to contact me to discuss my projects or
          opportunities!
        </h4>
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
        <p className="Contact-phone">Phone: (240)-605-8753</p>
      </div>
    );
  }
}

export default Contact;
