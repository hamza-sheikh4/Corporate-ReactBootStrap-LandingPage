import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form className="contact-form">
          <Row>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                placeholder="Enter you message"
                required
              />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className="google-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d55392.6809890596!2d74.36813352677423!3d31.432925206328246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2s!4v1718022198593!5m2!1sen!2s"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Container fluid>
        <div className="contact-info">
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              hello@domain.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              000-000-0000
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Lahore, Pakistan
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
