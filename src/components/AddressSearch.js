import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

function AddressSearch(props) {
  return (
    <Container className="my-5">
      <Form>
        <InputGroup size="lg" className="mb-3 search-bar">
          <InputGroup.Text className="search-label">Address</InputGroup.Text>
          <Form.Control
            placeholder="123 Main St, Kansas City, MO 64105"
          />
          <Button type="submit" id="search" className="blue-button" variant="primary">
            Search
          </Button>
        </InputGroup>
      </Form>
    </Container>
  );
}

export default AddressSearch;
