import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Temoor Hussain </span>
            from <span className="purple">Pakistan.</span>
            <br />
            I am a <span className="purple">Software & Business Engineer</span>{" "}
            with experience in building web and mobile applications.
            <br />
            I’ve worked at{" "}
            <span className="purple">Digital Tactics</span> and{" "}
            <span className="purple">Vigorous Technologies</span> as a Software
            Engineer.
            <br />
            I hold a Bachelor's degree in IT from{" "}
            <span className="purple">Quaid-i-Azam University</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new business & tech ideas
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing blogs & sharing knowledge
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & photography
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "i have no future here."
          </p>
          <footer className="blockquote-footer">Temoor Hussain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
