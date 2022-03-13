import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Link } from "react-router-dom";
// import { LinkContainer } from "react-router-bootstrap";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import UserAuth from "../models/UserAuth";

function Header(props) {
  const [user, setUser] = useRecoilState(props.userState);

  useEffect(async () => {
    if (localStorage.getItem("jwToken")) {
      try {
        const userData = await UserAuth.getUser();
        console.log("USER DATA:::: ", userData)
        setUser(userData);
      } catch (err) {
        console.log("TEST Failed to fetch user data.", err);
        setUser(null);
      }
    }
  }, []);

  const welcomeName = user ? `Welcome, ${user.firstName}` : "Welcome, Voter";

  return (
    <Navbar expand="md" variant="dark" sticky="top">
      <Container fluid className="mx-3">
        <Navbar.Brand as={NavLink} to="/">
          <img src="https://i.imgur.com/ydNZ1JK.png" className="header-logo" />
          <div className="header-home-text">VoterHub</div>
        </Navbar.Brand>
        <Nav>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav.Link as={NavLink} to="/representatives">
              Who Represents Me
            </Nav.Link>
            <Nav.Link as={NavLink} to="/voter-info">
              My Voter Info
            </Nav.Link>
            <NavDropdown title={welcomeName} id="nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/sign-up">
                Sign Up
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/sign-in">
                Sign In
              </NavDropdown.Item>
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
