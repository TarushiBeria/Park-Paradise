import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './css/Logos.css';

//For Routing the join link to the join page
import { Outlet, Link } from "react-router-dom";

// icons import
import { IoPersonCircle } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";

function Isbtn(){
  return (
    <>
      <Button className='ms-1 logo_button' id="add" display="none"><p><Link to="/add" className="me-2 text-dark"><b>Add</b></Link><IoPersonCircle/></p></Button>
      <p id="slash">|</p>
    </>
  );
}
function Logos() {
  // if(sessionStorage.getItem("role")=="admin"){
  //   document.getElementById("add").style.display = "block";
  // }
  if(sessionStorage.getItem("role")=="admin"){
    return (
      <Navbar expand="lg">
        <Container>
          {/* <Navbar.Brand href="#">Logo | The Park Paradise</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className='pe-5 text-end bd-highlight'>
            <Isbtn />
            <Button className='logo_button'><p className='mb-3'><Link to="/join" className="me-2 text-dark"><b>Join</b></Link></p></Button>
            {/* <Button className='logo_button'><p className='mb-3'>Discover Stay<MdDateRange className='ms-2 logo_icn'/></p></Button> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );   
  }
  else{
    return(
      <Navbar collapseOnSelect expand="lg" className="bg-white">
      <Container>
        {/* <Navbar.Brand href="#home">Logo | The Park Paradise</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {/* <Button className='logo_button'><p className='mb-3'>Discover Stay<MdDateRange className='ms-2 logo_icn'/></p></Button> */}
            <Button className='logo_button'><p className='mb-3'><Link to="/join" className="me-2 text-dark"><b>Join</b></Link></p></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
}

export default Logos;