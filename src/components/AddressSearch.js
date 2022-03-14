import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddressSearch(props) {
  const setAddress = props.setAddress;
  const [searchAddress, setSearchAddress] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddress(searchAddress);
    setSearchAddress("");
    if (props.setSearchShow) {
      props.setSearchShow(false);
    } else {
      navigate("/representatives");
    }
  };

  return (
    <Container className="m-0 p-0">
      <Form onSubmit={handleSubmit}>
        <InputGroup size="lg" className="mb-3 search-bar">
          <InputGroup.Text className="search-label">Address</InputGroup.Text>
          <Form.Control
            type="text"
            value={searchAddress}
            onChange={handleChange}
            placeholder="123 Main St, Kansas City, MO 64105"
          />
          <Button
            type="submit"
            id="search"
            className="blue-button"
            variant="primary"
          >
            Search
          </Button>
        </InputGroup>
      </Form>
    </Container>
  );
}

export default AddressSearch;
