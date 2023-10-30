import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ModalButton from './ModalButton';

    const images = [
        "./images/hero-parklake.jpg",
        "./images/hero-hot-property.jpg",
        "./images/hero-ez-kandy.jpg",
        "./images/hero-bradnams.jpg",
        "./images/hero-byd.jpg"
    ];

export default function Hero(props) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);


    useEffect(() => {
        // Preload images
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });

        // Change active image every 5 seconds
        const interval = setInterval(() => {
            setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const { title, subheading, lastWord } = props.heading;


    return (
        <Container fluid className="hero-section p-5 text-center rounded-3 d-flex flex-column align-items-center">
            {images.map((img, index) => (
                <div 
                    key={img} 
                    className={`background-image ${activeImageIndex === index ? 'active' : ''}`}
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
                            radial-gradient(ellipse at left top, rgba(12, 19, 31, 0.6) 0%, transparent 50%),
                            radial-gradient(ellipse at right bottom, rgba(12, 140, 233, 1) 0%, transparent 50%),
                            url(${img})
                        `
                    }}>
                    </div>
            ))}

           
<div className="hero-card d-flex flex-column justify-content-center align-items-center">
    <div className="header-logo d-flex justify-content-center align-items-center">
        <img src="./images/logo.png" className="brand-image" alt="logo"/>
    </div>
    <div className="hero-headings">
        <Row className="justify-content-start">
            <Col xs={12} className="text-white text-center"> {/* Added 'text-center' for horizontal centering of text */}
                <h1 className="mb-3 hero-title">
                    {title} <b className="hero-text">{lastWord}</b>
                </h1>
                <h4 className="mb-3 hero-subheading">{subheading}</h4>
                {props.isHomePage && 
                    <ModalButton />
                }
                <div style={{ textAlign: 'center' }}> {/* Changed 'left' to 'center' for child content */}
                    {props.children}
                </div>
            </Col>
        </Row>
    </div>
</div>
        </Container>
    );
}


