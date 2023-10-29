
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import ModalButton from './ModalButton'

export default function CustomNavbar() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" fixed="top" className = "custom-navbar">
      <Container>
      <Link to="/" className="navbar-brand mr-4">Toowoomba Sign Co</Link>
        <Navbar.Toggle aria-controls="navbarText" />
        <Navbar.Collapse id="navbarText">
          <Nav className="mr-auto">
          <Link className="nav-link mr-4" to="/">Home</Link>
            
            <NavDropdown title="Products" id="product-dropdown" className = "mr-4">
              <NavDropdown.Item href="#">Building and Shopface</NavDropdown.Item>
              <NavDropdown.Item href="#">3D Illuminated Letters and Displays</NavDropdown.Item>
              <NavDropdown.Item href="#">Reception and Interior</NavDropdown.Item>
              <NavDropdown.Item href="#">Directional and Wayfinding</NavDropdown.Item>
              <NavDropdown.Item href="#">Window Graphics and Display</NavDropdown.Item>
              <NavDropdown.Item href="#">Vehicle Fleet Branding</NavDropdown.Item>
              <NavDropdown.Item href="#">Retail POS</NavDropdown.Item>
              <NavDropdown.Item href="#">Truck Lining and Scrolling</NavDropdown.Item>
              <NavDropdown.Item href="#">Structural Signage</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="/contact" className = "mr-4">Contact Us</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
                < ModalButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
