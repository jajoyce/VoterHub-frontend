import Container from "react-bootstrap/Container";

function RepCard(props) {
    const rep = props.repre
  return (
    <Container className="card rep-card">
      <br />
      <h4>{rep.name}</h4>
      <h4>{rep.office}</h4>
      <h5>{rep.party}</h5>
      <br />
    </Container>
  );
}

export default RepCard;
