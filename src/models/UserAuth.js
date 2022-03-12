const authURL = "http://localhost:4000/user-auth";

class UserAuth {
  static register = async (formData) => {
    try {
      const res = await fetch(`${authURL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const parsedRes = await res.json();

      // Temp, get back to this
      if (parsedRes.jwToken) {
        localStorage.setItem("jwToken", parsedRes.jwToken);
        console.log("Token set", localStorage.jwToken);
        return true;
      } else {
        console.log("Token parse failed");
        return false;
      }
    } catch (err) {
      console.log("Registration failed: ", err);
    }
  };

  static login = async (formData) => {
    try {
      const res = await fetch(`${authURL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const parsedRes = await res.json();

      // Check again later
      if (parsedRes.jwToken) {
        localStorage.setItem("jwToken", parsedRes.jwToken);
        console.log("Token set", localStorage.jwToken);
        return true;
      } else {
        console.log("Token parse failed");
        return false;
      }
    } catch (err) {
      console.log("Login failed: ", err);
    }
  };
}

export default UserAuth;
