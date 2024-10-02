import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AboutUs.css"

const Project = () => {
  return (
    <div
      className="project-container"
      style={{ backgroundColor: "#0d0d0d", padding: "40px 0" }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="aboutus_heading">About Us</h1>
            <p className="aboutus_paragraph">
              We are dedicated to turning your ideas into reality with
              innovative technology solutions. Since 2017, our expert team has
              delivered outstanding mobile and web application development
              services tailored to meet the unique needs of clients worldwide.
            </p>
            <p className="aboutus_paragraph">
              Our commitment to quality and customer satisfaction drives us to
              collaborate closely with you, ensuring we understand your vision
              and deliver results that exceed expectations. We also contribute
              to the open-source community, fostering innovation and staying at
              the forefront of technology trends.
            </p>
            <p className="aboutus_paragraph">
              Whether you're seeking IoT integration, machine learning, or
              artificial intelligence solutions, our specialized teams are ready
              to bring your concepts to life using diverse tech stacks. With a
              track record of happy customers and successful projects across
              various industries, we are here to push the boundaries of
              technology and help you achieve your goals.
            </p>
            <p className="about_highlight">
              “Join us in shaping a transformative future together!”
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Project;
