import { useState, useEffect } from "react";
import { useOutletContext } from "react-router";

function Reps() {
  const repsURL = useOutletContext() + "/reps";
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
    return reps.map((rep) => (
      <div>
        <br />
        <h3>{rep.name}</h3>
        <h3>{rep.office}</h3>
        <br />
      </div>
    ));
  };

  return repsData ? loaded() : <h1>Loading...</h1>;
}

export default Reps;
