import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate, Link } from "react-router-dom";
import { useOutletContext } from "react-router";
import { useResetRecoilState } from "recoil";
import UserAuth from "../models/UserAuth";

function UserDelete() {
  const { userState, addressState } = useOutletContext();
  const clearUser = useResetRecoilState(userState);
  const clearAddress = useResetRecoilState(addressState);
  const navigate = useNavigate();

  const handleDelete = async () => {
    const deleted = await UserAuth.delete();
    if (deleted) {
      clearUser();
      clearAddress();
      localStorage.clear();
      console.log("Deleted.");
      navigate("/");
    } else {
      console.log("Failed to delete.");
    }
  };

  return (
    <Container className="full-height">
      <Container className="mt-0 pt-4 mb-5">
        <Card className="user-delete-card">
          <h2 className="m-4">Delete Account</h2>
          <h4 className="m-2">Are you sure you want to delete your account?</h4>
          <h5 className="m-2">This cannot be undone.</h5>
          <Container className="my-4">
            <Button
              variant="secondary"
              as={Link}
              to="/account"
              className="mt-3 mx-3"
            >
              No, Go Back!
            </Button>
            <Button
              variant="danger"
              onClick={handleDelete}
              className="mt-3 mx-3"
            >
              Yes, Delete My Account
            </Button>
          </Container>
        </Card>
      </Container>
    </Container>
  );
}

export default UserDelete;
