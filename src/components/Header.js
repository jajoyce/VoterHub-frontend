import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
// import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <Navbar expand="md" variant="dark" sticky="top">
      <Container fluid className="mx-3">
        <Navbar.Brand as={NavLink} to="/">
          VoterHub
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
