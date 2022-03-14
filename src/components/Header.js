import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Link } from "react-router-dom";
// import { LinkContainer } from "react-router-bootstrap";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useRecoilState, useSetRecoilState, useResetRecoilState } from "recoil";
import UserAuth from "../models/UserAuth";

function Header(props) {
  const [user, setUser] = useRecoilState(props.userState);
  const setAddress = useSetRecoilState(props.addressState);
  const resetAddress = useResetRecoilState(props.addressState);
  const navigate = useNavigate();

  useEffect(async () => {
    if (localStorage.getItem("jwToken")) {
      try {
        const userData = await UserAuth.getUser();
        if (userData.address) {
          setAddress(userData.address);
        }
        setUser(userData);
      } catch (err) {
        console.log("Failed to fetch user data.", err);
        setUser(null);
      }
    }
  }, []);

  const logout = () => {
    setUser(null);
    resetAddress();
    localStorage.clear();
    navigate("/");
  };

  const userNav = user ? (
    <NavDropdown title={`Welcome, ${user.firstName} `} id="nav-dropdown">
      <NavDropdown.Item as={NavLink} to="">
        My Account
      </NavDropdown.Item>
      <NavDropdown.Item onClick={logout}>Sign Out</NavDropdown.Item>
    </NavDropdown>
  ) : (
    <>
      <Nav.Link as={NavLink} to="/sign-up">
        Sign Up
      </Nav.Link>
      <Nav.Link as={NavLink} to="/sign-in">
        Sign In
      </Nav.Link>
    </>
  );

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
            {userNav}
          </Navbar.Collapse>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
