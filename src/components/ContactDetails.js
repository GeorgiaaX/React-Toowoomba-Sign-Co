import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function ContactDetails() {
    return (
        <Row className="contact-info mb-4 justify-content-center align-items-center">
            <Col md = "auto" className="contactUs-section text-center">
                <p>
                    <i className="fas fa-envelope mr-3 fa-2x product-icons"></i>
                    <a href="mailto:jake@toowoombasignco.com.au" className="text-white  text-center">Email</a>
                </p>
            </Col>
            <Col md = "auto" className="contactUs-section">
                <p>
                    <i className="fas fa-phone mr-3 fa-2x product-icons"></i>
                    <a href="tel:0413733947" className="text-white text-center">0413733947</a>
                </p>
            </Col>
        </Row>
    );
}