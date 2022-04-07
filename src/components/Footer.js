import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

function Footer() {
  return (
    <Navbar className="footer mt-5">
      <Container>
        <h5 className="footer-text">
          <em>Government of the people, by the people, for the people.</em>
        </h5>
      </Container>
    </Navbar>
  );
}

export default Footer;
