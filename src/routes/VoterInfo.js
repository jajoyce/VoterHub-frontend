import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function VoterInfo() {
  return (
    <Container className="full-height">
      <Container className="mt-0 pt-4 mb-5">
        <Card className="voter-info-card">
          <h2>Voter Info</h2>
        </Card>
      </Container>
    </Container>
  );
}

export default VoterInfo;
