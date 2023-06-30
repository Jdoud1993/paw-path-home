import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function NavBar({user, onLogin}) {

    function handleLogoutClick() {
      fetch("http://localhost:3000/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          onLogin(null);
        }
      });
    }

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
          <h4 className="username">{user.username}</h4>
          <Button variant="outline-light" onClick={handleLogoutClick}>Logout</Button>
        </Container>
      </Navbar>
    )
}

export default NavBar