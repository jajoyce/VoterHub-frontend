import Container from "react-bootstrap/Container";
import RepNoteCard from "./RepNoteCard";

function RepNotes(props) {
  const { notes, setNotes, repName, repOffice } = props;
  console.log("RepNotes", notes)

  const repNoteCards = notes.map((note, index) => (
    <RepNoteCard
      key={index}
      note={note}
      repName={repName}
      repOffice={repOffice}
    />
  ));
  return (
    <Container className="mt-4">
      <h3>My Personal Notes:</h3>
      <h5><em>Save private notes for yourself about this official.</em></h5>
      {repNoteCards}
    </Container>
  );
}

export default RepNotes;
