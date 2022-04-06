const noteVoterURL = "https://voter-hub.herokuapp.com/notes-info";
// const noteVoterURL = "http://localhost:4000/notes-info";

class NoteVoter {
  static getAll = async () => {
    try {
      const res = await fetch(noteVoterURL, {
        method: "GET",
        headers: { jwToken: localStorage.jwToken },
      });

      if (res.status === 200) {
        const parsedRes = await res.json();
        console.log("GOT VOTER NOTES.", await parsedRes);
        if (parsedRes.length === 0) {
          console.log("NO VOTER NOTES, ARRAY IS EMPTY.");
          return null;
        } else {
          return parsedRes;
        }
      } else {
        console.log("FAILED TO GET VOTER NOTES. Status:", res.status);
        return null;
      }
    } catch (err) {
      console.log("ERROR GETTING VOTER NOTES:", err);
      return null;
    }
  };

  static create = async (formData) => {
    try {
      const res = await fetch(noteVoterURL, {
        method: "POST",
        headers: {
          jwToken: localStorage.jwToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.status === 201) {
        console.log("VOTER NOTE CREATED");
        return this.getAll();
      } else {
        console.log("FAILED TO CREATE VOTER NOTE. Status:", res.status);
        return null;
      }
    } catch (err) {
      console.log("ERROR CREATING VOTER NOTE:", err);
      return null;
    }
  };

  static update = async (formData) => {
    try {
      const res = await fetch(noteVoterURL, {
        method: "PUT",
        headers: {
          jwToken: localStorage.jwToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.status === 200) {
        console.log("UPDATED VOTER NOTE.");
        return this.getAll();
      } else {
        console.log("FAILED TO UPDATE VOTER NOTE. Status:", res.status);
        return null;
      }
    } catch (err) {
      console.log("ERROR UPDATING VOTER NOTE:", err);
      return null;
    }
  };

  static delete = async (formData) => {
    try {
      const res = await fetch(noteVoterURL, {
        method: "DELETE",
        headers: {
          jwToken: localStorage.jwToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.status === 200) {
        console.log("DELETED VOTER NOTE.");
        return this.getAll();
      } else {
        console.log("FAILED TO DELETE VOTER NOTE. Status:", res.status);
        return null;
      }
    } catch (err) {
      console.log("ERROR DELETING VOTER NOTE:", err);
      return null;
    }
  };
}

export default NoteVoter;
