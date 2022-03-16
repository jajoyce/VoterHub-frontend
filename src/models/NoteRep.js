const noteRepURL = "https://voter-hub.herokuapp.com/notes-rep";
// const noteRepURL = "http://localhost:4000/notes-rep";

class NoteRep {
  static getAll = async () => {
    try {
      const res = await fetch(noteRepURL, {
        method: "GET",
        headers: { jwToken: localStorage.jwToken },
      });

      if (res.status === 200) {
        const parsedRes = await res.json();
        console.log("GOT REP NOTES.", parsedRes);
        return parsedRes;
      } else {
        console.log("FAILED TO GET REP NOTES. Status:", res.status);
        return null;
      }
    } catch (err) {
      console.log("ERROR GETTING REP NOTES:", err);
      return null;
    }
  };

  static create = async (formData) => {
    try {
      const res = await fetch(noteRepURL, {
        method: "POST",
        headers: {
          jwToken: localStorage.jwToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.status === 201) {
        console.log("REP NOTE CREATED");
        return this.getAll();
      } else {
        console.log("FAILED TO CREATE REP NOTE. Status:", res.status);
        return null;
      }
    } catch (err) {
      console.log("ERROR CREATING REP NOTE:", err);
      return null;
    }
  };

  static update = async (formData) => {
    try {
      const res = await fetch(noteRepURL, {
        method: "PUT",
        headers: {
          jwToken: localStorage.jwToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.status === 200) {
        console.log("UPDATED REP NOTE.");
        return this.getAll();
      } else {
        console.log("FAILED TO UPDATE REP NOTE. Status:", res.status);
        return null;
      }
    } catch (err) {
      console.log("ERROR UPDATING REP NOTE:", err);
      return null;
    }
  };

  static delete = async (formData) => {
    try {
      const res = await fetch(noteRepURL, {
        method: "DELETE",
        headers: {
          jwToken: localStorage.jwToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.status === 200) {
        console.log("DELETED REP NOTE.");
        return this.getAll;
      } else {
        console.log("FAILED TO DELETE REP NOTE. Status:", res.status);
        return null;
      }
    } catch (err) {
      console.log("ERROR DELETING REP NOTE:", err);
      return null;
    }
  };
}

export default NoteRep;
