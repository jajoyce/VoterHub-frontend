import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router";
import { useSetRecoilState } from "recoil";
import UserAuth from "../models/UserAuth";

function SignIn() {
  const { userState, addressState } = useOutletContext();
  const setUser = useSetRecoilState(userState);
  const setAddress = useSetRecoilState(addressState);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await UserAuth.login(form)) {
      console.log("SIGNED IN");
      try {
        const userData = await UserAuth.getUser();
        setUser(userData);
        if (userData.address) {
          setAddress(userData.address);
        }
        navigate("/representatives");
      } catch (err) {
        setError("Login failed. Please try again");
        console.log("Failed to fetch user data.", err);
      }
    } else {
      setError("Invalid credentials. Please try again.");
      console.log("LOGIN FAILED");
    }
  };

  const { username, password } = form;

  return (
    <Container className="full-height">
      <Container className="mt-0 pt-5 mb-5">
        <Card className="signin-card">
          <h2>Sign In</h2>
          <Form onSubmit={handleSubmit} className="mt-3 mb-2">
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
            <Form.Label className="text-danger">{error}</Form.Label>
            <br />
            <Button type="submit" className="my-3">
              Sign In
            </Button>
          </Form>
        </Card>
      </Container>
    </Container>
  );
}

export default SignIn;
