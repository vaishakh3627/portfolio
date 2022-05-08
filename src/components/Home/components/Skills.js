import React from "react";

import { Col, Container, ProgressBar, Row } from "react-bootstrap";

const Skills = () => {
  return (
    <Container className="skills-wrapper">
      <Row>
        <Col xs={12} className="text-center">
          <h2>SKILLS</h2>
        </Col>
        <Col xs={12}>
          <Row>
            <Col lg={6} md={6} sm={12} className="progressbar-wrapper">
              <h6>HTML</h6>
              <ProgressBar
                animated
                variant="success"
                now={100}
                label={`${100}%`}
                className="progressbar"
              />
            </Col>
            <Col lg={6} md={6} sm={12} className="progressbar-wrapper">
              <h6>CSS</h6>
              <ProgressBar
                animated
                variant="success"
                now={90}
                label={`${90}%`}
                className="progressbar"
              />
            </Col>
            <Col lg={6} md={6} sm={12} className="progressbar-wrapper">
              <h6>Javascript</h6>
              <ProgressBar
                animated
                variant="success"
                now={80}
                label={`${80}%`}
                className="progressbar"
              />
            </Col>
            <Col lg={6} md={6} sm={12} className="progressbar-wrapper">
              <h6>Bootstrap</h6>
              <ProgressBar
                animated
                variant="success"
                now={80}
                label={`${80}%`}
                className="progressbar"
              />
            </Col>
            <Col lg={6} md={6} sm={12} className="progressbar-wrapper">
              <h6>ReactJS</h6>
              <ProgressBar
                animated
                variant="success"
                now={90}
                label={`${90}%`}
                className="progressbar"
              />
            </Col>
            <Col lg={6} md={6} sm={12} className="progressbar-wrapper">
              <h6>GitHub</h6>
              <ProgressBar
                animated
                variant="success"
                now={90}
                label={`${90}%`}
                className="progressbar"
              />
            </Col>
            <Col lg={6} md={6} sm={12} className="progressbar-wrapper">
              <h6>NodeJS</h6>
              <ProgressBar
                animated
                variant="warning"
                now={40}
                label={`${40}%`}
                className="progressbar"
              />
            </Col>
            <Col lg={6} md={6} sm={12} className="progressbar-wrapper">
              <h6>Python - Django</h6>
              <ProgressBar
                animated
                variant="warning"
                now={40}
                label={`${40}%`}
                className="progressbar"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Skills;
