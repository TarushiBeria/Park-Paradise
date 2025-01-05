import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Outlet, Link } from "react-router-dom";

const Navbarr = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-white navv">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link to="/" className="me-2 text-dark"><b>Home</b></Link>
              <Link to="/stay" className="me-2 text-dark"><b>Stay</b></Link>
              <Link to="/restaurant" className="me-2 text-dark"><b>Restaurant</b></Link>
              {/* <Link to="/hotel_info" className="me-2 text-dark"><b>Hotel Info</b></Link> */}
              <Link to="/refresh" className="me-2 text-dark"><b>Refresh</b></Link>
              <Link to="/event_celebration" className="me-2 text-dark"><b>Event Celebration</b></Link>
              <Link to="/our_projects" className="me-2 text-dark"><b>Gallery</b></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    <Outlet/> 
    </>
  );
}

export default Navbarr;