import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ModalButton from './ModalButton';

export default function Hero(props) {
    const { title, subheading, lastWord } = props.heading;

    return (
        <Container fluid className="hero-section p-5 text-center bg-image rounded-3 d-flex flex-column justify-content-center align-items-center">
            <div style={{ flex: 1 }}></div>

            <div className="hero-headings">
                <Row className="justify-content-start">
                    <Col xs={12} className="text-white">
                        <h1 className="mb-3 hero-title">
                            {title} <b className="hero-text">{lastWord}</b>
                        </h1>
                        <h4 className="mb-3 hero-subheading">{subheading}</h4>
                        {props.isHomePage && 
                            <ModalButton />
                        }
                        <div style={{ textAlign: 'left' }}>
                            {props.children}
                        </div>
                    </Col>
                </Row>
            </div>


        <div className="preload-container">
            <div className="preload" style={{ backgroundImage: `url("./images/hero-parklake.jpg")` }}></div>
            <div className="preload" style={{ backgroundImage: `url("./images/hero-hot-property.jpg")` }}></div>
            <div className="preload" style={{ backgroundImage: `url("./images/hero-ez-kandy.jpg")` }}></div>
            <div className="preload" style={{ backgroundImage: `url("./images/hero-bradnams.jpg")` }}></div>
            <div className="preload" style={{ backgroundImage: `url("./images/hero-byd.jpg")` }}></div>
        </div>

        </Container>
    );
}





