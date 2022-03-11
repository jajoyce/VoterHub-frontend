import { useOutletContext } from "react-router";
import RepCard from "./RepCard";

function RepsList() {
    const reps = useOutletContext();
    return reps.map((rep) => (
      <RepCard repre={rep} />
    ));
}

export default RepsList;