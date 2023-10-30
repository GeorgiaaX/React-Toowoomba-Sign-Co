import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';



function ProductsServices() {
    return (
        <Container className="products-services-section">
            <h2>Our Products and <b className = "bold-word">Services</b></h2>
            <Container className="product-container">
                <Row className="mt-4">
                    {renderProductColumn({
                        iconClass: "fas fa-building",
                        title: "Building and Shopface",
                        description: "Fascia Signs / 3D Lettering / Lightboxes / Pylons",
                        bordered: true,
                    })}
                    {renderProductColumn({
                        iconClass: "fas fa-lightbulb",
                        title: "3D Illuminated Letters and Displays",
                        description: "Fabricated Letters / Lightboxes / 3D Signage",
                        bordered: true,
                    })}
                    {renderProductColumn({
                        iconClass: "fas fa-store",
                        title: "Reception and Interior",
                        description: "Wall graphics / 3D lettering & Signs / Illuminated Signs & Lettering",
                        bordered: false,
                    })}
                    {renderProductColumn({
                        iconClass: "fas fa-sign-hanging",
                        title: "Structural Signage",
                        description: "New Structures & Framework / Signs for Existing Structures / Freestanding Signage  / Architectural Signage",
                        bordered: true,
                    })}
                    {renderProductColumn({
                        iconClass: "fas fa-diamond-turn-right",
                        title: "Directional and Wayfinding",
                        description: "Directional Pylons / Wayfinding Signage",
                        bordered: true,
                    })}
                    {renderProductColumn({
                        iconClass: "fas fa-tv",
                        title: "Window Graphics and Display",
                        description: "Window Frosting / One Way Vision / Privacy Film / Printed Vinyl Graphics / Cut Vinyl Lettering",
                        bordered: false,
                    })}
                    {renderProductColumn({
                        iconClass: "fas fa-car-side",
                        title: "Vehicle Fleet Branding",
                        description: "Vehicle Wraps / Magnetic Vehicle Signs / Vehicle Branding",
                        bordered: true,
                    })}
                    {renderProductColumn({
                        iconClass: "fas fa-bag-shopping",
                        title: "Retail POS",
                        description: "A Frames / Pull Up Banners / Stickers / Shop Hoardings / Banners / Flags / Counter Signs",
                        bordered: true,
                    })}
                    {renderProductColumn({
                        iconClass: "fas fa-truck",
                        title: "Truck Lining and Scrolling",
                        description: "Truck & Trailer Lining & Scrolling / Printed Vinyl Graphics / Cut Vinyl Lettering",
                        bordered: false,
                    })}
                </Row>
            </Container>
        </Container>
    );
}

function renderProductColumn({ iconClass, title, description, bordered = false }) {
    return (
        <Col xl={4} lg={6} md={6} sm={12}>
            <div className="service-tile" style={{ 
                borderRight: bordered ? '2px solid #0C8CE9' : 'none',
                paddingRight: "30px"
             }}>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <i className={`product-icons ${iconClass} fa-3x`}></i>
                            <br />
                            <h6>{title}</h6>
                        </div>
                        <div className="flip-card-back">
                            <i className={`${iconClass} fa-3x flip-back-icons`}></i>
                            <p>{description}</p>
                            <br />
                            <Button variant="outline-light">Learn More</Button>
                        </div>
                    </div>
                </div>
            </div>            
        </Col>
    );
}

export default ProductsServices;
