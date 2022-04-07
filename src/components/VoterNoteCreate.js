import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import NoteVoter from "../models/NoteVoter";

function VoterNoteCreate(props) {
  const { setVoterNotes, setShowNoteAdd } = props;

  const [form, setForm] = useState({ content: "" });

  const handleChange = (e) => {
    setForm({ content: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newNotes = await NoteVoter.create(form);
      if (newNotes) {
        setVoterNotes(newNotes);
        setForm({ content: "" });
        setShowNoteAdd(false);
      }
    } catch (err) {
      console.log("Create form failed to create voter note.", err);
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
        placeholder="My note to self, e.g. 'Remember to request my mail-in ballot before the deadline next week.'"
      />
      <Button variant="success" type="submit" className="mt-3 mx-2">
        Add Note
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          setForm({ content: "" });
          setShowNoteAdd(false);
        }}
        className="mt-3 mx-2"
      >
        Cancel
      </Button>
    </Form>
  );
}

export default VoterNoteCreate;
