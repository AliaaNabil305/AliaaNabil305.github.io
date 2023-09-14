import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/imegezz.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and Computer Engineering
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple">C , C++ , Java , Python ,HTML , CSS , HTML5 , CSS3 , Bootstrap , Javascript , Ecmascript , React , Nodejs , Dart , Flutter , Verilog , VHDL and SQL  </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to learning new {" "}
                <b className="purple">
                Languages and Coding
                </b>
              </i>
              <br />
              <br />
             
            </p>
          </Col>
          <Col md={4} className="myAvatar">
  <Tilt>
    <img src={myImg} className="img-fluid rounded-circle" alt="avatar" />
  </Tilt>
</Col>

          
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AliaaNabil305"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aliaa-nabil-ba75b8237/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/aliaa___nabil/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
          <a
            href="https://www.facebook.com/lola.nabil.90/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <FaFacebook />
          </a>
        </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
