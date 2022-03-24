const noteInfoURL = "https://voter-hub.herokuapp.com/notes-info";
// const noteInfoURL = "http://localhost:4000/notes-info";

class NoteInfo {
  static getAll = async () => {
    try {
      const res = await fetch(noteInfoURL, {
        method: "GET",
        headers: { jwToken: localStorage.jwToken },
      });

      if (res.status === 200) {
        const parsedRes = await res.json();
        console.log("GOT INFO NOTES.", await parsedRes);
        if (parsedRes.length === 0) {
          console.log("NO INFO NOTES, ARRAY IS EMPTY.");
          return null;
        } else {
          return parsedRes;
        }
      } else {
        console.log("FAILED TO GET INFO NOTES. Status:", res.status);
        return null;
      }
    } catch (err) {
      console.log("ERROR GETTING INFO NOTES:", err);
      return null;
    }
  };
}

export default NoteInfo;
