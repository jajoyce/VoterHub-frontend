import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router";
import { useRecoilState } from "recoil";
import UserAuth from "../models/UserAuth";

function SignIn() {
  const { userState } = useOutletContext();
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await UserAuth.login(form)) {
      console.log("SIGNED IN");
      try {
        const userData = await UserAuth.getUser();
        console.log("USER DATA:::: ", userData);
        setUser(userData);
        navigate("/representatives");
      } catch (err) {
        console.log("Failed to fetch user data.", err);
        setUser(null);
      }
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
