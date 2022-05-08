import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import { GrFormNext } from "react-icons/gr";

import Mine from "../../../assets/images/mine.jpg";

const About = () => {
  return (
    <Container className="about-wrapper" id="about">
      <Row>
        <Col xs={12} className="text-center">
          <h2>ABOUT</h2>
        </Col>
        <Col xs={12} className="text-center">
          <q>
            Throughout my 4 years plus career as a software developer, I have
            focused on developing scalable and well documneted code. I enjoy
            working collaboratively but also can run with projects
            independently.
          </q>
        </Col>
        <Col xs={12} className="about-details">
          <Row>
            <Col lg={4} md={4} sm={12}>
              <img src={Mine} alt="photo" className="image" />
            </Col>
            <Col lg={8} md={8} sm={12} className="mt-4">
              <Row>
                <Col xs={12}>
                  <h3>Front-End Developer</h3>
                </Col>
                <Col xs={12} className="mt-3">
                  <p>
                    Inovative Front End Developer with experienced in building
                    and maintaining responsive website.
                  </p>
                </Col>
                <Col lg={6} md={6} sm={12} className="mt-2">
                  <GrFormNext />
                  <h6 className="content">Birthday : 06/02/1998</h6>
                </Col>
                <Col lg={6} md={6} sm={12} className="mt-2">
                  <GrFormNext />
                  <h6 className="content">Age : 24</h6>
                </Col>
                <Col lg={6} md={6} sm={12} className="mt-2">
                  <GrFormNext />
                  <h6 className="content">Degree : Bachelor's</h6>
                </Col>
                <Col lg={6} md={6} sm={12} className="mt-2">
                  <GrFormNext />
                  <h6 className="content">Stream : Computer Science</h6>
                </Col>
                <Col lg={6} md={6} sm={12} className="mt-2">
                  <GrFormNext />
                  <h6 className="content">Phone : +971509741465</h6>
                </Col>
                <Col lg={6} md={6} sm={12} className="mt-2">
                  <GrFormNext />
                  <h6 className="content">Email : vaishakh3627@gmail.com</h6>
                </Col>
                <Col lg={6} md={6} sm={12} className="mt-2">
                  <GrFormNext />
                  <h6 className="content">
                    Linkedin : linkedin.com/in/vaishakhk3627
                  </h6>
                </Col>
                <Col lg={6} md={6} sm={12} className="mt-2">
                  <GrFormNext />
                  <h6 className="content">GitHub : github.com/vaishakh3627</h6>
                </Col>
                <Col lg={12} md={12} sm={12} className="mt-4">
                  <p>
                    Implementing responsive, high performing web apps using
                    ReactJs. Experienced in buliding web apps with different UI
                    libraries. Proficient in HTML, CSS, Javascript; plus modern
                    libraries and frameworks. Passionate about usability and
                    possess working knowledge NodeJS.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default About;
