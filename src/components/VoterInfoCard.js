import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function VoterInfoCard(props) {
  const voterInfo = props.voterInfo;

  const admin = voterInfo.state[0].electionAdministrationBody;

  const MailTo = ({ address, children }) => {
    return <a href={`mailto:${address}`}>{children}</a>;
  };

  let localDiv;
  if (voterInfo.state[0].local_jurisdiction) {
    const localAdmin =
      voterInfo.state[0].local_jurisdiction.electionAdministrationBody;
    localDiv = (
      <div className="mb-5">
        <h3>Local Elections Administrator:</h3>
        <h4>{voterInfo.state[0].local_jurisdiction.name}</h4>
        {localAdmin.electionInfoUrl ? (
          <Button
            className="voter-admin-button mx-2 my-2"
            href={localAdmin.electionInfoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Local Elections Info
          </Button>
        ) : null}
        <p className="mt-2 mb-1">
          <em>Contact Local Elections Office:</em>
        </p>
        {localAdmin.electionOfficials[0].emailAddress ? (
          <h5>
            <MailTo address={localAdmin.electionOfficials[0].emailAddress}>
              {localAdmin.electionOfficials[0].emailAddress}
            </MailTo>
          </h5>
        ) : null}
        <h5>{localAdmin.electionOfficials[0].officePhoneNumber}</h5>
        {localAdmin.physicalAddress ? (
          <>
            <p className="mt-3 mb-1">
              <em>Office Address:</em>
            </p>
            <h5>
              {localAdmin.physicalAddress.line1}
              <br />
              {localAdmin.physicalAddress.city},{" "}
              {localAdmin.physicalAddress.state}{" "}
              {localAdmin.physicalAddress.zip}
            </h5>
          </>
        ) : null}
      </div>
    );
  } else {
    localDiv = null;
  }

  let pollsDiv;
  if (voterInfo.pollingLocations) {
    const polls = voterInfo.pollingLocations[0];
    pollsDiv = (
      <div className="mb-5 px-4 voter-info-card">
        <h3>Polling Location:</h3>
        <h4 className="my-3">
          {polls.address.line1}
          <br />
          {polls.address.city}, {polls.address.state} {polls.address.zip}
        </h4>
        {polls.notes ? (
          <h5>
            <em>
              <small>Notes: </small>
            </em>
            {polls.notes}
          </h5>
        ) : null}
        {polls.pollingHours ? (
          <h5>
            <em>
              <small>Hours: </small>
            </em>
            {polls.pollingHours}
          </h5>
        ) : null}
        {polls.sources[0].name ? (
          <h5>
            <em>
              <small>Source: </small>
            </em>
            {polls.sources[0].name}
          </h5>
        ) : null}
      </div>
    );
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
          className="voter-admin-button mx-2 my-2"
          href={admin.electionRegistrationUrl}
          target="_blank"
          rel="noreferrer"
        >
          Register to Vote
        </Button>
      ) : null}
      {admin.electionRegistrationConfirmationUrl ? (
        <Button
          className="voter-admin-button mx-2 my-2"
          href={admin.electionRegistrationConfirmationUrl}
          target="_blank"
          rel="noreferrer"
        >
          Confirm Registration
        </Button>
      ) : null}
      {admin.electionInfoUrl ? (
        <Button
          className="voter-admin-button mx-2 my-2"
          href={admin.electionInfoUrl}
          target="_blank"
          rel="noreferrer"
        >
          Election Information
        </Button>
      ) : null}
      {admin.absenteeVotingInfoUrl ? (
        <Button
          className="voter-admin-button mx-2 my-2"
          href={admin.absenteeVotingInfoUrl}
          target="_blank"
          rel="noreferrer"
        >
          Absentee Voting
        </Button>
      ) : null}
      {admin.votingLocationFinderUrl ? (
        <Button
          className="voter-admin-button mx-2 my-2"
          href={admin.votingLocationFinderUrl}
          target="_blank"
          rel="noreferrer"
        >
          Find Polling Location
        </Button>
      ) : null}
      {admin.ballotInfoUrl ? (
        <Button
          className="voter-admin-button mx-2 my-2"
          href={admin.ballotInfoUrl}
          target="_blank"
          rel="noreferrer"
        >
          Ballot Information
        </Button>
      ) : null}
      {admin.correspondenceAddress ? (
        <>
          <p className="mt-2 mb-1">
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
        <div className="voter-info-img-div">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1902/1902201.png"
            className="voter-info-img mb-5"
            alt="Ballot box"
          />
          {/* <Button variant="success" className="mt-5 mb-2">
            Add a Note to Self
          </Button> */}
        </div>
      </Card>
    </Container>
  );
}

export default VoterInfoCard;
