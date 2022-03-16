// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";
import { useState } from "react";
import { RecoilRoot, atom } from "recoil";

function App() {
  const serverURL = "https://voter-hub.herokuapp.com";
  // const serverURL = "http://localhost:4000";
  const userState = atom({ key: "user", default: null });
  const addressState = atom({
    key: "address",
    default: "123 Main St, Kansas City, MO 64105",
  });

  return (
    <div className="App">
      <RecoilRoot>
        <Header userState={userState} addressState={addressState} />
        <Outlet
          context={{ userState, addressState, serverURL }}
          className="full-height"
        />
        <Footer />
      </RecoilRoot>
    </div>
  );
}

export default App;
