import Container from "react-bootstrap/Container";
import RepNoteCard from "./RepNoteCard";

function RepNotes(props) {
  const { notes, setRepNotes, repName, repOffice, user } = props;
  console.log("RepNotes", notes);

  const repNoteCards = user
    ? notes.map((note, index) => (
        <RepNoteCard
          key={index}
          note={note}
          repName={repName}
          repOffice={repOffice}
          setRepNotes={setRepNotes}
        />
      ))
    : null;
  return <Container className="mt-4">{repNoteCards}</Container>;
}

export default RepNotes;
