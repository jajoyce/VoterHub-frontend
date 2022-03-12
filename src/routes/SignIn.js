import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router";
import UserAuth from "../models/UserAuth";

function SignIn() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (UserAuth.login(form)) {
      console.log("SIGNED IN");
      navigate("/representatives");
    } else {
      console.log("LOGIN FAILED");
      navigate("/");
    }
  };

  const { username, password } = form;

  return (
    <Container>
      <Form onSubmit={handleSubmit} className="my-5">
        <FloatingLabel label="Username" className="mb-3">
          <Form.Control
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            placeholder="janedoe123"
            required
          />
        </FloatingLabel>
        <FloatingLabel label="Password" className="mb-3">
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="********"
            required
          />
        </FloatingLabel>
        
        <Button type="submit" className="my-3">
          Sign In
        </Button>
      </Form>
    </Container>
  );
}

export default SignIn;
