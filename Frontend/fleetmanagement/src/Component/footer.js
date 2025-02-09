import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#343a40",
        color: "white",
        padding: "1rem 0",
        position: "relative",
        width: "100%",
        marginTop: "auto",
      }}
    >
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; {new Date().getFullYear()} Hire&GO.</p>
            <p>All rights reserved.</p>
            <p>
              Contact us at:{" "}
              <a
                href="mailto:hireandgo@gmail.com"
                style={{ color: "white", textDecoration: "none" }}
              >
                contact@hireandgo.com
              </a>
            </p>
          </Col>
          <Col md={6}>
            <h5>Quick Links</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <Link
                  to="/aboutus"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <a
                href="https://facebook.com"
                style={{ color: "white", marginRight: "1rem" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                style={{ color: "white", marginRight: "1rem" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
