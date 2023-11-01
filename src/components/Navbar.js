import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import ModalButton from './ModalButton';

export default function CustomNavbar() {
    return (
        <Navbar expand="lg" variant="dark" bg="dark" fixed="top" className="custom-navbar">
            <Container>
                <Link to="/" className="navbar-brand mr-4">Toowoomba <b className="bold-word">Sign</b> Co</Link>
                <Navbar.Toggle aria-controls="navbarText" />
                <Navbar.Collapse id="navbarText">
                    <Nav className="mr-auto">
                        <Link className="nav-link mr-4" to="/">Home</Link>

                        <NavDropdown title="Products" id="product-dropdown" className="mr-4">
                            <NavDropdown.Item as={Link} to="/building-shopface">Building and Shopface</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/illuminated-designs">3D Illuminated Letters and Displays</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/reception-interior">Reception and Interior</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/structural-signage">Structural Signage</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/directional-wayfinding">Directional and Wayfinding</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/window-graphics">Window Graphics and Display</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/product/vehicle-fleet-branding">Vehicle Fleet Branding</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/product/retail-pos">Retail POS</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/product/truck-lining-scrolling">Truck Lining and Scrolling</NavDropdown.Item>
                           
                        </NavDropdown>

                        <Nav.Link href="/contact" className="mr-4">Contact Us</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <ModalButton />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}