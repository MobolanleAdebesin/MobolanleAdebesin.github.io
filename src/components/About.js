import React, { Component } from "react";
import "./About.css";
class About extends Component {
  render() {
    return (
      <div className="About">
        <h2 className="About-about-me">About Me</h2>
        <p className="About-paragraph">
          I graduated from the University of Maryland Baltimore County with a
          B.S. in Biological Sciences in 2016. After spending the last two years
          as an MD/Ph.D. student at Vanderbilt University School of Medicine, I
          made the decision to take some time off to pursue my other passions.
        </p>
        <hr />
        <p className="About-paragraph">
          Although my path to programming is probably atypical, the things that
          I love about coding, the level of creativity and critical thinking
          that it requires, are the same things that drew me to medicine. The
          time I have spent as a medical student has taught me how to work hard
          in a fast-paced, and dynamic environment, how to collaborate with all
          kinds of people and teams, and the value of consistent, efficient, and
          open communication.
        </p>
        <hr />
        <p className="About-paragraph">
          When I'm not coding, I like reading science fiction novels and mixing
          up different DIY skin and hair care products! (My favorite concoction
          thus far is a flaxseed and Rosemary hair gel).
        </p>
      </div>
    );
  }
}
export default About;
