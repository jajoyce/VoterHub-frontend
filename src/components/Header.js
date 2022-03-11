import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Link } from "react-router-dom";
// import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <Navbar expand="md" variant="dark" sticky="top">
      <Container fluid className="mx-3">
        <Navbar.Brand as={NavLink} to="/">
          <img src="https://i.imgur.com/ydNZ1JK.png" className="header-logo"/>
          <div className="header-home-text">VoterHub</div>
        </Navbar.Brand>
        <Nav>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav.Link as={NavLink} to="/reps">
              Who Represents Me
            </Nav.Link>
            <Nav.Link as={NavLink} to="/info">
              My Voter Info
            </Nav.Link>
            <NavDropdown
              title="Welcome, Voter"
              id="nav-dropdown"
            >
              <NavDropdown.Item>My Account</NavDropdown.Item>
              <NavDropdown.Item>Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Sign Out</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
