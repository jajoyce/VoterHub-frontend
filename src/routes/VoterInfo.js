import { useState, useEffect } from "react";
import { useOutletContext } from "react-router";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import { useRecoilState } from "recoil";
import AddressSearch from "../components/AddressSearch";

function VoterInfo() {
  const { addressState, serverURL } = useOutletContext();
  const [address, setAddress] = useRecoilState(addressState);
  const fetchVoterInfoURL = serverURL + "/civicAPI/voterinfo/" + address;
  const [voterInfo, setVoterInfo] = useState(null);
  const [cleanAddress, setCleanAddress] = useState(null);
  const [searchShow, setSearchShow] = useState(false);

  const getVoterInfoData = async () => {
    const response = await fetch(fetchVoterInfoURL);
    const data = await response.json();
    console.log("FETCHED VOTERINFO DATA", data);
    setCleanAddress(data.cleanAddress);
    setVoterInfo(data.state);
  };

  useEffect(() => getVoterInfoData(), [address]);

  const loaded = () => {
    return (
      <Card className="voter-info-card">
        <h2>Voter Info</h2>
      </Card>
    );
  };

  return (
    <Container className="full-height">
      <Container className="mt-0 pt-4 mb-5">
        <div className="m-0 p-0">
          <div className="py-1">
            <h1>My Voter Information</h1>
            <h3 className="mb-4">
              <em>
                <small>at: &nbsp; </small>
              </em>
              <span
                className="voter-info-address"
                onClick={() => setSearchShow(!searchShow)}
              >
                {cleanAddress ? cleanAddress : address}
              </span>
            </h3>
          </div>
        </div>
        <Collapse in={searchShow}>
          <div className="m-0 p-0">
            <div className="py-1 px-4">
              <AddressSearch
                setAddress={setAddress}
                setSearchShow={setSearchShow}
              />
            </div>
          </div>
        </Collapse>
        <div className="m-0 p-0">
          <div className="py-1">{voterInfo ? loaded() : <h1>Loading...</h1>}</div>
        </div>
      </Container>
    </Container>
  );
}

export default VoterInfo;
