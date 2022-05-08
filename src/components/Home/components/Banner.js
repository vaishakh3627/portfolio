import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import { SiGmail } from "react-icons/si";
import { AiOutlineInstagram } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="banner" id="banner">
      <Container className="content-wrapper">
        <Row>
          <Col xs={12}>
            <h1>Vaishakh K</h1>
          </Col>
          <Col xs={12} className="text">
            <h3>
              I'm <p>React Developer</p>
            </h3>
          </Col>
          <Col xs={12} className="social-media-wrapper">
            <a className="social-media" href="https://wa.me/7560858047">
              <FaWhatsapp className="icons" />
            </a>
            <div className="social-media">
              <AiOutlineInstagram className="icons" />
            </div>
            <a className="social-media" href="https://github.com/vaishakh3627">
              <AiFillGithub className="icons" />
            </a>
            <a
              className="social-media"
              href="https://www.linkedin.com/in/vaishakhk3627/"
            >
              <GrLinkedinOption className="icons" />
            </a>
            <div className="social-media">
              <SiGmail className="icons" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Banner;
