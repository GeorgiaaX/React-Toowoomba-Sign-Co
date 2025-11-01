import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import ModalButton from "./ModalButton";

export default function CustomNavbar() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      bg="dark"
      fixed="top"
      className="custom-navbar"
    >
      <Container>
        <Link to="/" className="navbar-brand mr-4">
          Toowoomba <b className="bold-word">Sign</b> Co
        </Link>
        <Navbar.Toggle aria-controls="navbarText" />
        <Navbar.Collapse id="navbarText">
          <Nav className="mr-auto">
            <Link className="nav-link mr-4" to="/">
              Home
            </Link>

            <NavDropdown title="Products and Services" className="mr-4">
              <NavDropdown.Item as={Link} to="/building-shopface">
                Shopfront & Building Signage
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/illuminated-designs">
                3D & Illuminated Signs
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/reception-interior">
                Reception & Interior Signage
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/structural-signage">
                Structural Signage
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/directional-wayfinding">
                Directional & Wayfinding Signs
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/window-graphics">
                Window Films & Graphics
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/vehicle-branding">
                Car Wraps & Signage
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/retail-pos">
                Retail & Short Term Signage
              </NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} to="/truck-lining">
                Truck Lining & Scrolling
              </NavDropdown.Item> */}
              <NavDropdown.Item as={Link} to="/commercial-signage">
                Commercial Signage
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/our-process" className="mr-4">
              Our Process
            </Nav.Link>
            <Nav.Link href="/contact" className="mr-4">
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <ModalButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
