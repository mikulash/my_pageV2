import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand>
          <NavLink className={"nav-link"} to="/">
            Mikulas Heinz
          </NavLink>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className={"nav-link"} to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About me
          </NavLink>
          <NavLink className="nav-link" to="/projects">
            Projects
          </NavLink>
          <NavLink className="nav-link" to="/resume">
            Resume
          </NavLink>
          <a href="https://github.com/mikulash" className="nav-link">
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/mikulas-heinz/"
            className="nav-link"
          >
            LinkedIn
          </a>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Header;
