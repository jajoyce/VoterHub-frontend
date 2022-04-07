import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import NoteVoter from "../models/NoteVoter";

function VoterNoteUpdate(props) {
  const { note, setVoterNotes, setShowUpdate } = props;

  const [form, setForm] = useState({ id: note.id, content: note.content });

  const handleChange = (e) => {
    setForm({ ...form, content: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const newNotes = await NoteVoter.update(form);
      if (newNotes) {
        setVoterNotes(newNotes);
        setShowUpdate(false);
      }
    } catch (err) {
      console.log("Voter note update error:", err);
    }
  };

  const handleDelete = async () => {
    try {
      const newNotes = await NoteVoter.delete({ id: note.id });
      setVoterNotes(newNotes);
    } catch (err) {
      console.log("Voter note delete error:", err);
    }
  };

  return (
    <Form onSubmit={handleUpdate}>
      <Form.Control
        as="textarea"
        rows={4}
        size="lg"
        name="content"
        value={form.content}
        onChange={handleChange}
        placeholder={note.content}
        required
      />
      <Button variant="success" className="mt-3 mx-2" type="submit">
        Update
      </Button>
      <Button
        variant="secondary"
        className="mt-3 mx-2"
        onClick={() => setShowUpdate(false)}
      >
        Cancel
      </Button>
      <Button variant="danger" className="mt-3 mx-2" onClick={handleDelete}>
        Delete
      </Button>
    </Form>
  );
}

export default VoterNoteUpdate;
