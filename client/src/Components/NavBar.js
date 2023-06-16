import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return(
        <Navbar bg="primary" variant="dark" fixed="top">
        <Container>
          <LinkContainer to="/">
          <Navbar.Brand href="/">Paw Path Home</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/Pets">
              <Nav.Link>Lost and Found Pets</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavBar