import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import VoterNoteCreate from "./VoterNoteCreate";

function VoterNoteAdd(props) {
  const { user, setVoterNotes, setShowNoteAdd } = props;

  return (
    <Container className="my-3">
      <Card className="voter-note-card">
        {user ? (
          <VoterNoteCreate
            setVoterNotes={setVoterNotes}
            setShowNoteAdd={setShowNoteAdd}
          />
        ) : (
          <div>
            <Button className="blue-button mt-3" as={Link} to="../../sign-up">
              Sign Up
            </Button>
            <span className="or-span mt-3 px-3">or</span>
            <Button className="blue-button mt-3" as={Link} to="../../sign-in">
              Sign In
            </Button>
            <h5 className="mt-3">to save your own notes.</h5>
          </div>
        )}
      </Card>
    </Container>
  );
}

export default VoterNoteAdd;
