import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { useParams, useOutletContext } from "react-router";
import { useEffect, useState } from "react";
import RepNotes from "./RepNotes";
import RepNoteCreate from "./RepNoteCreate";
import NoteRep from "../models/NoteRep";

function RepShow() {
  const { reps, user } = useOutletContext();

  const repIndex = useParams().id;
  const rep = reps[repIndex];
  const [notes, setNotes] = useState(null);
  const [showNoteCreate, setShowNoteCreate] = useState(false);

  const getNotes = async (rep) => {
    if (user) {
      const allNotes = await NoteRep.getAll();
      setRepNotes(allNotes);
    }
  };

  const setRepNotes = (allNotes) => {
    let newNotes = [];
    for (const n of allNotes) {
      if (n.repName === rep.name && n.repOffice === rep.office) {
        newNotes.push(n);
      }
    }
    if (newNotes.length > 0) {
      setNotes(newNotes);
    }
  };

  useEffect(() => {
    getNotes(rep);
    window.scrollTo(0, 0);
  }, []);

  const websiteButton = rep.urls ? (
    <div>
      <Button className="blue-button mb-4" href={rep.urls[0]} target="_blank">
        Official Website
      </Button>
    </div>
  ) : null;

  const MailTo = ({ address, children }) => {
    return <a href={`mailto:${address}`}>{children}</a>;
  };

  const email = rep.emails ? (
    <h4 className="mb-3">
      <MailTo address={rep.emails[0]}>{rep.emails[0]}</MailTo>
    </h4>
  ) : null;

  const phone = rep.phones ? <h4 className="mb-4">{rep.phones[0]}</h4> : null;

  const address = rep.address ? (
    <div>
      <h5>
        <em>
          <small>Office Address:</small>
        </em>
      </h5>
      <h5>{rep.address[0].line1}</h5>
      <h5>
        {rep.address[0].city}, {rep.address[0].state} {rep.address[0].zip}
      </h5>
    </div>
  ) : null;

  const Channels = ({ channels }) => {
    if (channels) {
      let array = [];
      console.log("Channels: ", channels);
      for (const channel of channels) {
        if (channel.type === "Facebook") {
          const href = "https://www.facebook.com/" + channel.id;
          array.push(
            <h5>
              Facebook:{" "}
              <a href={href} target="_blank">
                {channel.id}
              </a>
            </h5>
          );
        } else if (channel.type === "Twitter") {
          const href = "https://www.twitter.com/" + channel.id;
          array.push(
            <h5>
              Twitter:{" "}
              <a href={href} target="_blank">
                @{channel.id}
              </a>
            </h5>
          );
        } else if (channel.type === "YouTube") {
          const href = "https://www.youtube.com/user/" + channel.id;
          array.push(
            <h5>
              YouTube:{" "}
              <a href={href} target="_blank">
                {channel.id}
              </a>
            </h5>
          );
        }
      }
      const channelList = array.map((elem, index) => (
        <div key={index}>{elem}</div>
      ));
      return (
        <>
          <h5>
            <em>
              <small>Social Channels: </small>
            </em>
          </h5>
          {channelList}
        </>
      );
    } else return null;
  };

  return (
    <Container>
      <Card className="rep-show-card">
        <div className="rep-show-img-div">
          <img src={rep.photoUrl} className="rep-show-img" alt={rep.name} />
          <Link to="../">
            <h6 className="my-2" style={{ textAlign: "left" }}>
              ← Back to all reps
            </h6>
          </Link>
          {/* <Button
            variant="primary"
            className="blue-button mt-5 mb-2"
            onClick={() => {
              setShowNoteCreate(true);
              window.scrollTo(0, 1000);
            }}
          >
            Add a Note to Self
          </Button> */}
        </div>
        <div className="card-body">
          <h2 className="mb-3">{rep.name}</h2>
          <h3 className="mb-4">{rep.office}</h3>
          <h5 className="mb-3">
            <em>
              <small>District/Level: </small>
            </em>
            {rep.division}
          </h5>
          <h5 className="mb-4">
            <em>
              <small>Affiliation: </small>
            </em>
            {rep.party}
          </h5>
          {websiteButton}
          {email}
          {phone}
          <Container>
            <Row>
              {address ? <Col>{address}</Col> : null}
              {rep.channels ? (
                <Col>
                  <Channels channels={rep.channels} />
                </Col>
              ) : null}
            </Row>
          </Container>
        </div>
      </Card>
      <h3 className="mt-4">My Personal Notes</h3>
      <h5 className="mb-3">
        <em>Save private notes about {rep.name} for your reference:</em>
      </h5>
      {notes ? (
        <RepNotes
          notes={notes}
          setRepNotes={setRepNotes}
          repName={rep.name}
          repOffice={rep.office}
          user={user}
        />
      ) : null}
      {showNoteCreate ? (
        <RepNoteCreate
          setRepNotes={setRepNotes}
          repName={rep.name}
          repOffice={rep.office}
          setShowNoteCreate={setShowNoteCreate}
          user={user}
        />
      ) : (
        <Container className="mt-4">
          <Button
            variant="success"
            onClick={() => setShowNoteCreate(true)}
            className="mx-auto mt-1 mb-3"
          >
            Add a New Note
          </Button>
        </Container>
      )}
    </Container>
  );
}

export default RepShow;
