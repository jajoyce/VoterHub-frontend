import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { useParams, useOutletContext } from "react-router";

function RepShow() {
  const reps = useOutletContext();
  const repIndex = useParams().id;
  const rep = reps[repIndex];

  const websiteButton = rep.urls ? (
    <div>
      <Button className="blue-button mb-3" href={rep.urls[0]}>
        Official Website
      </Button>
    </div>
  ) : null;

  const email = rep.emails ? (
    <h5 className="mb-3">
      <a href={rep.emails[0]}>{rep.emails[0]}</a>
    </h5>
  ) : null;

  const phone = rep.phones ? <h5 className="mb-4">{rep.phones[0]}</h5> : null;

  const address = rep.address ? (
    <div>
      <h5>
        <em>Office Address:</em>
      </h5>
      <h5>{rep.address[0].line1}</h5>
      <h5>
        {rep.address[0].city}, {rep.address[0].state} {rep.address[0].zip}
      </h5>
    </div>
  ) : null;

  return (
    <Container>
      <Card className="rep-show-card">
        <img src={rep.photoUrl} className="rep-show-img" alt={rep.name} />
        <div className="card-body">
          <h2 className="mb-3">{rep.name}</h2>
          <h3 className="mb-3">{rep.office}</h3>
          <h6 className="mb-4">{rep.party}</h6>
          {websiteButton}
          {email}
          {phone}
          {address}
        </div>
      </Card>
      <Link to="../">
        <p style={{ textAlign: "left" }}>← Back to all reps</p>
      </Link>
    </Container>
  );
}

export default RepShow;
