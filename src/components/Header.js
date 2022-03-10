import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <Navbar expand="md" className="navbar-dark text-light">
      <Container>
        <Link to="/" className="nav-home">
          <Navbar.Brand>VoterHub</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav>
            <LinkContainer to="/reps">
              <Nav.Link>Who Represents Me</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/info" className="me-auto">
              <Nav.Link>My Voter Info</Nav.Link>
            </LinkContainer>
            <NavDropdown
              title="Welcome, Voter"
              id="nav-dropdown"
              className="ms-auto"
            >
              <NavDropdown.Item>My Account</NavDropdown.Item>
              <NavDropdown.Item>Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Sign Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
