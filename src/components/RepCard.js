import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

function RepCard(props) {
  const rep = props.rep;
  return (
    <LinkContainer to={`${rep.index}`}>
      <Container className="card rep-card">
        <img src={rep.photoUrl} className="rep-card-img" alt={rep.name} />
        <div className="card-body">
          <h3>{rep.name}</h3>
          <h4>{rep.office}</h4>
          <h6>{rep.party}</h6>
          <Button className="mt-2 blue-button">More Info</Button>
        </div>
      </Container>
    </LinkContainer>
  );
}

export default RepCard;
