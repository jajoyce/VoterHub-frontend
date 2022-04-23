import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useOutletContext } from "react-router";
import { useRecoilState, useSetRecoilState } from "recoil";
import UserAuth from "../models/UserAuth";

function UserUpdate() {
  const { userState, addressState } = useOutletContext();
  const [user, setUser] = useRecoilState(userState);
  const setAddress = useSetRecoilState(addressState);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    ...user,
    password: "",
    confirmPassword: "",
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
      try {
        const formUpdate = {
          username: form.username,
          password: form.password,
          firstName: form.firstName,
          lastName: form.lastName,
          address: form.address,
          registeredVoter: form.registeredVoter,
        };

        const updatedUser = await UserAuth.update(formUpdate);

        if (updatedUser) {
          console.log("UPDATED USER");
          setUser(updatedUser);
          if (updatedUser.address) {
            setAddress(updatedUser.address);
          }
          navigate("/representatives");
        } else {
          console.log("User Update FAILED");
          setErrors({
            submit: "Failed to update user account. Please try again.",
          });
        }
      } catch (err) {
        console.log("Failed to fetch user data.", err);
        setErrors({
          submit: "Failed to update user account. Please try again.",
        });
      }
    }
  };

  return (
    <Container className="full-height">
      <Container className="mt-0 pt-5 mb-5">
        <Card className="user-update-card">
          <h2>Update Account</h2>
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
            <Form.Label className="text-danger">{errors.submit}</Form.Label>
            <br />
            <Button type="submit" className="mt-3">
              Update Account
            </Button>
            <Button
              as={Link}
              to="/representatives"
              variant="secondary"
              className="mt-3 mx-3"
            >
              Cancel
            </Button>
            <br />
            <Button
              as={Link}
              to="/account-delete"
              variant="danger"
              className="mt-5 mx-3 btn-sm"
            >
              Delete Account
            </Button>
          </Form>
        </Card>
      </Container>
    </Container>
  );
}

export default UserUpdate;
