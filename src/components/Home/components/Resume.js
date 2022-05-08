import React from "react";

import { Col, Container, Row } from "react-bootstrap";

const Resume = () => {
  return (
    <Container className="mt-5 resume-wrapper" id="resume">
      <Row className="resume-contents">
        <Col xs={12} className="text-center mb-5">
          <h2>RESUME</h2>
        </Col>
        <Col lg={6} md={6} sm={12} className="resume-divider mb-4">
          <Row>
            <Col xs={12} className="mb-4">
              <h3>Education</h3>
            </Col>
            <Col xs={12} className="mb-5">
              <h4>Bachelor of Technology</h4>
              <div className="year text-center">2015-2019</div>
              <div>
                <strong>IES College of Engineering</strong> - Thrissur, Kerala
              </div>
              <div>
                <strong>Computer Science & Engineering</strong> under APJ Abdul
                Kalam Technological University Kerala
              </div>
              <div>
                <strong>6.49</strong> - CGPA
              </div>
            </Col>
            <Col xs={12} className="mb-5">
              <h4>Higher Secondary</h4>
              <div className="year text-center">2013-2015</div>
              <div>
                <strong>CHSS Chattanchal</strong> - Kasaragod, Kerala
              </div>
              <div>
                <strong>Computer Science </strong> under Kerala state syllabus
              </div>
              <div>
                <strong>84.5%</strong> - Marks
              </div>
            </Col>
            <Col xs={12} className="mb-4">
              <h4>SSLC</h4>
              <div className="year text-center">2013</div>
              <div>
                <strong>UNHS Pullur</strong> - Kasaragod, Kerala
              </div>
              <div>under Kerala state syllabus</div>
              <div>
                <strong>100%</strong> - Marks
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={6} md={6} sm={12} className="resume-divider">
          <Row>
            <Col xs={12} className="mb-3">
              <h3>Experience</h3>
            </Col>
            <Col xs={12} className="mb-3">
              <h4>Freelancer</h4>
              <div className="year text-center">2021</div>
              <div>
                <strong>Roles</strong>
              </div>
              <div>
                <ul>
                  <li>Building high performing web apps.</li>
                  <li>
                    Managing workflow in a version control system like GIT.
                  </li>
                  <li>Integrating features to existing web apps.</li>
                  <li> Implementing mobile friendly web apps on web view</li>
                  <li>Handling backend logic with GQL and other REST API‘s.</li>
                  <li>
                    Experienced in building web apps with different UI libraries
                    and other javascript libraries like Redux, Axios and React
                    Query etc
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} className="mb-1">
              <h4>Junior Python Developer</h4>
              <div className="year text-center">2020-2021</div>
              <div>
                <p className="mb-0 mt-1"> - Wahy Lab Solutions</p>
                IT company that delivers services such as Web Development,
                Mobile Application Development, SEO like software solutions.
              </div>
              <div>
                <strong>Roles</strong>
              </div>
              <div>
                <ul>
                  <li>
                    Build responsive UIs for web applications using HTML, CSS
                    and Bootstrap.
                  </li>
                  <li>
                    Integrate UI components with MVT web frameworks – Python
                    Django.
                  </li>
                  <li>
                    Implement new features, make UI changes on existing web apps
                    in Django.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Resume;
