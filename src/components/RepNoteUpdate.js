import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import NoteRep from "../models/NoteRep";

function RepNoteUpdate(props) {
  const { note, setRepNotes, setShowForm } = props;

  const [form, setForm] = useState({ id: note.id, content: note.content });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const notesAfterUpdate = await NoteRep.update(form);
      if (notesAfterUpdate) {
        setRepNotes(notesAfterUpdate);
        setShowForm(false);
      } else {
        console.log("handleUpdate could not get updated notes");
      }
    } catch (err) {
      console.log("handleUpdate failed to update note", err);
    }
  };

  const handleDelete = async () => {
    try {
      const notesAfterDelete = await NoteRep.delete({ id: note.id });
      // TO DO: handle empty array after deleting the last note.
      // TO DO: also rerendering after deleting the only note on that page.
      // Just fixed both I think, but double check
      console.log(notesAfterDelete);
      setRepNotes(notesAfterDelete);
      setShowForm(false);
    } catch (err) {
      console.log("handleDelete failed to delete note", err);
    }
  };

  return (
    <>
      <Form onSubmit={handleUpdate}>
        <Form.Control
          as="textarea"
          rows={4}
          size="lg"
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Emailed their office about the pothole down the street, will follow up."
          required
        />
        <Button variant="success" onClick={handleUpdate} className="mx-2 mt-3">
          Update
        </Button>
        <Button
          variant="secondary"
          onClick={() => setShowForm(false)}
          className="mx-2 mt-3"
        >
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete} className="mx-2 mt-3">
          Delete
        </Button>
      </Form>
    </>
  );
}

export default RepNoteUpdate;
