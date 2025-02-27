import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ramchandra Gautam </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently working as a software developer at a highly reputed IT company..
            <br />
            I hold an MCA degree from the University of Mumbai.
            <br />            
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Internet Surfing(Deep Web & DarkWeb)
            </li>
            <li className="about-activity">
              <ImPointRight /> Driving
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ramchandra</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
