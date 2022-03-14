import { useState, useEffect } from "react";
import { useOutletContext, Outlet } from "react-router";
import Container from "react-bootstrap/Container";
import Collapse from "react-bootstrap/Collapse";
import RepsList from "../components/RepsList";
import RepShow from "../components/RepShow";
import AddressSearch from "../components/AddressSearch";

function Reps() {
  const { serverURL, address, setAddress } = useOutletContext();
  const fetchRepsURL = serverURL + "/civicAPI/reps/" + address;
  console.log(fetchRepsURL);
  const [repsData, setRepsData] = useState(null);
  const [searchShow, setSearchShow] = useState(false);

  const getRepsData = async () => {
    const response = await fetch(fetchRepsURL);
    const data = await response.json();
    console.log(data);
    setRepsData(data);
  };

  useEffect(() => getRepsData(), [address]);

  const parseRepsData = (data) => {
    let repsArray = [];
    for (const office of data.offices) {
      for (const officialIndex of office.officialIndices) {
        if (!repsData.officials[officialIndex].photoUrl) {
          repsData.officials[officialIndex].photoUrl =
            "https://images.vexels.com/media/users/3/129616/isolated/preview/fb517f8913bd99cd48ef00facb4a67c0-businessman-avatar-silhouette-by-vexels.png";
        }
        repsArray.push({
          ...repsData.officials[officialIndex],
          office: office.name,
          index: officialIndex,
        });
      }
    }
    return repsArray;
  };

  const loaded = () => {
    const reps = parseRepsData(repsData);
    return <Outlet context={reps} />;
  };

  return (
    <Container className="full-height">
      <Container className="mt-0 pt-4 mb-5">
        <div className="m-0 p-0">
          <div className="py-1">
            <h1>Your Elected Representatives</h1>
            <h3 className="mb-4">
              <em>
                <small>at: &nbsp; </small>
              </em>
              <span
                className="reps-address"
                onClick={() => setSearchShow(!searchShow)}
              >
                {address}
              </span>
            </h3>
          </div>
        </div>
        <Collapse in={searchShow}>
          <div className="m-0 p-0">
            <div className="py-1 px-4">
              <AddressSearch setAddress={setAddress} setSearchShow={setSearchShow}/>
            </div>
          </div>
        </Collapse>
        <div className="m-0 p-0">
          <div className="py-1">
            {repsData ? loaded() : <h1>Loading...</h1>}
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Reps;
