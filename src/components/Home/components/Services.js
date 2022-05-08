import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import WebDesign from "../../../assets/images/web.png";
import MobieDesign from "../../../assets/images/smartphone.png";
import WebApp from "../../../assets/images/ux.png";

const Services = () => {
  return (
    <Container className="services-wrapper" id="service">
      <Row>
        <Col xs={12} className="text-center">
          <h2>SERVICES</h2>
        </Col>
        <Col xs={12}>
          <Row>
            <Col lg={4} md={4} sm={12} className="services-content">
              <div className="services text-center">
                <div className="image-wrapper">
                  <img
                    src={WebDesign}
                    alt="design"
                    className="services-image"
                  />
                </div>
                <h4>Web Design</h4>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} className="services-content">
              <div className="services text-center">
                <div className="image-wrapper">
                  <img src={WebApp} alt="design" className="services-image" />
                </div>
                <h4>Web Development</h4>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} className="services-content">
              <div className="services text-center">
                <div className="image-wrapper">
                  <img
                    src={MobieDesign}
                    alt="design"
                    className="services-image"
                  />
                </div>
                <h4>App Development</h4>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Services;
