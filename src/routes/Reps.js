import { useState, useEffect } from "react";
import { useOutletContext, Outlet } from "react-router";
import Container from "react-bootstrap/Container";
import RepsList from "../components/RepsList";
import RepShow from "../components/RepShow";

function Reps() {
  const { serverURL, address } = useOutletContext();
  const fetchRepsURL = serverURL + "/civicAPI/reps/" + address;
  console.log(fetchRepsURL);
  const [repsData, setRepsData] = useState(null);

  const getRepsData = async () => {
    const response = await fetch(fetchRepsURL);
    const data = await response.json();
    console.log(data);
    setRepsData(data);
  };

  useEffect(() => getRepsData(), []);

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
    <Container className="my-4">
      <h1>Your Elected Representatives</h1>
      <h3 className="mb-4">at: {address}</h3>
      {repsData ? loaded() : <h1>Loading...</h1>}
    </Container>
  );
}

export default Reps;
