import Container from "react-bootstrap/Container";
import AddressSearch from "../components/AddressSearch";

function Home() {
  return (
    <Container className="mt-4 mb-5">
      <h1>VoterHub</h1>
      <h3>
        Stay informed on <em>your</em> government.
      </h3>
      <AddressSearch />
      <h4>
        Just enter your address to view: <br /> your elected officials at every level of
        government, <br /> your polling location, upcoming elections, {" "}
      </h4>
    </Container>
  );
}

export default Home;
