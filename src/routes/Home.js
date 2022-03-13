import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddressSearch from "../components/AddressSearch";
import { useOutletContext } from "react-router";

function Home() {
  const { address, setAddress } = useOutletContext();
  return (
    <Container className="full-height">
      <Container className="mt-0 pt-4 mb-5">
        <h1>VoterHub</h1>
        <h3>
          Stay informed on <em>your</em> government.
        </h3>
        <AddressSearch address={address} setAddress={setAddress} />
        <Card className="home-card">
          <h3>Just enter your address to view: </h3>
          <ul className="home-list">
            <li>Your elected officials at every level of government</li>
            <li>Your polling location</li>
            <li>Upcoming elections</li>
            <li>And more!</li>
          </ul>
        </Card>
        <Container>
          <img src="https://i.imgur.com/ydNZ1JK.png" alt="USA icon, VoterHub logo" className="mt-4"/>
        </Container>
      </Container>
    </Container>
  );
}

export default Home;
