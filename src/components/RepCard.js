import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

function RepCard(props) {
  const rep = props.rep;
  return (
    <LinkContainer to={`${rep.index}`}>
      <Card className="rep-card">
        <img src={rep.photoUrl} className="rep-card-img" alt={rep.name} />
        <div className="card-body">
          <h3>{rep.name}</h3>
          <h4>{rep.office}</h4>
          <h6><em><small>District/Level: </small></em>{rep.division}</h6>
          <h6><em><small>Affiliation: </small></em>{rep.party}</h6>
          <Button className="mt-2 blue-button">More Info</Button>
        </div>
      </Card>
    </LinkContainer>
  );
}

export default RepCard;
