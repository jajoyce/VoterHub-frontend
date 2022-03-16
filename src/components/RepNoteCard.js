import Card from "react-bootstrap/Card";

function RepNoteCard(props) {
  const { note, repName, repOffice } = props;
  return (
    <Card className="rep-note-card">
      <h5>{note.content}</h5>
    </Card>
  );
}

export default RepNoteCard;
