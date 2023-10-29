import React from 'react';
import AboutCarousel from './AboutCarousel'
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
    return (
        <Container className="mt-5 about-section">
            <Row className="justify-content-center align-items-center">
                {/* Column for Text */}
                <Col md={6}>
                    <Card className="mb-4 shadow-sm about-section">
                        <Card.Body>
                            <Card.Title><h2 className="text-center about-title">About <b className ="bold-word">Us</b></h2></Card.Title>
                            <Card.Subtitle className="mb-3 text-muted text-center about-subheading"><h4>Your Trusted Toowoomba Signwriter</h4></Card.Subtitle>
                            <Card.Text className="about-text">
                                Welcome to Toowoomba's premier signwriting company, where quality meets creativity! At Toowoomba Sign Co, we take pride in transforming your ideas into eye-catching, impactful signage solutions. With a focus on quality craftsmanship and attention to detail, we are your go-to choice for all things signage in Toowoomba and the surrounding areas.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <AboutCarousel />
                </Col>

            </Row>
        </Container>
    );
}

export default About;