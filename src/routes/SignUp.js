import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router";
import { useRecoilState } from "recoil";
import UserAuth from "../models/UserAuth";

function SignUp() {
  const { userState } = useOutletContext();
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: null,
    address: null,
    registeredVoter: null,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await UserAuth.register(form)) {
      console.log("SIGNED UP");
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
      console.log("SIGNUP FAILED");
      navigate("/");
    }
  };

  const { username, password, firstName, lastName, address, registeredVoter } =
    form;

  return (
    <Container className="full-height">
      <Container className="mt-0 pt-4 mb-5">
        <Card className="signup-card">
          <h2>Sign Up</h2>
          <Form onSubmit={handleSubmit} className="mt-3 mb-2">
            <FloatingLabel label="Username *" className="mb-3">
              <Form.Control
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                placeholder="janedoe123"
                required
              />
            </FloatingLabel>
            <FloatingLabel label="Password *" className="mb-3">
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="********"
                required
              />
            </FloatingLabel>
            <FloatingLabel label="First Name *" className="mb-3">
              <Form.Control
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                placeholder="Jane"
                required
              />
            </FloatingLabel>
            <FloatingLabel label="Last Name" className="mb-3">
              <Form.Control
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                placeholder="Doe"
              />
            </FloatingLabel>
            <FloatingLabel label="Address" className="mb-3">
              <Form.Control
                type="text"
                name="address"
                value={address}
                onChange={handleChange}
                placeholder="123 Main St, Kansas City, MO 64105"
              />
            </FloatingLabel>
            <Form.Group className="my-3">
              <Form.Label>
                Are you registered to vote? &nbsp; &nbsp; &nbsp;{" "}
              </Form.Label>
              <Form.Check
                type="radio"
                name="registeredVoter"
                value={true}
                onChange={handleChange}
                label="Yes"
                inline
              />
              <Form.Check
                type="radio"
                name="registeredVoter"
                value={false}
                onChange={handleChange}
                label="No / I'm not sure"
                inline
              />
              <br /><Form.Text style={{textAlign:"right"}}>(Dont't worry, we can help with that!)</Form.Text>
            </Form.Group>
            <Button type="submit" className="mt-3">
              Sign Up
            </Button>
          </Form>
        </Card>
      </Container>
    </Container>
  );
}

export default SignUp;
