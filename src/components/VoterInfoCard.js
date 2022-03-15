import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { useParams, useOutletContext } from "react-router";

function VoterInfoCard(props) {
  const voterInfo = props.voterInfo;
  console.log("VOTERINFO CARD", voterInfo);

  const admin = voterInfo.state[0].electionAdministrationBody;

  let localDiv;
  if (voterInfo.state[0].local_jurisdiction) {
    const localAdmin =
      voterInfo.state[0].local_jurisdiction.electionAdministrationBody;
    localDiv = <div>Local</div>;
  } else {
    localDiv = null;
  }

  let pollsDiv;
  if (voterInfo.pollingLocations) {
    const polls = voterInfo.pollingLocations[0];
    pollsDiv = <div>Polls</div>;
  } else {
    pollsDiv = null;
  }

  const adminDiv = (
    <div className="mb-5">
      <h3>{voterInfo.state[0].name} Elections Administrator:</h3>
      <h4>{admin.name}</h4>
      <p className="mb-0">
        <em>Official Resources:</em>
      </p>
      {admin.electionRegistrationUrl ? (
        <Button
          className="voter-admin-button mx-3 my-2"
          href={admin.electionRegistrationUrl}
        >
          Register to Vote
        </Button>
      ) : null}
      {admin.electionRegistrationConfirmationUrl ? (
        <Button
          className="voter-admin-button mx-3 my-2"
          href={admin.electionRegistrationConfirmationUrl}
        >
          Confirm Registration
        </Button>
      ) : null}
      {admin.electionInfoUrl ? (
        <Button
          className="voter-admin-button mx-3 my-2"
          href={admin.electionInfoUrl}
        >
          Election Information
        </Button>
      ) : null}
      {admin.absenteeVotingInfoUrl ? (
        <Button
          className="voter-admin-button mx-3 my-2"
          href={admin.absenteeVotingInfoUrl}
        >
          Absentee Voting
        </Button>
      ) : null}
      {admin.votingLocationFinderUrl ? (
        <Button
          className="voter-admin-button mx-3 my-2"
          href={admin.votingLocationFinderUrl}
        >
          Find Polling Location
        </Button>
      ) : null}
      {admin.ballotInfoUrl ? (
        <Button
          className="voter-admin-button mx-3 my-2"
          href={admin.ballotInfoUrl}
        >
          Ballot Information
        </Button>
      ) : null}
      {admin.correspondenceAddress ? (
        <>
          <p className="mt-2 mb-0">
            <em>Office Address:</em>
          </p>
          <h5>
            {admin.correspondenceAddress.line1}
            <br />
            {admin.correspondenceAddress.city},{" "}
            {admin.correspondenceAddress.state}{" "}
            {admin.correspondenceAddress.zip}
          </h5>
        </>
      ) : null}
    </div>
  );

  return (
    <Container>
      <Card className="voter-info-card">
        <div className="card-body">
          {pollsDiv}
          {adminDiv}
          {localDiv}
        </div>
        <div></div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1902/1902201.png"
          className="voter-info-img"
          alt="Ballot box"
        />
      </Card>
    </Container>
  );
}

export default VoterInfoCard;
