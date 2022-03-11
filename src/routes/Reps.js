import { useState, useEffect } from "react";
import { useOutletContext, Outlet } from "react-router";
import Container from "react-bootstrap/Container";
import RepsList from "../components/RepsList";
import RepShow from "../components/RepShow";

function Reps() {
  const [backendURL, address, setAddress] = useOutletContext();
  const repsURL = backendURL + "/reps";
  console.log(repsURL);
  const [repsData, setRepsData] = useState(null);

  const getRepsData = async () => {
    const response = await fetch(repsURL);
    const data = await response.json();
    console.log(data);
    setRepsData(data);
  };

  useEffect(() => getRepsData(), []);

  const parseRepsData = (data) => {
    let repsArray = [];
    for (const office of data.offices) {
      for (const officialIndex of office.officialIndices) {
        repsArray.push({
          ...repsData.officials[officialIndex],
          office: office.name,
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
