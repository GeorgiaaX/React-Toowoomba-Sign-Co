import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faQuoteLeft, 
  faEnvelope, 
  faPhone 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';

function CustomFooter() {
  return (
    <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#0c131f' }}>
      <section className="d-flex justify-content-center p-4" style={{ backgroundColor: '#0C8CE9' }}>
        <div className="me-5 social-media-text align-items-center">
          <span ClassName = "text-center">Find us on social media</span>
        </div>
        <div>
          <Nav className="align-items-center brand-icons">
            <Nav.Link href="#" className="text-white me-4">
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </Nav.Link>
            <Nav.Link href="#" className="text-white me-4">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </Nav.Link>
            <Nav.Link href="#" className="text-white me-4">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </Nav.Link>
            <Nav.Link href="#" className="text-white me-4">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </Nav.Link>
          </Nav>
        </div>
      </section>

      <Container className="text-center text-md-start mt-5">
        <Row className="mt-3">
          <Col md={3} lg={4} xl={3} className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Toowoomba Signs Co</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#0C8CE9', height: '2px' }} />
            <p>
              Proudly servicing the darling downs region for all their signage needs!
            </p>
          </Col>

          <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Quick Links</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#0C8CE9', height: '2px' }} />
            <Nav className="flex-column">
              {["Building and Shopface", "3D illuminated letters and displays", "Reception and interior", "Direction and Wayfinding"].map(link => (
                <Nav.Link key={link} href="#" className="text-white footer-link">{link}</Nav.Link>
              ))}
            </Nav>
          </Col>

          <Col md={3} lg={2} xl={2} className="mx-auto mb-4">
            <Nav className="flex-column">
              {["Window graphics and display", "Vehicle graphics and display", "Vehicle fleet branding", "Retail POS", "Truck Lining and Scrolling"].map(link => (
                <Nav.Link key={link} href="#" className="text-white footer-link">{link}</Nav.Link>
              ))}
            </Nav>
          </Col>

          <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#0C8CE9', height: '2px' }} />
            <Nav className="flex-column">
                <Nav.Link href="/contact" className="text-white footer-link">
                    <FontAwesomeIcon icon={faQuoteLeft} className="mr-3" />
                    Get a Quote
                </Nav.Link>
                <Nav.Link href="mailto:toowoomba.signs.co.com" className="text-white footer-link">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                    Email
                </Nav.Link>
                <Nav.Link href="tel:1300300300" className="text-white footer-link">
                    <FontAwesomeIcon icon={faPhone} className="mr-3" />
                    1300 300 300
                </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default CustomFooter;