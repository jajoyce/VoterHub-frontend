// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";
import { useState } from "react";
import { RecoilRoot, atom } from "recoil";

function App() {
  const serverURL = "http://localhost:4000";
  const [address, setAddress] = useState("123 Main St, Kansas City, MO 64105");
  // const [loggedIn, setLoggedIn] = useState(false);
  const userState = atom({ key: "user", default: null });

  return (
    <div className="App">
      <RecoilRoot>
        <Header userState={userState} />
        <Outlet
          context={{ userState, serverURL, address, setAddress }}
          className="full-height"
        />
        <Footer />
      </RecoilRoot>
    </div>
  );
}

export default App;
