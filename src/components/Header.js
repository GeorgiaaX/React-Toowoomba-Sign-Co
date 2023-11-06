import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ModalButton from './ModalButton';
import ScrollDownButton from './ScrollDownButton';

export default function Header({heading, isGenericPage, isContactPage, contactFormRef, children }) {
    const { title, subheading, lastWord } = heading;

   const headerStyle = {
    backgroundImage: `
    linear-gradient(rgba(12, 19, 31, 0.5), rgba(12, 19, 31, 0.6)),
            radial-gradient(ellipse at left top, rgba(12, 19, 31, 0.6) 0%, transparent 50%),
            radial-gradient(ellipse at right bottom, rgba(12, 140, 233, 1) 0%, transparent 50%)
`,
    backgroundSize: 'cover, 100% 100%, 100% 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
};

    return (
        <Container 
            fluid 
            className="header-section p-5 text-center bg-image rounded-3 d-flex justify-content-center align-items-center"
            style={headerStyle}
        >

        <div className="header-card">
            <div className="header-logo d-flex justify-content-center align-items-center">
                <img src="./images/logo.png" className="header-brand-image" alt="logo"/>
                <h1 className="brand-name">Toowoomba <b className="bold-word">Sign</b> Co</h1>
            </div>

            <div className="hero-headings">
                <Row className="justify-content-start">
                    <Col xs={12} className="text-white">
                        <h2 className="mb-3 hero-title">
                            {title} <b className="bold-word">{lastWord}</b>
                        </h2>
                        <h4 className="mb-3 hero-subheading">{subheading}</h4>
                        {isGenericPage && <ModalButton />}
                        {isContactPage && <ScrollDownButton targetRef={contactFormRef} />} 
                        <div style={{ textAlign: 'left' }}>
                            {children}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
        </Container>
    );
}