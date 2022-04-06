import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function VoterNoteCard(props) {
  const { note, setVoterNotes } = props;

  return (
    <Card className="voter-note-card mt-3">
      <Container>
        <h5 className="note-text mt-2">{note.content}</h5>
      </Container>
    </Card>
  );
}

export default VoterNoteCard;
