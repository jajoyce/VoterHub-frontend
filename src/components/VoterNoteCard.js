import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function VoterNoteCard(props) {
  const { note, setVoterNotes } = props;
  const [showUpdate, setShowUpdate] = useState(false);

  const RenderNote = () => (
    <Container>
      <Row>
        <Col>
          <h5 className="note-text mt-2">{note.content}</h5>
        </Col>
        <Col sm="auto">
          <Button variant="success" onClick={() => setShowUpdate(true)}>
            Edit
          </Button>
        </Col>
      </Row>
    </Container>
  );

  return (
    <Card className="voter-note-card mt-3">
      {showUpdate ? <div>VoterNoteUpdate</div> : <RenderNote />}
    </Card>
  );
}

export default VoterNoteCard;
