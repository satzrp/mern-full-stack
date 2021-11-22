import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../actions/auth";

const Header = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.login);
  const { user } = userInfo;
  const onLogout = () => {
    dispatch(userLogout());
  };
  return (
    <header>
      <Navbar expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {user ? (
                <Button onClick={onLogout}>
                  <i className="fas fa-user pr-2"></i>Logout
                </Button>
              ) : (
                <Button href="/login">
                  <i className="fas fa-user pr-2"></i> Login
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
