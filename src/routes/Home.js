import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
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
        <Container className="my-5 px-0">
          <AddressSearch setAddress={setAddress} />
        </Container>
        <Card className="home-card">
          <h3>Just enter your U.S. address to find: </h3>
          <ul className="home-list">
            <li>Your elected representatives at every level of government, from federal to local</li>
            <li>Your local election officials and polling locations</li>
            <li>Voter information, registration, and resources</li>
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
