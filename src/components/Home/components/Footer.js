import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import { SiGmail } from "react-icons/si";
import { AiOutlineInstagram } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <Container fluid className="footer-wrapper" id="contact">
      <Row>
        <Col xs={12} className="text-center p-2">
          <h2>Vaishakh K</h2>
        </Col>
        <Col xs={12} className="text-center">
          <q>
            Any fool can write code that a computer can understand. Good
            programmers write code that humans can understand.
          </q>
          – Martin Fowler
        </Col>
        <Col xs={12} className="social-media-wrapper mt-4">
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
        <Col xs={12} className="text-center mt-3">
          <SiGmail />
          <p>
            <strong>  vaishakh3627@gmail.com</strong>
          </p>
        </Col>
        <Col xs={12} className="text-center mt-1">
          <FiPhoneCall />
          <p>
            <strong>  +971-509741465</strong>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
