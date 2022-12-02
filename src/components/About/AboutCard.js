import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello<span className="blue">Lawrence Kocaj</span>
            from <span className="blue"></span>
            <br />Front-end Developer | React.js, HTML, CSS, Javascript and Wix Experienced | Customer Relationship Management | IT Troubleshooter
            <br />
            <br />
            Apart from coding, here are some of my other interests.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cars 🏎
            </li>
            <li className="about-activity">
              <ImPointRight /> Technology 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports ⚽️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Creating simple yet effective web applications for the future"{" "}
          </p>
          <footer className="blockquote-footer">L. Kocaj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
