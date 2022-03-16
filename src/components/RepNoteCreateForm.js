import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState } from "react";
import NoteRep from "../models/NoteRep";

function RepNoteCreateForm(props) {
  const { setRepNotes, repName, repOffice, setShowNoteCreate, user } = props;

  const [form, setForm] = useState({
    repName: repName,
    repOffice: repOffice,
    content: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const notesAfterCreate = await NoteRep.create(form);
      if (notesAfterCreate) {
        setRepNotes(notesAfterCreate);
        setForm({ ...form, content: "" });
        setShowNoteCreate(false);
      } else {
        console.log("handleSubmit could not get updated notes");
      }
    } catch (err) {
      console.log("handleSubmit failed to create note", err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        as="textarea"
        rows={4}
        size="lg"
        name="content"
        value={form.content}
        onChange={handleChange}
        placeholder="My note to self, e.g. 'Called their office about the pothole down the street, they said they'll follow up next week...'"
      />
      <Button variant="success" onClick={handleSubmit} className="mx-2 mt-3">
        Add Note
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          setForm({ ...form, content: "" });
          setShowNoteCreate(false);
        }}
        className="mx-2 mt-3"
      >
        Cancel
      </Button>
    </Form>
  );
}

export default RepNoteCreateForm;
