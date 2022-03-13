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
      console.log("Registration failed:", err);
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
      console.log("Login failed:", err);
    }
  };

  static getUser = async () => {
    try {
      const res = await fetch(`${authURL}/user`, {
        method: "GET",
        headers: { jwToken: localStorage.jwToken },
      });

      if (res.status === 200) {
        const parsedRes = await res.json();
        console.log("Got user data.", parsedRes);
        return parsedRes;
      } else {
        console.log("Could not refresh user data. Status:", res.status);
        return null;
      }
    } catch (err) {
      console.log("Failed to get user data:", err);
      return null;
    }
  };
}

export default UserAuth;
