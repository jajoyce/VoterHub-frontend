import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState } from "react";
import NoteRep from "../models/NoteRep";
import RepNoteCreateForm from "./RepNoteCreateForm";

function RepNoteCreate(props) {
  const { setRepNotes, repName, repOffice, setShowNoteCreate, user } = props;

  return (
    <Container className="mt-3">
      <Card className="rep-note-card">
        {user ? (
          <RepNoteCreateForm
            setRepNotes={setRepNotes}
            repName={repName}
            repOffice={repOffice}
            setShowNoteCreate={setShowNoteCreate}
            user={user}
          />
        ) : (
          <div>
            <Button className="blue-button mt-3" as={Link} to="../../sign-up">
              Sign Up
            </Button>
            <span className="or-span"> OR </span>
            <Button className="blue-button mt-3" as={Link} to="../../sign-in">
              Sign In
            </Button>
            <br />
            <h5 className="mt-3">to save your own notes.</h5>
          </div>
        )}
      </Card>
    </Container>
  );
}

export default RepNoteCreate;
