import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aliaa Nabil </span>
            from <span className="purple"> Egypt.</span>
            <br /> I am a final year student (Senior 2) in the Computer and Systems Engineering Department at Ain-Shams University, Faculty of Engineering . 
            <br />
            My academic journey has been a dynamic exploration of technology, from diving deep into algorithms and data structures to mastering the art of software engineering and web development .
            <br />
            <br />
            {/* Apart from coding, some other activities that I love to do! */}
          </p>
          

          
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
