import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ModalButton from './ModalButton';
import ScrollDownButton from './ScrollDownButton';

export default function Hero(props) {
    const { title, subheading, lastWord } = props.heading;

    return (
        <Container fluid className="header-section p-5 text-center bg-image rounded-3 d-flex justify-content-center align-items-center">
            <Row className="justify-content-start">
                <Col xs={12} className="text-white">
                    <h1 className="mb-3 hero-title">
                        {title} <b className="bold-text">{lastWord}</b>
                    </h1>
                    <h4 className="mb-3 hero-subheading">{subheading}</h4>
                    {props.isHomePage && 
                        <ModalButton />
                    }

                    {props.isContactPage &&
                        <ScrollDownButton targetRef={props.contactFormRef} /> 
                    }

                    <div style={{ textAlign: 'left' }}>
                        {props.children}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}