import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function UserDelete() {
  return (
    <Container className="full-height">
      <Container className="mt-0 pt-4 mb-5">
        <Card className="voter-info-card">
          <h2 className="m-4">Delete Account</h2>
          <h4 className="m-2">Are you sure you want to delete your account?</h4>
          <h5 className="m-2">This cannot be undone.</h5>
          <Button
            as={Link}
            to="/account"
            variant="secondary"
            className="mt-3 mx-3"
          >
            No, Go Back!
          </Button>
          <Button
            as={Link}
            to="/account-delete"
            variant="danger"
            className="mt-3 mx-3"
          >
            Yes, Delete My Account
          </Button>
        </Card>
      </Container>
    </Container>
  );
}

export default UserDelete;
