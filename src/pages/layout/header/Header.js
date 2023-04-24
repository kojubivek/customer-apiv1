import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./header.css";

export const Header = () => {
  return (
    <>
      {" "}
      <Navbar bg="light" expand={("sm", "md", "lg")} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Shop Fine</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Offcanvas
            aria-labelledby={`offcanvasNavbarLabel-expand-md-sm`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Welcome to Shop-Fine</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
                <Link className="nav-link" to="/category">
                  Category
                </Link>
                <Link className="nav-link" to="/about-us">
                  About-Us
                </Link>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
