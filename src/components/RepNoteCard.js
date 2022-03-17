import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import RepNoteUpdate from "./RepNoteUpdate";

function RepNoteCard(props) {
  const { note, setRepNotes } = props;
  const [showForm, setShowForm] = useState(false);

  const NoteView = () => (
    <Container>
      <Row>
        <Col>
          <h5 className="note-text mt-2">{note.content}</h5>
        </Col>
        <Col md="auto">
          <Button
            variant="success"
            onClick={() => setShowForm(true)}
            className="align-middle my-auto"
          >
            Edit
          </Button>
        </Col>
      </Row>
      {/* <div>Note created at: {note.createdAt}</div> */}
    </Container>
  );

  return (
    <Card className="rep-note-card mt-3">
      {showForm ? (
        <RepNoteUpdate
          note={note}
          setRepNotes={setRepNotes}
          setShowForm={setShowForm}
        />
      ) : (
        <NoteView />
      )}
    </Card>
  );
}

export default RepNoteCard;
