// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";
import { useState } from "react";

function App() {
  const serverURL = "http://localhost:4000";
  const [address, setAddress] = useState("123 Main St, Kansas City, MO 64105");
  // const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Header props={{ user, setUser }} />
      <Outlet context={{ serverURL, address, setAddress, user, setUser }} />
      <Footer />
    </div>
  );
}

export default App;
