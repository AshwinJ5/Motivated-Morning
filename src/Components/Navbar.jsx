import React from 'react'
import logo from '../assets/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbars() {
    
  return (

    <Navbar collapseOnSelect expand="lg" className=" navbar_main">
    <Container>
      <Navbar.Brand href="#home"><div className="logo">
                 <img src={logo} alt="" />
             </div></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        
        <Nav className='ms-auto'>
          <Nav.Link href="/">Who It's For</Nav.Link>
          <Nav.Link  href="/">
            About
          </Nav.Link>
          <Nav.Link  href="/">
            FAQ
          </Nav.Link>
          <Nav.Link  href="/">
            Blog
          </Nav.Link>
          <Nav.Link  href="/">
          <i className="fa-solid fa-user"></i>
          </Nav.Link>
          <Nav.Link  href="/">
            <span className="navbar_button">
                Start Your Free Trial
            </span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbars