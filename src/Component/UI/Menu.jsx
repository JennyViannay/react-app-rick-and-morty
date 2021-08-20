import React, { useContext } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { CgLogOut } from 'react-icons/cg';
import { FaUserAlt } from 'react-icons/fa';

import AuthContext from "../../Context/AuthContext";

const Menu = () => {
  const authenticated = useContext(AuthContext);
  const logout = () => {
    localStorage.clear();
  }
  console.log(authenticated)
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Rick & Morty - React-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Characters</Nav.Link>
            <Nav.Link href="/episodes">Epidodes</Nav.Link>
            <Nav.Link href="/courses">Courses</Nav.Link>
          </Nav>
          <Nav>
            {authenticated.authenticated.auth ? (
              <>
                <Nav.Link href="/mon-compte"><FaUserAlt /></Nav.Link>
                <Nav.Link href="/" onClick={logout}><CgLogOut /></Nav.Link>
              </>
            ) :
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;