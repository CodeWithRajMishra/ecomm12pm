// Header.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/images/logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container>
      <Navbar expand="lg" className="header">
      <Navbar.Brand href="/">
        <img src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="about">About</Nav.Link>
          <Nav.Link as={Link} to="products">Product</Nav.Link>
          <Nav.Link as={Link} to="contact">Contact</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="/signup">Signup</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Container>
  );
};

export default Header;