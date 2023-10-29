import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function ContactDetails() {
    return (
        <Row className="contact-info mb-4 justify-content-center align-items-center">
            <Col md = "auto" className="contactUs-section text-center">
                <p>
                    <i className="fas fa-envelope mr-3 fa-lg"></i>
                    <a href="mailto:toowoomba.signs.co.com" className="text-white">Email</a>
                </p>
            </Col>
            <Col md = "auto" className="contactUs-section text-center">
                <p>
                    <i className="fas fa-phone mr-3 fa-lg"></i>
                    <a href="tel:1300300300" className="text-white">1300 300 300</a>
                </p>
            </Col>
        </Row>
    );
}