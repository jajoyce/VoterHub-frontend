const authURL = "http://localhost:4000/user-auth";

class UserAuth {
  static signUp = async (formData) => {
    try {
      const response = await fetch(`${authURL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const parsedRes = await response.json();

      // Temp, get back to this
      if (parsedRes.jwToken) {
          localStorage.setItem("jwToken", parsedRes.jwToken)
          console.log("Token set", localStorage.jwToken)
          return true;
      } else {
          console.log("Token parse failed")
      }
    } catch (err) {
        console.log("Registration failed: ", err)
    }
  };
}

export default UserAuth;
