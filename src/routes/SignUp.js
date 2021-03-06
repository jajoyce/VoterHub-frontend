import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router";
import { useSetRecoilState } from "recoil";
import UserAuth from "../models/UserAuth";

function SignUp() {
  const { userState, addressState } = useOutletContext();
  const setUser = useSetRecoilState(userState);
  const setAddress = useSetRecoilState(addressState);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: null,
    address: null,
    registeredVoter: null,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let isValid = true;
    if (form.password !== form.confirmPassword) {
      isValid = false;
      setErrors({ ...errors, password: "Passwords don't match." });
    }
    return isValid;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      const formRegister = {
        username: form.username,
        password: form.password,
        firstName: form.firstName,
        lastName: form.lastName,
        address: form.address,
        registeredVoter: form.registeredVoter,
      };

      if (await UserAuth.register(formRegister)) {
        console.log("SIGNED UP");
        try {
          const userData = await UserAuth.getUser();
          setUser(userData);
          if (userData.address) {
            setAddress(userData.address);
          }
          navigate("/representatives");
        } catch (err) {
          setErrors({
            ...errors,
            password: null,
            submit: "Failed to sign in new user. Please try again.",
          });
          console.log("Failed to fetch user data.", err);
          setUser(null);
        }
      } else {
        setErrors({
          ...errors,
          password: null,
          submit: "New user registration failed. Please try again.",
        });
        console.log("SIGNUP FAILED");
      }
    }
  };

  return (
    <Container className="full-height">
      <Container className="mt-0 pt-5 mb-5">
        <Card className="signup-card">
          <h2>Sign Up</h2>
          <Form onSubmit={handleSubmit} className="mt-3 mb-2">
            <FloatingLabel label="Username *" className="mb-3">
              <Form.Control
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="janedoe123"
                required
              />
            </FloatingLabel>
            <Row className="mb-3">
              <Col md>
                <FloatingLabel label="Password *">
                  <Form.Control
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="********"
                    minLength={8}
                    required
                  />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel
                  label="Confirm Password *"
                  className="mt-3 mt-md-0"
                >
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="********"
                    required
                  />
                </FloatingLabel>
              </Col>
              <Form.Label className="text-danger m-0">
                {errors.password}
              </Form.Label>
            </Row>
            <Row>
              <Col md>
                <FloatingLabel label="First Name *" className="mb-3">
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Jane"
                    required
                  />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel label="Last Name" className="mb-3">
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <FloatingLabel label="Address" className="mb-3">
              <Form.Control
                type="text"
                name="address"
                value={form.address}
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
              <br />
              <Form.Text style={{ textAlign: "right" }}>
                (Dont't worry, we can help with that!)
              </Form.Text>
            </Form.Group>
            {errors.submit ? (
              <>
                <Form.Label className="text-danger m-0">
                  {errors.submit}
                </Form.Label>
                <br />
              </>
            ) : null}

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
