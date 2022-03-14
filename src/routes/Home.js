import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useOutletContext } from "react-router";
import { useSetRecoilState } from "recoil";
import AddressSearch from "../components/AddressSearch";

function Home() {
  const { addressState } = useOutletContext();
  const setAddress = useSetRecoilState(addressState);

  return (
    <Container className="full-height">
      <Container className="mt-0 pt-4 mb-5">
        <h1>VoterHub</h1>
        <h3>
          Stay informed on <em>your</em> government.
        </h3>
        <Container className="my-5 px-3">
          <AddressSearch setAddress={setAddress} />
        </Container>
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
          <img
            src="https://i.imgur.com/ydNZ1JK.png"
            alt="USA icon, VoterHub logo"
            className="mt-4"
          />
        </Container>
      </Container>
    </Container>
  );
}

export default Home;
