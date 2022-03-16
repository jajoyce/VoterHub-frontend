import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import NoteRep from "../models/NoteRep";

function RepNoteUpdate(props) {
  const { note, setShowForm } = props;

  const [form, setForm] = useState({ content: note.content });
  console.log(form);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {};

  const handleDelete = () => {};

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
          placeholder="placeholder"
        />
        <Button variant="success" onClick={handleUpdate} className="mx-2 mt-3">
          Update
        </Button>
        <Button variant="secondary" onClick={() => setShowForm(false)} className="mx-2 mt-3">
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
